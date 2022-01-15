import React, { FC } from "react";
import {
  Dropdown,
  DropdownClose,
  DropdownItem,
} from "../../../../views/core/Main.styled";


interface IProps {
  isOpen: boolean;
  hideDropdown: () => void;
}

export const MoviesItemDropdown: FC<IProps> = ({ isOpen, hideDropdown }) => {
  return (
    <Dropdown isOpen={isOpen}>
      <DropdownClose onClick={hideDropdown}>&#215;</DropdownClose>
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Delete</DropdownItem>
    </Dropdown>
  );
};
