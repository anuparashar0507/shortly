import styled from "styled-components";
import { color } from "styled-system";
export const FooterArea = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  ${color}
  padding: 60px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: max-content;
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
    margin: 10px;
  }
`;

export const NavContainer = styled.div`
  h3 {
    font-weight: 500;
    margin: 0;
    font-size: 18px;
    @media screen and (max-width: 960px) {
      text-align: center;
      margin: 10px 0 10px 0;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 16px;
    ${color}
    li {
      &:hover {
        color: #2acfcf;
      }
    }
    @media screen and (max-width: 960px) {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      margin: 10px 0 10px 0;
      justify-content: space-between;
      h3 {
        text-align: center;
      }
      ul {
        display: flex;
        flex-direction: column;
        margin: 10px;
        justify-content: space-between;
        li {
          margin: 10px;
        }
      }
    }
  }
`;
export const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 20px;
    justify-content: space-between;
  }
`;
