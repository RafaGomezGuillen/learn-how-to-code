import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";
import Images from "../images/Images";

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
        <Images file={"BasicForm"} />
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
        <Images file={"TextBox"} />
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
        <Images file={"PasswordBox"} />
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
        <Images file={"CheckBox"} />
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
            'Gender<br>\n<input type="radio" name="Gender" value="man" checked="checked"> Man<br>\n<input type="radio" name="Gender" value="woman"> Woman'
          }
          containerHeight={"200px"}
          insideHeight={"40%"}
        />
        <Images file={"Radiobutton"} />
        <hr></hr>
        <h2>Form submit button</h2>
        <p>
          The value of the <strong>type</strong> attribute for this form control
          is <strong>submit</strong>. The browser is responsible for
          automatically sending the data when the user clicks on this type of
          button. The value of <strong>value</strong> attribute is the text
          displayed by the button. If the <strong>value</strong> attribute is
          not set, the browser displays the predefined text Send Query..
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<input type="submit" name="search" value="Search" />'
          }
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <Images file={"SubmitButton"} />
        <hr></hr>
        <h2>Attached files</h2>
        <p>
          The value of the <strong>type</strong> attribute for this form control
          is <strong>submit</strong>. The browser is responsible for
          automatically sending the data when the user clicks on this type of
          button. The value of <strong>value</strong> attribute is the text
          displayed by the button. If the <strong>value</strong> attribute is
          not set, the browser displays the predefined text Send Query..
        </p>
        <CodeContainer
          title={"HTML"}
          code={
            '<input type="submit" name="search" value="Search" />'
          }
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <Images file={"SubmitButton"} />
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
