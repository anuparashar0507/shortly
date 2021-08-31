import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
