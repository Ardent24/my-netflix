import React, { FC } from "react";
import HeaderMovieHeader from "./header/HeaderMovieHeader";
import { HeaderMovieMain } from "./main/HeaderMovieMain";

export const HeaderMovie: FC = () => {
  return (
    <>
      <HeaderMovieHeader />
      <HeaderMovieMain />
    </>
  );
};
