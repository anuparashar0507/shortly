import Image from "next/image";
import heroImg from "../assets/images/illustration-working.svg";
import styled from "styled-components";
import { color } from "styled-system";

const HeroContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  padding: 0 0 0 100px;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  h1 {
    font-weight: 700;
    font-size: 72px;
    line-height: 90px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    color: #bfbfbf;
  }
  button {
    ${color}
    width: 200px;
    height: 50px;
    font-size: 16px;
    padding: 0 10px;
    font-family: poppins;
    border: none;
    border-radius: 30px;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Text bg="Cyan" color="white">
        <h1>More than just shorter links</h1>
        <p>
          You might have mismatching versions of React and the renderer (such as
          React DOM)
        </p>
        <button>Get Started</button>
      </Text>
      <Image src={heroImg} width={964} height={643} alt="hero image" />
    </HeroContainer>
  );
};

export default Hero;
