import React, { FC, SyntheticEvent, useState } from "react";
import { IMovie } from "../../../../interface/interfaces";
import { MoviesItemFooter } from "./footer/MoviesItemFooter";
import { MoviesItemDropdown } from "./dropdown/MoviesItemDropdown";
import srcImgError from "../../../../assets/images/img-404.png";
import {
  Dot,
  Item,
  ItemDots,
  ItemPoster,
} from "../../../views/core/Main.styled";
import { Link } from "react-router-dom";

interface IProps {
  key: string;
  movie: IMovie;
}

export const MoviesItem: FC<IProps> = ({
  movie: { genres, title, poster_path, release_date, id },
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const showDropdown = (): void => setIsOpen(false);
  const hideDropdown = (): void => setIsOpen(true);

  const onErrorImg = (ev: SyntheticEvent<HTMLImageElement, Event>): string =>
    (ev.currentTarget.src = srcImgError);

  return (
    <Link to={`/movie/${id}`}>
      <Item>
        <ItemPoster
          src={poster_path}
          alt={title}
          onError={onErrorImg}
          // effect="blur"
        />
        <MoviesItemFooter title={title} date={release_date} genres={genres} />
        <ItemDots onClick={showDropdown}>
          <Dot />
          <Dot />
          <Dot />
        </ItemDots>
        <MoviesItemDropdown isOpen={isOpen} hideDropdown={hideDropdown} />
      </Item>
    </Link>
  );
};
