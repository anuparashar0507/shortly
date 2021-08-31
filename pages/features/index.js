// import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
// import CardContainer from "../components/CardContainer";
import Cta from "../../components/Cta";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
// import Hero from "../../components/Hero";
// import Shortner from "../../components/Shortner";
export default function Home() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      {/* <Shortner /> */}
      {/* <CardContainer /> */}
      <Cta />
      <Footer />
    </div>
  );
}
