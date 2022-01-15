import React, { FC } from "react";
import { Logo } from "../../UI/Logo";
import { Btn } from "../../UI/Btn";
import { HeaderWrap } from "../../views/core/Header.styled";

interface IProps {
  openModal: () => void;
}

const HeaderFindTop: FC<IProps> = ({ openModal }) => {
  const addMovie = () => openModal();

  return (
    <HeaderWrap>
      <Logo />
      <Btn btnFunc={addMovie} variant="black" padding="1rem">
        + Add movie
      </Btn>
    </HeaderWrap>
  );
};

export default HeaderFindTop;
