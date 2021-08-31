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
`;
export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  font-family: poppins;
  ${color}
  border: none;
  border-radius: 5px;
  &:focus {
    background-color: #3b3054;
  }
`;

export const Url = styled.p`
  font-size: 16px;
`;
export const ShortUrl = styled.p`
  font-size: 16px;
  ${color}
`;
