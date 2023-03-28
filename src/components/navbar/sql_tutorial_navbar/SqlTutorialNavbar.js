import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHome } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { NavLink } from "react-router-dom";
import DarkMode from "../../dark_mode/DarkMode";
import Searcher from "../../searcher/Searcher";

function SqlTutorialNavbar() {
  const iconStyle = {
    width: "35px",
    height: "35px",
    color: "var(--font-color)",
  };
  const linkText = {
    textDecoration: "none",
    color: "var(--font-color)",
    fontSize: "15px",
  };
  return (
    <SideNav
      style={{
        backgroundColor: "var(--background-color-header)",
        position: "fixed",
      }}
    >
      <SideNav.Toggle
        style={{
          backgroundColor: "#15202B",
        }}
      />
      <SideNav.Nav>
        <NavItem eventKey="home">
          <NavIcon>
            <FaHome style={iconStyle} />
          </NavIcon>
          <NavText>
            <NavLink to="/pages/Home" style={linkText}>
              Home
            </NavLink>
          </NavText>
        </NavItem>
        <NavItem eventKey="searcher">
          <NavIcon>
            <Searcher />
          </NavIcon>
          <NavText style={linkText}>&nbsp;&nbsp;Searcher</NavText>
        </NavItem>
        <NavItem eventKey="sql-tutorial">
          <NavIcon>
            <SiMicrosoftsqlserver style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>SQL Tutorial</NavText>
          <NavItem eventKey="sql-tutorial/SqlIntroduction">
            <NavText>
              <NavLink
                to="../../../pages/sql_tutorials/SqlIntroduction"
                style={linkText}
              >
                SQL Introduction
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql-tutorial/SqlBasics">
            <NavText>
              <NavLink
                to="../../../pages/sql_tutorials/SqlBasics"
                style={linkText}
              >
                SQL Basics
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql-tutorial/SqlBasicQueries01">
            <NavText>
              <NavLink
                to="../../../pages/sql_tutorials/SqlBasicQueries01"
                style={linkText}
              >
                SQL Basics Queries 1
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql-tutorial/SqlBasicQueries02">
            <NavText>
              <NavLink
                to="../../../pages/sql_tutorials/SqlBasicQueries02"
                style={linkText}
              >
                SQL Basics Queries 2
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql-tutorial/SqlFundamentalQueries01">
            <NavText>
              <NavLink
                to="../../../pages/sql_tutorials/SqlFundamentalQueries01"
                style={linkText}
              >
                SQL Fundamental Queries 1
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql-tutorial/SqlFundamentalQueries02">
            <NavText>
              <NavLink
                to="../../../pages/sql_tutorials/SqlFundamentalQueries02"
                style={linkText}
              >
                SQL Fundamental Queries 2
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql-tutorial/SqlFundamentalQueries03">
            <NavText>
              <NavLink
                to="../../../pages/sql_tutorials/SqlFundamentalQueries03"
                style={linkText}
              >
                SQL Fundamental Queries 3
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql-tutorial/SqlFundamentalQueries04">
            <NavText>
              <NavLink
                to="../../../pages/sql_tutorials/SqlFundamentalQueries04"
                style={linkText}
              >
                SQL Fundamental Queries 4
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="dark">
          <NavIcon>
            <DarkMode />
          </NavIcon>
          <NavText style={linkText}>&nbsp;&nbsp;Light/Dark mode</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default SqlTutorialNavbar;
