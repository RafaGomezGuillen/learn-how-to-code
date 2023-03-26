import React from "react";
import CodeContainer from "../../code_container/CodeContainer";
import Redirection from "../../redirection/Redirection";
import "./css/CssTutorialStyles.css";

function CssTablesContent() {
  return (
    <div className="main">
      <h1>CSS TABLES</h1>
      <hr></hr>
      <div className="content-code">
        <h2>border-collapse</h2>
        <p>
          The property that allows you to select the border pattern is
          border-collapse.
          <br></br>
          <br></br>
          The <strong>collapse</strong> model automatically merges the borders
          of adjacent cells, while the <strong>separate</strong> model forces
          each cell to show all four of its borders. By default, browsers use
          the separate model.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "table { border-collapse: collapse; }\n\ntable { border-collapse: separate; }"
          }
          containerHeight={"180px"}
          insideHeight={"40%"}
        />
        <div className="examples">
          <br></br>
          <table id="collapse-example">
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <td>a</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>b</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>c</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>d</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </table>
          <br></br>
          <br></br>
          <table id="separate-example">
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <td>a</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>b</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>c</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>d</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </table>
          <br></br>
          <br></br>
        </div>
        <hr></hr>
        <h2>border-spacing</h2>
        <p>
          If you opt for the separate model (which is the one that is applied
          unless otherwise indicated) you can use the border-spacing property to
          control the separation between the borders of each cell.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"table { border-spacing: 10px; border-collapse: separate; }"}
          containerHeight={"140px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <br></br>
          <table style={{ borderCollapse: "separate", borderSpacing: "10px" }}>
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <td>a</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>b</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>c</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>d</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>empty-cells</h2>
        <p>
          CSS defines other specific properties to control the appearance of
          tables. One of these is the treatment of empty cells in a table, which
          is controlled by the empty-cells property. This property only applies
          when the table's border model is of type separate.
        </p>
        <CodeContainer
          title={"CSS"}
          code={
            "table { empty-cells: hide; border-collapse: separate; }\n\ntable { empty-cells: show; border-collapse: separate; }"
          }
          containerHeight={"180px"}
          insideHeight={"40%"}
        />
        <div className="examples">
          <br></br>
          <table style={{ borderCollapse: "separate", emptyCells: "hide" }}>
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <td>a</td>
              <td>1</td>
              <td></td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>b</td>
              <td>1</td>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>c</td>
              <td></td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>d</td>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <br></br>
          <table style={{ borderCollapse: "separate", emptyCells: "show" }}>
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <td>a</td>
              <td>1</td>
              <td></td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>b</td>
              <td>1</td>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>c</td>
              <td></td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>d</td>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>caption-side</h2>
        <p>
          On the other hand, the title of the tables is established by means of
          the &lt;caption&gt; element, which by default is displayed above the
          contents of the table. The caption-side propertyallows you to control
          the position of the table title.
          <br></br>
          <br></br>
          The <strong>bottom</strong> value indicates that the table title
          should be displayed after the table contents.
        </p>
        <CodeContainer
          title={"CSS"}
          code={"table { caption-side: top; }\n\ntable { caption-side: bottom; }"}
          containerHeight={"180px"}
          insideHeight={"40%"}
        />
        <div className="examples">
          <br></br>
          <table style={{captionSide:"top"}}>
            <caption>Top</caption>
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <td>a</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>b</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>c</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>d</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </table>
          <br></br>
          <table>
            <caption>Bottom</caption>
            <tr>
              <td>A</td>
              <td>B</td>
              <td>C</td>
              <td>D</td>
              <td>E</td>
            </tr>
            <tr>
              <td>a</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>b</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>c</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>d</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <Redirection
          link1={"../../../pages/css_tutorials/quarter_01/CssLists"}
          link2={
            "../../../pages/css_tutorials/quarter_01/CssPositioningVisual"
          }
          name1={"Lists"}
          name2={"Positioning"}
        />
      </div>
    </div>
  );
}

export default CssTablesContent;
