import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function HtmlTutorialIntroductionContent() {
  return (
    <div className="main">
      <h1>HTML Introduction</h1>
      <div className="introduction">
        <p>
          The process of indicating the different parts that make up the
          information is called marking. Each of the words that are used to mark
          the beginning and end of a section are called tags.
          <br></br>
          <br></br>
          HTML is a tag language (also called markup language) and typical web
          pages are made up of hundreds or thousands of pairs of tags. In fact,
          the letters “ML” in the acronym HTML mean “markup language”, which is
          how markup languages are called in English.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Head and Body in HTML</h2>
        <p>
          HTML pages are divided into two parts: the header and the body. The
          header includes information about the page itself, such as its title
          and language. The body of the page includes all its contents, such as
          text paragraphs and images.
          <br></br>
          <br></br>
          The body contains everything that the user sees on their screen and
          the header contains everything that is not seen (with the only
          exception of the page title, which browsers show as title of their
          windows).
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<!DOCTYPE html>\n<html>\n<title>My first HTML document</title>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>"
          }
          containerHeight={"340px"}
          insideHeight={"65%"}
        />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Example explained</h2>
        <ul>
          <li>
            &lt;html&gt;: indicates the beginning and end of an HTML document.
            No tag or content can be placed before or after the &lt;html&gt; tag
            (with one exception that will be seen later). Inside the
            &lt;html&gt; tag, the header and body of the HTML document are
            defined and everything that is placed outside of the &lt;html&gt;tag
            is ignored.
          </li>
          <br></br>
          <li>
            &lt;head&gt;: delimits the header part of the document. The header
            contains information about the HTML document itself, such as its
            title and language. The contents indicated in the header are not
            visible to the user, with the exception of the &lt;head&gt; tag,
            which is used to indicate the title of the document and which
            browsers display it in the upper left corner of browser window
          </li>
          <br></br>
          <li>
            &lt;body&gt;: delimits body of HTML document. The body encloses all
            contents that are shown to user (paragraphs of text, images,
            tables). In general, body of a document contains hundreds of HTML
            tags, while head contains only a few.
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Tags and Attributes</h2>
        <p>
          HTML defines 91 tags that designers can use to mark up different
          elements that make up a page:
          <br></br>
          <br></br>
          a, abbr, acronym, address, applet, area, b, base, basefont, bdo, big,
          blockquote, body, br, button, caption, center, cite, code, col,
          colgroup, dd, del, dfn, dir, div, dl, dt, em, fieldset, font, form,
          frame, frameset, h1, h2, h3, h4, h5, h6, head, hr, html, i, iframe,
          img, input, ins, isindex, kbd, label, legend, li, link, map, menu,
          meta, noframes, noscript, object, ol, optgroup, option, p, param, pre,
          q, s, samp, script, select, small, span, strike, strong, style, sub,
          sup, table, tbody, td, textarea, tfoot, th, thead, title, tr, tt, u,
          ul, var.
          <br></br>
          <br></br>
          The &lt;a&gt; tag for example is used to include a link on a page.
          Using only the &lt;a&gt; tag it is not possible to establish the
          address that each link points to. As it is not feasible to create a
          tag for each different link, the solution consists of customizing HTML
          tags using certain additional information called{" "}
          <strong>attributes</strong>.
        </p>
        <table>
          <tr>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>id = "text"</td>
            <td>
              Sets a unique identifier to each element within an HTML page.
            </td>
          </tr>
          <tr>
            <td>class = "text"</td>
            <td>Sets the CSS class that is applied to the element's styles.</td>
          </tr>
          <tr>
            <td>Prettier</td>
            <td>Directly set the CSS styles of an element.</td>
          </tr>
        </table>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Attribute Example</h2>
        <p>
          In the tag &lt;a&gt; we use the attribute <strong>href="link"</strong>{" "}
          to indicate the link that we want to click.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<!DOCTYPE html>\n<html>\n<title>Attribute Example</title>\n<body>\n\n<h1>Links: </h1>\n<a>I am an incomplete link because I do not have an attribute</a>\n<a href="http://www.google.com">This link points to Google page.</a>\n\n</body>\n</html>'
          }
          containerHeight={"350px"}
          insideHeight={"66%"}
        />
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/html_tutorials/HtmlHome"}
        link2={"../../../pages/html_tutorials/HtmlBasics"}
        name1={"Home"}
        name2={"Basics"}
      />
    </div>
  );
}

export default HtmlTutorialIntroductionContent;
