import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";

function CssMeasureColorsContent() {
  return (
    <div className="main">
      <h1>CSS MEASURE & COLORS</h1>
      <div className="introduction">
        <p>
          Many of the CSS properties that you will see in the next chapters
          allow you to indicate sizes and colors in their values. Furthermore,
          CSS is so flexible that it allows you to indicate measurements and
          colors in many different ways.
        </p>
        <p>
          For this reason, all the alternatives available in CSS to indicate the
          measurements and colors are presented below. In the following
          chapters, when a property can take a measurement or a color as its
          value, all these alternatives will not be explained again.
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
          code={"aaaaaaa\naaaaaaaaa\naaaaaaaaaaa"}
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

export default CssMeasureColorsContent;
