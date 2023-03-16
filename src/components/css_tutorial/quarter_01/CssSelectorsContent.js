import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";

function CssSelectorsContent() {
  return (
    <div className="main">
      <h1>CSS SELECTORS</h1>
      <div className="introduction">
        <p>
          To create professional web designs, it is essential to know and master
          CSS selectors.
        </p>
        <p>
          A CSS document is made up of a part called "selector" and another part
          called "declaration"
        </p>
        <p>
          An infinite number of CSS rules can be assigned to the same HTML
          element, and each CSS rule can be applied to an infinite number of
          elements. In other words, the same rule can be applied to several
          selectors and the same selector can be used in several rules.
        </p>
        <p>
          However, most website pages can be designed using just the five basic
          selectors.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2 id="universal">Universal selector</h2>
        <p>
          It is used to select all the elements of the page. The following
          example removes the margin and padding from all HTML elements.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"* {\n  margin: 0;\n  padding: 0;\n}"}
          containerHeight={"220px"}
          insideHeight={"50%"}
        />
        <hr></hr>
        <h2 id="tag">Tag selector</h2>
        <p>
          Selects all page elements whose HTML tag matches the value of the
          selector. To use this selector, it is only necessary to indicate the
          name of an HTML tag (without the &lt; and &gt; characters)
          corresponding to the elements that you want to select.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "h1 {\n  color: red;\n}\n\nh2 {\n  color: red;\n}\n\np {\n  color: red;\n}"
          }
          containerHeight={"360px"}
          insideHeight={"69%"}
        />
        <p>
          If you want to apply the same styles to two different labels, you can
          chain the selectors. In the example above, the h1, h2, and p section
          titles share the same styles.
          <br></br>
          <br></br>
          In this case, CSS allows you to group all the individual rules into a
          single rule with a multiple selector. To do this, include all
          selectors separated by a comma (,).
        </p>
        <CodeContainer
          title={"CSS"}
          code={"h1, h2, p {\n  color: red;\n}"}
          containerHeight={"200px"}
          insideHeight={"43%"}
        />
        <hr></hr>
        <h2 id="descendant">Descendant selector</h2>
        <p>
          Selects elements that are inside other elements. An element is a
          descendant of another when it is between the opening and closing tags
          of the other element.
          <br></br>
          <br></br>
          The p span selector selects both text1 and text2. The reason is that
          in the descendant selector, one element does not have to be a "direct
          child" of another. The only condition is that an element must be
          inside another element, no matter how deep it is.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"p span {\n  color: red;\n}"}
          containerHeight={"200px"}
          insideHeight={"43%"}
        />
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<p>\n  <span>text1</span>\n  <a href="">...<span>text2</span></a>\n</p>'
          }
          containerHeight={"230px"}
          insideHeight={"47%"}
        />
        <div className="examples">
          <p>
            <span style={{ color: "red" }}>text1</span>
            <a>
              ...<span style={{ color: "red" }}>text2</span>
            </a>
          </p>
        </div>
        <p>
          However, in the following example only the second link is shown in
          red.
          <br></br>
          <br></br>
          The reason is that the selector p * a is interpreted as all elements
          of type &lt;a&gt; that are inside any element that, in turn, is inside
          an element of type &lt;p&gt;. Because the first &lt;a&gt; element is
          located directly under a &lt;p&gt; element, the condition of the p * a
          selector is not met.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"p * a {\n  color: red;\n}"}
          containerHeight={"200px"}
          insideHeight={"43%"}
        />
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<p><a href="#">Link</a></p>\n<p><span><a href="#">Link</a></span></p>'
          }
          containerHeight={"170px"}
          insideHeight={"40%"}
        />
        <div className="examples">
          <p>
            <a>Link</a>
          </p>
          <p>
            <span>
              <a style={{ color: "red" }}>Link</a>
            </span>
          </p>
        </div>
        <hr></hr>
        <h2>Class selector</h2>
        <p>
          To apply styles to a single element of the page, it consists of using
          the HTML class attribute on that element to directly indicate the CSS
          rule that should be applied to it.
          <br></br>
          <br></br>
          The .style selector is interpreted as "any element on the page whose
          class attribute is equal to featured", so the first and last paragraph
          meets that condition.
        </p>
        <CodeContainer
          title={"CSS"}
          code={".style {\n  color: red;\n}"}
          containerHeight={"200px"}
          insideHeight={"43%"}
        />
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<p class="style">Lorem ipsum dolor sit amet...</p>\n<p>Nunc sed lacus et est adipiscing accumsan...</p>\n<p class="style">Class aptent taciti sociosqu ad litora...</p>'
          }
          containerHeight={"200px"}
          insideHeight={"43%"}
        />
        <div className="examples">
          <p style={{ color: "red" }}>Lorem ipsum dolor sit amet...</p>
          <p>Nunc sed lacus et est adipiscing accumsan...</p>
          <p style={{ color: "red" }}>
            Class aptent taciti sociosqu ad litora...
          </p>
        </div>
        <p>Of courder, it could be combined with other selectors.</p>
        <CodeContainer
          title={"CSS"}
          code={
            '/* All elements of type "p" with attribute class="style" */\np.style {\n  color: red\n}\n\n/* All elements with class="style" attribute that are insideof any element of type "p" */\np .style {\n  color: red}\n\n/* All "p" elements on the page and all elements withclass="style" attribute of the page */\np, .style {\n  color: red\n}'
          }
          containerHeight={"420px"}
          insideHeight={"73%"}
        />
        <hr></hr>
        <h2>ID selectors</h2>
        <p>
          The ID selector allows you to select a page element through the value
          of its id attribute. This type of selectors only select one element of
          the page because the value of the id attribute cannot be repeated in
          two different elements of the same page.
          <br></br>
          <br></br>
          The syntax for ID selectors is very similar to that for class
          selectors, except that the pound sign (#) is used instead of the
          period (.) as a prefix to the CSS rule name.
          <br></br>
          <br></br>
          The value of the id attribute must be unique, so two different elements cannot have the same id value. However, the class attribute is not required to be unique, so many elements. Different HTML can share the same value for their class attribute.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"#style {\n  color: red;\n}"}
          containerHeight={"200px"}
          insideHeight={"43%"}
        />
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<p id="style">Lorem ipsum dolor sit amet...</p>\n<p>Nunc sed lacus et est adipiscing accumsan...</p>\n<p>Class aptent taciti sociosqu ad litora...</p>'
          }
          containerHeight={"200px"}
          insideHeight={"43%"}
        />
        <div className="examples">
          <p style={{ color: "red" }}>Lorem ipsum dolor sit amet...</p>
          <p>Nunc sed lacus et est adipiscing accumsan...</p>
          <p>
            Class aptent taciti sociosqu ad litora...
          </p>
        </div>
        <hr></hr>
        <Redirection
          link1={"../../../pages/Home"}
          link2={"../../../pages/html_tutorials/HtmlHome"}
          name1={"Home"}
          name2={"HTML Home"}
        />
      </div>
    </div>
  );
}

export default CssSelectorsContent;
