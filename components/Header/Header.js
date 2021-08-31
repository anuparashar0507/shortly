import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.svg";
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  Logo,
  LoginButton,
  SignUpButton,
  NavItem,
  NavItems,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Header.styles";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", showButton);
  }

  return (
    <Nav>
      <NavbarContainer>
        <Logo>
          <Image src={logo} width="76px" height="21px" alt="logo" />
        </Logo>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavLinks>
            <NavItem>
              {" "}
              <Link href="/features">Features</Link>
            </NavItem>
            <NavItem>
              {" "}
              <Link href="/pricing">Pricing</Link>
            </NavItem>
            <NavItem>
              {" "}
              <Link href="/resources">Resources</Link>
            </NavItem>
          </NavLinks>
          <NavItemBtn>
            <LoginButton>Login</LoginButton>
            <SignUpButton>Sign Up</SignUpButton>
          </NavItemBtn>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Header;
