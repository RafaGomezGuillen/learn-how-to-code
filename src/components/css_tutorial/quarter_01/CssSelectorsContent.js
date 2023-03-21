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
          The value of the id attribute must be unique, so two different
          elements cannot have the same id value. However, the class attribute
          is not required to be unique, so many elements. Different HTML can
          share the same value for their class attribute.
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
          <p>Class aptent taciti sociosqu ad litora...</p>
        </div>
        <hr></hr>
        <h2>Child selector</h2>
        <p>
          This is a selector similar to the descending selector, but very
          different in its operation. It is used to select an element that is a
          direct child of another element and is indicated by the "greater than
          sign" (&gt;).
          <br></br>
          <br></br>
          In the next example, the selector p &gt; span is interpreted as "any
          &lt;span&gt; element that is a direct child of a &lt;p&gt; element",
          so the first &lt;span&gt; element satisfies the condition of the
          selector. However, the second &lt;span&gt; element does not comply
          because it is a descendant but not a direct child of a &lt;p&gt;
          element.
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            'p > a {\n  color: red;\n}\n\n<p><a href="#">Link 1</a></p>\n<p><span><a href="#">Link 2</a></span></p>'
          }
          containerHeight={"260px"}
          insideHeight={"59%"}
        />
        <div className="examples">
          <p>
            <a href="#" style={{ color: "red" }}>
              Link 1
            </a>
          </p>
          <p>
            <span>
              <a href="#">Link 2</a>
            </span>
          </p>
        </div>
        <hr></hr>
        <h2>Adjacent selector</h2>
        <p>
          The styles of the h1 + h2 selector are applied to the first &lt;h2&gt;
          element of the page, but not to the second &lt;h2&gt;, because:
          <br></br>
          <br></br>
          <ul>
            <li>
              The parent element of &lt;h1&gt; is &lt;body&gt;, the same parent
              as both &lt;h2&gt; elements. This, two &lt;h2&gt; elements satisfy
              the first condition of the adjacent selector.
            </li>
            <li>
              The first &lt;h2&gt; element appears in the HTML right after the
              &lt;h1&gt; element, so this &lt;h2&gt; element also satisfies the
              second condition of the adjacent selector.
            </li>
            <li>
              Conversely, the second &lt;h2&gt; element does not appear
              immediately after the &lt;h1&gt; element, so it does not satisfy
              the second condition of the adjacent selector and therefore the h1
              + h2 styles are not applied to it.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            "h1 + h2 {\n  color: red; \n}\n\n<h1>Title</h1>\n<h2>Subtitle</h2>\n<h2>Another subtitle</h2>"
          }
          containerHeight={"290px"}
          insideHeight={"59%"}
        />
        <div className="examples">
          <h1>Title</h1>
          <h2 style={{ color: "red" }}>Subtitle</h2>
          <h2>Another subtitle</h2>
        </div>
        <hr></hr>
        <h2>Attribute selector</h2>
        <p>
          The last type of advanced selectors are attribute selectors, which
          allow you to select HTML elements based on their attributes and/or
          values ​​of those attributes.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            '/* All links that have a "class" attribute are shown in blue, regardless of its value */\na[class] {\n color: blue;\n}\n\n/* All links that have a "class" attribute with the value "external" are shown in blue */\na[class="external"] {\n color: blue;\n}\n\n/* All links pointing to the site "http://www.example.com" are shown in blue */\na[href="http://www.example.com"] {\n color: blue;\n}\n\n/* All links that have a "class" attribute in which at least one of its values ​​is "external" are shown in blue */\na[class~="external"] {\n color: blue;\n}\n\n/* Select all page elements whose "lang" attribute is equal to "en", that is, all elements in English */\n*[lang=en] {\n ...\n}\n\n/* Selects all page elements whose "lang" attribute starts with "es", that is, "es", "es-ES", "es-AR", etc. */\n*[lang|="en"] {\n color : red;\n}'
          }
          containerHeight={"740px"}
          insideHeight={"85%"}
        />
        <hr></hr>
        <h2>Style colition</h2>
        <p>
          In complex style sheets, it is common for multiple CSS rules to be
          applied to the same HTML element. The problem with these multiple
          rules is that collisions can occur like the one in the following
          example:
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={"p { color: red; }\np { color: blue; }\n\n<p>Example</p>"}
          containerHeight={"220px"}
          insideHeight={"50%"}
        />
        <div className="examples">
          <h1 style={{ color: "blue" }}>Title</h1>
        </div>
        <p>
          The method followed by CSS to resolve style collisions is shown below:
          <br></br>
          <br></br>
          <ol>
            <li>
              Determine all declarations that apply to the element for the
              selected CSS medium.
            </li>
            <li>
              Sort declarations based on their origin (browser, user, or
              designer CSS) and their priority (!important keyword).
            </li>
            <li>
              Sort the declarations according to how specific the selector is.
              The more generic a selector is, the less important its
              declarations are.
            </li>
            <li>
              If after applying the previous rules there are two or more rules
              with the same priority, the one indicated last is applied.
            </li>
          </ol>
        </p>
        <CodeContainer
          title={"HTML + CSS"}
          code={
            'p { color: red; }\n\np#my-id { color: blue; }\n\n* { color: green; }\n\n<p id="my-id">Example</p>'
          }
          containerHeight={"270px"}
          insideHeight={"60%"}
        />
        <div className="examples">
          <p style={{color: "green"}}>Example</p>
        </div>
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssBasics"}
          link2={"../../../pages/css_tutorials/quarter_01/CssMeasureColors"}
          name1={"CSS Basics"}
          name2={"CSS Measure & Colors"}
        />
      </div>
    </div>
  );
}

export default CssSelectorsContent;
