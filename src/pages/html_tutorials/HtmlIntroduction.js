import React from "react";
import HtmlTutorialNavbar from "../../components/navbar/html_tutorial_navbar/HtmlTutorialNavbar";
import HtmlIntroductionContent from "../../components/html_tutorial/HtmlIntroductionContent";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function HtmlIntroduction() {
  return (
    <>
      <HtmlTutorialNavbar />
      <HtmlIntroductionContent />
      <Footer />
      <ToStart />
    </>
  );
}

export default HtmlIntroduction;
