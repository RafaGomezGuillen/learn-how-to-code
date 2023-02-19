import React from "react";
import "./Redirection.css";

function Redirection({ link1, link2, name1, name2 }) {
  return (
    <div className="redirection">
      <a href={link1} style={{ float: "left" }}>
        &lt; {name1}
      </a>
      <a href={link2} style={{ float: "right" }}>
        {name2} &gt;
      </a>
    </div>
  );
}
export default Redirection;
