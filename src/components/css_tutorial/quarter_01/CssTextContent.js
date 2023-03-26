import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";
import "./css/CssTutorialStyles.css"

function CssTextContent() {
  return (
    <div className="main">
      <h1>CSS TEXT</h1>
      <div className="introduction">
        <p>
          CSS defines numerous properties to modify the appearance of text.
          Although it does not have as many possibilities as specific languages
          ​​and programs to create printed documents, CSS allows you to apply
          complex and very varied styles to the text of web pages.
        </p>
        <p>
          In addition to the properties related to the typography of the text,
          CSS defines numerous properties that determine the appearance of the
          text as a whole. These additional properties allow you to control text
          alignment, line spacing, word spacing, etc.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <table>
          <tr>
            <td>
              <a href="#color" className="links">
                Color
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#font-family" className="links">
                Font-family
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#font-size" className="links">
                Font-size
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#font-weight" className="links">
                Font-weight
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#font-style" className="links">
                Font-style
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#font" className="links">
                Font
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#text-align" className="links">
                Text-align
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#font-weight" className="links">
                Font-weight
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#line-height" className="links">
                Line-height
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#letter-word-spacing" className="links">
                Letter and word spacing
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#white-space" className="links">
                White-space
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#pseudo" className="links">
                :first-line & :first-letter
              </a>
            </td>
          </tr>
        </table>
        <hr></hr>
        <h2 id="color">Color</h2>
        <p>
          The basic property that CSS defines related to typography is called
          color, and it is used to set the color of the font.
          <br></br>
          <br></br>
          Although the default text color is browser dependent, all major
          browsers use the color black. To set the font color of a text, you can
          use any of the five ways that CSS includes to define a color.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "h1 { color: #369; }\n\np { color: black; }\n\na, span { color: #B1251E; }\n\ndiv { color: rgb(71, 98, 176); }"
          }
          containerHeight={"280px"}
          insideHeight={"61%"}
        />
        <div className="examples">
          <h1 style={{ color: "#369" }}>Text 1</h1>
          <p style={{ color: "black" }}>Text 2</p>
          <a>
            <span style={{ color: "#B1251E" }}>Text 3</span>
          </a>
          <br></br>
          <br></br>
          <div style={{ color: "rgb(71, 98, 176)" }}>Text 4</div>
        </div>
        <hr></hr>
        <h2 id="font-family">Font-family</h2>
        <p>
          The other basic property that defines CSS related to typography is
          called font-family and it is used to indicate the typeface with which
          the text is displayed.
          <br></br>
          <br></br>
          Browsers display the text of web pages using the fonts installed on
          the user's own computer or device. This way, if the designer indicates
          in the font-family property that the text should be displayed in a
          particularly rare or fancy font, almost no user will have that font.
          <br></br>
          <br></br>
          To avoid the common problem that the user does not have the font that
          the designer wants to use installed, CSS allows you to specify more
          than one typeface in the font-family property. The browser will first
          try the first indicated font. If the user has it installed, the text
          is displayed with that font.
          <br></br>
          <br></br>
          If the user does not have the first font indicated, the browser will
          try the rest of the fonts until it finds a font that is installed on
          the user's computer. Obviously, the designer cannot indicate for each
          font-family property as many fonts as there are possible similar
          fonts.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            'body { font-family: Arial, Helvetica, sans-serif; }\n\nbody { font-family: "Times New Roman", Times, serif; }\n\nbody { font-family: "Courier New", Courier, monospace; }\n\nbody { font-family: Georgia, "Times New Roman", Times, serif; }'
          }
          containerHeight={"280px"}
          insideHeight={"61%"}
        />
        <div className="examples">
          <p style={{ fontFamily: "Arial" }}>Text 1</p>
          <p style={{ fontFamily: "Times New Roman" }}>Text 2</p>
          <p style={{ fontFamily: "Courier New" }}>Text 3</p>
          <p style={{ fontFamily: "Georgia" }}>Text 4</p>
        </div>
        <hr></hr>
        <h2 id="font-size">Font-size</h2>
        <p>
          Once the font is selected, its size can be changed using the font-size
          property.
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>absolute_size</strong>: indicates the font size in
              absolute terms using one of the following keywords: xx-small,
              x-small, small, medium, large, x-large, xx-large.
            </li>
            <li>
              <strong>relative_size</strong>: indicates the relative font size
              of the text using two keywords (larger, smaller) that take the
              parent element's font size as a reference.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "p { font-size: xx-large; }\n\np { font-size: 3em; }\n\np { font-size: 300%; }\n\np { font-size: 48px; }"
          }
          containerHeight={"280px"}
          insideHeight={"61%"}
        />
        <div className="examples">
          <div style={{ border: "solid black" }}>
            <ul>
              <li style={{ fontSize: "xx-small" }}>xx-small</li>
              <li style={{ fontSize: "x-small" }}>x-small</li>
              <li style={{ fontSize: "small" }}>x-small</li>
              <li style={{ fontSize: "medium" }}>medium</li>
              <li style={{ fontSize: "x-large" }}>x-large</li>
              <li style={{ fontSize: "xx-large" }}>xx-large</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul>
              <li style={{ fontSize: ".5em" }}>.5em</li>
              <li style={{ fontSize: ".7em" }}>.7em</li>
              <li style={{ fontSize: ".9em" }}>.9em</li>
              <li style={{ fontSize: "1em" }}>1em</li>
              <li style={{ fontSize: "2em" }}>2em</li>
              <li style={{ fontSize: "3em" }}>3em</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul>
              <li style={{ fontSize: "50%" }}>50%</li>
              <li style={{ fontSize: "70%" }}>70%</li>
              <li style={{ fontSize: "90%" }}>90%</li>
              <li style={{ fontSize: "100%" }}>100%</li>
              <li style={{ fontSize: "150%" }}>150%</li>
              <li style={{ fontSize: "200%" }}>200%</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul>
              <li style={{ fontSize: "9px" }}>9px</li>
              <li style={{ fontSize: "12px" }}>12px</li>
              <li style={{ fontSize: "14px" }}>14px</li>
              <li style={{ fontSize: "18px" }}>18px</li>
              <li style={{ fontSize: "24px" }}>24px</li>
              <li style={{ fontSize: "36px" }}>36px</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <h2 id="font-weight">Font-weight</h2>
        <p>
          Once the font type and size have been indicated, it is usual to modify
          other characteristics such as its thickness (bold text) and its style
          (italic text). The property that controls the width of the font is
          font-weight.
          <br></br>
          <br></br>
          The values ​​that are normally used are normal (the default value) and
          bold for bold text. The normal value equals the numeric value 400 and
          the bold value equals the numeric value 700.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "p { font-weight: bold; }\n\np { font-weight: bolder; }\n\np { font-weight: lighter; }\n\np { font-weight: 700; }"
          }
          containerHeight={"280px"}
          insideHeight={"61%"}
        />
        <div className="examples">
          <ul>
            <li style={{ fontWeight: "bold" }}>bold</li>
            <li style={{ fontWeight: "bolder" }}>bolder</li>
            <li style={{ fontWeight: "lighter" }}>lighter</li>
            <li style={{ fontWeight: "700" }}>700</li>
          </ul>
        </div>
        <hr></hr>
        <h2 id="font-style">Font-style</h2>
        <p>
          In addition to the width of the letter, CSS allows you to vary its
          style through the font-style property.
          <br></br>
          <br></br>
          Normally the font-style property is used to display text in italics
          using the italic value.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"p { font-style: normal; }\n\np { font-style: italic; }"}
          containerHeight={"200px"}
          insideHeight={"45%"}
        />
        <div className="examples">
          <p style={{ fontStyle: "normal" }}>
            Normal: Adipisicing labore anim excepteur nisi officia nulla elit.
          </p>
          <p style={{ fontStyle: "italic" }}>
            Italic: Consectetur amet incididunt excepteur eiusmod exercitation
            ea cupidatat cupidatat pariatur commodo laborum commodo.
          </p>
        </div>
        <hr></hr>
        <h2 id="font">Font</h2>
        <p>
          On the other hand, CSS provides a "shorthand" property called font,
          which allows you to directly indicate some or all of the font
          properties of a text.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            'p { font: normal 24px/26px "Century Gothic","Trebuchet MS", Arial, Helvetica, sans-serif; }'
          }
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <p
            style={{
              font: 'normal 24px/26px "Century Gothic","Trebuchet MS", Arial, Helvetica, sans-serif',
            }}
          >
            Exercitation labore cupidatat deserunt magna dolor excepteur elit do
            nulla nulla excepteur exercitation commodo anim.
          </p>
        </div>
        <hr></hr>
        <h2 id="text-align">Text-align</h2>
        <p>
          The property that defines the alignment of the text is called
          text-align.
          <br></br>
          <br></br>
          The values ​​defined by CSS allow you to align the text according to
          the traditional values: to the left (left), to the right (right),
          centered (center) and justified (justify).
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "p { text-align: left; }\n\np { text-align: right; }\n\np { text-align: center; }\n\np { text-align: justify; }"
          }
          containerHeight={"280px"}
          insideHeight={"61%"}
        />
        <div className="examples">
          <p style={{ textAlign: "left", border: "solid black" }}>
            Left: Voluptate incididunt deserunt dolor ut ipsum nulla
            reprehenderit duis esse id dolore.
          </p>
          <p style={{ textAlign: "right", border: "solid black" }}>
            Right: Tempor cillum consectetur cillum officia nisi nostrud
            proident eu ullamco nostrud laborum.
          </p>
          <p style={{ textAlign: "center", border: "solid black" }}>
            Center: Mollit sit dolor irure non aliquip.
          </p>
          <p style={{ textAlign: "justify", border: "solid black" }}>
            Justify: Qui exercitation adipisicing tempor nulla sunt occaecat
            amet culpa officia fugiat exercitation irure.
          </p>
        </div>
        <hr></hr>
        <h2 id="line-height">Line-height</h2>
        <p>
          The line spacing of a text is controlled by the line-height property,
          which allows you to control the height occupied by each line of text.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "p { line-height: 1.2em; }\n\np { line-height: 1.5em; }\n\np { line-height: 2em; }"
          }
          containerHeight={"240px"}
          insideHeight={"55%"}
        />
        <div className="examples">
          <p style={{ lineHeight: "1.2em", border: "solid black" }}>
            Consectetur est amet excepteur duis quis irure minim ad nulla in.
            Cupidatat laboris anim ullamco ullamco labore esse cillum deserunt
            enim cupidatat. Anim exercitation aute ea reprehenderit. In enim
            ullamco velit occaecat ipsum. Do aute ullamco enim enim in
            adipisicing eiusmod labore occaecat incididunt consequat laborum
            eiusmod. Est id veniam consequat eiusmod voluptate anim enim eu.
          </p>
          <p style={{ lineHeight: "1.5em", border: "solid black" }}>
            Minim nostrud aute dolore tempor veniam ipsum ea consectetur ipsum
            proident eiusmod cupidatat laborum. Laborum laboris exercitation
            esse cillum adipisicing nulla. Tempor mollit non consectetur laborum
            voluptate ea fugiat. Quis duis culpa sunt quis laboris occaecat
            tempor ut.
          </p>
          <p style={{ lineHeight: "2em", border: "solid black" }}>
            Fugiat magna pariatur sunt exercitation excepteur laboris. Enim
            nulla duis ex eiusmod sint ipsum. Eu mollit aute eu Lorem labore
            aliqua proident. Cupidatat cillum ex minim ullamco minim cupidatat
            aute ex fugiat sunt quis dolore et. Eiusmod commodo anim culpa ex.
            Ex consequat adipisicing incididunt adipisicing amet elit consequat.
          </p>
        </div>
        <hr></hr>
        <h2 id="text-decoration">Text-decoration</h2>
        <p>
          In addition to the decoration that can be applied to the typography
          used by the texts, CSS defines other styles and decorations for the
          text as a whole. The property that decorates the text is called
          text-decoration.
          <br></br>
          <br></br>
          The <strong>underline</strong> value underlines the text, so it can
          confuse users into thinking it's a link. The <strong>overline</strong>{" "}
          value adds a line at the top of the text, a feature that is rarely
          desirable. The <strong>line-through</strong> value displays strike
          through text with a solid line, so it's not very common either.
          Finally, the <strong>blink</strong> value displays the blinking text
          and it is recommended to avoid its use due to the inconvenience it
          generates for most users.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "p { text-decoration: underline; }\n\np { text-decoration: overline; }\n\np { text-decoration: line-through; }\n\np { text-decoration: blink; }"
          }
          containerHeight={"280px"}
          insideHeight={"61%"}
        />
        <div className="examples">
          <p style={{ textDecoration: "underline", border: "solid black" }}>
            Sit ipsum sint mollit pariatur sint esse.
          </p>
          <p style={{ textDecoration: "overline", border: "solid black" }}>
            Excepteur dolore officia culpa dolore tempor quis quis sint.
          </p>
          <p style={{ textDecoration: "line-through", border: "solid black" }}>
            Duis sint cillum do adipisicing et commodo elit.
          </p>
        </div>
        <hr></hr>
        <h2 id="text-transform">Text-transform</h2>
        <p>
          One of the lesser-known CSS properties that can be very useful in some
          circumstances is the text-transform property, which can substantially
          change the appearance of the text.
          <br></br>
          <br></br>
          The text-transform property allows you to display the original text
          transformed into text in full <strong>uppercase</strong>, in
          <strong> lowercase</strong> or with the first letter of each word in
          uppercase
          <strong> (capitalize)</strong>.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "p { text-transform: capitalize; }\n\np { text-transform: lowercase; }\n\np { text-transform: uppercase; }"
          }
          containerHeight={"240px"}
          insideHeight={"55%"}
        />
        <div className="examples">
          <p style={{ border: "solid black" }}>
            Original: Duis elit ex ut pariatur fugiat nostrud non nostrud
            ullamco elit ullamco fugiat nulla commodo. Qui amet dolore enim sint
            anim occaecat excepteur voluptate. Ea eu Lorem cupidatat quis ex
            commodo anim do amet sit nisi. Amet laboris esse ullamco minim
            mollit eiusmod.
          </p>
          <p style={{ textTransform: "capitalize", border: "solid black" }}>
            Capitalize: Duis elit ex ut pariatur fugiat nostrud non nostrud
            ullamco elit ullamco fugiat nulla commodo. Qui amet dolore enim sint
            anim occaecat excepteur voluptate. Ea eu Lorem cupidatat quis ex
            commodo anim do amet sit nisi. Amet laboris esse ullamco minim
            mollit eiusmod.
          </p>
          <p style={{ textTransform: "lowercase", border: "solid black" }}>
            Lowercase: Duis elit ex ut pariatur fugiat nostrud non nostrud
            ullamco elit ullamco fugiat nulla commodo. Qui amet dolore enim sint
            anim occaecat excepteur voluptate. Ea eu Lorem cupidatat quis ex
            commodo anim do amet sit nisi. Amet laboris esse ullamco minim
            mollit eiusmod.
          </p>
          <p style={{ textTransform: "uppercase", border: "solid black" }}>
            Uppercase: Duis elit ex ut pariatur fugiat nostrud non nostrud
            ullamco elit ullamco fugiat nulla commodo. Qui amet dolore enim sint
            anim occaecat excepteur voluptate. Ea eu Lorem cupidatat quis ex
            commodo anim do amet sit nisi. Amet laboris esse ullamco minim
            mollit eiusmod.
          </p>
        </div>
        <hr></hr>
        <h2 id="text-incident">Text-incident</h2>
        <p>
          In many print publications, it is customary to tabulate the first line
          of each paragraph to make it easier to read. CSS allows you to control
          this tab through the text-indent property.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"p { text-incident: 0em; }\n\np { text-transform: 2em; }"}
          containerHeight={"200px"}
          insideHeight={"45%"}
        />
        <div className="examples">
          <p style={{ textIndent: "0em", border: "solid black" }}>
            0 em: Duis elit ex ut pariatur fugiat nostrud non nostrud ullamco
            elit ullamco fugiat nulla commodo. Qui amet dolore enim sint anim
            occaecat excepteur voluptate. Ea eu Lorem cupidatat quis ex commodo
            anim do amet sit nisi. Amet laboris esse ullamco minim mollit
            eiusmod.
          </p>
          <p style={{ textIndent: "2em", border: "solid black" }}>
            2em: Duis elit ex ut pariatur fugiat nostrud non nostrud ullamco
            elit ullamco fugiat nulla commodo. Qui amet dolore enim sint anim
            occaecat excepteur voluptate. Ea eu Lorem cupidatat quis ex commodo
            anim do amet sit nisi. Amet laboris esse ullamco minim mollit
            eiusmod.
          </p>
          <p style={{ textIndent: "4em", border: "solid black" }}>
            4em: Duis elit ex ut pariatur fugiat nostrud non nostrud ullamco
            elit ullamco fugiat nulla commodo. Qui amet dolore enim sint anim
            occaecat excepteur voluptate. Ea eu Lorem cupidatat quis ex commodo
            anim do amet sit nisi. Amet laboris esse ullamco minim mollit
            eiusmod.
          </p>
        </div>
        <hr></hr>
        <h2 id="letter-word-spacing">Letter and word spacing</h2>
        <p>
          CSS also allows you to control the spacing between the letters that
          make up the words and the spacing between the words that make up the
          texts. The property that controls the spacing between letters is
          called letter-spacing and the spacing between words is controlled by
          word-spacing.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"p {\n  letter-spacing: 4em;\n  word-spacing: 3em; \n}"}
          containerHeight={"220px"}
          insideHeight={"48%"}
        />
        <div className="examples">
          <p style={{ border: "solid black" }}>
            Original: Laboris dolor et voluptate Lorem voluptate tempor
            consectetur.
          </p>
          <p
            style={{
              border: "solid black",
              letterSpacing: "1em",
              wordSpacing: "1em",
            }}
          >
            Laboris dolor et voluptate Lorem voluptate tempor.
          </p>
        </div>
        <hr></hr>
        <h2 id="white-space">White-space</h2>
        <p>
          CSS also allows you to control the treatment of whitespace in text
          using the white-space property.
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>pre</strong>: Whitespace and newlines are respected
              (exactly the same as the &lt;pre&gt; tag). If the line is too
              long, it goes out of the space allocated for that content.
            </li>
            <li>
              <strong>nowrap</strong>: Removes whitespace and new lines. If the
              line is too long, it goes out of the space allocated for that
              content
            </li>
            <li>
              <strong>pre-wrap</strong>: Whitespace and new lines are respected,
              but wrapping each line to the space allotted for that content
            </li>
            <li>
              <strong>pre-line</strong>: Removes whitespace and honors newlines,
              but wrapping each line to the space allotted for that content.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "p { white-space: pre; }\n\np { white-space: nowrap; }\n\np { white-space: pre-wrap; }\n\np { white-space: pre-line; }"
          }
          containerHeight={"280px"}
          insideHeight={"60%"}
        />
        <div className="examples">
          <p
            style={{ border: "solid black", width: "100px", whiteSpace: "pre" }}
          >
            Pre: Magna commodo dolore cillum.
          </p>
          <p
            style={{
              border: "solid black",
              width: "100px",
              whiteSpace: "pre-wrap",
            }}
          >
            Pre-wrap: Magna commodo dolore cillum.
          </p>
          <p
            style={{
              border: "solid black",
              width: "100px",
              whiteSpace: "nowrap",
            }}
          >
            Nowrap: Magna commodo dolore.
          </p>
          <p
            style={{
              border: "solid black",
              width: "100px",
              whiteSpace: "pre-line",
            }}
          >
            Pre-line: Magna commodo dolore Est nulla veniam nulla cupidatat ut
            dolor proident mollit cillum nostrud..
          </p>
        </div>
        <hr></hr>
        <h2 id="pseudo">:first-line & :first-letter</h2>
        <p>
          The :first-line pseudo-element allows you to apply styles to the first
          line of text. The words that form the first line of a text depend on
          the space reserved to display the text or the size of the browser
          window, so CSS automatically calculates the words that form the first
          line of text in each moment.
          <br></br>
          <br></br>
          On the other hand, the :first-letter pseudo-element allows you to
          create a capital letter on the first line.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "p:first-line { text-transform: uppercase; }\n\np:first-letter { font-size: 2em; }"
          }
          containerHeight={"190px"}
          insideHeight={"45%"}
        />
        <div className="examples">
          <p style={{ border: "solid black" }} className="examples-pseudo-1">
            Sint dolore qui nulla occaecat eu. Eu mollit elit nisi irure.
            Voluptate in commodo sit excepteur. Aliqua aliqua amet occaecat sit
            occaecat. Aliquip nulla nostrud eu aliquip quis irure reprehenderit
            consequat commodo. Deserunt ea enim enim Lorem.
          </p>
          <p style={{ border: "solid black" }} className="examples-pseudo-2">
            Sint dolore qui nulla occaecat eu. Eu mollit elit nisi irure.
            Voluptate in commodo sit excepteur. Aliqua aliqua amet occaecat sit
            occaecat. Aliquip nulla nostrud eu aliquip quis irure reprehenderit
            consequat commodo. Deserunt ea enim enim Lorem.
          </p>
        </div>
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssMeasureColors"}
          link2={"../../../pages/css_tutorials/quarter_01/CssLinks"}
          name1={"Measure, colors"}
          name2={"Links"}
        />
      </div>
    </div>
  );
}

export default CssTextContent;
