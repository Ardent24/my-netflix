import styled from "@emotion/styled";
import { hoverOpacity } from "../common/common";
import { flexColumn } from "../flex";

export const HeaderBox = styled.header`
  padding: 2rem;
  position: relative;
  border-bottom: 10px solid #555555;

  &::after {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;
export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Main = styled.main`
  margin-top: 3rem;
  padding: 2rem;
`;
export const MainWrap = styled.div`
  padding-bottom: 7rem;
`;
export const MainTitle = styled.p`
  color: white;
  font-weight: 400;
  font-size: 4.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
`;
export const MainContainer = styled.div`
  display: flex;
`;
export const MainContainerColumn = styled.div`
  ${flexColumn};
`;
export const MainInput = styled.input`
  flex-grow: 1;
  color: white;
  border: none;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 1.4rem;
  padding: 1.5rem;
  margin-right: 1rem;
`;
export const MainWrapFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const Poster = styled.img`
  max-width: 285px;
  margin-right: 2rem;
`;
export const Header = styled.header``;
export const Title = styled.h2`
  font-size: 4.5rem;
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid white;
  color: forestgreen;
  width: 60px;
  height: 60px;
  font-size: 2rem;
  margin-left: 2rem;
  flex: 0 0 60px;
`;
export const Subtitle = styled.p`
  color: white;
  font-size: 1.5rem;
`;
export const InfoMovie = styled.p`
  color: #f65261;
  font-size: 3.5rem;
  margin: 2rem 0;
`;
export const Space = styled.span`
  display: inline-block;
  width: 60px;
`;
export const Description = styled.p`
  color: white;
  max-width: 700px;
  font-size: 2rem;
`;
export const HeaderBtn = styled.button`
  color: #f65261;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.4rem;
  font-weight: bold;
`;
export const Svg = styled.svg`
  ${hoverOpacity};
`;
