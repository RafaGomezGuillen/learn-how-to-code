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
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Basic links</h2>
        <p>Links in HTML are created using the &lt;a&gt; tag.</p>
        <table>
          <tr>
            <td colSpan={2}>The &lt;a&gt; tag</td>
          </tr>
          <tr>
            <td>Attributes</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>
              name = "text" - Allows the link to be named so that it can be
              accessed from other links. href = "url" - Indicates the URL of the
              resource to be linked
            </td>
            <td>It is used to link all kinds of resources.</td>
          </tr>
        </table>
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n <title>Basic links</title>\n</head>\n<body>\n\n<h1 id="start">Links</h1>\n<!-- This is an absolute link -->\n<a href="http://www.google.com">Google principal page</a>\n\n<!-- This is a relative link -->\n<a href="/">Come back to the start</a>\n\n<!-- The links can refer to other PDF or DOC files. -->\n<a href="http://www.example.com/inform.pdf">Download the complete inform [PDF]</a>\n<a href="http://www.example.com/inform.doc">Download the complete inform [DOC]</a>\n\n<!-- The name attribute allows you to create "empty links" that refer to sections within the same page. -->\n<a name="first_section"></a>\n<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris id ligula eu felis adipiscing ultrices.</p>\n\n<a name="second_section"></a>\n<p>Pellentesque malesuada. In in lacus. Phasellus erat erat, lacinia a, convallis eu, nonummy et, odio.</p>\n\n<!-- Direct link to the second section of the page -->\n<a href="http://www.example.com/page.html#second_section">second section of the page</a>\n<a href="#start">Come back to the h1</a>\n\n<!-- Add an initial "subject" to the email -->\n<a href="mailto:name@direction.com?subject="Ask more information">Ask more information</a>\n\n</body>\n</html>'
          }
          containerHeight={"840px"}
          insideHeight={"86%"}
        />
        {/* <Images file={"BasicLinks"} /> */}
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Other type of links</h2>
        <p>
          HTML defines &lt;script&gt; and &lt;link&gt; tags to link resources
          that should be loaded automatically. When the browser finds one of
          these two tags, downloads the linked resources and applies them to the
          web page.
        </p>
        <table>
          <tr>
            <td colSpan={2}>The &lt;script&gt; tag</td>
          </tr>
          <tr>
            <td>Attributes</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>
              src = "url" - Indicates the address of the file that contains the
              code. type = "content_type" - Allows the browser to be "warned"
              about the type of code that is included (usually JavaScript).
              defer = "defer" - The code will not modify the content of the web
              page. charset = "charset_type" - Describes the encoding of the
              linked code.
            </td>
            <td>
              Used to link to or define a block of code (usually JavaScript).
            </td>
          </tr>
          <tr>
            <td colSpan={2}>The &lt;link&gt; tag</td>
          </tr>
          <tr>
            <td>Attributes</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>
              The following with the same meaning as for the "a" tag: charset,
              href, hreflang, type, rel, and rev. media = "media_type" -
              Indicates the media for which the relationship should be applied.
            </td>
            <td>
              It is used to link and establish relationships between the
              document and other resources.
            </td>
          </tr>
        </table>
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<head>\n <link rel="stylesheet" type="text/css" href="/css/style.css" media="screen,projection">\n <script type="text/javascript" src="/script/script.js"></script>\n\n <!-- To set an icon page -->\n <link rel="shortcut icon" href="/favicon.ico" type="image/ico">\n <title>Other links</title>\n</head>'
          }
          containerHeight={"300px"}
          insideHeight={"65%"}
        />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Accessing to other files in the same folder</h2>
        <p>
          Here we are going to see how to access other files in the same folder.
          Here it is the structure of the folder.
        </p>
        {/* <Images file={"struct"} /> */}
        <h2>Link to a file that is in the same directory</h2>
        <p>
          For example, if you want to access to the subpage2.html or
          subpage3.html that is in the same folder of subpage1.html, you can
          try:
        </p>

        <CodeContainer
          title={"HTML"}
          code={
            '<!-- In subpage1.html -->\n<a href="subpage2.html">Subpage 2</a>\n<a href="subpage3.html">Subpage 3</a>'
          }
          containerHeight={"200px"}
          insideHeight={"45%"}
        />
        <h2>
          Create a link to a file that is in a subfolder of the same level
        </h2>
        <p>
          For example, if you want to access to the subpage1.html, subpage2.html
          or subpage3.html that is in a subfolder of the same level in
          index.html, you can try:
        </p>

        <CodeContainer
          title={"HTML"}
          code={
            '<!-- In index.html -->\n<a href="html_files/subpage1.html">Subpage 1</a>\n<a href="html_files/subpage3.html">Subpage 3</a>\n<a href="html_files/subpage3.html">Subpage 3</a>'
          }
          containerHeight={"220px"}
          insideHeight={"47%"}
        />
        <h2>Link to a file that is at a higher level</h2>
        <p>
          For example, if you want to access to index.html that is a file that
          is at a higher level of subpage1.html, you can try:
        </p>

        <CodeContainer
          title={"HTML"}
          code={'<!-- In subpage1.html -->\n<a href="../index.html">index</a>'}
          containerHeight={"180px"}
          insideHeight={"37%"}
        />
        <h2>Link to a file located in a different subfolder</h2>
        <p>
          For example, if you want to access to script.js that is located in a
          different subfolder of subpage1.html, you can try:
        </p>

        <CodeContainer
          title={"HTML"}
          code={
            '<!-- In subpage1.html -->\n<script type="text/javascript" src="../js_files/script.js"></script>'
          }
          containerHeight={"200px"}
          insideHeight={"40%"}
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
