import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function HtmlFormsContent() {
  return (
    <div className="main">
      <h1>HTML FORMS</h1>
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

export default HtmlFormsContent;
