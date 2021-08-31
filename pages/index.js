// import Head from "next/head";
// import Image from "next/image";
import CardContainer from "../components/CardContainer";
import Cta from "../components/Cta";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
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
  // console.log(results);
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
