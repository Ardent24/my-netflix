import React, { FC } from "react";
import {
  Box,
  Description,
  Footer,
  Title,
  Year,
} from "../../../../views/core/Main.styled";

interface IProps {
  title: string;
  genres: string[];
  date: string;
}

export const MoviesItemFooter: FC<IProps> = ({ title, date, genres }) => {
  return (
    <Footer>
      <Box>
        <Title>{title}</Title>
        <Year>{date.slice(0, 4)}</Year>
      </Box>
      <Description>{genres.join(", ")}</Description>
    </Footer>
  );
};
