import React from "react";
import SqlTutorialNavbar from "../../components/navbar/sql_tutorial_navbar/SqlTutorialNavbar";
import SqlFundamentalQueries01Content from "../../components/sql_tutorial/SqlFundamentalQueries01Content";
import Footer from "../../components/footer/Footer";
import ToStart from "../../components/to_start/ToStart";

function SqlFundamentalQueries01() {
  return (
    <>
      <SqlTutorialNavbar />
      <SqlFundamentalQueries01Content />
      <Footer />
      <ToStart />
    </>
  );
}

export default SqlFundamentalQueries01;
