import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function HtmlFormsContent() {
  return (
    <div className="main">
      <h1>HTML FORMS</h1>
      <div className="introduction">
        <p>
          HTML includes elements for creating web applications. The HTML
          standard allows you to create forms for users to interact with web
          applications.
        </p>
        <p>
          HTML includes enough form elements to create everything from the
          simple forms used by search engines to the complex forms used by more
          advanced applications.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Basic forms</h2>
        <p>
          The simplest forms can be created using only two tags: &lt;form&gt;
          and &lt;input&gt;.
          <br></br>
          <br></br>
          The &lt;form&gt; tag encloses all the contents of the form (buttons,
          text boxes, drop-down lists) and the &lt;input&gt; tag allows you to
          define several different types of elements (buttons andtext boxes).
        </p>
        <table>
          <tr>
            <td colSpan={2}>The &lt;form&gt; tag</td>
          </tr>
          <tr>
            <td>Attribute</td>
            <td>Attribute description</td>
          </tr>
          <tr>
            <td>action = "url"</td>
            <td>
              Indicates the URL that is responsible for processing the form
              data.
            </td>
          </tr>
          <tr>
            <td>method = "POST or GET"</td>
            <td>HTTP method used when submitting the form.</td>
          </tr>
          <tr>
            <td>
              enctype = "application/x-www-form-urlencoded or
              multipart/form-data"
            </td>
            <td>
              Type of encoding used when submitting the form to the server.
            </td>
          </tr>
          <tr>
            <td>accept = "content_type"</td>
            <td>
              Comma separated list of all file types accepted by the server.
            </td>
          </tr>
          <tr>
            <td colSpan={2}>The &lt;input&gt; tag</td>
          </tr>
          <tr>
            <td>Attribute</td>
            <td>Attribute description</td>
          </tr>
          <tr>
            <td>
              type = "text | password | checkbox | radio | submit | reset | file
              | hidden | image | button"
            </td>
            <td>Indicates the type of control that is included in the form.</td>
          </tr>
          <tr>
            <td>name = "text"</td>
            <td>
              Assign a name to the control (it is essential for the server to be
              able to process the form).
            </td>
          </tr>
          <tr>
            <td>value = "text"</td>
            <td>Initial value of the control.</td>
          </tr>
          <tr>
            <td>size = "measure_unit"</td>
            <td>
              Initial size of the control (for the text and password fields it
              refers to the number of characters, in the rest of the controls it
              refers to theirpixel size).
            </td>
          </tr>
          <tr>
            <td>maxlength = "number"</td>
            <td>
              Maximum number of characters for text and password controls.
            </td>
          </tr>
          <tr>
            <td>checked = "checked"</td>
            <td>
              For checkbox and radiobutton controls, it allows you to indicate
              which option appears preselected.
            </td>
          </tr>
          <tr>
            <td>disabled = "disabled"</td>
            <td>
              The control appears disabled and its value is not sent to the
              server along with the rest of the data.
            </td>
          </tr>
          <tr>
            <td>readonly = "readonly"</td>
            <td>The content of the control cannot be modified.</td>
          </tr>
          <tr>
            <td>src = "url"</td>
            <td>
              For the control that allows you to create buttons with images,
              indicates the URL of the image that is used as the form button.
            </td>
          </tr>
          <tr>
            <td>alt = "text"</td>
            <td>Control description.</td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<html>\n<head>\n <title>Basic forms</title>\n</head>\n<body>\n\n <h3>Basic form example</h3>\n <form action="http://www.example.es/forms.php" method="post">\n   Write your name: \n   <input type="text" name="name" value="">\n   <br>\n   <input type="submit" value="send">\n  </form>\n\n</body>\n</html>'
          }
          containerHeight={"480px"}
          insideHeight={"76%"}
        />
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Text box</h2>
        <p>
          The <strong>type</strong> attribute differentiates each of the ten
          controls that can be created with the &lt;input&gt; tag. The value
          given in the <strong>name</strong> attribute is the name that the
          server application uses to get the value of this form field.
          <br></br>
          <br></br>
          The <strong>value</strong> attribute is used to set the initial value
          of the text box.
        </p>
        <CodeContainer
          title={"HTML"}
          code={'Name <br />\n<input type="text" name="name" value="" />'}
          containerHeight={"180px"}
          insideHeight={"36%"}
        />
        <div className="examples">
          <br></br>
          <label>Name </label> <br></br>
          <input type="text" name="name" value="" />
          <br></br>
          <br></br>
        </div>
        <hr></hr>
        <h2>Password box</h2>
        <p>
          The only difference between this control and the normal text box is
          that the text that the user types in a password box is not displayed
          on the screen. Instead, browsers hide the text using asterisks or
          circles, making it ideal for typing passwords and other data
          sensitive.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            'Password <br />\n<input type="Password" name="Password" value="" />'
          }
          containerHeight={"180px"}
          insideHeight={"36%"}
        />
        <div className="examples">
          <br></br>
          <label>Password </label> <br></br>
          <input type="Password" name="Password" value="" />
          <br></br>
          <br></br>
        </div>
        <hr></hr>
        <h2>Checkbox</h2>
        <p>
          Checkboxes are form controls that allow the user to select and
          deselect options individually. Although sometimes several checkbox
          together, each of them is completely independent from the rest.
          <br></br>
          <br></br>
          If you want to show a checkbox selected by default, the{" "}
          <strong>checked</strong> attribute is used. If the value of the
          attribute is <strong>checked</strong>, the checkbox is shown selected.
          In any other case, the checkbox remains unselected.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<input name=n"management_position" type="checkbox" value="management" /> Management <br>\n<input name="technician_position" type="checkbox" value="technician" /> Technician <br>\n<input name="employee_position" type="checkbox" value="employee" checked="checked" /> Employee'
          }
          containerHeight={"200px"}
          insideHeight={"40%"}
        />
        <div className="examples">
          <input
            name="management_position"
            type="checkbox"
            value="management"
          />{" "}
          Management <br />
          <input
            name="technician_position"
            type="checkbox"
            value="technician"
          />{" "}
          Technician <br />
          <input
            name="employee_position"
            type="checkbox"
            value="employee"
            checked="checked"
          />{" "}
          Employee
        </div>
        <hr></hr>
        <h2>Radiobutton</h2>
        <p>
          Radiobutton type controls are similar to checkbox type controls, but
          they have one very important difference: they are mutually exclusive.
          Radiobuttons are used when the user can only choose one option among
          the different related options that are present. Every time an option
          is selected, the other option is automatically deselected that I was
          selecting.
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            'Gender<br>\n<input type="radio" name="Gender" value="man" checked="checked"/> Man<br>\n<input type="radio" name="Gender" value="woman"/> Woman'
          }
          containerHeight={"200px"}
          insideHeight={"40%"}
        />
        <div className="examples">
          <label>Gender</label> <br></br>
          <input
            type={"radio"}
            name="Gender"
            value="man"
            checked="checked"
          />{" "}
          Man <br></br>
          <input type={"radio"} name="Gender" value={"woman"} /> Woman
        </div>
        <hr></hr>
        <h2>Form submit button</h2>
        <p>
          The value of the <strong>type</strong> attribute for this form control
          is <strong>submit</strong>. The browser is responsible for
          automatically sending the data when the user clicks on this type of
          button. The value of <strong>value</strong> attribute is the text
          displayed by the button. If the <strong>value</strong> attribute is
          not set, the browser displays the predefined text Send Query.
        </p>
        <CodeContainer
          title={"HTML"}
          code={'<input type="submit" name="search" value="Search" />'}
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <br></br>
          <input type="submit" name="search" value="Search" />
          <br></br>
          <br></br>
        </div>
        <hr></hr>
        <h2>Attached files</h2>
        <p>
          The forms also allow you to attach files to upload them to the server.
          Although from the point of view of HTML and the browser there is no
          limitation on the number, type or total size of files that can be
          attached, all servers add restrictions bysecurity reasons.
        </p>
        <CodeContainer
          title={"HTML"}
          code={'<input type="file" name="attached" />'}
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <br></br>
          <input type="file" name="attached" />
          <br></br>
          <br></br>
        </div>
        <hr></hr>
        <h2>Button</h2>
        <p>
          Some complex forms need more advanced buttons than submit data
          (type="submit") and reset the form (type="reset"). For this reason,
          the HTML standard defines a button of generic type.
          <br></br>
          <br></br>
          These types of buttons are only useful when used in conjunction with
          the JavaScript programming language. If the page includes JavaScript
          code, buttons of this type can be programmed to perform any complex
          task when clicked on.
        </p>
        <CodeContainer
          title={"HTML"}
          code={'<input type="button" name="save" value="Save changes" />'}
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <div className="examples">
          <br></br>
          <input type="button" name="save" value="Save changes" />
          <br></br>
          <br></br>
        </div>
        <hr></hr>
        <h2>Structured forms</h2>
        <table>
          <tr>
            <td>Tag</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>&lt;fieldset&gt;</td>
            <td>It is used to logically group several fields of a form.</td>
          </tr>
          <tr>
            <td>&lt;legend&gt;</td>
            <td>
              It is used to define the title or legend of a set of form fields
              grouped with the fieldset tag.
            </td>
          </tr>
          <tr>
            <td>&lt;label&gt;</td>
            <td>
              It is used to define the title or legend of the fields defined in
              a form. for = "id_de_elemento" - Indicates the ID of the form
              field for which this element is its title
            </td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<form>\n    <fieldset>\n     <legend>Personal information</legend>\n     <label>Name</label><br>\n     <input type="text" name="anme" value=""><br>\n     <label>Surnames</label><br>\n     <input type="text" name="surname" value=""><br>\n     <label>DNI</label><br>\n     <input type="text" name="dni" value="" size="10" maxlength="9">\n    </fieldset>\n    <fieldset>\n     <legend>Information data</legend>\n     <label>Username</label><br>\n     <input type="text" name="nombre" value="" maxlength="10"><br>\n     <label>Password</label><br>\n     <input type="password" name="password" value="" maxlength="10"><br>\n     <label>Repeat password</label><br>\n     <input type="password" name="password2" value="" maxlength="10">\n    </fieldset>\n</form>'
          }
          containerHeight={"550px"}
          insideHeight={"80%"}
        />
        <div className="examples">
          <br></br>
          <form>
            <fieldset>
              <legend>Personal information</legend>
              <label>Name</label> <br />
              <input type="text" name="anme" value="" />
              <br />
              <label>Surnames</label> <br />
              <input type="text" name="surname" value="" />
              <br />
              <label>DNI</label> <br />
              <input type="text" name="dni" value="" size="10" maxlength="9" />
            </fieldset>
            <fieldset>
              <legend>Information data</legend>
              <label>Username</label>
              <br />
              <input type="text" name="nombre" value="" maxlength="10" />
              <br />
              <label>Password</label>
              <br />
              <input type="password" name="password" value="" maxlength="10" />
              <br />
              <label>Repeat password</label>
              <br />
              <input type="password" name="password2" value="" maxlength="10" />
            </fieldset>
            <br></br>
          </form>
        </div>
        <hr></hr>
        <h2>Other form elements</h2>
        <table>
          <tr>
            <td colSpan={2}>The &lt;select&gt; tag</td>
          </tr>
          <tr>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>
              rows = "number" - Number of text rows to display in the textarea.
              cols = "number" - Number of characters to display in each row of
              the textarea
            </td>
            <td>It is used to include a text area in a form.</td>
          </tr>
          <tr>
            <td colSpan={2}>The &lt;textarea&gt; tag</td>
          </tr>
          <tr>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>
              size = "number" - Number of rows to display in the list. multiple
              = "multiple" - If included, it is allowed to select more than one
              element
            </td>
            <td>Used to include a dropdown list in a form.</td>
          </tr>
          <tr>
            <td colSpan={2}>The &lt;optgroup&gt; tag</td>
          </tr>
          <tr>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>
              selected = "selected" - Indicates if the element appears selected
              by default when the page is loaded. value = "text" - The value
              that is sent to the server when the user chooses that option
            </td>
            <td>Used to define each item in a dropdown list.</td>
          </tr>
          <tr>
            <td colSpan={2}>The &lt;option&gt; tag</td>
          </tr>
          <tr>
            <td>Attribute</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>
              label = "text" - Text to display as the title of the option
              grouping
            </td>
            <td>
              Used to define a logical grouping of options from a drop-down
              list.
            </td>
          </tr>
        </table>
        <br></br>
        <br></br>
        <CodeContainer
          title={"HTML"}
          code={
            '<form>\n   <label for="name">Product name</label><br>\n   <input type="text" id="name" name="name" value=""><br>\n   <label for="description">Product description</label><br>\n   <textarea id="description" name="description" cols="40" rows="5"></textarea>\n</form>\n\n<label for="so">Operative system</label><br>\n<select id="so" name="so">\n   <option value="" selected="selected">- select -</option>\n   <option value="windows">Windows</option>\n   <option value="mac">Mac</option>\n   <option value="linux">Linux</option>\n   <option value="other">Other</option>\n</select>\n<br>\n<br>\n<label for="so2">Operative system</label><br>\n<select id="so2" name="so2" size="5">\n   <option value="windows" selected="selected">Windows</option>\n   <option value="mac">Mac</option>\n   <option value="linux">Linux</option>\n   <option value="other">Other</option>\n</select>\n<br>\n<br>\n<label for="so3">Operative system</label><br>\n<select id="so3" name="so3" size="5" multiple="multiple">\n   <option value="windows" selected="selected">Windows</option>\n   <option value="mac">Mac</option>\n   <option value="linux">Linux</option>\n   <option value="other">Other</option>\n</select>\n\n<form>\n<br>\n   <label for="program">Program selected</label>\n   <br>\n   <select id="program" name="program">\n      <optgroup label="Operative system">\n       <option value="Windows" selected="selected">Windows</option>\n       <option value="Mac">Mac</option>\n       <option value="Linux">Linux</option>\n       <option value="Other">Other</option>\n      </optgroup>\n      <optgroup label="Searchers">\n       <option value="Internet Explorer" selected="selected">Internet Explorer</option>\n       <option value="Firefox">Firefox</option>\n       <option value="Safari">Safari</option>\n       <option value="Opera">Opera</option>\n       <option value="Other">Other</option>\n      </optgroup>\n  </select>\n</form>'
          }
          containerHeight={"1280px"}
          insideHeight={"91%"}
        />
        <div className="examples">
          <br></br>
          <form>
            <label for="nombre">Product name</label> <br />
            <input type="text" id="nombre" name="nombre" value="" /> <br />
            <label for="description">Product description</label> <br />
            <textarea
              id="description"
              name="description"
              cols="20"
              rows="5"
            ></textarea>
          </form>
          <label for="so">Operative system</label> <br />
          <select id="so" name="so">
            <option value="" selected="selected">
              - select -
            </option>
            <option value="windows">Windows</option>
            <option value="mac">Mac</option>
            <option value="linux">Linux</option>
            <option value="other">Other</option>
          </select>
          <br />
          <br />
          <label for="so2">Operative system</label> <br />
          <select id="so2" name="so2" size="5">
            <option value="windows" selected="selected">
              Windows
            </option>
            <option value="mac">Mac</option>
            <option value="linux">Linux</option>
            <option value="other">Other</option>
          </select>
          <br />
          <br />
          <label for="so3">Operative system</label> <br />
          <select id="so3" name="so3" size="5" multiple="multiple">
            <option value="windows" selected="selected">
              Windows
            </option>
            <option value="mac">Mac</option>
            <option value="linux">Linux</option>
            <option value="other">Other</option>
          </select>
          <form>
            <br />
            <label for="program">Program selected</label> <br />
            <select id="program" name="program">
              <optgroup label="Operative system">
                <option value="Windows" selected="selected">
                  Windows
                </option>
                <option value="Mac">Mac</option>
                <option value="Linux">Linux</option>
                <option value="Other">Other</option>
              </optgroup>
              <optgroup label="Searchers">
                <option value="Internet Explorer" selected="selected">
                  Internet Explorer
                </option>
                <option value="Firefox">Firefox</option>
                <option value="Safari">Safari</option>
                <option value="Opera">Opera</option>
                <option value="Other">Other</option>
              </optgroup>
            </select>
          </form>
          <br></br>
          <br></br>
        </div>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/html_tutorials/HtmlLinks"}
        link2={"../../../pages/html_tutorials/HtmlHome"}
        name1={"Links"}
        name2={"Home"}
      />
    </div>
  );
}

export default HtmlFormsContent;
