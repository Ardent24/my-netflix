import styled from "@emotion/styled/macro";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { hoverOpacity } from "../common/common";

export const MainCore = styled.main`
  background-color: #232323;
  padding: 2rem 4rem;
  flex: 1 1 auto;
`;
export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MainResult = styled.p`
  color: white;
  font-size: 2rem;
  margin: 2rem 0;
`;
export const MoviesStyles = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ItemDots = styled.div`
  width: 35px;
  height: 35px;
  background-color: #232323;
  color: white;
  position: absolute;
  right: 5px;
  top: 5px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.2s opacity;
  cursor: pointer;
`;
export const Item = styled.div`
  ${hoverOpacity};
  width: 100%;
  max-width: 320px;
  flex: 0 0 320px;
  flex-direction: column;
  display: flex;
  position: relative;
  overflow: hidden;

  &:hover ${ItemDots} {
    opacity: 1;
  }

  &:nth-of-type(1n) {
    margin-left: 0;
  }

  &:nth-of-type(4n) {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
  }
`;
export const ItemPoster = styled(LazyLoadImage)`
  height: 100%;
  max-height: 460px;

  @media (max-width: 1024px) {
    max-height: none;
  }
`;
export const Dot = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: white;
  border-radius: 50%;
  margin: 1px;
`;
export const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
  width: 190px;
  background-color: #232323;
  border-radius: 6px;
  box-shadow: 3px 4px 6px black;
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(-200px)" : "translateY(0)"};
  transition: 0.2s transform;
`;
export const DropdownClose = styled.button`
  color: white;
  margin-left: auto;
  font-size: 1.6rem;

  &:hover {
    color: #f65261;
  }
`;
export const DropdownItem = styled.div`
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 1.3rem;
  background-color: transparent;
  transition: 0.2s background-color;
  cursor: pointer;

  &:hover {
    background-color: #f65261;
  }
`;
export const Footer = styled.footer`
  margin-top: 1rem;
`;
export const Title = styled.h3`
  font-size: 2rem;
  color: #555555;
`;
export const Year = styled.h4`
  color: #555555;
  border: 1px solid #555555;
  border-radius: 4px;
  font-size: 1.7rem;
  padding: 5px;
`;
export const Description = styled.p`
  color: #555555;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavCore = styled.nav`
  display: flex;
`;
export const NavItem = styled.span<{ isActive: boolean }>`
  ${hoverOpacity};
  display: inline-block;
  color: white;
  font-size: 1.5rem;
  margin: 0.2rem 1rem;
  text-transform: uppercase;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #f65261;
    left: 0;
    bottom: -2px;
    opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
export const SortWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SortText = styled.p`
  color: #555555;
  text-transform: uppercase;
`;
export const SelectWrap = styled.div`
  margin-left: 2rem;
  position: relative;
  display: flex;
  width: 15rem;
  height: 3rem;
  border-radius: 0.25rem;
  overflow: hidden;

  &::after {
    content: "\\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 1em;
    background-color: #34495e;
    transition: 0.25s all ease;
    pointer-events: none;
  }
`;
export const Select = styled.select`
  appearance: none;
  outline: 0;
  border: 0;
  box-shadow: none;
  padding: 0 1em;
  color: #fff;
  cursor: pointer;
  background: #5c6664;
  text-transform: uppercase;

  &::-ms-expand {
    display: none;
  }
`;
export const Option = styled.option`
  text-transform: uppercase;
  padding: 1rem;
`;
