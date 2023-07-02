import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, handleDark }) => {
  return (
    <>
      <Header handleDark={handleDark}/>
      { children }
      <Footer />
    </>
  );
};

export default Layout;
