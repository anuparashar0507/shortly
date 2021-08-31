import { FooterArea, Logo, NavContainer, Social } from "./Footer.styles";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/logoWhite.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

export const Footer = () => {
  return (
    <FooterArea bg="veryDarkViolet" color="white">
      <Logo>
        <Image src={logo} width="72px" height="20px" alt="logo" />
      </Logo>
      <NavContainer color="Gray">
        <h3>Features</h3>
        <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/our-team">Our Team</Link>
          </li>
        </ul>
      </NavContainer>
      <NavContainer color="Gray">
        <h3>Resources</h3>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </NavContainer>
      <NavContainer color="Gray">
        <h3>Comapany</h3>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </NavContainer>
      <Social>
        {" "}
        <Image src={facebook} width="20px" height="20px" alt="facebook" />
        <Image src={twitter} width="20px" height="20px" alt="twitter" />
        <Image src={pinterest} width="20px" height="20px" alt="pinterest" />
        <Image src={instagram} width="20px" height="20px" alt="instagram" />
      </Social>
    </FooterArea>
  );
};
