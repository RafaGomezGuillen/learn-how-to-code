import React from "react";
import "./HomeContent.css";
import "../searcher/Searcher.css";
import SearcherHomeContent from "./searcher_home_content/SearcherHomeContent";
import CodeContainer from "../code_container/CodeContainer";
import Footer from "../footer/Footer";
import { NavLink } from "react-router-dom";

function HomeContent() {
  const maxWidth = 1290; 

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
        <div className={ window.innerWidth < maxWidth ? "" : "presentation-inside" }>
          <h1 className="code-presentation-h1">HTML</h1>
          <h4 className="code-presentation-h4">Build web pages with...</h4>
          <br />
          <NavLink
            to="../../pages/html_tutorials/HtmlHome "
            id="code-link-color"
            className="code-link"
          >
            HTML tutorials
          </NavLink>
          <br />
          <NavLink
            id="code-link-color-2"
            className="code-link"
            to="../../pages/html_exercises/HtmlExercises"
          >
            HTML exercises
          </NavLink>
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
        <div className={ window.innerWidth < maxWidth ? "" : "presentation-inside" }>
          <h1 className="code-presentation-h1">CSS</h1>
          <h4 className="code-presentation-h4">Style web pages with...</h4>
          <br />
          <NavLink
            id="code-link-color"
            className="code-link"
            to="../../pages/css_tutorials/quarter_01/CssIntroduction"
          >
            CSS tutorials
          </NavLink>
          <br />
          <NavLink
            id="code-link-color-2"
            className="code-link"
            to="https://github.com/RafaGomezGuillen/desarrollo_de_aplicaciones_web/tree/main/lenguaje_de_marcas_y_sistemas_de_gestion_de_informacion"
          >
            CSS exercises
          </NavLink>
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
        <div className={ window.innerWidth < maxWidth ? "" : "presentation-inside" }>
          <h1 className="code-presentation-h1">C#</h1>
          <h4 className="code-presentation-h4">
            Develop web, desktop, mobile and games apps with...
          </h4>
          <br />
          <NavLink
            id="code-link-color"
            className="code-link"
            to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          >
            C# tutorials
          </NavLink>
          <br />
          <a
            id="code-link-color-2"
            className="code-link"
            href="https://github.com/RafaGomezGuillen/desarrollo_de_aplicaciones_web/tree/main/programacion"
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
        <div className={ window.innerWidth < maxWidth ? "" : "presentation-inside" }>
          <h1 className="code-presentation-h1">SQL</h1>
          <h4 className="code-presentation-h4">Manage databases with...</h4>
          <br />
          <NavLink
            id="code-link-color"
            className="code-link"
            to="../../pages/sql_tutorials/SqlIntroduction"
          >
            SQL tutorials
          </NavLink>
          <br />
          <NavLink
            id="code-link-color-2"
            className="code-link"
            to="https://github.com/RafaGomezGuillen/desarrollo_de_aplicaciones_web/tree/main/base_de_datos"
          >
            SQL exercises
          </NavLink>
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
      <Footer />
    </>
  );
}

export default HomeContent;
