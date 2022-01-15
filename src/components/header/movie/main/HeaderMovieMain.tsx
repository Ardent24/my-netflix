import React, { FC, useEffect, useState } from "react";
import {
  Circle,
  Description,
  Header,
  InfoMovie,
  Main,
  MainContainer,
  MainContainerColumn,
  MainWrapFlex,
  Poster,
  Space,
  Title,
} from "../../../views/core/Header.styled";
import { IMovie } from "../../../../interface/interfaces";
import { useParams } from "react-router-dom";

export const HeaderMovieMain: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://localhost:4000/movies/${id}`);
        const body = await response.json();
        setMovie(body);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  return (
    <Main>
      <MainWrapFlex>
        <Poster src={movie?.poster_path} alt="" />
        <MainContainer>
          <MainContainerColumn>
            <Header>
              <Title>
                {movie?.title}
                <Circle>{movie?.vote_average}</Circle>
              </Title>
            </Header>
            <InfoMovie>
              {movie?.release_date.slice(0, 4)}
              <Space />
              {movie?.runtime} min
            </InfoMovie>
            <Description>{movie?.overview}</Description>
          </MainContainerColumn>
        </MainContainer>
      </MainWrapFlex>
    </Main>
  );
};
