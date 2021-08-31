import Image from "next/image";
import brand from "../assets/images/icon-brand-recognition.svg";
import report from "../assets/images/icon-detailed-records.svg";
import custom from "../assets/images/icon-fully-customizable.svg";
import Shortner from "./Shortner";
import styled from "styled-components";
import { color, space } from "styled-system";

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #f0f1f6;
  flex-direction: column;
  padding: 200px 50px 100px 50px;
  justify-content: space-between;
  align-items: center;
`;

const Cards = styled.div`
  width: 80%;
  display: flex;
  margin: 40px 0 40px 0;
  justify-content: space-between;
`;
const Card = styled.div`
  width: 20vw;
  height: 200px;
  display: flex;
  background-color: white;
  ${space}
  padding: 0 20px 20px 20px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  h6 {
    font-weight: 500;
    font-size: 20px;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: #bfbfbf;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 500;
    font-size: 32px;
  }
  p {
    font-size: 16px;
    color: #bfbfbf;
  }
`;
const Img = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #35323e;
  margin: -45px 0 15px 0;
  width: 50px;
  padding: 10px;
  height: 50px;
  border-radius: 50px;
`;
const CardContainer = () => {
  return (
    <>
      <Container>
        <Shortner />
        <TextContainer>
          <h2>Advance Statistics</h2>
          <p>
            You might have mismatching versions of React and the renderer (such
            as React DOM)
          </p>
        </TextContainer>
        <Cards>
          <Card>
            <Img>
              <Image src={brand} width={30} height={30} alt="hero image" />
            </Img>
            <h6>Brand Recorgnition</h6>
            <p>
              You might have mismatching versions of React and the renderer
              (such as React DOM)
            </p>
          </Card>
          <Card mt="30px">
            {" "}
            <Img>
              <Image src={report} width={30} height={30} alt="hero image" />
            </Img>
            <h6>Detailed reports</h6>
            <p>
              You might have mismatching versions of React and the renderer
              (such as React DOM)
            </p>
          </Card>
          <Card mt="60px">
            {" "}
            <Img>
              <Image src={custom} width={30} height={30} alt="hero image" />
            </Img>
            <h6>Fully customisable</h6>
            <p>
              You might have mismatching versions of React and the renderer
              (such as React DOM)
            </p>
          </Card>
        </Cards>
      </Container>
    </>
  );
};

export default CardContainer;
