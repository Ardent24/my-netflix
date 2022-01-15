import React from "react";
import {
  Select,
  SelectWrap,
  SortText,
  SortWrap,
  Option,
} from "../../views/core/Main.styled";

const SortMovies = () => {
  return (
    <SortWrap>
      <SortText>sort by</SortText>
      <SelectWrap>
        <Select name="" id="">
          <Option value="">release date1</Option>
          <Option value="">release date2</Option>
        </Select>
      </SelectWrap>
    </SortWrap>
  );
};

export default SortMovies;
