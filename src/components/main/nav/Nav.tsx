import React, { FC, useState } from "react";
import { NavCore, NavItem } from "../../views/core/Main.styled";
import { arrayGenres } from "../../../module/modules";
import { IGenres } from "../../../interface/interfaces";

export const Nav: FC = () => {
  const [arrGenres, setArrGenres] = useState<IGenres[]>(arrayGenres);
  const handlerClassActive = (id: number): void => {
    const newArrayGenres = arrGenres.map((el) => {
      el.id === id ? (el.isActive = true) : (el.isActive = false);
      return el;
    });
    setArrGenres(newArrayGenres);
  };

  return (
    <NavCore>
      {arrGenres.map((el, ind) => (
        <NavItem
          key={ind}
          onClick={() => handlerClassActive(el.id)}
          isActive={el.isActive}
        >
          {el.title}
        </NavItem>
      ))}
    </NavCore>
  );
};
