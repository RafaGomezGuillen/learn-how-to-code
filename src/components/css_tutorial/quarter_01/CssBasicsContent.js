import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";
import HtmlBasic from "../../../pages/html_tutorials/HtmlBasics";

function CssBasicsContent() {
  return (
    <div className="main">
      <h1>CSS BASICS</h1>
      <div className="introduction">
        <p>To start coding CSS, you have to download an IDE.</p>
        <p>
          An integrated development environment (IDE) is a software application
          that provides comprehensive facilities to computer programmers for
          software development. An IDE normally consists of at least a source
          code editor, build automation tools and a debugger. Definition by{" "}
          <a
            className="links"
            href="https://en.wikipedia.org/wiki/Integrated_development_environment"
          >
            {" "}
            Wikipedia
          </a>
          .
        </p>
        <p>
          For this time we are going to use Visual Studio Code by Microsoft.
        </p>
        <p>
          Which is the most used IDE according to{" "}
          <a href="https://survey.stackoverflow.co/2022/" className="links">
            Stack Overflow 2022 Developer Survey
          </a>
          .
        </p>
        <p>In this page we are going to see how to create a CSS file.</p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>STEP 1: Download for free VS Code </h2>
        <p>
          Download VS Code for free in this page{" "}
          <a href="https://code.visualstudio.com/Download" className="links">
            VS Code page
          </a>
          .
        </p>
        <hr></hr>
        <h2>STEP 2: Create an HTML file </h2>
        <p>
          The proccess of creating an HTML file is explained here{" "}
          <a href="../../../pages/html_tutorials/HtmlBasics" className="links">
            HTML Basics
          </a>
          .
        </p>
        <hr></hr>
        <h2>STEP 3: Create a CSS file </h2>
        <p>
          It is basically the as an HTML file. In this case we are going to call
          it style.css that is in the same folder as the HTML file.
        </p>
        <hr></hr>
        <h2>STEP 4: Linking the CSS file </h2>
        <p>To link a CSS file to an HTML file we use the &lt;link&gt; tag.</p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n\n<head>\n  <title>HTML example</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n\n<body>\n  <p>Hello world</p>\n</body>\n\n</html>'
          }
          containerHeight={"400px"}
          insideHeight={"71%"}
        />
        <p>
          When the CSS file is already linked, you are ready to style your HTML
          document.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"h1 {\n  color: red;\n}"}
          containerHeight={"200px"}
          insideHeight={"45%"}
        />
        <div className="examples">
          <p style={{ color: "red" }}>Hello world</p>
        </div>
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssIntroduction"}
          link2={"../../../pages/css_tutorials/quarter_01/CssSelectors"}
          name1={"Introduction"}
          name2={"Selectors"}
        />
      </div>
    </div>
  );
}

export default CssBasicsContent;
