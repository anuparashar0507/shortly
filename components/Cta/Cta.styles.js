import styled from "styled-components";
import { color } from "styled-system";
// import bgImage from "../assets/images/bg-shorten-desktop.svg";
export const CtaContainer = styled.div`
  width: 100%;
  /* height: 400px; */
  /* background-image: url(${bgImage});
  background-repeat: no-repeat, no-repeat; */
  ${color}
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 90px;
  ${color}
  @media screen and (max-width: 960px) {
    text-align: center;
    line-height: 60px;
    margin-bottom: 10px;
  }
`;
export const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-family: poppins;
  ${color}
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: #9be3e2;
  }
`;
