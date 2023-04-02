import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlFundamentalQueries03Content() {
  return (
    <div className="main">
      <h1>SQL FUNDAMENTAL QUERIES PART THREE</h1>
      <hr></hr>
      <div className="content-code">
        <h2>Count records (count)</h2>
        <p>
          In SQL we will have functions that perform operations with sets of
          records. The most basic is the one that allows us to count the number
          of records.
          <br></br>
          <br></br>
          In this case the * will be valid, since it represents that we will
          count all the records in the table.
          <ul>
            <li>count(*) counts how many records there are.</li>
            <li>
              count(field) does the same, but discarding the records in which
              fieldhave no value.
            </li>
            <li>
              count(distinct field) does not count records, since it only counts
              once every field value, discarding the values null.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "SELECT COUNT(*)\nFROM clients;\nGO\n\nSELECT COUNT(*)\nFROM CLIENTS\nWHERE SUBSTRING(DNI, LEN(DNI), 1) = 'N';\nGO\n\nINSERT INTO clients\nVALUES(7, '45325671J', 'Michael', 'Jackson', '	1/2/1980');\nGO\n\nSELECT COUNT(distinct name)\nFROM clients;\nGO"
          }
          containerHeight={"460px"}
          insideHeight={"76%"}
        />
        <div className="examples">
          <br></br>
          <table>
            <tr>
              <td>6</td>
            </tr>
            <tr>
              <td>4</td>
            </tr>
            <tr>
              <td>6</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>Add fields (sum)</h2>
        <p>
          Another grouping function is the one that allows us to add the values
          ​​of a numeric field.
        </p>
        <CodeContainer
          title={"SQL"}
          code={"SELECT SUM(id)\nFROM clients\nWHERE name = 'Michael';\nGO"}
          containerHeight={"210px"}
          insideHeight={"47%"}
        />
        <div className="examples">
          <br></br>
          <table>
            <tr>
              <dt>13</dt>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>Other grouping functions: max, min, avg</h2>
        <p>
          Min and max returns the maximum or minimum value of an expression. AVG
          = average.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "SELECT MAX(id)\nFROM clients;\nGO\n\nSELECT MIN(id)\nFROM clients;\nGO\n\nSELECT AVG(id)\nFROM clients;\nGO"
          }
          containerHeight={"350px"}
          insideHeight={"69%"}
        />
        <div className="examples">
          <br></br>
          <table>
            <tr>
              <td>7</td>
            </tr>
            <tr>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
            </tr>
          </table>
          <br></br>
        </div>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/sql_tutorials/SqlFundamentalQueries02"}
        link2={"../../../pages/Home"}
        name1={"Fundamental Queries 2"}
        name2={"Home"}
      />
    </div>
  );
}

export default SqlFundamentalQueries03Content;
