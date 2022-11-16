import { SEARCH_DATA_SUCCESS } from "../constants/searchFlightConstants"


export const searchFlightReducer = (state = { searchFlight: {} }, action) => {
    switch (action.type) {
        case SEARCH_DATA_SUCCESS:
            console.log(action.payload)
            return {
                searchData: action.payload,
            }
        default:
            return state
    }
}