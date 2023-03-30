import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlIntroductionContent() {
  return (
    <div className="main">
      <h1>SQL INTRODUCTION</h1>
      <div className="introduction">
        <p>
          SQL is a structured query language that is used to manage and retrieve
          information from relational database management systems.
        </p>
        <p>
          SQL allows to perform operations such as creating, modifying,
          deleting, querying and manipulating data in tables and databases.
        </p>
        <p>
          SQL is based on relational algebra and calculus, and has different
          dialects depending on the database system that is used.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>SQL hsitory</h2>
        <p>
          SQL stands for Structured Query Language, a domain-specific language
          for managing and retrieving data from relational database management
          systems. SQL was inspired by the relational model proposed by Edgar F.
          Codd, an English computer scientist who worked at IBM and published
          his influential paper "A Relational Model of Data for Large Shared
          Data Banks" in 19701.
          <br></br>
          <br></br>
          SQL was initially developed at IBM by Donald D. Chamberlin and Raymond
          F. Boyce, who learned about the relational model from Codd. They
          designed a language called SEQUEL (Structured English Query Language)
          to manipulate and retrieve data stored in IBM’s original
          quasi-relational database management system, System R. The name was
          later changed to SQL due to trademark issues1.
          <br></br>
          <br></br>
          SQL became a standard of the American National Standards Institute
          (ANSI) in 1986 and of the International Organization for
          Standardization (ISO) in 1987. Since then, the standard has been
          revised several times to include new features and capabilities. The
          latest version of the standard is SQL:2016, also known as SQL 32.
          However, most database systems implement their own dialects of SQL,
          which may not be fully compatible with the standard.
        </p>
        <hr></hr>
        <h2>SQL Specification</h2>
        <p>
          There is no official web page for the SQL specification, as it is a
          standard published by ISO and ANSI.
          <br></br>
          <br></br>
          <ul>
            <li>
              <a href="https://db-engines.com/en/ranking" className="links">
                The DB-Engines Ranking ranks database management systems
                according to their popularity.
              </a>
            </li>
          </ul>
        </p>
        <hr></hr>
        <h2>What can you do with SQL?</h2>
        <p>
          <ul>
            <li>SQL can create tables and insert data into them.</li>
            <li>
              SQL can select data from different tables and join them together.
            </li>
            <li>SQL can update or delete existing data in tables.</li>
            <li>
              SQL can alter the structure of tables or drop them entirely.
            </li>
            <li>
              SQL can use conditional logic, aggregation functions, subqueries
              and more to perform complex calculations on data.
            </li>
          </ul>
        </p>
        <hr></hr>
        <h2>Basic SQL operation</h2>
        <p>
          This is what a SQL code looks like.
          <ol>
            <li>
              First of all, we create the database, in this case is called
              store.
            </li>
            <li>
              Then we select the database using "USE DATABASE" to start coding
              in store.
            </li>
            <li>
              We create a table called clients, this table has the attributes{" "}
              <strong>id, name, surname</strong>.
            </li>
            <li>
              We insert values, in this case (1 to id, 'Rafa' to name, 'Gomez'
              to surname).
            </li>
            <li>
              Finally, to watch the column we select the attributes from clients
              that we want to watch.
            </li>
          </ol>
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "CREATE DATABASE store;\nGO\n\nUSE DATABASE store;\nGO\n\nCREATE TABLE clients (\n  id int,\n  name varchar(50),\n  surname varchar(100)\n);\nGO\n\nINSERT store (id, name, surname)\nVALUES (1, 'Rafa', 'Gomez');\nGO\n\nSELECT id, name, surname\nFROM clients;\nGO"
          }
          containerHeight={"550px"}
          insideHeight={"80%"}
        />
        <div className="examples">
          <br></br>
          <table>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>surname</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Rafa</td>
              <td>Gomez</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>SQL syntax</h2>
        <p>
          <ul>
            <li>
              SQL keywords are NOT case sensitive: select is the same as SELECT.
            </li>
            <li>
              Semicolon is the standard way to separate each SQL statement in
              database systems that allow more than one SQL statement to be
              executed in the same call to the server. But you are not forced to
              use it.
            </li>
            <li>The same with GO at the end of a sentence.</li>
          </ul>
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "CREATE DATABASE store;\nGO\n\n--This line does the same as the line above\ncreate database store"
          }
          containerHeight={"220px"}
          insideHeight={"55%"}
        />
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/home"}
        link2={"../../../pages/sql_tutorials/SqlBasics"}
        name1={"Home"}
        name2={"Basics"}
      />
    </div>
  );
}

export default SqlIntroductionContent;
