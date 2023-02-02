import React from "react";
import Header from "../../components/header/Header";
import HtmlTutorialNavbar from "../../components/navbar/navbar_html_tutorials/HtmlTutorialNavbar";
import Footer from "../../components/footer/Footer";
import HtmlContent from "../../components/html_content/HtmlContent"
import "./HtmlHome.css"

function HtmlHome() {
  return (
    <>
      <Header />
      <div className="row">
        <HtmlTutorialNavbar posicion={1} />
        <HtmlContent />
      </div>
      <Footer isAbsolute="absolute" isFixed="fixed" />
    </>
  );
}

export default HtmlHome;
