import styled from "styled-components";
import { color } from "styled-system";
// import bgImage from "../assets/images/bg-shorten-desktop.svg";
const CtaContainer = styled.div`
  width: 100%;
  /* height: 400px; */
  /* background-image: url(${bgImage});
  background-repeat: no-repeat, no-repeat; */
  ${color}
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 90px;
    ${color}
  }
`;
const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-family: poppins;
  ${color}
  border: none;
  border-radius: 30px;
`;
const Cta = () => {
  return (
    <CtaContainer bg="DarkViolet" color="white">
      <h1>Boost your link today</h1>
      <Button bg="Cyan" color="white">
        Get Started
      </Button>
    </CtaContainer>
  );
};

export default Cta;
