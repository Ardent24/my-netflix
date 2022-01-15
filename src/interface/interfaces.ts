export interface IMovie {
  id: number;
  genres: Array<string>;
  budget: number;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface IGenres {
  isActive: boolean;
  title: string;
  id: number;
}

export interface IError {
  isError: boolean;
  statusError: string;
}

export interface IMoviesState {
  isLoading: boolean;
  movies: IMovie[];
  error: IError;
}

export type IAddMovie = Pick<
  IMovie,
  "title" | "runtime" | "overview" | "poster_path" | "genres"
>;
