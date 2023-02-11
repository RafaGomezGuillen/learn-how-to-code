import React from "react";
import "./HtmlContent.css";
import CodeContainer from "../../code_container/CodeContainer";

function HtmlTutorialHomeContent() {
  return (
    <div className="main">
      <h1>HTML HOME</h1>
      <div className="introduction">
        <p>
          Irure occaecat nisi dolor amet quis deserunt eiusmod deserunt pariatur
          est quis qui nulla. Tempor in cupidatat do minim ipsum aliquip laborum
          cupidatat reprehenderit. Velit reprehenderit labore deserunt aliqua
          dolor aliqua amet laboris nulla pariatur. Aute pariatur reprehenderit
          ut nostrud nostrud commodo ullamco cillum sunt ex. Proident in non
          incididunt officia aliquip. Esse consectetur magna Lorem cillum. Nisi
          aliquip enim qui et veniam velit irure culpa fugiat esse adipisicing
          consequat culpa.
        </p>
        <p>
          Irure occaecat nisi dolor amet quis deserunt eiusmod deserunt pariatur
          est quis qui nulla. Tempor in cupidatat do minim ipsum aliquip laborum
          cupidatat reprehenderit. Velit reprehenderit labore deserunt aliqua
          dolor aliqua amet laboris nulla pariatur. Aute pariatur reprehenderit
          ut nostrud nostrud commodo ullamco cillum sunt ex. Proident in non
          incididunt officia aliquip. Esse consectetur magna Lorem cillum. Nisi
          aliquip enim qui et veniam velit irure culpa fugiat esse adipisicing
          consequat culpa.
        </p>
        <p>
          Irure occaecat nisi dolor amet quis deserunt eiusmod deserunt pariatur
          est quis qui nulla. Tempor in cupidatat do minim ipsum aliquip laborum
          cupidatat reprehenderit. Velit reprehenderit labore deserunt aliqua
          dolor aliqua amet laboris nulla pariatur. Aute pariatur reprehenderit
          ut nostrud nostrud commodo ullamco cillum sunt ex. Proident in non
          incididunt officia aliquip. Esse consectetur magna Lorem cillum. Nisi
          aliquip enim qui et veniam velit irure culpa fugiat esse adipisicing
          consequat culpa.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>
          Irure dolore quis mollit ea magna veniam voluptate qui elit aute amet
          officia eu.
        </h2>
        <p>
          Pariatur excepteur velit ullamco mollit eiusmod ad tempor labore ipsum
          ut.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<!DOCTYPE html>\n<html>\n<title>HTML Tutorial</title>\n<body>\n\n<h1>Hello world!</h1>\n\n</body>\n</html><!DOCTYPE html>\n<html>\n<title>HTML Tutorial</title>\n<body>\n\n<h1>Hello world!</h1>\n\n</body>\n</html>"
          }
          containerHeight={"500px"}
          insideHeight={"75%"}
        />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>
          Irure dolore quis mollit ea magna veniam voluptate qui elit aute amet
          officia eu.
        </h2>
        <p>
          Pariatur excepteur velit ullamco mollit eiusmod ad tempor labore ipsum
          ut.
        </p>
      </div>
      <hr></hr>
    </div>
  );
}

export default HtmlTutorialHomeContent;
