import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";
import "./css/CssTutorialStyles.css";

function CssPositioningVisualContent() {
  return (
    <div className="main">
      <h1>CSS POSITIONING</h1>
      <div className="introduction">
        <p>
          When browsers download the HTML and CSS content of web pages, they
          apply very complex processing before displaying the pages on the
          user's screen.
        </p>
        <p>The factors that are taken into account to generate each box are:</p>
        <p>
          <ul>
            <li>
              The <strong>width and height</strong> properties of the box (if
              set).
            </li>
            <li>
              The type of each HTML element (block element or inline element).
            </li>
            <li>
              Box positioning (normal, relative, absolute, fixed or floating).
            </li>
            <li>
              The relationships between elements (where each element is found,
              descendant elements, etc.)
            </li>
            <li>
              Other types of information, such as the size of images and the
              size of the browser window.
            </li>
          </ul>
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <table>
          <tr>
            <td>
              <a href="#normal-positioning" className="links">normal-positioning</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#relative-positioning" className="links">relative-positioning</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#absolute-positioning" className="links">absolute-positioning</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#fixed-positioning" className="links">fixed-positioning</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#float-positioning" className="links">float-positioning</a>
            </td>
          </tr>
          
        </table>
        <hr></hr>
        <h2>Element Types</h2>
        <p>
          The HTML standard classifies all its elements into two large groups:
          <strong> inline elements and block elements</strong>.<br></br>
          <br></br>
          Block elements always start on a new line and take up all available
          space until the end of the line. On the other hand, the elements in
          line do not necessarily start on a new line and only occupy the space
          necessary to display their contents.
        </p>
        <div className="examples">
          <p style={{ border: "solid black" }}>
            Paragraphs are block elements.
          </p>
          <a href="#" style={{ border: "dotted red" }}>
            Links are inline elements.
          </a>
          <br></br>
          <p style={{ border: "solid black" }}>
            Inside a paragraph,{" "}
            <a href="#" style={{ border: "dotted red" }}>
              links
            </a>{" "}
            are still inline elements.
          </p>
        </div>
        <p>
          The inline elements defined by HTML are: a, abbr, acronym, b,
          basefont, bdo, big, br, cite, code, dfn, em, font, i, img, input, kbd,
          label, q, s, samp , select, small, span, strike, strong, sub, sup,
          textarea, tt, u, var.
          <br></br>
          <br></br>
          The block elements defined by HTML are: address, blockquote, center,
          dir, div, dl, fieldset, form, h1, h2, h3, h4, h5, h6, hr, isindex,
          menu, noframes, noscript, ol, p, pre, table, ul, dd, dt, frameset, li,
          tbody, td, tfoot, th, thead, tr.
          <br></br>
          <br></br>
          The following elements can be inline and block depending on the
          circumstances: button, del, iframe, ins, map, object, script.
        </p>
        <hr></hr>
        <h2>Positioning</h2>
        <p>
          Browsers automatically create and position all the boxes that make up
          each HTML page. However, CSS allows the designer to modify the
          position in which each box is displayed.
          <br></br>
          <br></br>
          Using the properties provided by CSS to alter the position of the
          boxes it is possible to perform very advanced effects and design page
          structures that would not otherwise be possible.
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>Normal or static positioning</strong>: This is the
              positioning used by browsers unless otherwise indicated.
            </li>
            <li>
              <strong>Relative positioning</strong>: Variant of normal
              positioning that consists of positioning a box according to normal
              positioning and then moving it from its original position.
            </li>
            <li>
              <strong>Absolute positioning</strong>: The position of a box is
              set absolutely with respect to its containing element, and other
              elements on the page ignore the new position of the element.
            </li>
            <li>
              <strong>Fixed positioning</strong>: Absolute positioning variant
              that converts a box into an immovable element, so that its
              position on the screen is always the same regardless of the rest
              of the elements and regardless of whether the user goes up or down
              the page in the browser window.
            </li>
          </ul>
          Normally, when a box is positioned it is also necessary to move it
          with respect to its original position or with respect to another
          coordinate origin. CSS defines fourproperties named{" "}
          <strong>top, right, bottom, and left</strong>.
        </p>
        <hr></hr>
        <h2 id="normal-positioning">Normal positioning</h2>
        <p>
          Normal or static positioning is the model that browsers use by default
          to display page elements. In this model, no box is displaced from its
          original position, so only whether the element is block or inline is
          taken into account.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"p { position: static; }"}
          containerHeight={"140px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <p style={{ border: "solid black", height: "100px" }}>
            Block element
          </p>
          <p style={{ border: "solid black", height: "80px" }}>Block element</p>
          <p style={{ border: "solid black", height: "150px" }}>
            Block element
          </p>
        </div>
        <p>
          If one element is inside another, the parent element is called a
          "container element" and determines both the position and size of all
          its inner boxes.
          <br></br>
          <br></br>
          The inline elements form the "inline formatting contexts". In this
          type of context, the boxes are displayed one after the other
          horizontally starting from the leftmost position of their containing
          element. The distance between the boxes is controlled by the side
          margins
        </p>
        <div className="examples">
          <div style={{ border: "solid black", height: "150px" }}>
            <p style={{ border: "dotted red", height: "20px" }}>
              block element.
            </p>
            <label style={{ border: "dotted red", width: "60%" }}>
              inline element
            </label>
            <label style={{ border: "dotted red", width: "30%" }}>
              inline element
            </label>
          </div>
          <div style={{ border: "solid black", height: "200px" }}></div>
        </div>
        <hr></hr>
        <h2 id="relative-positioning">Relative positioning</h2>
        <p>
          Relative positioning allows you to move a box from its original
          position established by normal positioning. The scrolling of the box
          is controlled by the top, right, bottom, and left properties.
          <br></br>
          <br></br>
          Moving one box does not affect other adjacent boxes, which are
          displayed in the same position as if the moved box had not been moved
          from its original position.
        </p>
        <CodeContainer
          title={"CSS"}
          code={".box-2 { position: relative; top: 20px; left: 80px; }"}
          containerHeight={"140px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <div style={{ border: "solid black" }}>
            <label style={{ border: "dotted red", width: "30%" }}>box 1</label>
            <label
              style={{
                border: "dotted green",
                width: "30%",
                position: "relative",
                top: "20px",
                left: "80px",
              }}
            >
              box 2
            </label>
            <label style={{ border: "dotted red", width: "30%" }}>box 3</label>
            <p style={{ border: "dotted red", width: "92%" }}>box 4</p>
          </div>
        </div>
        <hr></hr>
        <h2 id="absolute-positioning">Absolute positioning</h2>
        <p>
          Absolute positioning is used to precisely set the position in which an
          element's box is displayed. The new position of the box is indicated
          by the top, right, bottom, and left properties. The interpretation of
          the values ​​of these properties is much more complex than in relative
          positioning, since inIn this case, they depend on the positioning of
          the container element.
          <br></br>
          <br></br>
          When a box is positioned absolutely, the rest of the page elements
          ignore it and take the original place occupied by the positioned box.
          As with relative positioning, when a box is positioned absolutely it
          is likely that there will be overlaps with other boxes.
        </p>
        <CodeContainer
          title={"CSS"}
          code={".box-2 { position: absolute; right: 30px; }"}
          containerHeight={"140px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <div style={{ border: "solid black" }}>
            <label style={{ border: "dotted red", width: "30%" }}>box 1</label>
            <label
              style={{
                border: "dotted green",
                width: "50px",
                position: "absolute",
                right: "30px",
              }}
            >
              box 2
            </label>
            <label style={{ border: "dotted red", width: "30%" }}>box 3</label>
            <p style={{ border: "dotted red", width: "92%" }}>box 4</p>
          </div>
        </div>
        <hr></hr>
        <h2 id="fixed-positioning">Fixed positioning</h2>
        <p>
          The CSS standard considers that fixed positioning is a particular case
          of absolute positioning, since they only differ in the behavior of the
          positioned boxes.
          <br></br>
          <br></br>
          When a box is positioned in a fixed way, the way to obtain the origin
          of coordinates to interpret its displacement is identical to absolute
          positioning. In fact, if the user does not move the HTML page in the
          browser window, there is no difference between these two positioning
          models.
          <br></br>
          <br></br>
          The main characteristic of a fixed positioned box is that its position
          is immovable within the browser window. Fixed positioning means that
          the boxes do not change their position even if the user goes up or
          down the page in their browser window.
          <br></br>
          <br></br>
          An example of fixed positioning is what are watching on the bottom left of your screen.
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={"<div class=\"start-container\">\n  <a href=\"#\">\n    <img class=\"start-img\">\n  </a>\n</div>\n\n.start-container {\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  background-color: var(--background-color-header);\n  border: solid var(--font-color);\n  position: fixed;\n  left: 95%;\n  top: 90%\n}\n\n.start-container a {\n  width: 50px;\n  height: 50px;\n  display: block\n}\n\n.start-img {\n  color: var(--font-color);\n  width: 50px;\n  height: 50px;\n  position: relative;\n  left: 2px;\n}"}
          containerHeight={"770px"}
          insideHeight={"85%"}
        />
        <hr></hr>
        <h2 id="float-positioning">Float positioning</h2>
        <p></p>
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssTables"}
          link2={"../../../pages/Home"}
          name1={"Tables"}
          name2={"Home"}
        />
      </div>
    </div>
  );
}

export default CssPositioningVisualContent;
