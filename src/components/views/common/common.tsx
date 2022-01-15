import { css } from "@emotion/react";

export const hoverOpacity = css`
  opacity: 1;
  transition: 0.2s opacity;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
