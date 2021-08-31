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
  }
`;

export const NavContainer = styled.div`
  h3 {
    font-weight: 500;
    margin: 0;
    font-size: 18px;
    @media screen and (max-width: 960px) {
      text-align: center;
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
      justify-content: space-between;
      h3 {
        text-align: center;
      }
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        li {
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
    justify-content: space-between;
  }
`;
