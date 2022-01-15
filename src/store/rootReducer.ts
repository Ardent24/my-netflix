import { combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/moviesReducer";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
