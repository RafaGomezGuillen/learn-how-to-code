import React from "react";
import SqlTutorialNavbar from "../../components/navbar/sql_tutorial_navbar/SqlTutorialNavbar";
import SqlIntroductionContent from "../../components/sql_tutorial/SqlIntroductionContent";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function SqlIntroduction() {
  return (
    <>
      <SqlTutorialNavbar />
      <SqlIntroductionContent />
      <Footer />
      <ToStart />
    </>
  );
}

export default SqlIntroduction;
