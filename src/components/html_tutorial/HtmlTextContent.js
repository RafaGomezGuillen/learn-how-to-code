import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function HtmlTextContent() {
  return (
    <div className="main">
      <h1>HTML TEXT</h1>
      <div className="introduction">
        <p>
          Most of the content of common HTML pages is made up of text, becoming
          more than 90% of the page's code.
        </p>
        <p>
          HTML defines tags to <strong>structure</strong> content into sections
          and paragraphs, and define other tags to <strong>mark</strong>{" "}
          important elements within the text.
        </p>
        <p>
          The process of structuring a simple text consists of indicating the
          different zones or sections that make up the text.
        </p>
        <p>
          Below are all the tags that HTML defines to structure and mark up the
          text. In addition, a special mention is made of the treatment thatHTML
          of white space and new lines.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Structure</h2>
        <p>
          The easiest way to structure a text is to separate it by paragraphs.
          In addition, HTML allows you to include titles that delimit each of
          the sections.
        </p>
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
        <div className="examples">
          <p>
            This is the text that forms the first paragraph of the page.
            Paragraphs can span multiple lines and the browser takes care of it
            to adjust its length to the size of the window.
          </p>

          <p>
            The second paragraph of the page is also defined by enclosing its
            text with the p tag. The browser also takes care ofautomatically
            separate each paragraph.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Sections</h2>
        <p>
          Typical HTML pages often have a more complex structure than can be
          created using paragraphs alone. In fact, it is common for pagesare
          divided into different hierarchical sections.<br></br>
          <br></br>
          Section titles are used to delimit the beginning of each section on
          the page.<br></br>
          <br></br>
          The tags that define section headings are &lt;h1&gt;, &lt;h2&gt;,
          &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, and &lt;h6&gt;. The &lt;h1&gt; tag
          is the most important and is therefore used to define thepage
          headlines. The importance of the rest of the tags is descending, soso
          that the &lt;h6&gt; tag is the one used to delimit the sections
          lessimportant of the page.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n<title>Example of structured text with sections</title>\n</head>\n<body>\n\n<h1>page headline</h1>\n<p>Introductory paragraph...</p>\n<h2>The first sub-section</h2><p>Content paragraph...</p>\n<h2>Another sub-section</h2>\n<p>More content paragraph...</p>\n\n</body>\n</html>"
          }
          containerHeight={"420px"}
          insideHeight={"70%"}
        />
      </div>
      <div className="examples">
        <h1>page headline</h1>
        <p>Introductory paragraph...</p>
        <h2>The first sub-section</h2>
        <p>Content paragraph...</p>
        <h2>Another sub-section</h2>
        <p>More content paragraph...</p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Basic text markup</h2>
        <p>
          Regular texts are made up of elements such as bold or italicized
          words, annotations, andcorrections, citations to other external
          documents, etc.<br></br>
          <br></br>
          The &lt;em&gt; tag marks a text indicating that its importance is
          greater than that of the rest of the text. The &lt;strong&gt; tag
          indicates that a certain text is of the greatest importance within the
          page.<br></br>
          <br></br>
          The &lt;ins&gt; is used to mark a change in the original content
          consisting of the insertion of a new content. The &lt;del&gt; is used
          to mark a change in the original content consisting of the deletion of
          certain content. HTML defines the &lt;blockquote&gt; tag to include
          direct quotes in web pages.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n<title>Basic text markup</title>\n</head>\n<body>\n\n<p>\n   The HTML language allows you to mark some segments of text as <em>very important</em>\n   and other segments as<strong>the most important</strong>.\n</p>\n\n<p>\n   HTML, an acronym for Hyper Text Markup Language (hypertext markup language<ins>hypertext marks</ins>) \n   is a markup language designed to structure texts and present them in the form of hypertext.\n</p>\n\n<blockquote>\n    "The value of this attribute is a URL indicating the source document of the citation."\n</blockquote>\n\n</body>\n</html>'
          }
          containerHeight={"590px"}
          insideHeight={"80%"}
        />
        <div className="examples">
          <p>
            The HTML language allows you to mark some segments of text as{" "}
            <em>very important</em>
            and other segments as<strong>the most important</strong>.
          </p>

          <p>
            HTML, an acronym for Hyper Text Markup Language (hypertext markup
            language <ins>hypertext marks</ins>) is a markup language designed
            to structure texts and present them in the form of hypertext.
          </p>

          <blockquote>
            "The value of this attribute is a URL indicating the source document
            of the citation."
          </blockquote>
        </div>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Advanced text markup</h2>
        <p>
          More advanced pages and documents often include other important
          elements that need to be marked up appropriately. Therefore, HTML
          includesmany other tags that allow marking more elements of the text.
          <br></br>
          <br></br>
          La etiqueta &lt;abbr&gt; marca las abreviaturas de un texto y la
          etiqueta &lt;acronym&gt; se emplea para marcar las siglas o acrónimos
          del texto<br></br>
          <br></br>
          HTML includes the &lt;dfn&gt; tag to provide the user with the
          definition of all the words forthose deemed appropriate.<br></br>
          <br></br>
          Sometimes the difference between &lt;cite&gt; and &lt;blockquote&gt;
          is not clear. The &lt;cite&gt; element marks the author of the quote
          (person, document, etc.) and &lt;blockquote&gt; marks thecontent of
          the quote itself.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n<title>Advanced text markup</title>\n</head>\n<body>\n\n<p>\n    The <acronym title="HyperText Markup Language">HTML</acronym>language is standardizedby the\n    <acronym title="World Wide Web Consortium">W3C</acronym>.\n</p>\n<p>\n    With these symptoms, it could be a case of<dfn title="Subjective image or sensation,characteristic of a sense, \n    determined by another sensation that affects a sensedifferent"> synesthesia</dfn>\n</p>\n<p>\n    As <cite>Mahatma Gandhi</cite>said:<blockquote>Live as if you were to die tomorrow and learn \n    as if you were to live forever.</blockquote>\n</p>\n\n</body>\n</html>'
          }
          containerHeight={"590px"}
          insideHeight={"80%"}
        />
        <div className="examples">
          <p>
            The <acronym title="HyperText Markup Language">HTML</acronym>
            language is standardizedby the
            <acronym title="World Wide Web Consortium">W3C</acronym>.
          </p>
          <p>
            With these symptoms, it could be a case of
            <dfn
              title="Subjective image or sensation,characteristic of a sense, 
    determined by another sensation that affects a sensedifferent"
            >
              {" "}
              synesthesia
            </dfn>
          </p>
          <p>
            As <cite>Mahatma Gandhi</cite>said:
            <blockquote>
              Live as if you were to die tomorrow and learn as if you were to
              live forever.
            </blockquote>
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Generic text markup</h2>
        <p>
          The &lt;span&gt; tag can only be used to enclose inline content and
          tags. When you want to structure block elements, you use the
          tag&lt;div&gt;, as will be seen later
          <br></br>
          <br></br>
          The &lt;span&gt; tag is displayed by default with the same appearance
          as normal text. Therefore it is common to use this tag along with the
          id andclass to later modify its appearance with CSS.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n<title>Generic text markup</title>\n</head>\n<body>\n\n<p>\n   <strong>Important</strong>: if you want to contact the company<acronym> ACME</acronym>, \n   you can do so by calling<span class="telephone"> 900555555 </span>or via the email address\n   <span class="email">contact@acme.org</span>\n</p>\n\n</body>\n</html>'
          }
          containerHeight={"420px"}
          insideHeight={"70%"}
        />
        <div className="examples">
          <p>
            <strong>Important</strong>: if you want to contact the company
            <acronym> ACME</acronym>, you can do so by calling
            <span class="telephone"> 900555555 </span>or via the email address
            <span class="email">contact@acme.org</span>
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Whitespace and new lines</h2>
        <p>
          To include a new line at a point and force the text that follows to be
          displayed on the bottom line, use the &lt;br&gt; tag. In a way, insert
          the tag&lt;br&gt; at a certain point in the text is equivalent to
          pressing the ENTER keyat that same point.
          <br></br>
          <br></br>
          The solution to the white space problem is not as simple as the new
          line problem. To include extra whitespace, you must replace eachnew
          white space for the &amp;nbsp; text (it is important to include the
          ampersand & at theprinciple and symbol ; in the end).
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n<title>Whitespace and new lines</title>\n</head>\n<body>\n\n<p>This first paragraph does not contain line breaks or any other type of spacing.</p>\n<p>\n    This second paragraph does contain breaks<br>of<br>line<br>\n    and &nbsp;&nbsp;another &nbsp;kind &nbsp;of &nbsp;&nbsp;spacing.\n</p>\n\n</body>\n</html>"
          }
          containerHeight={"420px"}
          insideHeight={"70%"}
        />
        <div className="examples">
          <p>
            This first paragraph does not contain line breaks or any other type
            of spacing.
          </p>
          <p>
            This second paragraph does contain breaks<br></br> of<br></br>line
            <br></br>
            and &nbsp;&nbsp;another &nbsp;kind &nbsp;of &nbsp;&nbsp;spacing.
          </p>
        </div>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Preformatted text</h2>
        <p>
          In these cases, the &lt;pre&gt; tag can be used, which displays the
          text as it has been written, respecting all white spaces and all new
          lines.
          <br></br>
          <br></br>
          Another tag related to &lt;pre&gt; is the &lt;code&gt; tag, which is
          used to display source code of any programming language.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n<title>Whitespace and new lines</title>\n</head>\n<body>\n\n<pre>The label honors whitespace and displays the text exactly as it is written.</pre>\n<code>The code tag does not respect whitespace.</code>\n\n</body>\n</html>"
          }
          containerHeight={"350px"}
          insideHeight={"70%"}
        />
        <div className="examples">
          <pre>
            The label honors whitespace and displays the text exactly as it is
            written.
          </pre>
          <code>The code tag does not respect whitespace.</code>
        </div>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Character encoding</h2>
        <p>
          An important consideration directly related to the text of HTML pages
          is character encoding and the insertion of special characters.Some of
          the characters that are commonly used in texts cannot beinclude
          directly on web pages.
        </p>
        <ul>
          <li>&amp;lt;</li>
          <li>&lt;</li>
          <li>less than.</li>
        </ul>
        <ul>
          <li>&amp;gt;</li>
          <li>&gt;</li>
          <li>greater than.</li>
        </ul>
        <ul>
          <li>&amp;amp;</li>
          <li>&amp;</li>
          <li>ampersand.</li>
        </ul>
        <ul>
          <li>&amp;quot;</li>
          <li>&quot;</li>
          <li>quotation mark.</li>
        </ul>
        <ul>
          <li>&amp;nbsp;</li>
          <li>(whitespace)</li>
          <li>non-breaking space.</li>
        </ul>
        <ul>
          <li>&amp;apos;</li>
          <li>&apos; </li>
          <li>aposulophe.</li>
        </ul>
        <ul>
          <li>&amp;ntilde;</li>
          <li>&ntilde; </li>
          <li>latin letter n with tilde.</li>
        </ul>
        <ul>
          <li>&amp;Ntilde;</li>
          <li>&Ntilde; </li>
          <li>latin capital n letter with tilde.</li>
        </ul>
        <ul>
          <li>&amp;aacute;</li>
          <li>&aacute; </li>
          <li>a acute.</li>
        </ul>
        <ul>
          <li>&amp;eacute;</li>
          <li>&eacute; </li>
          <li>e acute.</li>
        </ul>
        <ul>
          <li>&amp;iacute;</li>
          <li>&iacute; </li>
          <li>i acute.</li>
        </ul>
        <ul>
          <li>&amp;oacute;</li>
          <li>&oacute; </li>
          <li>o acute.</li>
        </ul>
        <ul>
          <li>&amp;uacute;</li>
          <li>&uacute; </li>
          <li>u acute.</li>
        </ul>
        <ul>
          <li>&amp;Aacute;</li>
          <li>&Aacute; </li>
          <li>A acute.</li>
        </ul>
        <ul>
          <li>&amp;Eacute;</li>
          <li>&Eacute; </li>
          <li>E acute.</li>
        </ul>
        <ul>
          <li>&amp;Iacute;</li>
          <li>&Iacute; </li>
          <li>I acute.</li>
        </ul>
        <ul>
          <li>&amp;Oacute;</li>
          <li>&Oacute; </li>
          <li>O acute.</li>
        </ul>
        <ul>
          <li>&amp;Uacute;</li>
          <li>&Uacute; </li>
          <li>U acute.</li>
        </ul>
        <ul>
          <li>&amp;euro;</li>
          <li>&euro; </li>
          <li>euro.</li>
        </ul>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/html_tutorials/HtmlBasics"}
        link2={"../../../pages/html_tutorials/HtmlLists"}
        name1={"Basics"}
        name2={"Lists"}
      />
    </div>
  );
}

export default HtmlTextContent;
