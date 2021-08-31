import Image from "next/image";
import brand from "../../assets/images/icon-brand-recognition.svg";
import report from "../../assets/images/icon-detailed-records.svg";
import custom from "../../assets/images/icon-fully-customizable.svg";
import Shortner from "../Shortner/Shortner";
import {
  Container,
  TextContainer,
  Cards,
  Card,
  Img,
} from "./CardContainer.styles";
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
