import React from "react";
import CssTutorialNavbar from "../../../components/navbar/css_tutorial_navbar/CssTutorialNavbar";
import CssIntroductionContent from "../../../components/css_tutorial/quarter_01/CssIntroductionContent";
import Footer from "../../../components/footer/Footer";
import ToStart from "../../../components/to_start/ToStart";

function CssIntroduction() {
  return (
    <>
      <CssTutorialNavbar />
      <CssIntroductionContent />
      <Footer />
      <ToStart />
    </>
  );
}

export default CssIntroduction;
