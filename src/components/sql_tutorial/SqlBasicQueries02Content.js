import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlBasicQueries02Content() {
  return (
    <div className="main">
      <h1>SQL BASIC QUERIES PART TWO</h1>
      <div className="introduction">
        <p>
          <ul>
            <li>Primary keys.</li>
            <li>Identity.</li>
          </ul>
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>Primary keys</h2>
        <p>
          A primary key is a field (or fields) that identifies a single record
          (row) in a table.
          <br></br>
          <br></br>
          For a key field value there is only one record. There is at least one
          key, the one made up of all the attributes.
          <br></br>
          <br></br>
          Key implies that only one object will appear for each value of the
          key. Just once and never again.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "CREATE TABLE clients (\n  id int primary key,\n  DNI char(9) primary key,\n  name varchar(50),\n  surname varchar(100),\n  birthday datetime\n);\nGO\n\n--You can do it this way as well\nCREATE TABLE clients (\n  id int,\n  DNI char(9),\n  name varchar(50),\n  surname varchar(100),\n  birthday datetime,\n  primary key(id, DNI)\n);\nGO"
          }
          containerHeight={"520px"}
          insideHeight={"78%"}
        />
        <p>
          For example the second and third sentences will be wrong because they
          have the same value of the first one at id and DNI respectively.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "INSERT clients\n(id, DNI, name, surname, birthday)\nVALUES (1, '12345678N', 'Moby', 'Dick', '1/11/2001');\nGO\n\nINSERT clients\n(id, DNI, name, surname, birthday)\nVALUES (1, '87654321N', 'Tony', 'Montana', '22/6/1971');\nGO\n\nINSERT clients\n(id, DNI, name, surname, birthday)\nVALUES (2, '12345678N', 'Jake', 'Sully', '1/2/1980');\nGO"
          }
          containerHeight={"420px"}
          insideHeight={"73%"}
        />
        <hr></hr>
        <h2>Identity</h2>
        <p>
          A numeric field can have an extra "identity" attribute. Values ​​in a
          field with this attribute generate sequential values ​​that start at 1
          and increment by 1 automatically. It is the System that is responsible
          for generating it.
          <br></br>
          <br></br>
          It is generally used in fields corresponding to identification codes
          to generate unique values ​​for each new record that is inserted.
          Therefore, it is an adequate primary key for when we do not have
          another valid one.
          <br></br>
          <br></br>
          An "identity" field is not editable, ie you cannot enter a value or
          update it.
          <br></br>
          <br></br>
          It's just generated automatically. It cannot be NULL for the same
          reason. It will usually generate the next in sequence to the last, but
          will not recover previous slots.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "CREATE TABLE clients (\n  id int primary key identity,\n  DNI char(9),\n  name varchar(50),\n  surname varchar(100),\n  birthday datetime\n);\nGO\n\nINSERT clients\n(DNI, name, surname, birthday)\nVALUES ('12345678N', 'Moby', 'Dick', '1/11/2001');\nGO\n\nINSERT clients\n(DNI, name, surname, birthday)\nVALUES ('87654321N', 'Tony', 'Montana', '22/6/1971');\nGO\n\nINSERT clients\n(DNI, name, surname, birthday)\nVALUES ('12345671N', 'Jake', 'Sully', '1/2/1980');\nGO"
          }
          containerHeight={"620px"}
          insideHeight={"80%"}
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
            <tr>
              <td>2</td>
              <td>87654321N</td>
              <td>Tony</td>
              <td>Montana</td>
              <td>22/6/1971</td>
            </tr>
            <tr>
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
            </tr>
          </table>
          <br></br>
        </div>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/sql_tutorials/SqlBasicQueries01"}
        link2={"../../../pages/sql_tutorials/SqlFundamentalQueries01"}
        name1={"Basic Queries 1"}
        name2={"Fudamental Queries 1"}
      />
    </div>
  );
}

export default SqlBasicQueries02Content;
