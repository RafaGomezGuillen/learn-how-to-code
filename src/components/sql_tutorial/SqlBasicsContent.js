import React from "react";
import Redirection from "../redirection/Redirection";
import Instructions from "./Instructions.pdf";

function SqlBasicsContent() {
  return (
    <div className="main">
      <h1>SQL BASICS</h1>
      <div className="introduction">
        <p>
          In this case we used to work with{" "}
          <a
            href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16"
            className="links"
          >
            SQL Server Management Studio (SSMS)
          </a>{" "}
          created by Microsoft.
        </p>
        <p>
          Also, we used to work with a SQL server virtual machine installed on
          Virtual box.
        </p>
      </div>
      <hr></hr>
      <div className="content-code">
        <h2>STEP 1</h2>
        <p>
          Download and decompress this{" "}
          <a
            href="https://drive.google.com/file/d/1jWRMOtdQsULBj6l6svYrWMU26WHQpo0A/view"
            className="links"
          >
            file
          </a>
          . Here it is the Ubuntu SQL server virtual machine.
        </p>
        <h2>STEP 2</h2>
        <p>
          Follow the instructions of this{" "}
          <a href={Instructions} className="links">
            PDF
          </a>{" "}
          (it is in spanish, Im not going to translate it for you).
        </p>
      </div>
      <hr></hr>
      <Redirection
        link1={"../../../pages/sql_tutorials/SqlIntroduction"}
        link2={"../../../pages/sql_tutorials/SqlBasicQueries01"}
        name1={"Introduction"}
        name2={"Basic Queries 1"}
      />
    </div>
  );
}

export default SqlBasicsContent;
