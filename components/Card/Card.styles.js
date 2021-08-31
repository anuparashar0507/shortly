import styled from "styled-components";
import { color } from "styled-system";
// import Link from "next/dist/client/link";
export const CardContainer = styled.div`
  width: 70%;
  ${color}
  height: 60px;
  padding: 20px;
  margin-bottom: 20px;
  z-index: 1;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 80vw;
    height: max-content;
    display: flex;
    padding: 0;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
  }
`;
export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-family: poppins;
  ${color}
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:focus {
    background-color: #3b3054;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    margin: 0 5% 2% 5%;
    height: 42px;
  }
`;

export const Url = styled.div`
  p {
    font-size: 16px;
    font-family: poppins;
    @media screen and (max-width: 960px) {
      width: 100%;
      display: block;
      border-bottom: 1px solid #bfbfbf;
      margin: 0 0 10px 0;
      padding: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      -webkit-box-orient: vertical;
    }
  }
`;
export const ShortenedUrl = styled.div`
  p {
    font-size: 16px;
    font-family: poppins;
    ${color}
    @media screen and (max-width: 960px) {
      width: 100%;
      text-align: start;
      padding: 10px;
      margin: 0 0 10px 0;
    }
  }
`;
