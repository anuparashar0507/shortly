import Link from "next/link";
import styled from "styled-components";
import { color } from "styled-system";
import Image from "next/image";
import logo from "../assets/images/logo.svg";

const HeaderArea = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 50px;
  justify-content: space-between;
`;

const Container = styled.div`
  margin: 0 40px 0 40px;
  display: flex;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    li {
      margin: 0 20px 0 20px;
      font-size: 16px;
      color: #bfbfbf;
    }
  }
`;

const Button = styled.button`
  ${color}
  width: 106px;
  height: 42px;
  font-size: 16px;
  font-family: poppins;
  border: none;
  border-radius: 30px;
`;

const Header = () => {
  return (
    <HeaderArea>
      <Container>
        <Image src={logo} width="72px" height="20px" alt="logo" />

        <ul>
          <li>
            {" "}
            <Link href="/features">Features</Link>
          </li>
          <li>
            {" "}
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            {" "}
            <Link href="/resources">Resources</Link>
          </li>
        </ul>
      </Container>
      <Container>
        <Button bg="white">Login</Button>
        <Button bg="cyan">Sign Up</Button>
      </Container>
    </HeaderArea>
  );
};

export default Header;
