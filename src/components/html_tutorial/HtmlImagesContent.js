import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function HtmlImagesContent() {
  return (
    <div className="main">
      <h1>HTML IMAGES</h1>
      <div className="introduction">
        <p>
          Images are one of the most important elements of web pages. In fact,
          practically all web pages contain some image and most include dozens
          of images.
        </p>
        <p>
          The content images are those that provide information and complement
          the textual information.
        </p>
        <p>
          Ornament images are used to make rounded edges, to display small icons
          in item lists, to display backgrounds of page etc.
        </p>
        <p>
          Content images are included directly in the HTML code using the
          &lt;img&gt; tag, and adornment images should not be included in the
          HTML code, but rather CSS style sheets should be used to display them.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Images</h2>
        <p>
          The two required attributes are src and alt. The src attribute is
          similar to the href attribute of links in that it sets the URL of the
          image to display on the page. The indicated URLs can be absolute or
          relative. The alt attribute allows you to describe the content of the
          image using a short text.
        </p>
        <table>
          <tr>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>src = "url"</td>
            <td>Indicates the URL of the displayed image.</td>
          </tr>
          <tr>
            <td>alt = "text"</td>
            <td>A short description of the image.</td>
          </tr>
          <tr>
            <td>name = "text"</td>
            <td>Name of the image.</td>
          </tr>
          <tr>
            <td>height = "unit of measurement"</td>
            <td>
              Indicates the height at which the image should be displayed (it
              does not have to match the original height of the image).
            </td>
          </tr>
          <tr>
            <td>width = "unit of measurement"</td>
            <td>
              Indicates the width at which the image should be displayed (it
              does not have to match the original width of the image).
            </td>
          </tr>
        </table>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Images example</h2>
        <p>This is one example with all the attribute explained.</p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n<title>Images</title>\n</head>\n<body>\n\n<img src="dog.png" alt="A golden retriever dog" name="my dog" width="330" height="220">\n\n</body>\n</html>'
          }
          containerHeight={"340px"}
          insideHeight={"65%"}
        />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Image mapping</h2>
        <p>
          An image map allows you to define different "clickable" areas within
          an image. The user can click on each of the defined zones and each of
          them can point to a different URL. Following the previous example, a
          single image showing a map of all continents you can define a
          different zone for each continent. In this way, the user can click on
          the area corresponding to each continent so that the browser display
          the page containing available trips to that destination.<br></br>
          <br></br>
          The &lt;map&gt; tag is then used to define the zones or regions of the
          image. Each zone is defined by the &lt;area&gt; tag.
        </p>
        <table>
          <tr>
            <td colSpan={2}>&lt;map&gt;</td>
          </tr>
          <tr>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>name = "text"</td>
            <td>
              Name that uniquely identifies the defined map (it is mandatory to
              indicate a unique name).
            </td>
          </tr>
          <tr>
            <td colSpan={2}>&lt;area&gt;</td>
          </tr>
          <tr>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>href = "url"</td>
            <td>URL accessed by clicking on the area.</td>
          </tr>
          <tr>
            <td>nohref = "nohref"</td>
            <td>Used for areas that are not selectable.</td>
          </tr>
          <tr>
            <td>shape = "default | rect | circle | poly"</td>
            <td>
              Indicates the type of area being defined (whole image,
              rectangular, circular, or polygonal).
            </td>
          </tr>
          <tr>
            <td>coords = "list of numbers"</td>
            <td>
              Rectangular = X1,Y1,X2,Y2 (X and Y coordinates of the top left
              corner and X and Y coordinates of the bottom right corner).
              Circular= X1,Y1,R (X and Y coordinates of the center and radius of
              the circle). Traverse =X1,Y1,X2,Y2,...,XnYn (coordinates of the
              vertices of the polygon).
            </td>
          </tr>
        </table>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Image mapping example</h2>
        <p>This is one example with all the attribute explained.</p>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n<title>Map zone</title>\n</head>\n<body>\n\n<img src="image.gif" usemap="#map_zone">\n<map name="map_zone">\n    <area shape="rect" coords="20,25,84,113" href="rectangle.html">\n    <area shape="polygon" coords="90,25,162,26,163,96,89,25,90,24" href="triangle.html">\n    <area shape="circle" coords="130,114,29" href="circle.html"><area shape="rect" coords="19,156,170,211" href="mailto:rectangle@direction.com">\n    <area shape="default" nohref="nohref">\n</map>\n\n</body>\n</html>'
          }
          containerHeight={"480px"}
          insideHeight={"75%"}
        />
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/html_tutorials/HtmlLists"}
        link2={"../../../pages/html_tutorials/HtmlTables"}
        name1={"Lists"}
        name2={"Tables"}
      />
    </div>
  );
}

export default HtmlImagesContent;
