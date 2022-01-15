import {IGenres, IMoviesState} from "../interface/interfaces";

export const arrayGenres: IGenres[] = [
  { isActive: true, title: "all", id: 0 },
  { isActive: false, title: "documentary", id: 1 },
  { isActive: false, title: "comedy", id: 2 },
  { isActive: false, title: "horror", id: 3 },
  { isActive: false, title: "crime", id: 4 },
];

export const initialStateMovies: IMoviesState = {
  isLoading: false,
  movies: [],
  error: {
    isError: false,
    statusError: "",
  },
};
