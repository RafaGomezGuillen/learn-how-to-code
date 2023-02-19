import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function HtmlBasicsContent() {
  return (
    <div className="main">
      <h1>HTML BASICS</h1>
      <div className="introduction">
        <p>To start coding HTML, you have to download an IDE.</p>
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
        <p>In this page we are going to see how to create a HTML document.</p>
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
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>STEP 2: Create the HTML document </h2>
        <p>
          To create a HTML document press ctrl + n (New Text File), or go to
          File section on VS Code an click New Text File.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>STEP 3: Save the HTML document </h2>
        <p>
          To save the HTML document press ctrl + shift + s (Save As...), or go
          to File section on VS Code an click Save As.
          <br></br>
          <br></br>
          Introduce the name of the document terminated by .html (extension).
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>STEP 4: Write Some Html</h2>
        <p>Write or copy the following HTML code into the document created.</p>
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
        <h2>STEP 5: Save the HTML document and open it</h2>
        <p>
          To save the HTML document press ctrl + s (Save...), or go to File
          section on VS Code an click Save.
          <br></br>
          <br></br>
          You can press the option Auto Save wich auto saves the changes you
          have done in the document automatically for you.
          <br></br>
          <br></br>
          To see the changes open the File Explorer and the document, you will
          see it in your default browser.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>VS Code Extensions</h2>
        <p>
          I recommend you these extensions for VS Code, it will make easier the
          proccess on writing HTML.
        </p>
        <table>
          <tr>
            <td>Extension</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>Auto Rename Tag</td>
            <td>
              Automatically rename paired HTML/XML tag, same as Visual Studio
              IDE does.
            </td>
          </tr>
          <tr>
            <td>Live Server</td>
            <td>
              Launch a development local Server with live reload feature for
              static & dynamic pages.
            </td>
          </tr>
          <tr>
            <td>Lorem ipsum</td>
            <td>Generates and inserts lorem ipsum text.</td>
          </tr>
          <tr>
            <td>Prettier</td>
            <td>
              Prettier is an opinionated code formatter. It enforces a
              consistent style by parsing your code and re-printing it with its
              own rules that take the maximum line length into account, wrapping
              code when necessary.
            </td>
          </tr>
        </table>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/html_tutorials/HtmlIntroduction"}
        link2={"../../../pages/html_tutorials/HtmlIntroduction"}
        name1={"Introduction"}
        name2={"HTML <p>"}
      />
    </div>
  );
}

export default HtmlBasicsContent;
