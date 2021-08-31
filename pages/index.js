// import Head from "next/head";
// import Image from "next/image";
import CardContainer from "../components/CardContainer/CardContainer";
import Cta from "../components/Cta/Cta";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function Home() {
  return (
    <Container>
      <Header />
      <Hero />

      <CardContainer />
      <Cta />
      <Footer />
    </Container>
  );
}

export default Home;
