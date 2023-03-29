import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlFundamentalQueries04Content() {
  return (
    <div className="main">
      <h1>SQL FUNDAMENTAL QUERIES PART FOUR</h1>
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
        link1={"../../../pages/sql_tutorials/SqlFundamentalQueries02"}
        link2={"../../../pages/Home"}
        name1={"Fundamental Queries 3"}
        name2={"Home"}
      />
    </div>
  );
}

export default SqlFundamentalQueries04Content;