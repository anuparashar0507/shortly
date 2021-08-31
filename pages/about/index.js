import Cta from "../../components/Cta/Cta";
import { Footer } from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function About() {
  return (
    <Container>
      <Header />

      <Cta />
      <Footer />
    </Container>
  );
}

export default About;
