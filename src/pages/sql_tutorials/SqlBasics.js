import React from "react";
import SqlTutorialNavbar from "../../components/navbar/sql_tutorial_navbar/SqlTutorialNavbar";
import SqlBasicsContent from "../../components/sql_tutorial/SqlBasicsContent";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function SqlBasics() {
  return (
    <>
      <SqlTutorialNavbar />
      <SqlBasicsContent />
      <Footer />
      <ToStart />
    </>
  );
}

export default SqlBasics;
