import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";

function CssIntroductionContent() {
  return (
    <div className="main">
      <h1>CSS INTRODUCTION</h1>
      <div className="introduction">
        <p>
          In this page we are going to see all 8 HTML documents of the fist
          quarter.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Exercise 1</h2>
        <p>
          In this exercise we practiced arbitrary blanks with the &lt;pre&gt;
          tag.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "aaaaaaa\naaaaaaaaa\naaaaaaaaaaa"
          }
          containerHeight={"200px"}
          insideHeight={"40%"}
        />
      <hr></hr>
      <Redirection
        link1={"../../../pages/Home"}
        link2={"../../../pages/html_tutorials/HtmlHome"}
        name1={"Home"}
        name2={"HTML Home"}
      />
      </div>
    </div>
  );
}

export default CssIntroductionContent;
