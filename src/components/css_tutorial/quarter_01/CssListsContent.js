import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";
import "./css/CssTutorialStyles.css";

function CssListsContent() {
  return (
    <div className="main">
      <h1>CSS LISTS</h1>
      <hr></hr>
      <div className="content-code">
        <h2>List-style-type</h2>
        <p>
          CSS defines several properties to control the type of bullet that
          lists display, as well as being able to control the position of the
          bullet itself. The basic property is the one that controls the type of
          bullet that is displayed and is called list-style-type.
          <br></br>
          <br></br>
          <ul>
            <li>
              The graphic values ​​are <strong>disc, circle, and square</strong>
              , and display a filled circle, an empty circle, and a filled
              square as a bullet, respectively.
            </li>
            <li>
              Numeric values ​​are made up of{" "}
              <strong>
                decimal, decimal-leading-zero, lower-roman, upper-roman,
                armenian, and georgian
              </strong>
              .
            </li>
            <li>
              Finally, alphanumeric values ​​are controlled by{" "}
              <strong>
                lower-latin, lower-alpha, upper-latin, upper-alpha, and
                lower-greek
              </strong>
              .
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"CSS"}
          code={"ul { list-style-type: square; }"}
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "disc" }}>
              <li>list-style-type: disc;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "circle" }}>
              <li>list-style-type: circle;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "square" }}>
              <li>list-style-type: square;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "lower-roman" }}>
              <li>list-style-type: lower-roman;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "lower-greek" }}>
              <li>list-style-type: lower-greek;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "upper-latin" }}>
              <li>list-style-type: upper-latin;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "lower-latin" }}>
              <li>list-style-type: lower-latin;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "armenian" }}>
              <li>list-style-type: armenian;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "upper-alpha" }}>
              <li>list-style-type: upper-alpha;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStyleType: "decimal-leading-zero" }}>
              <li>list-style-type: decimal-leading-zero;</li>
              <li>Element 1</li>
              <li>Element 2</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <h2>List-style-position</h2>
        <p>
          The list-style-position property allows you to control the placement
          of the bullets.
          <br></br>
          <br></br>
          The difference between the <strong>outside and inside</strong> values
          ​​becomes apparent when the elements contain a lot of text.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "ul { list-style-position: outside; }\n\nul { list-style-position: inside; }"
          }
          containerHeight={"190px"}
          insideHeight={"40%"}
        />
        <div className="examples">
          <div style={{ border: "solid black" }}>
            <ul style={{ listStylePosition: "outside" }}>
              <li>list-style-position: outside;</li>
              <li>
                Consequat enim aute nostrud aliqua culpa do non nostrud officia
                consequat. Tempor proident minim voluptate velit duis laboris
                elit amet reprehenderit nisi tempor eu et. Aute fugiat irure
                mollit velit commodo. Adipisicing aliqua non consequat amet ad
                dolor mollit incididunt incididunt eiusmod pariatur. Incididunt
                irure nulla sit nostrud nulla tempor aliquip culpa ut mollit
                sint laborum anim commodo. Incididunt ex adipisicing sint
                consectetur laboris. Labore enim commodo qui excepteur commodo
                do quis.
              </li>
              <li>
                Laboris incididunt ut nisi mollit sint. Aute quis velit esse non
                esse minim voluptate non dolore ex. Occaecat enim in elit
                pariatur labore ullamco nulla adipisicing tempor voluptate. Quis
                non ea velit est fugiat laborum minim mollit. Do enim eu veniam
                eu ipsum sit duis incididunt aliquip culpa reprehenderit mollit
                elit aliquip. Qui ut voluptate nisi officia nisi sint commodo
                eiusmod esse cillum consectetur Lorem in.
              </li>
            </ul>
          </div>
          <div style={{ border: "solid black" }}>
            <ul style={{ listStylePosition: "inside" }}>
              <li>list-style-position: inside;</li>
              <li>
                Consequat enim aute nostrud aliqua culpa do non nostrud officia
                consequat. Tempor proident minim voluptate velit duis laboris
                elit amet reprehenderit nisi tempor eu et. Aute fugiat irure
                mollit velit commodo. Adipisicing aliqua non consequat amet ad
                dolor mollit incididunt incididunt eiusmod pariatur. Incididunt
                irure nulla sit nostrud nulla tempor aliquip culpa ut mollit
                sint laborum anim commodo. Incididunt ex adipisicing sint
                consectetur laboris. Labore enim commodo qui excepteur commodo
                do quis.
              </li>
              <li>
                Laboris incididunt ut nisi mollit sint. Aute quis velit esse non
                esse minim voluptate non dolore ex. Occaecat enim in elit
                pariatur labore ullamco nulla adipisicing tempor voluptate. Quis
                non ea velit est fugiat laborum minim mollit. Do enim eu veniam
                eu ipsum sit duis incididunt aliquip culpa reprehenderit mollit
                elit aliquip. Qui ut voluptate nisi officia nisi sint commodo
                eiusmod esse cillum consectetur Lorem in.
              </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <h2>List-style-image</h2>
        <p>
          When you need to customize the appearance of the bullets, you should
          use the list-style-image property, which allows you to display your
          own image instead of an automatic bullet.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"ul { list-style-image: url(images/rose.png); }"}
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <div style={{ border: "solid black" }}>
            <ul className="ul-style-image">
              <li>Element 1</li>
              <li>Element 2</li>
              <li>Element 3</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssLinks"}
          link2={"../../../pages/css_tutorials/quarter_01/CssTables"}
          name1={"Links"}
          name2={"Tables"}
        />
      </div>
    </div>
  );
}

export default CssListsContent;
