import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlFundamentalQueries02Content() {
  return (
    <div className="main">
      <h1>SQL FUNDAMENTAL QUERIES PART TWO</h1>
      <div className="introduction">
        <p>
          From its first versions, HTML included support for creating data
          tables in web pages. In addition to being simple, the HTML defined
          model is very flexible and quite complete.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Basic tables</h2>
        <p>
          aa
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "aa"
          }
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/sql_tutorials/SqlFundamentalQueries01"}
        link2={"../../../pages/sql_tutorials/SqlFundamentalQueries03"}
        name1={"Fundamental Queries 1"}
        name2={"Fundamental Queries 3"}
      />
    </div>
  );
}

export default SqlFundamentalQueries02Content;
