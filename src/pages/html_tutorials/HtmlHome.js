import React from "react";
import HtmlTutorialNavbar from "../../components/navbar/html_tutorial_navbar/HtmlTutorialNavbar";
import HtmlTutorialHomeContent from "../../components/html_tutorial/home/HtmlContent";
import Footer from "../../components/footer/Footer";

function HtmlHome() {
  return (
    <>
      <HtmlTutorialNavbar />
      <HtmlTutorialHomeContent />
      <Footer />
    </>
  );
}

export default HtmlHome;
