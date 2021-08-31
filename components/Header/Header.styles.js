import styled from "styled-components";
import Link from "next/link";
import { Container } from "../../styles/global";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 30px;
  ${Container}
  @media screen and (max-width: 960px) {
    margin: 10px 0 10px 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  margin-left: 20px;
  @media screen and (max-width: 960px) {
    /* width: 20%; */
  }
`;

export const LoginButton = styled.button`
  background-color: white;
  color: black;
  width: 106px;
  height: 42px;
  font-size: 16px;
  font-family: poppins;
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: #bfbfbf;
  }
  @media screen and (max-width: 960px) {
    background-color: #3b3054;
    color: white;
    font-weight: 500;
    width: 80%;
  }
`;
export const SignUpButton = styled.button`
  background-color: #2acfcf;
  width: 106px;
  height: 42px;
  font-size: 16px;
  font-family: poppins;
  border: none;
  border-radius: 30px;
  &:hover {
    background-color: #9be3e2;
  }
  @media screen and (max-width: 960px) {
    font-weight: 500;
    width: 80%;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    color: #000;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  width: 80%;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 5% 0 5%;
    border-radius: 10px;
    position: absolute;
    justify-content: center;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #3b3054;
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 16px;
    height: 100%;
    width: 100%;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem;
    width: 100%;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;
export const NavItem = styled.li`
  margin: 0 30px 0 30px;
  font-size: 16px;
  color: #bfbfbf;
  &:hover {
    color: #2acfcf;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 10px;
    &:hover {
      border: none;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
