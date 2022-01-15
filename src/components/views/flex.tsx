import { css } from "@emotion/react";

export const flex = css`
  display: flex;
`;

export const flexColumn = css`
  ${flex};
  flex-direction: column;
`;

export const flexCenter = css`
  ${flex};
  align-items: center;
  justify-content: center;
`;

export const justifyCenter = css`
  ${flex};
  justify-content: center;
`;

export const justifyEnd = css`
  ${flex};
  justify-content: end;
`;
