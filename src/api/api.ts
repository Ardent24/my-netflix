import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAddMovie } from "../interface/interfaces";

const API = "http://localhost:4000/movies";

const responseMovies = createAsyncThunk(
  "movies/responseMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API}?limit=12`);
      const json = await response.json();

      return json.data;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);
const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (movie: IAddMovie, { rejectWithValue, dispatch }) => {
    try {
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(movie),
      });

      //dispatch(removeMovie());
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export { responseMovies, addMovie };
