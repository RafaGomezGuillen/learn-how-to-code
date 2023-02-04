import React from "react";
import HomeContent from "../components/home_content/HomeContent";
import Footer from "../components/footer/Footer";
import HtmlTutorialNavbar from "../components/navbar/html_tutorial_navbar/HtmlTutorialNavbar";

function Home() {
  return (
    <>
      <HtmlTutorialNavbar />
      <HomeContent />
      <Footer isAbsolute="none" isFixed="none"/>
    </>
  );
}

export default Home;
