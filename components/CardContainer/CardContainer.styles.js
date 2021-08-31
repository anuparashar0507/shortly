import styled from "styled-components";
import { color, space } from "styled-system";

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #f0f1f6;
  flex-direction: column;
  padding: 200px 50px 100px 50px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Cards = styled.div`
  width: 80%;
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`;
export const Card = styled.div`
  width: 20vw;
  height: 200px;
  display: flex;
  background-color: white;
  ${space}
  padding: 0 20px 20px 20px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  h6 {
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: #bfbfbf;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    margin: 40px 0 20px 0;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    h6 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    font-size: 16px;
    color: #bfbfbf;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    h2 {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;
export const Img = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #35323e;
  margin: -45px 0 15px 0;
  width: 50px;
  padding: 10px;
  height: 50px;
  border-radius: 50px;
`;
