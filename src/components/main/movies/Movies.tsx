import React, { FC } from "react";
import { IMovie } from "../../../interface/interfaces";
import { MoviesItem } from "./item/MoviesItem";
import { MoviesStyles } from "../../views/core/Main.styled";

interface IProps {
  movies: IMovie[];
}

export const Movies: FC<IProps> = ({ movies }) => (
  <MoviesStyles>
    {movies.map((el) => (
      <MoviesItem key={`${el.id}`} movie={el} />
    ))}
  </MoviesStyles>
);
