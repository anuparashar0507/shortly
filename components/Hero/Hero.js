import Image from "next/image";
import heroImg from "../../assets/images/illustration-working.svg";
import {
  HeroContainer,
  Contents,
  Title,
  SubTitle,
  Button,
} from "./Hero.styles";
const Hero = () => {
  return (
    <HeroContainer>
      <Contents bg="Cyan" color="white">
        <Title>More than just shorter links</Title>
        <SubTitle>
          You might have mismatching versions of React and the renderer (such as
          React DOM)
        </SubTitle>
        <Button bg="Cyan">Get Started</Button>
      </Contents>
      <Image src={heroImg} width={964} height={643} alt="hero image" />
    </HeroContainer>
  );
};

export default Hero;
