import React from "react";
import CodeContainer from "../code_container/CodeContainer";

function HtmlTutorialHomeContent() {
  return (
    <div className="main">
      <h1>HTML HOME</h1>
      <div className="introduction">
        <p>What is HTML? HTML is used to create web pages mostly.</p>
        <p>HTML acronyms are HyperText Markup Language.</p>
        <p>HTML is easy to learn!</p>
        <p>Being HTML a visual language, you will enjoy it!</p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Hello World in HTML</h2>
        <p>
          This is an example of a Hello World in HTML, this example is with a
          heading but you can do it with a paragraph as well.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<!DOCTYPE html>\n<html>\n<title>HTML Tutorial</title>\n<body>\n\n<h1>Hello world!</h1>\n\n</body>\n</html>"
          }
          containerHeight={"340px"}
          insideHeight={"65%"}
        />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>HTML History</h2>
        <p>
          HTML is a markup language that is used to create web pages. It was
          created by Sir Tim Berners-Lee in 1989 at CERN with the idea of
          creating a hypertext system for the internet. The first version of
          HTML, HTML 1.0, was released in 1991. HTML has evolved with various
          versions until reaching HTML5 in 2014.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>HTML Especification</h2>
        <p>
          The W3C (World Wide Web Consortium) organization develops the
          standards that web page designers must follow to create HTML pages.
          The official standards are written in English and can be consulted for
          free at the following addresses:
        </p>
        <p>
          <ul>
            <li>
              <a href="https://www.w3.org/TR/html401/" className="links">
                HTML 4.01 Specification
              </a>
            </li>
            <li>
              <a href="https://www.w3.org/TR/xhtml1/" className="links">
                XHTML™ 1.0 The Extensible HyperText Markup Language (Second
                Edition)
              </a>
            </li>
          </ul>
        </p>
      </div>
      <hr></hr>
      <div className="redirection">
        <a href="../../../pages/Home" style={{ float: "left" }}>
          &lt; Home
        </a>
        <a href="../../../pages/html_tutorials/HtmlIntroduction" style={{ float: "right" }}>
          Introduction &gt;
        </a>
      </div>
    </div>
  );
}

export default HtmlTutorialHomeContent;
