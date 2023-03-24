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
        <h2>Measurement units</h2>
        <p>
          Measurements in CSS are used, among others, to define the height,
          width and margins of the elements and to set the font size of the
          text. All measurements are indicated as an integer or decimal numeric
          value followed by a unit of measure.
          <br></br>
          <br></br>
          CSS divides units of measurement into two groups:{" "}
          <strong>absolute and relative</strong>. Relative measures define their
          value in relation to another measure, so to obtain its real value,
          some operation must be performed with the indicated value. Absolute
          units completely establish the value of a measurement, so its real
          value is directly the value indicated.
          <br></br>
          <br></br>
          The default value of the measurements is 0.
        </p>
        <hr></hr>
        <h2>Relative measure</h2>
        <p>
          Relative units are more flexible than absolute units because they
          adapt more easily to different media.
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>em</strong>: relative to the font size used. Although not
              an exact definition, the value of 1em can be approximated by the
              width of the letter M ("capital em") of the typeface and size
              being used.
            </li>
            <li>
              <strong>ex</strong>: relative to the height of the letter x
              ("small X") of the font type and size being used.
            </li>
            <li>
              <strong>px</strong>: (pixel) relative to the user's screen
              resolution.
            </li>
          </ul>
        </p>
        <div className="examples">
          <p style={{ fontSize: "1em" }}>
            font-size: 1em. Sunt occaecat irure commodo commodo enim elit.
          </p>
          <p style={{ fontSize: "1.2em" }}>
            font-size: 1.2em. Fugiat voluptate dolor voluptate dolor amet
            occaecat quis ut.
          </p>
          <p style={{ fontSize: "2.3em" }}>
            font-size: 2.3em. Enim quis consequat ad id nostrud.
          </p>
        </div>
        <CodeContainer
          title={"CSS"}
          code={
            "/* Examples */\np { font-size: 10px; }\np { font-size: 10em; }\np { font-size: 10ex; }"
          }
          containerHeight={"230px"}
          insideHeight={"47%"}
        />
        <hr></hr>
        <h2>Absolute measure</h2>
        <p>
          The absolute units define the measurements completely, since their
          real values ​​are not calculated from another reference value, but are
          directly the indicated values.
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>in</strong>: from English "inches", inches (1 inch is 2.54
              centimeters).
            </li>
            <li>
              <strong>cm</strong>: centimeters.
            </li>
            <li>
              <trong>mm</trong>: milimetres.
            </li>
            <li>
              <strong>pt</strong>: points (1 point equals 1 inch/72, that is,
              about 0.35 millimeters).
            </li>
            <li>
              <strong>pc</strong>: picas (1 pica equals 12 points, that is,
              about 4.23 millimeters).
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "/* Examples */\nbody { margin: 0.5in; }\nh1 { line-height: 2cm; }\np { word-spacing: 4mm; }\na { font-size: 12pt }\nspan { font-size: 1pc; }"
          }
          containerHeight={"260px"}
          insideHeight={"55%"}
        />
        <hr></hr>
        <h2>Percentages</h2>
        <p>
          CSS defines another relative unit of measurement based on percentages.
          A percentage is made up of a numerical value followed by the % symbol
          and is always referenced to another measure.
          <br></br>
          <br></br>
          In the following example, the reference of the value 80% is the width
          of its parent element. Therefore, the &lt;div&gt; element whose class
          attribute is equal to main has a width of 80% x 600px = 480px.
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            'div#content {\n  width: 600px;\n  border: solid red;\n}\n\ndiv.principal {\n  width: 80%;\n  border: solid blue;\n}\n\n<div id="content">\n  <div class="principal">\n    <p>Hello world</p>\n  </div>\n</div>'
          }
          containerHeight={"450px"}
          insideHeight={"75%"}
        />
        <div className="examples">
          <div id="content" style={{ width: "200px", border: "solid red" }}>
            <div
              class="principal"
              style={{ width: "80%", border: "solid blue" }}
            >
              <p>Hello world</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <h2>Recommendations</h2>
        <p>
          In general, using relative units is recommended whenever possible, as
          it improves page accessibility and allows documents to easily adapt to
          any medium and device.
          <br></br>
          <br></br>
          The document{" "}
          <a href="http://www.w3.org/TR/WCAG10-CSS-TECHS/" className="links">
            "Recommendations on CSS techniques to improve the accessibility of
            HTML content"
          </a>{" "}
          prepared by the W3C organization, recommends the use of the unit "em"
          to indicate the size of the text and for all possible measurements.
          <br></br>
          <br></br>
          Normally, pixels and percentages are used to define the layout of the
          document (basically, the width of the columns and elements of the
          pages) and em and percentages for the font size of the texts.
          <br></br>
          <br></br>
          On the other hand, one of the common problems when using relative
          units is the "text is getting smaller" or "text is getting bigger"
          problem. The following example shows the first case:
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            "div {\n  font-size: 0.9em;\n  border: dotted grey; \n}\n\n<div>\n  <p>Text 1</p>\n  <div>\n    <p>Text 2</p>\n    <div>\n      <p>Text 3</p>\n    </div>\n  </div>\n</div>"
          }
          containerHeight={"420px"}
          insideHeight={"75%"}
        />
        <div className="examples">
          <div style={{ fontSize: "0.9em", border: "dotted grey" }}>
            <p>Text 1</p>
            <div style={{ fontSize: "0.9em", border: "dotted grey" }}>
              <p>Text 2</p>
              <div style={{ fontSize: "0.9em", border: "dotted grey" }}>
                <p>Text 3</p>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <h2>Colors</h2>
        <p>
          Colors in CSS can be specified in five different ways: keywords,
          system colors, hex RGB, numeric RGB, and percentage RGB. Although the
          most common method is hexadecimal RGB, below are all the alternatives
          that CSS offers.
          <br></br>
          <br></br>
          CSS defines 17 keywords to refer to the basic colors. The words
          correspond to the English name of each color:
          <br></br>
          <br></br>
          <ul>
            <li>
              aqua, black, blue, fuchsia, gray, green, lime, maroon, navy,
              olive, orange, purple, red, silver, teal, white, yellow.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "/* Decimal RGB */\np { color: rgb(71, 98, 176); }\n\n/* Percentage RGB */\np { color: rgb(27%, 38%, 69%); }\n\n/* Hexadecimal RGB */\np { color: #4762B0; }"
          }
          containerHeight={"300px"}
          insideHeight={"65%"}
        />
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssSelectors"}
          link2={"../../../pages/css_tutorials/quarter_01/CssText"}
          name1={"Selectors"}
          name2={"Text"}
        />
      </div>
    </div>
  );
}

export default CssMeasureColorsContent;
