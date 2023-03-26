import React from "react";
import HtmlTutorialNavbar from "../../components/navbar/html_tutorial_navbar/HtmlTutorialNavbar";
import HtmlHomeContent from "../../components/html_tutorial/HtmlHomeContent";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function HtmlHome() {
  return (
    <>
      <HtmlTutorialNavbar />
      <HtmlHomeContent />
      <Footer />
      <ToStart />
    </>
  );
}

export default HtmlHome;
