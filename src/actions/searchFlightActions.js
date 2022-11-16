import { SEARCH_DATA_SUCCESS } from "../constants/searchFlightConstants"

export const searchData = ({ cityFrom, cityTo, toDateTimestamp, backDateTimestamp }) => (dispatch) => {
    console.log(cityTo)
    const obj = { cityFrom, cityTo, toDateTimestamp, backDateTimestamp }
    dispatch({
        type: SEARCH_DATA_SUCCESS,
        payload: obj
    })
}