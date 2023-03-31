import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlBasicQueries01Content() {
  return (
    <div className="main">
      <h1>SQL BASIC QUERIES PART ONE</h1>
      <div className="introduction">
        <p>
          in this page we are going to see how to...
          <ul>
            <li>Create a database.</li>
            <li>Create a table.</li>
            <li>Drop a table.</li>
            <li>Insert values into a table.</li>
            <li>Retrieve stored information.</li>
            <li>Relational operators.</li>
            <li>Delete records.</li>
            <li>Update records.</li>
            <li>Commnets.</li>
            <li>Null value.</li>
          </ul>
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <table>
          <tr>
            <td>
              <a href="#create-database" className="links">
                Create database
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#create-table" className="links">
                Create a table
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#drop-table" className="links">
                Drop a table
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#adding-information" className="links">
                Adding information to a table
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#retrieve" className="links">
                Retrieve stored information
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#relational-operators" className="links">
                Relational operations
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#delete-records" className="links">
                Delete records
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#update-records" className="links">
                Update records
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#comments" className="links">
                Comments
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="#null-value" className="links">Null value</a>
            </td>
          </tr>
        </table>
        <hr></hr>
        <h2 id="create-database">Create a database</h2>
        <p>
          A database is a set of data belonging to the same context and
          systematically stored for later use.
          <br></br>
          <br></br>A Database within SQL Server is an organized structure that
          allows information to be stored (tables) identified by a name and
          other structures and programs that facilitate access to data.
          <br></br>
          <br></br>
          To create a database we type "CREATE DATABASE" and the name of it.
        </p>
        <CodeContainer
          title={"SQL"}
          code={"CREATE DATABASE clients;\nGO"}
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <p>
          To make sure that the operations on tables are carried out in that
          Database, we would have to always indicate the database in which we
          are going to work adding in sentences...
        </p>
        <CodeContainer
          title={"SQL"}
          code={"USE clients;\nGO"}
          containerHeight={"150px"}
          insideHeight={"30%"}
        />
        <hr></hr>
        <h2 id="create-table">Create a table</h2>
        <p>
          A table is the structure within a database where we can store
          information corresponding to something, whose structure remains the
          same. We will have that for each element from which we are going to
          store data, the elements will always be the same.
          <br></br>
          <br></br>
          But we need to know the different data type that we are going to work
          with...
          <ul>
            <li>
              <strong>int</strong>: They are represented without periods or
              commas. Ex: 12345
            </li>
            <li>
              <strong>numeric(p,s)</strong>: p: number of digits, s: of them how
              many decimals. They are represented with a decimal point: 124.56.
            </li>
            <li>
              <strong>datetime</strong>: From January 1, 1753 to December 31,
              9999. Hour interval from 00:00:00 to 23:59:59.997. The usual
              format is written between quotes 'dd/mm/yyyy hh:mn:ss'. Day (dd),
              month (mm), year (yyyy), hour (hh), minutes (mn) and seconds (ss).
              Ex: '10/15/2016 14:23:12'
            </li>
            <li>
              <strong>char(n), varchar(n)</strong>: n between 1 and 8,000; var
              is for variable length. The format is any text enclosed in single
              quotes. Ex: 'this is a text'.
            </li>
          </ul>
          So when a table is created we must indicate its name and define at
          least one fieldwith its data type.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "CRAEATE TABLE table_name (\n  field_name_1 fied_type_1,\n  field_name_2 fied_type_2,\n  field_name_3 fied_type_3\n);\nGO\n\nCREATE TABLE clients (\n  id int,\n  DNI char(9),\n  name varchar(50),\n  surname varchar(100),\n  birthday datetime\n);\nGO"
          }
          containerHeight={"450px"}
          insideHeight={"74%"}
        />
        <p>View table structure: sp_columns table_name.</p>
        <CodeContainer
          title={"SQL"}
          code={"sp_columns clients;\nGO"}
          containerHeight={"150px"}
          insideHeight={"35%"}
        />
        <hr></hr>
        <h2 id="drop-table">Drop a table</h2>
        <p>
          To delete a table we use "drop table" next to the name of the table to
          be deleted.
          <br></br>
          <br></br>
          Dropped tables are gone, their structure and all data is lost that you
          have stored.
        </p>
        <CodeContainer
          title={"SQL"}
          code={"DROP TABLE clients;\nGO"}
          containerHeight={"150px"}
          insideHeight={"35%"}
        />
        <p>
          If we try to drop a table that does not exist, an error message
          appears indicating such a situation and the statement is not executed.
          With this we avoid it:
        </p>
        <CodeContainer
          title={"SQL"}
          code={"if object_id ('clients')\n  drop table clients;\n  GO"}
          containerHeight={"180px"}
          insideHeight={"40%"}
        />
        <p>
          It must be taken into account that this is NOT the usual procedure,
          since the tables are usually never deleted, since we would lose the
          information they contain. In this case we will do it to ensure some
          results in our learning tests.
        </p>
        <hr></hr>
        <h2 id="adding-information">Add information to a table</h2>
        <p>
          There are several ways to add records/rows in a table.
          <br></br>
          <br></br>
          Adding the information of a record for all the fields/attributes of
          the table and in the order in which they were defined.
          <br></br>
          <br></br>
          Also giving the set of fields to which we will give values.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "insert into table_name\nvalues(field_value_1, field_value_2, ..., field_value_n);\ngo\n\ninsert into table_name\n(field_name_1, field_name_2, ..., field_name_n)\nvalues (field_value_1, field_value_2, ..., field_value_n);\ngo"
          }
          containerHeight={"300px"}
          insideHeight={"62%"}
        />
        <p>
          String and date values ​​enclosed in single quotes.
          <br></br>
          <br></br>
          Whenever we record a datetime field we will have to determine the
          format in which we will write it.
        </p>
        <CodeContainer
          title={"SQL"}
          code={"SET DATEFORMAT dmy;\nGO"}
          containerHeight={"150px"}
          insideHeight={"35%"}
        />
        <p>
          Representing in this case that we will place the day first, then the
          month and end with the year (day/month/year).
          <br></br>
          <br></br>
          Other formats can be chosen, such as ymd, mdy.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "INSERT clients\n(id, DNI, name, surname, birthday)\nVALUES (1, '12345678N', 'Moby', 'Dick', '1/11/2001');\nGO"
          }
          containerHeight={"200px"}
          insideHeight={"48%"}
        />
        <hr></hr>
        <h2 id="retrieve">Retrieve stored information</h2>
        <p>
          select comma separated list of fields from TABLENAME
          <br></br>
          <br></br>
          We can use an asterisk (*) in the field list which indicates that all
          the fields in the table are selected, although this makes the query
          less efficient.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "SELECT *\nFROM clients;\nGO\n\nSELECT id, DNI, name, surname, birthday;\nGO"
          }
          containerHeight={"250px"}
          insideHeight={"54%"}
        />
        <div className="examples">
          <br></br>
          <table>
            <tr>
              <td>id</td>
              <td>DNI</td>
              <td>name</td>
              <td>surname</td>
              <td>birthday</td>
            </tr>
            <tr>
              <td>1</td>
              <td>12345678N</td>
              <td>Moby</td>
              <td>Dick</td>
              <td>1/11/2001</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2 id="relational-operators">Relational operators</h2>
        <p>
          Operators are symbols that allow you to perform mathematical
          operations, concatenate strings, and make comparisons.
          <ul>
            <li>= equals to</li>
            <li>&lt;&gt; distinct</li>
            <li>&gt; greater</li>
            <li>&lt; smaller</li>
            <li>&gt;= greater or equal</li>
            <li>&lt;= smaller or equal</li>
          </ul>
        </p>
        <hr></hr>
        <h2>Recover the stored information of some records</h2>
        <p>
          select FIELD_NAME_1, ..., FIELD_NAME_n from TABLE_NAME where CONDITION
          <br></br>
          <br></br>
          Will display the indicated fields of the rows that meet the specified
          condition.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "SELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE name = 'Guille';\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE id > 5;\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE birthday <> '5/12/2004';\nGO"
          }
          containerHeight={"430px"}
          insideHeight={"73%"}
        />
        <hr></hr>
        <h2 id="delete-records">Delete records</h2>
        <p>
          The command to remove records from a table is delete.
          <br></br>
          <br></br>
          Deleting records is irreversibly deleting information from the table.
          <br></br>
          <br></br>
          Normally we will specify the filtering condition of records to delete:
          delete from TABLE_NAME where CONDITION
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "DELETE FROM clients\nid <= 12;\nGo\n\nDELETE FROM clients\nsurname = 'Hills';\nGo"
          }
          containerHeight={"280px"}
          insideHeight={"60%"}
        />
        <hr></hr>
        <h2 id="update-records">Update records</h2>
        <p>
          Updating records is changing part of their content, keeping the rest
          of their information unchanged.
          <br></br>
          <br></br>
          The command to update information in the records of a table is update.
          <br></br>
          <br></br>
          It will always be done with caution. If we don't filter the records to
          update using where, the update will affect ALL the records.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "UPDATE clients\nSET id = id + 2\nWHERE name = 'Pablo';\nGO\n\nUPDATE clients\nSET surname = 'Garcia'\nWHERE birthday = '2/11/2000';\nGO"
          }
          containerHeight={"320px"}
          insideHeight={"64%"}
        />
        <hr></hr>
        <h2 id="comments">Comments</h2>
        <p>
          We can use symbols in sql files so that we can document the operations
          we perform but without affecting the functionality of our code.
          <br></br>
          <br></br>
          Anything we put on a line after two hyphens will not be executed.
          <br></br>
          <br></br>
          What we put between the symbols /* and */ will not be executed. It can
          occupy more than one line.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "--This is one line comment\nUPDATE clients\nSET id = id + 2\nWHERE name = 'Pablo';\nGO\n\n/* Two line\ncomment */\nUPDATE clients\nSET surname = 'Garcia'\nWHERE birthday = '2/11/2000';\nGO"
          }
          containerHeight={"380px"}
          insideHeight={"70%"}
        />
        <hr></hr>
        <h2 id="null-value">Null value</h2>
        <p>
          null means "unknown data" or "non-existent value". It is not the same
          as a value "0", an empty string, or a literal string "null".
          <br></br>
          <br></br>
          We can assign it directly, placing NULL in the list of values ​​of an
          insert or not assigning it a value by not adding the field in the list
          of fields of the insert.
          <br></br>
          <br></br>
          You can assign null values or not to a field camp, for example DNI
          does not accept null values, however, name does.
          <br></br>
          <br></br>
          It will never be worth placing: &lt;&gt; null or = null. Repalce it
          with "is null" or "is not null".
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "INSERT clients\n(id, DNI, name, surname, birthday)\nVALUES (1, '12345678N', 'Moby', 'Dick', null);\nGO\n\nCREATE TABLE clients (\n  id int,\n  DNI char(9) not null,\n  name varchar(50) null,\n  surname varchar(100),\n  birthday datetime\n);\nGO\n\nSELECT DNI\nFROM clients\nWHERE name is null"
          }
          containerHeight={"480px"}
          insideHeight={"77%"}
        />
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/sql_tutorials/SqlBasics"}
        link2={"../../../pages/sql_tutorials/SqlBasicQueries02"}
        name1={"Basics"}
        name2={"Basic Queries 2"}
      />
    </div>
  );
}

export default SqlBasicQueries01Content;
