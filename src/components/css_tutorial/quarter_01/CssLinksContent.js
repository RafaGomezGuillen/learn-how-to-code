import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";
import "./css/CssTutorialStyles.css"

function CssLinksContent() {
  return (
    <div className="main">
      <h1>CSS LINKS</h1>
      <hr></hr>
      <div className="content-code">
        <h2>Basic styles</h2>
        <p>
          The simplest styles that can be applied to links are those that modify
          their font size, color, and decoration of the link text.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "a { color: #CC0000; }\n\na { text-decoration: none; }\n\na { font-weight: bold; font-size: 1.3em; }"
          }
          containerHeight={"240px"}
          insideHeight={"50%"}
        />
        <div className="examples">
          <p style={{ border: "solid black" }}>
            <a href="#">Default link</a>
          </p>
          <p style={{ border: "solid black" }}>
            <a style={{ color: "#CC0000" }} href="#">
              Link with color
            </a>
          </p>
          <p style={{ border: "solid black" }}>
            <a style={{ textDecoration: "none" }} href="#">
              Link with no decoration
            </a>
          </p>
          <p style={{ border: "solid black" }}>
            <a style={{ fontWeight: "bold", fontSize: "1.3em" }} href="#">
              Important link
            </a>
          </p>
        </div>
        <hr></hr>
        <h2>Pseudo-classes</h2>
        <p>
          CSS also allows you to apply different styles to the same link
          depending on its state. In this way, it is possible to change the
          appearance of a link when, for example, the user passes the mouse over
          it or when the user clicks on that link.
          <br></br>
          <br></br>
          <ul>
            <li>
              <strong>:link</strong>: Applies styles to links that point to
              pages or resources that have not yet been visited by the user.
            </li>
            <li>
              <strong>:visited</strong>: Applies styles to links pointing to
              resources that have been previously visited by the user. The
              history of visited links is automatically deleted from time to
              time and the user can also delete it manually.
            </li>
            <li>
              <strong>:hover</strong>: Applies styles to the link over which the
              user has positioned the mouse pointer.
            </li>
            <li>
              <strong>:active</strong>: Applies styles to the link that the user
              is clicking on. Styles are only applied from the time the user
              clicks the mouse button until they release it, so this is usually
              a few tenths of a second.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "a:link { color: red; }\n\na:visited { color: green; }\n\na:hover { color: grey; }\n\na:active { color: coral; }"
          }
          containerHeight={"280px"}
          insideHeight={"60%"}
        />
        <div className="examples">
          <p style={{ border: "solid black" }}>
            <a href="#" className="pseudo-a-1">
              Link :link. Color red
            </a>
          </p>
          <p style={{ border: "solid black" }}>
            <a href="#" className="pseudo-a-2">
              Link :visited. Color: green
            </a>
          </p>
          <p style={{ border: "solid black" }}>
            <a href="#" className="pseudo-a-3">
              Link :hover. Color: grey
            </a>
          </p>
          <p style={{ border: "solid black" }}>
            <a href="#" className="pseudo-a-4">
              Link :active. Color: coral
            </a>
          </p>
        </div>
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssText"}
          link2={"../../../pages/css_tutorials/quarter_01/CssLists"}
          name1={"Text"}
          name2={"Lists"}
        />
      </div>
    </div>
  );
}

export default CssLinksContent;
