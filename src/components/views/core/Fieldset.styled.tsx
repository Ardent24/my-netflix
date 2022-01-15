import styled from "@emotion/styled";
import { flexColumn } from "../flex";

export const FieldsetCSS = styled.fieldset`
  ${flexColumn};
  margin-bottom: 2rem;
`;
export const Label = styled.label`
  color: #f65261;
  font-size: 2rem;
  text-transform: uppercase;
  padding-bottom: 3px;
`;
export const Input = styled.input`
  display: block;
  background-color: #424242;
  color: #555555;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  outline: none;
`;
