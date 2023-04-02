import React from "react";
import CodeContainer from "../code_container/CodeContainer";
import Redirection from "../redirection/Redirection";

function SqlFundamentalQueries02Content() {
  return (
    <div className="main">
      <h1>SQL FUNDAMENTAL QUERIES PART TWO</h1>
      <hr></hr>
      <div className="content-code">
        <h2>Order by</h2>
        <p>
          We can order the result of a "select" so that the records are
          displayed ordered by some field, for this we use the "order by"
          clause.
          <br></br>
          <br></br>
          By default, if we do not clarify in the sentence, it orders them in
          ascending order (from smallest to largest). We can order them from
          largest to smallest, for this we add the keyword "desc".
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "--Show clients order by DNI\nSELECT id, DNI, name, surname, birthday\nFrom clients\nORDER BY DNI;\nGO\n\n--Show clients order by surname\nSELECT id, DNI, name, surname, birthday\nFrom clients\nORDER BY surname;\nGO\n\n--Show clients order by id desc\nSELECT id, DNI, name, surname, birthday\nFrom clients\nORDER BY id DESC;\nGO\n\n--Show clients order by year desc\nSELECT id, DNI, name, surname, birthday\nFrom clients\nORDER BY DATEPART(year, birthday) desc;\nGO"
          }
          containerHeight={"600px"}
          insideHeight={"82%"}
        />
        <div className="examples">
          <p style={{ textAlign: "center" }}>Show clients order by DNI</p>
          <table>
            <tr>
              <td>id</td>
              <td>DNI</td>
              <td>name</td>
              <td>surname</td>
              <td>birthday</td>
            </tr>
            <tr>
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
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
          </table>
          <p style={{ textAlign: "center" }}>Show clients order by surname</p>
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
          <p style={{ textAlign: "center" }}>Show clients order id desc</p>
          <table>
            <tr>
              <td>id</td>
              <td>DNI</td>
              <td>name</td>
              <td>surname</td>
              <td>birthday</td>
            </tr>
            <tr>
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
            </tr>
            <tr>
              <td>2</td>
              <td>87654321N</td>
              <td>Tony</td>
              <td>Montana</td>
              <td>22/6/1971</td>
            </tr>
            <tr>
              <td>1</td>
              <td>12345678N</td>
              <td>Moby</td>
              <td>Dick</td>
              <td>1/11/2001</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>Show clients order by year desc</p>
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
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
            </tr>
            <tr>
              <td>2</td>
              <td>87654321N</td>
              <td>Tony</td>
              <td>Montana</td>
              <td>22/6/1971</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>Logical operators. Multiple conditions</h2>
        <p>
          We can establish more than one condition with the "wiere" clause, we
          will relate them through logical operators.
          <ul>
            <li>
              and. (condition 1) or (condition 2) It will be true as long as one
              of the two is true.
            </li>
            <li>or. (condition 1) and (condition2). Both have to be true.</li>
            <li>not. not (condition). It is true when condition is false.</li>
          </ul>
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "--Inserting more values\nINSERT clients\n(id, DNI, name, surname, birthday)\nVALUES (4, '74598712D', 'Bart', 'Simspon', '21/4/1997');\nGO\n\nINSERT clients\n(id, DNI, name, surname, birthday)\nVALUES (5, '42462457R', 'Deckard', 'Runner', '13/11/2019');\nGO\n\nINSERT clients\n(id, DNI, name, surname, birthday)\nVALUES (6, '43981424N', 'Michael', 'Corleone', '29/7/1960');\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE (id > 2) and (id < 4);\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE (id = 1) or (SUBSTRING(name, 1, 1) = 'B');\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE not(surname = 'Simpson');\nGO"
          }
          containerHeight={"770px"}
          insideHeight={"84%"}
        />
        <div className="examples">
          <p style={{ textAlign: "center" }}>(id &gt; 2) and (id &lt; 4)</p>
          <table>
            <tr>
              <td>id</td>
              <td>DNI</td>
              <td>name</td>
              <td>surname</td>
              <td>birthday</td>
            </tr>
            <tr>
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>
            (id = 1) or (SUBSTRING(name, 1, 1) = 'B')
          </p>
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
              <td>4</td>
              <td>74598712D</td>
              <td>Bart</td>
              <td>Simspon</td>
              <td>21/4/1997</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>not(surname = 'Simpson')</p>
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
            <tr>
              <td>5</td>
              <td>42462457R</td>
              <td>Deckard</td>
              <td>Runner</td>
              <td>13/11/2019</td>
            </tr>
            <tr>
              <td>6</td>
              <td>43981424N</td>
              <td>Michael</td>
              <td>Corleone</td>
              <td>29/7/1960</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>Between operator</h2>
        <p>
          Work with range of values. Greater than or equal to the first and less
          than or equal to the second (thus includes limit values).
          <br></br>
          <br></br>
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "SELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE id between 2 and 4;\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE (SUBSTRING(surname, 1, 1) between 'C' and 'D');\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE DATEPART(day, birthday) between 1 and 13;\nGO"
          }
          containerHeight={"430px"}
          insideHeight={"72%"}
        />
        <div className="examples">
          <p style={{ textAlign: "center" }}>id between 2 and 4</p>
          <table>
            <tr>
              <td>id</td>
              <td>DNI</td>
              <td>name</td>
              <td>surname</td>
              <td>birthday</td>
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
            <tr>
              <td>4</td>
              <td>74598712D</td>
              <td>Bart</td>
              <td>Simspon</td>
              <td>21/4/1997</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>
            (SUBSTRING(surname, 1, 1) between 'C' and 'D')
          </p>
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
              <td>6</td>
              <td>43981424N</td>
              <td>Michael</td>
              <td>Corleone</td>
              <td>29/7/1960</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>
            DATEPART(day, birthday) between 1 and 13
          </p>
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
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
            </tr>
            <tr>
              <td>5</td>
              <td>42462457R</td>
              <td>Deckard</td>
              <td>Runner</td>
              <td>13/11/2019</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>In operator</h2>
        <p>
          "in" is used to find out if the value of a field is included in a list
          of valuesspecified.
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "SELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE id in (1, 2, 3);\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE DATEPART(day, birthday) in (1, 21, 22);\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE SUBSTRING(name, 1, 1) in ('D', 'J', 'M');\nGO"
          }
          containerHeight={"430px"}
          insideHeight={"72%"}
        />
        <div className="examples">
          <p style={{ textAlign: "center" }}>id in (1, 2, 3)</p>
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
          <p style={{ textAlign: "center" }}>
            DATEPART(day, birthday) in (1, 21, 22)
          </p>
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
            <tr>
              <td>4</td>
              <td>74598712D</td>
              <td>Bart</td>
              <td>Simspon</td>
              <td>21/4/1997</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>
            SUBSTRING(name, 1, 1) in ('D', 'J', 'M')
          </p>
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
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
            </tr>
            <tr>
              <td>5</td>
              <td>42462457R</td>
              <td>Deckard</td>
              <td>Runner</td>
              <td>13/11/2019</td>
            </tr>
            <tr>
              <td>6</td>
              <td>43981424N</td>
              <td>Michael</td>
              <td>Corleone</td>
              <td>29/7/1960</td>
            </tr>
          </table>
          <br></br>
        </div>
        <hr></hr>
        <h2>Pattern search like</h2>
        <p>
          "like" is used to find out if the value of a field matches a set
          pattern.
          <br></br>
          <br></br>
          YOU SHOULD NEVER REPLACE THE OPERATOR = IT IS MUCH SLOWER AS IT TRIES
          TO FIT THE FIELD TEXT TO THE PATTERN.
          <ul>
            <li>
              <strong>%</strong>: Any string of 0 or more.
            </li>
            <li>
              <strong>_</strong>: Any character.
            </li>
            <li>
              <strong>[]</strong>: Select the characters inside the brackets.
            </li>
            <li>
              <strong>[-]</strong>: Selects a range of the characters separated
              by - inside the square brackets.
            </li>
            <li>
              <strong>[^]</strong>: Does not select the characters after the ^.
            </li>
          </ul>
        </p>
        <CodeContainer
          title={"SQL"}
          code={
            "SELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE name like 'D%';\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE DNI like '1_______N';\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE name like '__[c]%';\nGO\n\nSELECT id, DNI, name, surname, birthday\nFROM clients\nWHERE surname like '__[^n]%';\nGO"
          }
          containerHeight={"520px"}
          insideHeight={"79%"}
        />
        <div className="examples">
          <p style={{ textAlign: "center" }}>name like 'D%'</p>
          <table>
            <tr>
              <td>id</td>
              <td>DNI</td>
              <td>name</td>
              <td>surname</td>
              <td>birthday</td>
            </tr>
            <tr>
              <td>5</td>
              <td>42462457R</td>
              <td>Deckard</td>
              <td>Runner</td>
              <td>13/11/2019</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>DNI like '1_______N''</p>
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
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>name like '__[c]%'</p>
          <table>
            <tr>
              <td>id</td>
              <td>DNI</td>
              <td>name</td>
              <td>surname</td>
              <td>birthday</td>
            </tr>
            <tr>
              <td>5</td>
              <td>42462457R</td>
              <td>Deckard</td>
              <td>Runner</td>
              <td>13/11/2019</td>
            </tr>
            <tr>
              <td>6</td>
              <td>43981424N</td>
              <td>Michael</td>
              <td>Corleone</td>
              <td>29/7/1960</td>
            </tr>
          </table>
          <p style={{ textAlign: "center" }}>surname like '__[^n]%'</p>
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
              <td>3</td>
              <td>12345671N</td>
              <td>Jake</td>
              <td>Sully</td>
              <td>1/2/1980</td>
            </tr>
            <tr>
              <td>4</td>
              <td>74598712D</td>
              <td>Bart</td>
              <td>Simspon</td>
              <td>21/4/1997</td>
            </tr>
            <tr>
              <td>6</td>
              <td>43981424N</td>
              <td>Michael</td>
              <td>Corleone</td>
              <td>29/7/1960</td>
            </tr>
          </table>
          <br></br>
        </div>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/sql_tutorials/SqlFundamentalQueries01"}
        link2={"../../../pages/sql_tutorials/SqlFundamentalQueries03"}
        name1={"Fundamental Queries 1"}
        name2={"Fundamental Queries 3"}
      />
    </div>
  );
}

export default SqlFundamentalQueries02Content;
