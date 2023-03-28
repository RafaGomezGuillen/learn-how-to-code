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
              <a href="#normal-positioning" className="links">
                normal-positioning
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#relative-positioning" className="links">
                relative-positioning
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#absolute-positioning" className="links">
                absolute-positioning
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#fixed-positioning" className="links">
                fixed-positioning
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#float-positioning" className="links">
                float-positioning
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#display-visibility" className="links">
                display and visibility property
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#overflow" className="links">
                overflow property
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#z-index" className="links">
                z-index property
              </a>
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
          An example of fixed positioning is what are watching on the bottom
          left of your screen.
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            '<div class="start-container">\n  <a href="#">\n    <img class="start-img">\n  </a>\n</div>\n\n.start-container {\n  width: 60px;\n  height: 60px;\n  border-radius: 100%;\n  background-color: var(--background-color-header);\n  border: solid var(--font-color);\n  position: fixed;\n  left: 95%;\n  top: 90%\n}\n\n.start-container a {\n  width: 50px;\n  height: 50px;\n  display: block\n}\n\n.start-img {\n  color: var(--font-color);\n  width: 50px;\n  height: 50px;\n  position: relative;\n  left: 2px;\n}'
          }
          containerHeight={"770px"}
          insideHeight={"85%"}
        />
        <hr></hr>
        <h2 id="float-positioning">Float positioning</h2>
        <p>
          When a box is positioned using the floating positioning model, it
          automatically becomes a floating box, which means that it is moved to
          the leftmost or rightmost area of ​​its original position.
          <br></br>
          <br></br>
          <ul>
            <li>
              The box no longer belongs to the normal flow of the page, which
              means that the rest of the boxes occupy the place left by the
              floating box.
            </li>
            <li>
              The floating box is positioned as far to the left or right as
              possible of the position it was originally in.
            </li>
            <li>
              If a <strong>left</strong> value is indicated, the box moves to
              the leftmost point possible on that same line (if there is no
              space on that line, the box moves down one line and is displayed
              as far left as possible on that new line ). All other adjacent
              elements fit and flow around the floating box.
            </li>
            <li>
              The <strong>right</strong> value works identically, except that in
              this case, the box is moved to the right. The value{" "}
              <strong>none</strong> allows you to override floating positioning
              so that the element is displayed in its original position.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            '<div>\n  <p class="float">Box 1 with float</p>\n  <p>Box 2</p>\n  <p>Box 3</p>\n</div>\n\n/* First example */\ndiv {\n  border: solid black;\n}\n\ndiv p {\n  border: solid black;\n  width: 100px;\n  height: 100px\n}\n\n.float {\n  float: right\n}\n\n/* 2nd example */\np { float: left; }\n\n/* 3rd example */\np { float: right; }'
          }
          containerHeight={"690px"}
          insideHeight={"83%"}
        />
        <div className="examples">
          <p style={{ textAlign: "center" }}>
            If you are on the mobile version, it is preferable to put it in a
            horizontal position.{" "}
          </p>
          <div style={{ border: "solid black" }}>
            <p
              style={{ border: "solid black", width: "100px", height: "100px" }}
            >
              Box 1
            </p>
            <p
              style={{ border: "solid black", width: "100px", height: "100px" }}
            >
              Box 2
            </p>
            <p
              style={{ border: "solid black", width: "100px", height: "100px" }}
            >
              Box 3
            </p>
          </div>
          <div style={{ border: "solid black" }}>
            <p
              style={{
                border: "solid black",
                width: "100px",
                height: "100px",
                float: "right",
              }}
            >
              Box 1 with float
            </p>
            <p
              style={{ border: "solid black", width: "100px", height: "100px" }}
            >
              Box 2
            </p>
            <p
              style={{ border: "solid black", width: "100px", height: "100px" }}
            >
              Box 3
            </p>
          </div>
          <div style={{ border: "solid black", height: "130px" }}>
            <p
              style={{
                border: "solid black",
                width: "100px",
                height: "100px",
                float: "left",
              }}
            >
              Box 1. float left
            </p>
            <p
              style={{
                border: "solid black",
                width: "100px",
                height: "100px",
                float: "left",
              }}
            >
              Box 2. float left
            </p>
            <p
              style={{
                border: "solid black",
                width: "100px",
                height: "100px",
                float: "left",
              }}
            >
              Box 3. float left
            </p>
          </div>
          <div style={{ border: "solid black", height: "130px" }}>
            <p
              style={{
                border: "solid black",
                width: "100px",
                height: "100px",
                float: "right",
              }}
            >
              Box 1. float right
            </p>
            <p
              style={{
                border: "solid black",
                width: "100px",
                height: "100px",
                float: "right",
              }}
            >
              Box 2. float right
            </p>
            <p
              style={{
                border: "solid black",
                width: "100px",
                height: "100px",
                float: "right",
              }}
            >
              Box 3. float right
            </p>
          </div>
        </div>
        <hr></hr>
        <h2 id="display-visibility">Display and visibility property</h2>
        <p>
          The <strong>display</strong> property allows you to completely hide an
          element by making it disappear from the page. Since the hidden element
          is not displayed, the other elements on the page are moved to take its
          place.
          <br></br>
          <br></br>
          On the other hand, the <strong>visibility</strong> property allows you
          to make an element invisible, which means that the browser creates the
          element's box but does not show it. In this case, the rest of the
          elements on the page do not change their position, since although the
          box is not visible, it continues to occupy space.
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            '<table>\n  <tr>\n    <td>1</td>\n    <td>2</td>\n    <td>3</td>\n </tr>\n  <tr>\n    <td>4</td>\n    <td class="box">5</td>\n    <td>6</td>\n </tr>\n  <tr>\n    <td>7</td>\n    <td>8</td>\n    <td>9</td>\n </tr>\n</table>\n\n/* 1st example */\n.box { display: none; }\n\n/* 2nd example */\n.box { visibilty: hidden; }'
          }
          containerHeight={"610px"}
          insideHeight={"81%"}
        />
        <div className="examples">
          <br></br>
          <table>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>5 = display: none</p>
          <table>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{ display: "none" }}>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>5 = visibility: hidden</p>
          <table>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4</td>
              <td style={{ visibility: "hidden" }}>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2 id="overflow">Overflow property</h2>
        <p>
          CSS defines the overflow property to control the way in which the
          contents that overflow from your elements are displayed.
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>visible</strong>: the content is not cut off and is
              displayed over hanging the area reserved for displaying the
              element. This is the default behavior.
            </li>
            <li>
              <strong>hidden</strong>: the excess content is hidden and only the
              part of the content that fits within the area reserved for the
              element is displayed.
            </li>
            <li>
              <strong>scroll</strong>: only the content that fits within the
              area reserved for the element is displayed, but scroll bars are
              also displayed that allow the rest of the content to be viewed.
            </li>
            <li>
              <strong>auto</strong>: the behavior depends on the browser,
              although it is usually the same as the scroll property.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            "/* 1st example */\np { overflow: visible; }\n\n/* 2nd example */\np { overflow: hidden; }\n\n/* 3rd example */\np { overflow: scroll; }"
          }
          containerHeight={"300px"}
          insideHeight={"62%"}
        />
        <div className="examples">
          <p
            style={{
              border: "solid black",
              width: "200px",
              height: "200px",
              overflow: "visible",
            }}
          >
            <strong>overflow: visible</strong>
            <br></br>Id nulla deserunt sit deserunt Commodo duis irure commodo
            eu et dolor in duis velit occaecat et in velit tempor nulla deserunt
            sit.
          </p>
          <p
            style={{
              border: "solid black",
              width: "200px",
              height: "200px",
              overflow: "hidden",
            }}
          >
            <strong>overflow: hidden</strong>
            <br></br>Id nulla deserunt sit deserunt Commodo duis irure commodo
            eu et dolor in duis velit occaecat et in velit tempor nulla deserunt
            sit.
          </p>
          <p
            style={{
              border: "solid black",
              width: "200px",
              height: "200px",
              overflow: "scroll",
            }}
          >
            <strong>overflow: scroll</strong>
            <br></br>Id nulla deserunt sit deserunt Commodo duis irure commodo
            eu et dolor in duis velit occaecat et in velit tempor nulla deserunt
            sit.
          </p>
        </div>
        <hr></hr>
        <h2 id="z-index">z-index property</h2>
        <p>
          The three-dimensional position of an element is set on a third axis
          called Z and is controlled by the z-index property. Using this
          property it is possible to create complex pages with several levels or
          layers.
          <br></br>
          <br></br>
          The most common value of the z-index property is an integer. Although
          the official specification allows negative numbers, the number 0 is
          generally considered the lowest level.
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={'<p class="p-1"></p>\n<p class="p-2"></p>\n<p class="p-3"></p>\n\np {\n  border: solid black;\n  width: 250px;\n  height: 200px;\n  position: relative;\n}\n\n.p-1 {\n  background-color: yellow;\n  z-index: 1;\n}\n\n.p-2 {\n  z-index: 2;\n  bottom: 180px;\n  left: 20px;\n  background-color: blue;\n}\n\n.p-3 {\n  z-index: 3;\n  bottom: 340px;\n  left: 40px;\n  background-color: red;\n}'}
          containerHeight={"740px"}
          insideHeight={"85%"}
        />
        <div className="examples" style={{ height: "305px" }}>
          <p
            style={{
              border: "solid black",
              width: "250px",
              height: "200px",
              zIndex: "0",
              backgroundColor: "yellow",
            }}
          ></p>
          <p
            style={{
              border: "solid black",
              width: "250px",
              height: "200px",
              zIndex: "1",
              position: "relative",
              bottom: "180px",
              left: "20px",
              backgroundColor: "blue",
            }}
          ></p>
          <p
            style={{
              border: "solid black",
              width: "250px",
              height: "200px",
              zIndex: "2",
              position: "relative",
              bottom: "340px",
              left: "40px",
              backgroundColor: "red",
            }}
          ></p>
        </div>
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
