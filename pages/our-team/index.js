import Cta from "../../components/Cta";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function OurTeam() {
  return (
    <Container>
      <Header />

      <Cta />
      <Footer />
    </Container>
  );
}

export default OurTeam;
