import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";

function CssIntroductionContent() {
  return (
    <div className="main">
      <h1>CSS INTRODUCTION</h1>
      <div className="introduction">
        <p>
          CSS is a style sheet language created to control the appearance or
          presentation of electronic documents defined with HTML.
        </p>
        <p>
          CSS is the best way to separate content and presentation and is
          essential for creating complex web pages.
        </p>
        <p>
          Once the contents are created, the CSS language is used to define the
          appearance of each element: color, size and font of the text,
          horizontal and vertical separation between elements, position of each
          element within the page, etc.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>CSS History</h2>
        <p>
          CSS, or Cascading Style Sheets, was first proposed by Håkon Wium Lie
          in 1994 as a way to separate the presentation of a website from its
          content. The idea was to create a language that could define the
          styles and layouts of HTML elements, allowing web designers to create
          more sophisticated and visually appealing websites. The first version
          of CSS, CSS1, was published in 1996 as part of the HTML 4.0
          specification.
          <br></br>
          <br></br>
          CSS1 was fairly limited in its capabilities, and it wasn't until the
          release of CSS2 in 1998 that CSS really started to take off. CSS2
          introduced a wide range of new features, including support for
          positioning and floating elements, the ability to create multi-column
          layouts, and much more. However, CSS2 was also a very complex
          specification, and many of its features were not fully implemented by
          web browsers for many years.
          <br></br>
          <br></br>
          In 2005, the CSS working group released CSS3, which was intended to be
          a modular and more easily implementable version of CSS. Instead of a
          single monolithic specification, CSS3 was divided into smaller modules
          that could be implemented independently. This allowed web designers to
          use the features they needed without having to wait for all of CSS3 to
          be fully implemented. Today, CSS3 is the most recent version of CSS,
          and it includes a wide range of new features, such as flexible box
          layouts, grid layouts, and animations.
        </p>
        <hr></hr>
        <h2>CSS Especification</h2>
        <p>
          The official specification or standard currently used to design web
          pages with CSS is CSS version 2.1, last updated on June 7, 2011.
          <br></br>
          <br></br>
          For several years, the W3C organization has been working on the
          development of the next version of CSS, known as CSS 3. This new
          version includes many important changes inall levels and is much more
          advanced and complex than CSS 2.
          <br></br>
          <br></br>
          <ul>
            <li>
              <a href="https://www.w3.org/TR/CSS21/" className="links">
                Cascading Style Sheets Level 2 Revision 1 (CSS 2.1)
                Specification
              </a>
            </li>
            <li>
              <a
                href="https://www.w3.org/Style/CSS/current-work"
                className="links"
              >
                CSS current work & how to participate
              </a>
            </li>
          </ul>
        </p>
        <hr></hr>
        <h2>Basic CSS Operation</h2>
        <p>
          Before CSS was widely used, web page designers used special HTML tags
          to modify the appearance of page elements. The next example shows an
          HTML page with styles defined without using CSS.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n\n<head>\n  <title>Example of styles without CSS</title>\n</head>\n\n<body>\n  <h1>\n    <font color="red" face="Arial" size="5">Page headline</font>\n  </h1>\n  <p>\n    <font color="gray" face="Verdana" size="2">A not very long paragraph of text.</font>\n  </p>\n</body>\n\n</html>'
          }
          containerHeight={"480px"}
          insideHeight={"75%"}
        />
        <div className="examples">
          <h1>
            <font color="red" face="Arial" size="5">
              Page headline
            </font>
          </h1>
          <p>
            <font color="gray" face="Verdana" size="2">
              A not very long paragraph of text.
            </font>
          </p>
        </div>
        <p>
          The example above uses the &lt;font&gt; tag with its color, face, and
          size attributes to define the color, type, and font size of each
          element on the page.
          <br></br>
          <br></br>
          The problem of using this method to define the appearance of the
          elements can be clearly seen with the following example: if the page
          had 50 different elements, you would have to insert 50 &lt;font&gt;
          tags. If the entire website is made up of 10,000 different pages,
          500,000 &lt;font&gt; tags would need to be defined. Since each
          &lt;font&gt; tag has three attributes, 1.5 million attributes would
          have to be defined.
          <br></br>
          <br></br>
          The solution proposed by CSS is much better, as can be seen in the
          following example:
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n\n<head>\n  <title>Example of styles with CSS</title>\n  <style type="text/css">\n    h1 {\n      color:red;\n      font-family:Arial;\n      font-size:large\n    }\n\n    p {\n      color:gray;\n      font-family:Verdana;\n      font-size:medium\n    }\n  </style>\n</head>\n\n<body>\n  <h1>Page headline.</h1>\n  <p>A not very long paragraph of text.</p>\n</body>\n\n</html>'
          }
          containerHeight={"660px"}
          insideHeight={"82%"}
        />
        <div className="examples">
          <h1 style={{ color: "red", fontFamily: "Arial", fontSize: "large" }}>
            Page headline.
          </h1>
          <p
            style={{ color: "gray", fontFamily: "Verdana", fontSize: "medium" }}
          >
            A not very long paragraph of text.
          </p>
        </div>
        <hr></hr>
        <h2>How to include an extern CSS document in an HTML document</h2>
        <p>
          All CSS styles are contained in a CSS type file that HTML pages link
          to using the &lt;link&gt; tag. A CSS type file is nothing more than a
          simple file of text whose extension is .css. You can create all the
          CSS files that are necessary and each HTML page can link as many CSS
          files as needed.
          <br></br>
          <br></br>
          <ul>
            <li>
              rel: indicates the type of relationship that exists between the
              linked resource (in this case, the CSS file) and the HTML page.
              For CSS files, the value is always used stylesheet.
            </li>
            <li>
              href: indicates the URL of the CSS file that contains the styles.
              The indicated URL can be relative or absolute and can point to a
              resource internal or external to the website.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n\n<head>\n  <title>HTML example</title>\n  <link rel="stylesheet" href="file.css">\n</head>\n\n<body>\n  <p>Hello world</p>\n</body>\n\n</html>'
          }
          containerHeight={"400px"}
          insideHeight={"71%"}
        />
        <hr></hr>
        <h2>Import CSS files and comments</h2>
        <p>
          To include in the HTML page the styles defined in external CSS files,
          a special rule of type @import is used. Rules of type @import always
          precedeany other CSS rule.
          <br></br>
          <br></br>
          The URL of the external CSS file is indicated by a text string
          surrounded by quotes single or double or by using the url() keyword.
          <br></br>
          <br></br>
          Comments are text content that the designer includes in the CSS file
          for their own information and use fulness. The browsers completely
          ignore any comments from CSS files, so it is common to use them to
          clearly structure complex CSS files.
          <br></br>
          <br></br>
          The beginning of a comment is indicated by the characters /* and the
          end of the comment is indicated by */
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "/* Importing a CSS file with @import */\n@import url('/css/styles.css');"
          }
          containerHeight={"190px"}
          insideHeight={"40%"}
        />
        <hr></hr>
        <Redirection
          link1={"../../../pages/Home"}
          link2={"../../../pages/css_tutorials/quarter_01/CssBasics"}
          name1={"Home"}
          name2={"CSS Basics"}
        />
      </div>
    </div>
  );
}

export default CssIntroductionContent;
