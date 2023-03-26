import React from "react";
import HtmlTutorialNavbar from "../../components/navbar/html_tutorial_navbar/HtmlTutorialNavbar";
import HtmlTextContent from "../../components/html_tutorial/HtmlTextContent";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function HtmlText() {
  return (
    <>
      <HtmlTutorialNavbar />
      <HtmlTextContent />
      <ToStart />
      <Footer />
    </>
  );
}

export default HtmlText;
