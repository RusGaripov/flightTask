import { configureStore } from "@reduxjs/toolkit";
import { searchFlightReducer } from "./reducers/searchFlightReducer";

const initialState = {
  searchFlight: {searchData:{}},
};

const store = configureStore({
  reducer: {
    searchFlight: searchFlightReducer,
  },
  preloadedState: initialState,
});

export default store;
