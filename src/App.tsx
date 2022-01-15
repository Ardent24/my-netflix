import React, { useEffect, FC } from "react";
import { RootStyled } from "./components/views/core/Root.styled";
import { Global } from "@emotion/react";
import { GlobalCSS } from "./components/views/global/GlobalCSS";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { responseMovies } from "./api/api";
import { Layout } from "./components/layout/Layout";

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(responseMovies());
  }, [dispatch]);

  return (
    <RootStyled>
      <BrowserRouter>
        <Global styles={GlobalCSS} />
        <Layout />
      </BrowserRouter>
    </RootStyled>
  );
};
