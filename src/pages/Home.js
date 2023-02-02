import React from "react";
import Header from "../components/header/Header";
import HomeContent from "../components/home_content/HomeContent";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <HomeContent />
      <Footer isAbsolute="none" isFixed="none"/>
    </>
  );
}

export default Home;
