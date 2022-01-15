import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderFind from "./find/HeaderFind";
import { HeaderMovie } from "./movie/HeaderMovie";
import img from "../../assets/images/back.jpeg";
import { HeaderBox, Img } from "../views/core/Header.styled";

interface IProps {
  openModal: () => void;
}

export const Header: FC<IProps> = ({ openModal }) => (
  <HeaderBox>
    <Routes>
      <Route path="/" element={<HeaderFind openModal={openModal} />} />
      <Route path="/movie/:id" element={<HeaderMovie />} />
      <Route path="/search/Search:id" element={<HeaderMovie />} />
    </Routes>
    <Img src={img} alt="" />
  </HeaderBox>
);
