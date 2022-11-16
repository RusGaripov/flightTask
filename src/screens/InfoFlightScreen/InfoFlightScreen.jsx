import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./InfoFlightScreen.module.css";
import logo from "../../images/logo.png";
import dot from "../../images/dot.png";
import bag from "../../images/bag.png";
import bottle from "../../images/bottle.png";

const InfoFlightScreen = () => {
  const searchFlight = useSelector((state) => state.searchFlight);

  const { searchData } = searchFlight;

  const { cityFrom, cityTo, toDateTimestamp, backDateTimestamp } = searchData;

  const [first, setFirst] = useState({
    clicked: true,
    departureTime: "09:20",
    arrivalTime: "11:05",
  });
  const [second, setSecond] = useState({
    clicked: false,
    departureTime: "10:20",
    arrivalTime: "12:05",
  });
  const [third, setThird] = useState({
    clicked: false,
    departureTime: "11:20",
    arrivalTime: "13:05",
  });

  const [myFlightTime, setMyFlightTime] = useState({
    departureTime: first.departureTime,
    arrivalTime: first.arrivalTime,
  });
  const toDate = new Date(toDateTimestamp * 1000).toLocaleDateString("ru-RU");
  const backDate = new Date(backDateTimestamp * 1000).toLocaleDateString(
    "ru-RU"
  );

  return (
    <div className={styles.boxContainer}>
      <div className={backDateTimestamp !== 0 ? styles.boxBack : styles.box}>
        <div className={styles.container}>
          <div className={styles.boxPartOne}>
            <div className={styles.first}>
              <div className={styles.notGiveBack}>
                <p>Невозвратный</p>
              </div>
              <img src={logo} alt="logo" />
              <p>
                <span>S7 Airlines</span>
              </p>
            </div>
            <div className={styles.second}>
              <p>
                <span>{myFlightTime.departureTime}</span>
              </p>
              <p>
                {cityFrom} {toDate}
              </p>
            </div>
            <div className={styles.third}>
              <div className={styles.lineHeader}>
                <p>SVO</p>
                <p>ROV</p>
              </div>
              <div className={styles.line}>
                <img src={dot} alt="dot" />
                <hr />
                <img src={dot} alt="dot" />
              </div>
              <p>В пути 1 ч 55 мин</p>
            </div>
            <div className={styles.fourth}>
              <p>
                <span>{myFlightTime.arrivalTime}</span>
              </p>
              <p>
                {cityTo} {toDate}
              </p>
            </div>
            <div className={styles.fifth}>
              <img src={bag} alt="bag" />
              <img src={bottle} alt="bottle" />
            </div>
          </div>
          {backDateTimestamp === 0 && (
            <div className={styles.boxPartTwo}>
              <button
                className={
                  first.clicked ? styles.activeFlightTime : styles.flightTime
                }
                onClick={() => {
                  if (!first.clicked) {
                    setFirst({
                      clicked: true,
                      departureTime: "09:20",
                      arrivalTime: "11:05",
                    });
                    setSecond({
                      clicked: false,
                      departureTime: "10:20",
                      arrivalTime: "12:05",
                    });
                    setThird({
                      clicked: false,
                      departureTime: "11:20",
                      arrivalTime: "13:05",
                    });
                    setMyFlightTime({
                      departureTime: "09:20",
                      arrivalTime: "11:05",
                    });
                  }
                }}
              >
                <p>{first.departureTime}</p> - <p>{first.arrivalTime}</p>
              </button>
              <button
                className={
                  second.clicked ? styles.activeFlightTime : styles.flightTime
                }
                onClick={() => {
                  if (!second.clicked) {
                    setFirst({
                      clicked: false,
                      departureTime: "09:20",
                      arrivalTime: "11:05",
                    });
                    setSecond({
                      clicked: true,
                      departureTime: "10:20",
                      arrivalTime: "12:05",
                    });
                    setThird({
                      clicked: false,
                      departureTime: "11:20",
                      arrivalTime: "13:05",
                    });
                    setMyFlightTime({
                      departureTime: "10:20",
                      arrivalTime: "12:05",
                    });
                  }
                }}
              >
                <p>{second.departureTime}</p> - <p>{second.arrivalTime}</p>
              </button>
              <button
                className={
                  third.clicked ? styles.activeFlightTime : styles.flightTime
                }
                onClick={() => {
                  if (!third.clicked) {
                    setFirst({
                      clicked: false,
                      departureTime: "09:20",
                      arrivalTime: "11:05",
                    });
                    setSecond({
                      clicked: false,
                      departureTime: "10:20",
                      arrivalTime: "12:05",
                    });
                    setThird({
                      clicked: true,
                      departureTime: "11:20",
                      arrivalTime: "13:05",
                    });
                    setMyFlightTime({
                      departureTime: "11:20",
                      arrivalTime: "13:05",
                    });
                  }
                }}
              >
                <p>{third.departureTime}</p> - <p>{third.arrivalTime}</p>
              </button>
            </div>
          )}
        </div>
        <div className={styles.verticalLine}></div>
        <div
          className={backDateTimestamp ? styles.sixthBothTickets : styles.sixth}
        >
          {backDateTimestamp ? "9 300 ₽" : "4 150 ₽"}
        </div>
      </div>

      {backDateTimestamp !== 0 && (
        <div className={styles.boxBack}>
          <div className={styles.container} style={{borderTop:"1px dashed #5C87DB"}}>
            <div className={styles.boxPartOne}>
              <div className={styles.first}>
                <div className={styles.notGiveBack}>
                  <p>Невозвратный</p>
                </div>
                <img src={logo} alt="logo" />
                <p>
                  <span>S7 Airlines</span>
                </p>
              </div>
              <div className={styles.second}>
                <p>
                  <span>{myFlightTime.departureTime}</span>
                </p>
                <p>
                  {cityTo} {backDate}
                </p>
              </div>
              <div className={styles.third}>
                <div className={styles.lineHeader}>
                  <p>SVO</p>
                  <p>ROV</p>
                </div>
                <div className={styles.line}>
                  <img src={dot} alt="dot" />
                  <hr />
                  <img src={dot} alt="dot" />
                </div>
                <p>В пути 1 ч 55 мин</p>
              </div>
              <div className={styles.fourth}>
                <p>
                  <span>{myFlightTime.arrivalTime}</span>
                </p>
                <p>
                  {cityFrom} {backDate}
                </p>
              </div>
              <div className={styles.fifth}>
                <img src={bag} alt="bag" />
                <img src={bottle} alt="bottle" />
              </div>
            </div>
          </div>
          <div className={styles.verticalLine}></div>
        </div>
      )}
    </div>
  );
};

export default InfoFlightScreen;
