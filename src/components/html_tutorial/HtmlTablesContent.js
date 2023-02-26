import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";
import Images from "../images/Images";

function HtmlTablesContent() {
  return (
    <div className="main">
      <h1>HTML TABLES</h1>
      <div className="introduction">
        <p>
          From its first versions, HTML included support for creating data
          tables in web pages. In addition to being simple, the HTML defined
          model is very flexible and quite complete.
        </p>
        <p>
          Tables in HTML use the same concepts of rows, columns, headers, and
          titles that are used in any other document publishing environment.
        </p>
        <p>
          HTML tables can contain single elements, row and column groupings,
          table headers and footers, subdivisions, multiple headers, and other
          complex elements.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Why tables?</h2>
        <p>
          Although HTML tables are easy to understand and use, they are one of
          the most controversial elements of HTML. The problem with tables is
          that they are not always usedproperly. Although it may seem obvious,
          tables should be used to display informationtabular.<br></br>
          <br></br>
          Until a few years ago, tables were also used to define the structure
          of web pages. The header of the page was a row of a large table, the
          footer was another row ofthis table and the content area was made up
          of several columns within that largeboard.<br></br>
          <br></br>
          Although some bad designers still use tables today to define the
          entire structure of web pages, it is an outdated technique and not
          recommended. The reason is that the HTML code is overcomplicated and
          its maintenance is very complex. The correct solution to define the
          structure of the pages consists in the use of sheets of CSS styles.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Table tags</h2>
        <table>
          <tr>
            <td>Tag</td>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>&lt;table&gt;</td>
            <td>
              summary = "text". Allows you to describe the content of the table.
            </td>
            <td>Used to define data tables.</td>
          </tr>
          <tr>
            <td>&lt;tr&gt;</td>
            <td>-</td>
            <td>It is used to define each row of the data tables.</td>
          </tr>
          <tr>
            <td>&lt;td&gt;</td>
            <td>
              abbr = "text" - Allows you to describe the content of the cell.
              headers = "list_of_id" - Indicates the cells that act as headers
              for this cell. scope = "col, row, colgroup, rowgroup" - Indicates
              the cells for which this cell will be the header. Example:
              scope="col" indicates that this cell is the header of all theother
              cells that are in the same column.
            </td>
            <td>
              It is used to define each of the cells that make up the rows of a
              table, that is, the columns of the table.
            </td>
          </tr>
          <tr>
            <td>&lt;th&gt;</td>
            <td>The same as &lt;td&gt;.</td>
            <td>
              It is used to define the cells that are the head of a row or a
              column of the table.
            </td>
          </tr>
          <tr>
            <td>&lt;caption&gt;</td>
            <td>-</td>
            <td>It is used to define the legend or title of a table.</td>
          </tr>
          <tr>
            <td colSpan={3}>colspan and rowspan (attributes)</td>
          </tr>
          <tr>
            <td colSpan={3}>
              colspan = "number" - Number of columns this cell occupies.
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              rowspan = "number" - Number of rows this cell occupies.
            </td>
          </tr>
        </table>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Basic tables</h2>
        <p>
          The simplest HTML tables are defined with three tags: &lt;table&gt; to
          create the table, &lt;tr&gt;to create each row and &lt;td&gt; to
          create each column.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            "<html>\n<head>\n<title>Basic tables</title>\n</head>\n<body>\n\n<h1>List of courses</h1>\n<table>\n   <tr>\n    <td><strong>Course</strong></td>\n    <td><strong>Hours</strong></td>\n    <td><strong>Schedule</strong></td>\n   </tr>\n   <tr>\n    <td>CSS</td>\n    <td>20</td>\n    <td>16:00 - 20:00</td>\n   </tr>\n   <tr>\n    <td>HTML</td>\n    <td>20</td>\n    <td>16:00 - 20:00</td>\n   </tr>\n   <tr>\n    <td>JS</td>\n    <td>60</td>\n    <td>16:00 - 20:00</td>\n   </tr>\n</table>\n\n</body>\n</html>"
          }
          containerHeight={"795px"}
          insideHeight={"85%"}
        />
        <Images file={"BasicTables"} />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Merging columns and rows</h2>
        <p>
          Complex tables have an irregular structure that joins several columns
          to form a wide column or joins several rows to form a row that is
          taller than the others. To merge rows or columns, the rowspan and
          colspan attributes are used respectively.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n<title>Merging columns and rows</title>\n</head>\n<body>\n\n<h1>Merging columns</h1>\n<table border="1">\n <tr>\n    <td colspan="2">A</td>\n </tr>\n <tr>\n    <td>B</td>\n    <td>C</td>\n  </tr>\n</table>\n\n<h1>Merging rows</h1>\n<table border="1">\n <tr>\n    <td>A</td>\n    <td rowspan="2">B</td>\n </tr>\n <tr>\n    <td>C</td>\n </tr>\n</table>\n\n</body>\n</html>'
          }
          containerHeight={"770px"}
          insideHeight={"85%"}
        />
        <Images file={"Merging"} />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Advanced tables</h2>
        <p>
          The component parts of complex tables are defined by the
          &lt;thead&gt;, &lt;tbody&gt;, and &lt;tfoot&gt; tags. The header of
          the table is defined with the tag &lt;thead&gt;, the footer of the
          table isdefined by &lt;tfoot&gt; and each data section is defined by a
          &lt;tbody&gt; tag.<br></br><br></br>
          Each table can contain only one header and one footer, but can include an unlimited number of sections. If a header and/or footer is defined, the &lt;thead&gt; and/or &lt;tfoot&gt; tagsmust be placed immediately before any &lt;tbody&gt; tag
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n<title>Advanzed tables</title>\n</head>\n<body>\n\n<h3>Sales Analysis</h3>\n<table border="1" summary="Annual sales analysis">\n   <caption>Annual sales analysis</caption>\n   <thead>\n      <tr>\n        <th rowspan="2" scope="col">Year</th>\n        <th colspan="4" scope="col">sales expansion</th>\n      </tr>\n      <tr>\n        <th scope="col">Product A</th>\n        <th scope="col">Product B</th>\n        <th scope="col">Product C</th>\n        <th scope="col">Product D</th>\n      </tr>\n   </thead>\n   <tfoot>\n      <tr>\n        <th rowspan="2" scope="col">Year</th>\n        <th scope="col">Product A</th>\n        <th scope="col">Product B</th>\n        <th scope="col">Product C</th>\n        <th scope="col">Product D</th>\n      </tr>\n      <tr>\n        <th colspan="4" scope="col">sales expansion</th>\n      </tr>\n   </tfoot>\n   <tbody>\n      <tr>\n        <th scope="row">N-3</th>\n          <td>-</td>\n          <td>-</td>\n          <td>-</td>\n          <td>-</td>\n      </tr>\n      <tr>\n        <th scope="row">N-2</th>\n          <td>3</td>\n          <td>5</td>\n          <td>8</td>\n          <td>4</td>\n      </tr>\n      <tr>\n        <th scope="row">N-1</th>\n          <td>4</td>\n          <td>4</td>\n          <td>7</td>\n          <td>3</td>\n      </tr>\n      <tr>\n        <th scope="row">N</th>\n          <td>5</td>\n          <td>7</td>\n          <td>6</td>\n          <td>2</td>\n      </tr>\n   </tbody>\n</table>\n\n</body>\n</html>'
          }
          containerHeight={"1540px"}
          insideHeight={"93%"}
        />
        <Images file={"AdvancedTable"} />
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/html_tutorials/HtmlBasics"}
        link2={"../../../pages/html_tutorials/HtmlLinks"}
        name1={"Basics"}
        name2={"Links"}
      />
    </div>
  );
}

export default HtmlTablesContent;
