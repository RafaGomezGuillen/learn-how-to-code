import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";
import "./css/CssTutorialStyles.css";
import Padding from "./images/Padding.png";
import Margin from "./images/Margin.png";

function CssBoxModelContent() {
  return (
    <div className="main">
      <h1>CSS BOX MODEL</h1>
      <div className="introduction">
        <p>
          The box model is surely the most important feature of the CSS style
          sheet language, since it determines the design of all web pages.
        </p>
        <p>
          The box model is the CSS behavior that causes all page elements to be
          represented by rectangular boxes.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <table>
          <tr>
            <td>
              <a href="#width-height" className="links">
                width and height
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#margin-padding" className="links">
                margin and padding
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#border" className="links">
                border
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#background" className="links">
                background
              </a>
            </td>
          </tr>
        </table>
        <hr></hr>
        <h2>Box parts</h2>
        <p>
          <ul>
            <li>
              <strong>Content</strong>: this is the HTML content of the element
              (the words of a paragraph, an image, the text of a list of
              elements, etc.)
            </li>
            <li>
              <strong>Padding</strong>: optional free space between the content
              and the border.
            </li>
            <li>
              <strong>Border</strong>: line that completely encloses the content
              and its padding.
            </li>
            <li>
              <strong>Background image</strong>: image that is displayed behind
              the content and the padding space.
            </li>
            <li>
              <strong>Background color</strong>: the color that is displayed
              behind the content and the padding space.
            </li>
            <li>
              <strong>Margin</strong>: optional separation between the box and
              the rest of the adjacent boxes
            </li>
          </ul>
        </p>
        <hr></hr>
        <h2 id="width-height">Width and height</h2>
        <p>
          The CSS property that controls the width of elements is called{" "}
          <strong>width</strong>. The CSS property that controls the height of
          elements is called
          <strong> height</strong>.<br></br>
          <br></br>
          Both properties does not admit negative values ​​and the percentage
          values ​​are calculated from its parent element. The value inherit
          indicates that is inherited from its parent element. The value auto,
          which is used if a value is not explicitly set to this property,
          indicates that the browser should automatically calculate the size of
          the element.
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            "<div></div>\n\ndiv {\n  width: 100px;\n  height: 150px;\n  border: solid black;\n}"
          }
          containerHeight={"280px"}
          insideHeight={"60%"}
        />
        <div className="examples">
          <div className="div-example"></div>
        </div>
        <hr></hr>
        <h2 id="margin-padding">Margin and padding</h2>
        <p>
          CSS defines four properties to control each of an element's horizontal
          and vertical margins.
        </p>
        <div style={{ margin: "0 auto", width: "300px" }}>
          <img src={Padding}></img>
        </div>
        <br></br>
        <br></br>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            '<p>...</p>\n<p class="content">...</p>\n<p>...</p>\n\n.content { margin-left: 5em; border: solid black }'
          }
          containerHeight={"240px"}
          insideHeight={"52%"}
        />
        <div className="examples">
          <p style={{ border: "solid black" }}>
            Nulla aliquip et id sit reprehenderit sit culpa. Tempor aliquip do
            ea ea et ea anim ullamco esse ad qui ut. Mollit aute culpa elit
            minim tempor cillum. Do duis reprehenderit pariatur mollit culpa.
            Dolore quis aute commodo minim aliqua fugiat quis deserunt
            reprehenderit pariatur sit reprehenderit.
          </p>
          <p style={{ border: "solid black", marginLeft: "5em" }}>
            Nulla aliquip et id sit reprehenderit sit culpa. Tempor aliquip do
            ea ea et ea anim ullamco esse ad qui ut. Mollit aute culpa elit
            minim tempor cillum. Do duis reprehenderit pariatur mollit culpa.
            Dolore quis aute commodo minim aliqua fugiat quis deserunt
            reprehenderit pariatur sit reprehenderit.
          </p>
          <p style={{ border: "solid black" }}>
            Nulla aliquip et id sit reprehenderit sit culpa. Tempor aliquip do
            ea ea et ea anim ullamco esse ad qui ut. Mollit aute culpa elit
            minim tempor cillum. Do duis reprehenderit pariatur mollit culpa.
            Dolore quis aute commodo minim aliqua fugiat quis deserunt
            reprehenderit pariatur sit reprehenderit.
          </p>
        </div>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            "<p>...</p>\n<p>...</p>\n<p>...</p>\n\np { margin-left: 10px; margin-right: 10px; margin-bottom: 10px; margin-top: 10px; }\n\n /* The same as... */\n p { margin: 10px; }"
          }
          containerHeight={"300px"}
          insideHeight={"61%"}
        />
        <div className="examples">
          <div style={{ border: "solid black", height: "250px" }}>
            <p
              style={{
                border: "solid black",
                margin: "10px",
                width: "100px",
                height: "100px",
                float: "left",
              }}
            ></p>
            <p
              style={{
                border: "solid black",
                margin: "10px",
                width: "100px",
                height: "100px",
                float: "left",
              }}
            ></p>
            <p
              style={{
                border: "solid black",
                margin: "10px",
                width: "100px",
                height: "100px",
                float: "left",
              }}
            ></p>
          </div>
        </div>
        <p>
          CSS defines four properties to control each of an element's horizontal
          and vertical padding spaces.
        </p>
        <div style={{ margin: "0 auto", width: "300px" }}>
          <img src={Margin}></img>
        </div>
        <br></br>
        <br></br>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            '<p>...</p>\n<p class="box-2">...</p>\n<p class="box-3">...</p>\n\n.box-2 {\n  padding: 50px; \n}\n\n.box-3 {\n  padding-left: 50px;\n  padding-top: 80px;\n}'
          }
          containerHeight={"380px"}
          insideHeight={"70%"}
        />
        <div className="examples">
          <p style={{ border: "solid black" }}>
            Culpa qui minim irure excepteur ipsum consequat consequat culpa ex
            deserunt commodo. Sunt sunt minim veniam occaecat mollit est Lorem.
            Nostrud irure tempor Lorem proident incididunt aliqua voluptate.
            Amet magna ex irure cupidatat deserunt tempor aute. Incididunt quis
            proident laborum commodo commodo aliquip sit.
          </p>
          <p style={{ border: "solid black", padding: "50px" }}>
            Laboris cillum deserunt duis sunt aute. Occaecat nulla officia Lorem
            do nisi tempor commodo sunt irure qui reprehenderit aute proident
            nulla. Cillum mollit voluptate eiusmod irure enim dolore sunt non
            esse quis excepteur.
          </p>
          <p
            style={{
              border: "solid black",
              paddingLeft: "50px",
              paddingTop: "80px",
            }}
          >
            Et non velit magna magna enim aliquip. Id nisi laborum cillum veniam
            irure cupidatat magna id amet culpa fugiat veniam. Occaecat est
            labore consectetur et fugiat sint ea. Veniam occaecat cupidatat
            laboris ullamco.
          </p>
        </div>
        <hr></hr>
        <h2 id="border">Border</h2>
        <p>
          CSS allows you to define the appearance of each of the four horizontal
          and vertical borders of the elements. For each border you can set its
          width, its color and its style.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "/* This is just an example */\np {\n  border-top-width: 25px;\n  border-bottom-width: 15px;\n  border-left-width: 5px;\n  border-right-width: 30px;\n\n  border-top-color: yellow;\n  border-bottom-color: blue;\n  border-left-color: red;\n  border-right-color: green;\n\n  border-top-style: dotted;\n  border-bottom-style: solid;\n  border-left-style: double;\n  border-right-style: hidden;\n}"
          }
          containerHeight={"500px"}
          insideHeight={"78%"}
        />
        <div className="examples">
          <p style={{ border: "none" }}>none</p>
          <p style={{ border: "hidden" }}>hidden</p>
          <p style={{ border: "dotted green" }}>dotted</p>
          <p style={{ border: "solid black" }}>solid</p>
          <p style={{ border: "double red" }}>double</p>
          <p style={{ border: "groove blue" }}>groove</p>
          <p style={{ border: "ridge grey" }}>ridge</p>
          <p style={{ border: "inset purple" }}>inset</p>
          <p style={{ border: "outset black" }}>outset</p>
          <p
            style={{
              borderTop: "15px green solid",
              borderLeft: "black dotted 10px",
              borderBottom: "10px inset grey",
              borderRight: "10px double white",
            }}
          >
            combined
          </p>
        </div>
        <hr></hr>
        <h2 id="background">Background</h2>
        <p>
          CSS defines five properties to set the background of each element{" "}
          <strong>
            (background-color, background-image, background-repeat,
            background-attachment, background-position)
          </strong>{" "}
          and another "shorthand" property <strong>(background)</strong>.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"p { background-color: red; }"}
          containerHeight={"160px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <p style={{ backgroundColor: "red" }}></p>
        </div>
        <CodeContainer
          title={"CSS"}
          code={'p { background-image: url("images/rose-circle.png"); }'}
          containerHeight={"160px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <div className="image-div-example"></div>
        </div>
        <CodeContainer
          title={"CSS"}
          code={
            'p {\n  background-image: url("images/rose-circle.png");\n  background-repeate: repeat | repeat-x | repeat-y | no-repeat | inherit \n}'
          }
          containerHeight={"220px"}
          insideHeight={"45%"}
        />
        <div className="examples">
          <div className="image-div-example-1"></div>
          <div className="image-div-example-2"></div>
          <div className="image-div-example-3"></div>
          <div className="image-div-example-4"></div>
        </div>
        <p>
          The background-position property allows you to indicate the distance
          that the background image is moved from its original position located
          in the upper left corner.
          <br></br>
          <br></br>
          When percentages are used, their interpretation is not intuitive. If
          the value of the background-position property is indicated by two
          percentages x% y%, the browser places the point (x%, y%) of the
          background image at the point (x%, y%) of the element.
          <br></br>
          <br></br>
          The allowed keywords are equivalent to some significant percentages:
          top = 0%, left = 0%, center = 50%, bottom = 100%, right = 100%
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            'p {\n  background-image: url("images/rose-circle.png");\n  background-repeate: no-repeat;\n  background-position: bottom left \n}'
          }
          containerHeight={"220px"}
          insideHeight={"45%"}
        />
        <div className="examples">
          <p style={{ textAlign: "center" }}>
            background-position: bottom left;
          </p>
          <div className="image-div-example-5"></div>
          <p style={{ textAlign: "center" }}>background-position: top;</p>
          <div className="image-div-example-6"></div>
          <p style={{ textAlign: "center" }}>background-position: 50% 50%;</p>
          <div className="image-div-example-7"></div>
          <p style={{ textAlign: "center" }}>background-position: left;</p>
          <div className="image-div-example-8"></div>
        </div>
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssMeasureColors"}
          link2={"../../../pages/css_tutorials/quarter_01/CssText"}
          name1={"Measure, colors"}
          name2={"Text"}
        />
      </div>
    </div>
  );
}

export default CssBoxModelContent;
