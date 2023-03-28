import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlIntroductionContent() {
  return (
    <div className="main">
      <h1>SQL INTRODUCTION</h1>
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
        link1={"../../../pages/home"}
        link2={"../../../pages/sql_tutorials/SqlBasics"}
        name1={"Home"}
        name2={"Basics"}
      />
    </div>
  );
}

export default SqlIntroductionContent;
