import React from "react";
import SqlTutorialNavbar from "../../components/navbar/sql_tutorial_navbar/SqlTutorialNavbar";
import SqlBasicQueries02Content from "../../components/sql_tutorial/SqlBasicQueries02Content";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function SqlBasicQueries02() {
  return (
    <>
      <SqlTutorialNavbar />
      <SqlBasicQueries02Content />
      <Footer />
      <ToStart />
    </>
  );
}

export default SqlBasicQueries02;
