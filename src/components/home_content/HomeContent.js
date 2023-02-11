import React from "react";
import "./HomeContent.css";
import "../searcher/Searcher.css";
import SearcherHomeContent from "./searcher_home_content/SearcherHomeContent";
import CodeContainer from "../code_container/CodeContainer";

function HomeContent() {
  return (
    <>
      <div className="presentation">
        <h1 className="presentation-h1">Learn how to code</h1>
        <h4 className="presentation-h4">
          With the Development of web applications site.
        </h4>
        <SearcherHomeContent />
      </div>
      <div className="presentation-code" style={{ background: "#9EC3E6" }}>
        <div className="presentation-inside">
          <h1 className="code-presentation-h1">HTML</h1>
          <h4 className="code-presentation-h4">Build web pages with...</h4>
          <br />
          <a
            id="code-link-color"
            className="code-link"
            href="../../pages/html_tutorials/HtmlHome"
          >
            HTML tutorials
          </a>
          <br />
          <a
            id="code-link-color-2"
            className="code-link"
            href="../../pages/Prueba"
          >
            HTML exercises
          </a>
        </div>
        <div className="code-div">
          <CodeContainer
            title={"HTML Example"}
            code={
              "<!DOCTYPE html>\n<html>\n<title>HTML Tutorial</title>\n<body>\n\n<h1>Hello world!</h1>\n\n</body>\n</html>"
            }
            containerHeight={"335px"}
            insideHeight={"65%"}
          />
        </div>
      </div>
      <div className="presentation-code" style={{ background: "#94958B" }}>
        <div className="presentation-inside">
          <h1 className="code-presentation-h1">CSS</h1>
          <h4 className="code-presentation-h4">Style web pages with...</h4>
          <br />
          <a
            id="code-link-color"
            className="code-link"
            href="../../pages/Prueba"
          >
            CSS tutorials
          </a>
          <br />
          <a
            id="code-link-color-2"
            className="code-link"
            href="../../pages/Prueba"
          >
            CSS exercises
          </a>
        </div>
        <div className="code-div">
          <CodeContainer
            title={"CSS Example"}
            code={
              "body {\n background-color: black;\n}\n\nh1 {\n color: white;\n}"
            }
            containerHeight={"335px"}
            insideHeight={"65%"}
          />
        </div>
      </div>
      <div className="presentation-code" style={{ background: "#A21F16" }}>
        <div className="presentation-inside">
          <h1 className="code-presentation-h1">C#</h1>
          <h4 className="code-presentation-h4">
            Develop web, desktop, mobile and games apps with...
          </h4>
          <br />
          <a
            id="code-link-color"
            className="code-link"
            href="../../pages/Prueba"
          >
            C# tutorials
          </a>
          <br />
          <a
            id="code-link-color-2"
            className="code-link"
            href="../../pages/Prueba"
          >
            C# exercises
          </a>
        </div>
        <div className="code-div">
          <CodeContainer
            title={"C# Example"}
            code={
              'using System;\n\nnamespace HelloWorld {\n  class Program {\n    static void Main(string[] args) {\n      Console.WriteLine("Hello World!");\n  }\n }\n}   '
            }
            containerHeight={"335px"}
            insideHeight={"65%"}
          />
        </div>
      </div>
      <div className="presentation-code" style={{ background: "#CD9FCC" }}>
        <div className="presentation-inside">
          <h1 className="code-presentation-h1">SQL</h1>
          <h4 className="code-presentation-h4">Manage databases with...</h4>
          <br />
          <a
            id="code-link-color"
            className="code-link"
            href="../../pages/Prueba"
          >
            SQL tutorials
          </a>
          <br />
          <a
            id="code-link-color-2"
            className="code-link"
            href="../../pages/Prueba"
          >
            SQL exercises
          </a>
        </div>
        <div className="code-div">
          <CodeContainer
            title={"SQL Example"}
            code={"SELECT * FROM GAMES\nWHERE Name='Minecraft';"}
            containerHeight={"335px"}
            insideHeight={"65%"}
          />
        </div>
      </div>
    </>
  );
}

export default HomeContent;   