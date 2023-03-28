import React from "react";
import SqlTutorialNavbar from "../../components/navbar/sql_tutorial_navbar/SqlTutorialNavbar";
import SqlBasicQueries01Content from "../../components/sql_tutorial/SqlBasicQueries01Content";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function SqlBasicQueries01() {
  return (
    <>
      <SqlTutorialNavbar />
      <SqlBasicQueries01Content />
      <Footer />
      <ToStart />
    </>
  );
}

export default SqlBasicQueries01;
