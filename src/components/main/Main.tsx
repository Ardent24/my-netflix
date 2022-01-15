import React, { FC } from "react";
import { Nav } from "./nav/Nav";
import { Movies } from "./movies/Movies";
import { MainCore, MainHeader, MainResult } from "../views/core/Main.styled";
import { useSelector } from "react-redux";
import {
  stateIsError,
  stateMovies,
  stateStatusError,
} from "../../store/reducers/moviesReducer";

export const Main: FC = () => {
  const movies = useSelector(stateMovies);
  const isError = useSelector(stateIsError);
  const textError = useSelector(stateStatusError);

  return (
    <MainCore>
      <MainHeader>
        <Nav />
        {/*<SortMovies />*/}
      </MainHeader>
      <MainResult>{isError && textError}</MainResult>
      {!isError && movies.length && (
        <>
          <MainResult>
            <strong>{movies.length} </strong>
            movies found
          </MainResult>
          <Movies movies={movies} />
        </>
      )}
    </MainCore>
  );
};
