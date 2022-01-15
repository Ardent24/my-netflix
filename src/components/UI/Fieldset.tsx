import React, { FC } from "react";
import { Input, Label, FieldsetCSS } from "../views/core/Fieldset.styled";

interface IProps {
  title: string;
  handlerItem: (value: string) => void;
  inputType?: string;
  inpValue: string | number;
}

export const Fieldset: FC<IProps> = ({
  title,
  handlerItem,
  inputType = "text",
  inpValue,
}) => {
  const handlerInput = (ev: React.ChangeEvent<HTMLInputElement>) =>
    handlerItem(ev.currentTarget.value);
  return (
    <FieldsetCSS>
      <Label>{title}</Label>
      <Input
        type={inputType}
        onChange={handlerInput}
        value={inpValue}
        required={true}
      />
    </FieldsetCSS>
  );
};
