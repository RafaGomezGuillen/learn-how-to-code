import React from "react";
import SqlTutorialNavbar from "../../components/navbar/sql_tutorial_navbar/SqlTutorialNavbar";
import SqlFundamentalQueries02Content from "../../components/sql_tutorial/SqlFundamentalQueries02Content";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function SqlFundamentalQueries02() {
  return (
    <>
      <SqlTutorialNavbar />
      <SqlFundamentalQueries02Content />
      <Footer />
      <ToStart />
    </>
  );
}

export default SqlFundamentalQueries02;
