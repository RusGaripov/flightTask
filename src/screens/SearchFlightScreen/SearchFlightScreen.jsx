import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchData } from "../../actions/searchFlightActions";
import styles from "./SearchFlightScreen.module.css";

const SearchFlightScreen = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [toDate, setToDate] = useState(false);

  const [backDate, setBackDate] = useState(false);

  const [toDateTimestamp, setToDateTimestamp] = useState(0);

  const [backDateTimestamp, setBackDateTimestamp] = useState(0);

  const [cityTo, setCityTo] = useState<string>("");
  const [cityFrom, setCityFrom] = useState<string>("");

  const dateToHandler = (e) => {
    const timestamp = new Date(e.target.value).getTime() / 1000;
    setToDateTimestamp(timestamp);
    setToDate(true);
  };

  const dateBackHandler = (e) => {
    const timestamp = new Date(e.target.value).getTime() / 1000;
    setBackDateTimestamp(timestamp);
    setBackDate(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (backDateTimestamp !== 0 && backDateTimestamp - toDateTimestamp <= 0) {
      alert("Дата обратного прилета не может быть раньше даты вылета");
    } else if (toDateTimestamp - Math.floor(Date.now() / 1000) <= 0) {
      alert("Выберите более позднюю дату");
    } else {
      console.log("отправлен запрос");
      dispatch(
        searchData({ cityFrom, cityTo, toDateTimestamp, backDateTimestamp })
      );
      navigate("/avia/info");
    }
  };

  return (
    <form onSubmit={submitHandler} className={styles.container}>
      <div className={styles.header}>
        <div>
          <p>Откуда</p>
          <input
            type="text"
            placeholder="Город вылета"
            onChange={(e) =>
              setCityFrom(e.target.value)
            }
            required
          />
        </div>
        <div> 
          <p>Куда</p>
          <input
            type="text"
            placeholder="Город прилета"
            onChange={(e) =>
              setCityTo(e.target.value)
            }
            required
          />
        </div>
        {!toDate ? (
          <div>
            <p>Туда</p>
            <input type="date" onChange={dateToHandler} required name="date" />
          </div>
        ) : (
          <div>
            <p>Туда</p>
            <input
              type="date"
              onChange={dateToHandler}
              id={styles.ticketFromChosen}
            />
          </div>
        )}
        {!backDate ? (
          <div>
            <p>Обратно</p>
            <input type="date" onChange={dateBackHandler} />
          </div>
        ) : (
          <div>
            <p>Обратно</p>
            <input
              type="date"
              onChange={dateBackHandler}
              id={styles.ticketFromChosen}
            />
          </div>
        )}
      </div>
      <div className={styles.searchTicketsBox}>
        <button
          type="submit"
          className={styles.button}
          style={
            cityTo && cityFrom && toDateTimestamp !== 0
              ? null
              : {
                  cursor: "not-allowed",
                  background: "#B7BAC1",
                  textDecoration: "none",
                }
          }
        >
          <p>Найти билеты</p>
        </button>
      </div>
    </form>
  );
};

export default SearchFlightScreen;
