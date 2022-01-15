import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialStateMovies } from "../../module/modules";
import { IMovie } from "../../interface/interfaces";
import { responseMovies } from "../../api/api";

const moviesReducer = createSlice({
  name: "movies",
  initialState: initialStateMovies,
  reducers: {
    removeMovie(state, action: PayloadAction<boolean>) {},
  },
  extraReducers: {
    [responseMovies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [responseMovies.fulfilled.type]: (state, action) => {
      state.movies = action.payload;
      state.isLoading = state.error.isError = false;
    },
    [responseMovies.rejected.type]: (state, action) => {
      state.error.isError = true;
      state.isLoading = false;
      state.error.statusError = action.payload;
    },
  },
});

export const { removeMovie } = moviesReducer.actions;

const stateMovies = (state: { movies: { movies: IMovie[] } }) =>
  state.movies.movies;
const stateIsError = (state: { movies: { error: { isError: boolean } } }) =>
  state.movies.error.isError;
const stateStatusError = (state: {
  movies: { error: { statusError: boolean } };
}) => state.movies.error.statusError;

export { stateMovies, stateIsError, stateStatusError };

export default moviesReducer.reducer;
