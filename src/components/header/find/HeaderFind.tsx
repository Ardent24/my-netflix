import React, { ChangeEvent, MouseEvent, FC, useState } from "react";
import HeaderFindTop from "./HeaderFindTop";
import { Btn } from "../../UI/Btn";
import {
  Main,
  MainContainer,
  MainInput,
  MainTitle,
  MainWrap,
} from "../../views/core/Header.styled";

interface IProps {
  openModal: () => void;
}

const HeaderFind: FC<IProps> = ({ openModal }) => {
  const [valFind, setValFind] = useState<string>("");

  const handlerInput = (ev: ChangeEvent<HTMLInputElement>): void =>
    setValFind(ev.target.value);
  const handlerBtn = (ev: MouseEvent<HTMLButtonElement>): void => {
    const val = valFind;
  };

  return (
    <>
      <HeaderFindTop openModal={openModal} />
      <Main>
        <MainWrap>
          <MainTitle>FIND YOUR MOVIE</MainTitle>
          <MainContainer>
            <MainInput
              type="text"
              placeholder="What do you want to watch?"
              value={valFind}
              onChange={handlerInput}
            />
            <Btn padding="1rem 5rem" btnFunc={handlerBtn} variant="pink">
              Search
            </Btn>
          </MainContainer>
        </MainWrap>
      </Main>
    </>
  );
};

export default HeaderFind;
