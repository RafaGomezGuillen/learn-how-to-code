import React from "react";
import "./Redirection.css";
import { NavLink } from "react-router-dom";

function Redirection({ link1, link2, name1, name2 }) {
  return (
    <div className="redirection">
      <NavLink to={link1} style={{ float: "left" }}>
        &lt; {name1}
      </NavLink>
      <NavLink to={link2} style={{ float: "right" }}>
        {name2} &gt;
      </NavLink>
    </div>
  );
}
export default Redirection;
