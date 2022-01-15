import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { hoverOpacity } from "../common/common";
import { flex, flexColumn, justifyEnd } from "../flex";

export const portalClassName = css`
  .modal-overlay {
    padding: 1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    max-width: 600px;
    width: 100%;
    background-color: #232323;
    border-radius: 6px;
  }
`

export const ModalBody = styled.form`
  ${flexColumn};
  padding: 1.5rem 2rem;
`;
export const Header = styled.header`
  ${flex};
  ${justifyEnd};

  & button {
    ${hoverOpacity};
    color: white;
    font-size: 2rem;
  }
`;
export const Title = styled.h3`
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
export const Main = styled.main``;
export const Footer = styled.footer`
  margin-bottom: 2rem;
  max-width: 200px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  width: 100%;
`;
