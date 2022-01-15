import React, { FC } from "react";
import { Button } from "../views/core/Btn.styled";

interface IProps {
  variant: string;
  padding: string;
  btnFunc?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
  type?: "submit" | "reset" | "button";
}

export const Btn: FC<IProps> = ({ type, children, btnFunc, ...props }) => (
  <Button onClick={btnFunc} {...props}>
    {children}
  </Button>
);
