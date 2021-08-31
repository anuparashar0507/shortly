import styled from "styled-components";
import { color } from "styled-system";
export const InputContainer = styled.div`
  width: 70%;
  height: 100px;
  padding: 20px;
  margin: -250px 0 80px 0;
  z-index: 1;
  border-radius: 10px;
  ${color}
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 960px) {
    width: 80vw;
    height: 150px !important;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100px;
  }
`;
export const InputField = styled.input`
  width: 60%;
  height: 50px;
  border: none;
  font-family: poppins;
  padding: 20px;
  font-size: 16px;
  border-radius: 10px;
  @media screen and (max-width: 960px) {
    width: 100%;
    text-align: center;
  }
`;
export const Button = styled.button`
  background-color: #2acfcf;
  width: 106px;
  color: white;
  height: 42px;
  font-size: 16px;
  font-family: poppins;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #9be3e2;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 42px;
  }
`;
