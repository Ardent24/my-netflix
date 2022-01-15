import styled from "@emotion/styled";
import { hoverOpacity } from "../common/common";

export const Button = styled.button<{ variant: string; padding: string }>`
  ${hoverOpacity};
  text-transform: uppercase;
  font-size: 1rem;
  padding: ${({ padding }) => padding};
  border-radius: 0.4rem;
  font-weight: bold;
  background-color: ${({ variant }) =>
    variant === "black" ? "rgba(0, 0, 0, 0.8)" : "#f65261"};
  color: ${({ variant }) => (variant === "black" ? "#f65261" : "white")};
`;
