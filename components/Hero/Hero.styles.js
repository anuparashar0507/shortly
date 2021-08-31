import styled from "styled-components";
import { color } from "styled-system";

export const HeroContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  padding: 0 0 0 100px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 10px;
    align-items: center;
    margin-bottom: 60px;
  }
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 72px;
  line-height: 90px;
  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 48px;
    line-height: 50px;
  }
`;
export const SubTitle = styled.h1`
  font-weight: 400;
  font-size: 16px;
  color: #bfbfbf;
  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 16px;
    line-height: 30px;
  }
`;

export const Button = styled.button`
  ${color}
  width: 200px;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
  /* padding: 0 10px; */
  font-family: poppins;
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: #9be3e2;
  }
  @media screen and (max-width: 960px) {
    width: 60%;
  }
`;
