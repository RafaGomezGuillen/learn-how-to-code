import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function HtmlLinksContent() {
  return (
    <div className="main">
      <h1>HTML LINKS</h1>
      <div className="introduction">
        <p>
          The HTML markup language was defined taking into account some of the
          characteristics that existed at that time for the digital publication
          of contents. Among the concepts used in its creation, is the
          "hypertext" mechanism.
        </p>
        <p>
          The incorporation of hypertext was one of the keys to the success of
          the HTML language, since it allowed the creation of interactive
          documents that provide information extra when requested. The main
          element of the hypertext is the "hyperlink", also called a "web link"
          or simply "link".
        </p>
        <p>
          Links are used to establish relationships between two resources.
          Although most of the links relate to web pages, it is also possible to
          link to other resources such as images, documents and files.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Relatives and absolutes links</h2>
        <p>
          The usual web pages usually contain dozens of links of different
          types.<br></br>
          <br></br>
          Absolute URLs include all parts of the URL (protocol, server, and
          path) so that no further information is needed to obtain the linked
          resource.<br></br>
          <br></br>
          Relative URLs leave out some parts of URLs to make them shorter. As
          these are incomplete URLs, it is necessary to have information to get
          the linked resource. It is essential to know the URL of the origin of
          the link.<br></br>
          <br></br>
          <ul>
            {/* <li>
              Absolute URL: http://www.example.com/route1/route2/page2.html
            </li> */}
            <li>Relative URL: /route1/route2/page2.html</li>
          </ul>
        </p>
        <table>
          <tr>
            <td colSpan={2}>
              {" "}
              <strong>
                The source and destination of the link are in the same directory
              </strong>
            </td>
          </tr>
          <tr>
            <td>Origin</td>
            {/* <td>
              http://www.example.com/route1/route2/route3/page1.html
            </td> */}
          </tr>
          <tr>
            <td>Linked resource</td>
            <td>
              Web page called page2.html and located in the same directory
            </td>
          </tr>
          <tr>
            <td>Absolute URL</td>
            {/* <td>http://www.example.com/route1/route2/route3/page2.html</td> */}
          </tr>
          <tr>
            <td>Relative URL</td>
            <td>page2.html</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>
                The destination of the link is close to its origin and at a
                higher level
              </strong>{" "}
            </td>
          </tr>
          <tr>
            <td>Origin</td>
            {/* <td>http://www.example.com/route1/route2/route3/page1.html</td> */}
          </tr>
          <tr>
            <td>Linked resource</td>
            <td>
              Web page called page2.html and that is located in the upper
              directory called route2
            </td>
          </tr>
          <tr>
            <td>Absolute URL</td>
            {/* <td>http://www.example.com/route1/route2/route3/page2.html</td> */}
          </tr>
          <tr>
            <td>Relative URL</td>
            <td>../page2.html</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>
                The destination of the link is close to its origin and at a
                lower level
              </strong>{" "}
            </td>
          </tr>
          <tr>
            <td>Origin</td>
            {/* <td>"http://www.example.com/route1/route2/route3/page1.html"</td> */}
          </tr>
          <tr>
            <td>Linked resource</td>
            <td>
              Web page called page2.html and that is in a lower directory called
              route4
            </td>
          </tr>
          <tr>
            <td>Absolute URL</td>
            {/* <td>
              http://www.example.com/route1/route2/route3/route4/page2.html
            </td> */}
          </tr>
          <tr>
            <td>Relative URL</td>
            <td>route4/page2.html</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <strong>Link source and destination are too far apart</strong>
            </td>
          </tr>
          <tr>
            <td>Origin</td>
            {/* <td>http://www.example.com/route1/route2/route3/page1.html</td> */}
          </tr>
          <tr>
            <td>Linked resource</td>
            <td>
              Web page called page2.html and that is saved in a directory called
              route7 which is located in the root of the server
            </td>
          </tr>
          <tr>
            <td>Absolute URL</td>
            {/* <td>http://www.example.com/route7/page2.html</td> */}
          </tr>
          <tr>
            <td>Relative URL</td>
            <td>/route7/page2.html</td>
          </tr>
        </table>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Paragraphs</h2>
        <p>
          One of the most used tags in HTML is the &lt;p&gt; tag, which allows
          you to define the paragraphs that make up the text of a page.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n<title>Example of structured text with paragraphs</title>\n</head>\n<body>\n\n<p>This is the text that forms the first paragraph of the page. \nParagraphs can span multiple lines and the browser takes care of it \nto adjust its length to the size of the window.</p>\n\n<p>The second paragraph of the page is also defined by enclosing its text with the p tag. \nThe browser also takes care ofautomatically separate each paragraph.</p>\n\n</body>\n</html>"
          }
          containerHeight={"425px"}
          insideHeight={"75%"}
        />
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/html_tutorials/HtmlTables"}
        link2={"../../../pages/html_tutorials/HtmlForms"}
        name1={"Tables"}
        name2={"Forms"}
      />
    </div>
  );
}

export default HtmlLinksContent;
