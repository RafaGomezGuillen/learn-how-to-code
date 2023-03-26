import React from "react";
import HtmlTutorialNavbar from "../../components/navbar/html_tutorial_navbar/HtmlTutorialNavbar";
import HtmlBasicsContent from "../../components/html_tutorial/HtmlBasicsContent";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function HtmlBasics() {
  return (
    <>
      <HtmlTutorialNavbar />
      <HtmlBasicsContent />
      <Footer />
      <ToStart />
    </>
  );
}

export default HtmlBasics;
