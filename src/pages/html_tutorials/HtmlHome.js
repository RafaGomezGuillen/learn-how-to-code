import React from "react";
import Footer from "../../components/footer/Footer";
import HtmlTutorialNavbar from "../../components/navbar/html_tutorial_navbar/HtmlTutorialNavbar";
import "./HtmlHome.css";

function HtmlHome() {
  return (
    <>
      <HtmlTutorialNavbar />
      <Footer isAbsolute="absolute" isFixed="fixed" />
    </>
  );
}

export default HtmlHome;
