import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";
import Images from "../images/Images";

function HtmlListsContent() {
  return (
    <div className="main">
      <h1>HTML LISTS</h1>
      <div className="introduction">
        <p>
          Sometimes, it is possible to group certain words or phrases into a set
          of elements that have more meaning together.
        </p>
        <p>
          The HTML language defines three different types of lists for grouping
          elements.
        </p>
        <p>
          Unordered lists (this is a simple collection of elements whose order
          does not matter).
        </p>
        <p>
          Ordered lists (similar to the previous one, but the elements are
          numbered and therefore their number matters order).
        </p>
        <p>
          Definition lists (a dictionary-like set of terms and definitions).
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Unordered lists</h2>
        <p>
          An unordered list is a set of elements related to each other but for
          which no order or order is indicated The &lt;ul&gt; tag encloses all
          the elements of the list and the tag &lt;li&gt; each of its elements.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n<title>Unordered lists</title>\n</head>\n<body>\n\n<h1>Menu</h1>\n<ul>\n   <li>Home</li>\n   <li>News</li>\n   <li>Articles</li>\n   <li>Contact</li>\n</ul>\n\n</body>\n</html>"
          }
          containerHeight={"455px"}
          insideHeight={"75%"}
        />
        <Images file={"UnorderedLists"} />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Ordered lists</h2>
        <p>
          Its defined by the &lt;ol&gt; tag. The elements of the list are
          defined by the &lt;li&gt; tag, the same one that is used in unordered
          lists.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n<title>Ordered lists</title>\n</head>\n<body>\n\n<h1>Instructions</h1>\n<ol>\n   <li>Plug in correctly</li>\n   <li>check connections</li>\n   <li>turn on the device</li>\n</ol>\n\n</body>\n</html>"
          }
          containerHeight={"455px"}
          insideHeight={"75%"}
        />
        <Images file={"OrderedLists"} />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Definition lists</h2>
        <p>
          Definition lists are rarely used in most HTML pages. Its operation is
          similar to that of a dictionary, since each element of the list is
          made up of terms anddefinitions. The &lt;dl&gt; tag creates the
          definition list and the &lt;dt&gt; and &lt;dd&gt; tags
          definerespectively the term and description of each item in the list.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n<title>Definition Lists</title>\n</head>\n<body>\n\n<h1>metalanguages</h1>\n<dl>\n   <dt>SGML</dt>\n   <dd>Metalanguage for the definition of other markup languages</dd>\n   <dt>XML</dt>\n   <dd>Language based on SGML and used to describe data</dd>\n   <dt>RSS</dt>\n   <dt>GML</dt>\n   <dt>XHTML</dt>\n   <dt>SVG</dt>\n   <dt>XUL</dt>\n   <dd>XML-derived languages ​​for certain applications</dd>\n</dl>\n\n</body>\n</html>"
          }
          containerHeight={"575px"}
          insideHeight={"80%"}
        />
        <Images file={"DefinitionLists"} />
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/html_tutorials/HtmlText"}
        link2={"../../../pages/html_tutorials/HtmlImages"}
        name1={"Text"}
        name2={"Images"}
      />
    </div>
  );
}

export default HtmlListsContent;
