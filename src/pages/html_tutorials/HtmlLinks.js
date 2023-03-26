import React from "react";
import HtmlTutorialNavbar from "../../components/navbar/html_tutorial_navbar/HtmlTutorialNavbar";
import HtmlLinksContent from "../../components/html_tutorial/HtmlLinksContent";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function HtmlLinks() {
  return (
    <>
      <HtmlTutorialNavbar />
      <HtmlLinksContent />
      <Footer />
      <ToStart />
    </>
  );
}

export default HtmlLinks;
