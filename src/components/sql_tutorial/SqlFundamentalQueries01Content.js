import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlFundamentalQueries01Content() {
  return (
    <div className="main">
      <h1>SQL FUNDAMENTAL QUERIES PART ONE</h1>
      <hr></hr>
      <div className="content-code">
        <table>
          <tr>
            <td>
              <a href="#exists-database" className="links">
                detect if the database exists
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#datetime" className="links">
                data type date and time
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#default" className="links">
                default values
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#calculated-column" className="links">
                Calculated column and aliases
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#functions" className="links">
                Functions
              </a>
            </td>
          </tr>
        </table>
        <hr></hr>
        <h2 id="exists-database">Detect if the database exists</h2>
        <p>You could know if a database exists with this function...</p>
        <CodeContainer
          title={"SQL"}
          code={
            "if DB_ID('DATABASE_NAME') is null\n  SELECT 'it does not exists'\nelse\n  SELECT 'it does exists';\nGO"
          }
          containerHeight={"230px"}
          insideHeight={"51%"}
        />
        <hr></hr>
        <h2 id="datetime">Data type date and time</h2>
        <p>
          SQL Server has two types for storing DATE AND TIME values:
          <ul>
            <li>
              datetme: can store values ​​from January 1, 1753 to December 31,
              9999. (From 1787 is the USA Constitution)
            </li>
            <li>
              smalldatetme: The range is from January 1, 1900 to June 6, 2079.
            </li>
          </ul>
          Dates are enclosed in single quotes.To store date type values, "/",
          "-" and "." are allowed as separators.
          <br></br>
          <br></br>
          SQL Server recognizes several date type data input formats. To set the
          order of the parts of a date (day, month, and year) we use "set
          dateformat". These are the formats:
          <ul>
            <li>mdy: 4/15/96</li>
            <li>myd: 4/96/15</li>
            <li>dmy: 15/4/1996</li>
            <li>dym: 15/96/4</li>
            <li>ydm: 96/15/4</li>
            <li>ydm: 1996/15/4</li>
          </ul>
          We can determine the language that we will use by default, which will
          have multiple effects on the naming and formats of the date.
          <br></br>
          <br></br>
          @@language gives us the current language. sp_helplanguage shows us the
          available languages ​​set language allows us to change it.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "-- To set a dateformat...\nSET DATEFORMAT DMY;\nGO\n\n--@@language returns you the actual language\nSELECT @@language;\nGO\n\n--sp_helplanguage shows us the available languages ​​set language allows us to change it.\nexec sp_helplanguage;\nGO\n\n--To change a language...\nSET LANGUAGE us_english;\nGO\n\nSET LANGUAGE Español;\nGO"
          }
          containerHeight={"500px"}
          insideHeight={"77%"}
        />
        <hr></hr>
        <h2 id="default">Default values</h2>
        <p>
          When we do not assign a value to a field, it will be given the NULL
          value. Except for the use of the identty.
          <br></br>
          <br></br>
          It will give an error if we do not allow null in that field.
          <br></br>
          <br></br>
          We can set a value that will be used in the case that we do not
          specify a value to the field in the insert. It will be called the
          default value.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "CREATE TABLE Car (\n  carRegistration varchar(10) PRIMARY KEY,\n  statusDescription varchar(100) DEFAULT 'Good',\n  codType integer DEFAULT 1\n);\nGO\n\nINSERT Car (carRegistration, codType) \nVALUES ('2354-HBC',2);\nGO\n\nINSERT Car (carRegistration, statusDescription)\nVALUES ('3216-BHF','Seat Ibiza 3 doors');\nGO\n\nINSERT Car (carRegistration)\nVALUES ('3256-GDF')\nGO;\n\nINSERT Car (carRegistration, statusDescription, codType)\nVALUES ('4589-HBZ',DEFAULT,3);\nGO\n\nINSERT Car (carRegistration, statusDescription, codType)\nVALUES ('4589-HBD','Volkswagen Polo 3 doors',3);\nGO"
          }
          containerHeight={"680px"}
          insideHeight={"84%"}
        />
        <div className="examples">
          <br></br>
          <table>
            <tr>
              <td>carRegistration</td>
              <td>statusDescription</td>
              <td>codType</td>
            </tr>
            <tr>
              <td>2354-HBC</td>
              <td>Good</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3216-BHF</td>
              <td>Seat Ibiza 3 doors</td>
              <td>1</td>
            </tr>
            <tr>
              <td>3256-GDF</td>
              <td>Good</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4589-HBZ</td>
              <td>Volkswagen Polo 3 doors</td>
              <td>3</td>
            </tr>
            <tr>
              <td>4589-HBD</td>
              <td>Good</td>
              <td>3</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2 id="calculated-column">Calculated column and aliases</h2>
        <p>
          Operators are symbols that allow you to perform different types of
          operations.
          <br></br>
          <br></br>
          We can use them instead of columns.
          <br></br>
          <br></br>
          For example, it will allow you to perform operations with fields in
          the select, displaying the result of the operation for each record
          selected.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "--Week price\nSELECT statusDescription, priceDay *7 \nFROM Car;\nGO\n\n--Sum 3 euros to priceDay\nSELECT statusDescription, priceDay +3 \nFROM Car; \nGO\n\n--Price with 10% discount\n SELECT statusDescription, priceDay - (priceDay*10/100) \nFROM Car; \nGO\n\n--10 euro bills and rest \nSELECT statusDescription, cast(priceDay/10 AS int), priceDay % 10 \nFROM Car; \nGO"
          }
          containerHeight={"520px"}
          insideHeight={"78%"}
        />
        <p>
          The concatenation operator allows strings to be pasted, using the plus
          symbol(+).
          <br></br>
          <br></br>
          Both text fields and character strings can be concatenated between
          single quotes.
          <br></br>
          <br></br>
          To make the result of a query more understandable, especially when we
          perform calculations or concatenations, we can change the name of the
          column through an <strong>alias</strong>.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "SELECT id, surname + ', ' + name as FullName\nFROM clients;\nGO"
          }
          containerHeight={"180px"}
          insideHeight={"42%"}
        />
        <div className="examples">
          <br></br>
          <table>
            <tr>
              <td>id</td>
              <td>FullName</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Dick, Moby</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Montana, Tony</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sully, Jake</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2 id="functions">Functions</h2>
        <p>
          SQL Server allows us to carry out more complex calculations
          automatically, without us having to create programs that allow us to
          solve the problem.
          <br></br>
          <br></br>
          Each function is defined for a specific calculation, we will pass it a
          set of values ​​and it will return a value calculated from them.
          <ul>
            <li>
              <a
                href="https://learn.microsoft.com/es-es/sql/t-sql/functions/string-functions-transact-sql?view=sql-server-2017"
                className="links"
              >
                String functions
              </a>
            </li>
            <li>
              <a
                href="https://learn.microsoft.com/es-es/sql/t-sql/functions/mathematical-functions-transact-sql?view=sql-server-2017"
                className="links"
              >
                Math functions
              </a>
            </li>
            <li>
              <a
                href="https://learn.microsoft.com/es-es/sql/t-sql/functions/date-and-time-data-types-and-functions-transact-sql?view=sql-server-2017"
                className="links"
              >
                Data type date and time functions
              </a>
            </li>
          </ul>
        </p>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/sql_tutorials/SqlBasicQueries02"}
        link2={"../../../pages/sql_tutorials/SqlFundamentalQueries02"}
        name1={"Basic Queries 2"}
        name2={"Fundamental Queries 2"}
      />
    </div>
  );
}

export default SqlFundamentalQueries01Content;
