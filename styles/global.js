import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: poppins;
  }

a {
  color: inherit;
  text-decoration: none;
}
`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

// export const Button = styled.button`
//   border-radius: 4px;
//   background: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
//   color: #fff;
//   font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//   outline: none;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     transition: all 0.3s ease-out;
//     background: #fff;
//     background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
//   }
//   @media screen and (max-width: 960px) {
//     width: 100%;
//   }
// `;

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
  border-radius: 30px;
  &:hover {
    background-color: #9be3e2;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 42px;
  }
`;
export default Global;
