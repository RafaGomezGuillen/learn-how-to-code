import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHtml5, FaHome, FaCss3Alt, FaDatabase } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { NavLink } from "react-router-dom";
import DarkMode from "../../dark_mode/DarkMode";
import Searcher from "../../searcher/Searcher";

function HomeNavbar() {
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
      <SideNav.Nav
        defaultSelected="home"
        style={{ backgroundColor: "var(--background-color-header)" }}
      >
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
        <NavItem eventKey="html">
          <NavIcon>
            <FaHtml5 style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML</NavText>
          <NavItem eventKey="html/Tutorial">
            <NavText>
              <NavLink to="/pages/html_tutorials/HtmlHome" style={linkText}>
                HTML Tutorial
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html/Exercises">
            <NavText>
              <NavLink
                to="/pages/html_exercises/HtmlExercises"
                style={linkText}
              >
                HTML Exercises
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="css">
          <NavIcon>
            <FaCss3Alt style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>CSS</NavText>
          <NavItem eventKey="css/Tutorial">
            <NavText>
              <NavLink
                to="/pages/css_tutorials/quarter_01/CssIntroduction"
                style={linkText}
              >
                CSS Tutorial
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css/Exercises">
            <NavText>
              <a
                href="https://github.com/RafaGomezGuillen/desarrollo_de_aplicaciones_web/tree/main/lenguaje_de_marcas_y_sistemas_de_gestion_de_informacion"
                style={linkText}
              >
                CSS Exercises
              </a>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="c#">
          <NavIcon>
            <SiCsharp style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>C#</NavText>
          <NavItem eventKey="c#/Tutorial">
            <NavText>
              <a
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                style={linkText}
              >
                C# Tutorial
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="c#/Exercises">
            <NavText>
              <a
                href="https://github.com/RafaGomezGuillen/desarrollo_de_aplicaciones_web/tree/main/programacion"
                style={linkText}
              >
                C# Exercises
              </a>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="sql">
          <NavIcon>
            <FaDatabase style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>SQL</NavText>
          <NavItem eventKey="sql/Tutorial">
            <NavText>
              <NavLink
                to="/pages/sql_tutorials/SqlIntroduction"
                style={linkText}
              >
                SQL Tutorial
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql/Exercises">
            <NavText>
              <a
                href="https://github.com/RafaGomezGuillen/desarrollo_de_aplicaciones_web/tree/main/base_de_datos"
                style={linkText}
              >
                SQL Exercises
              </a>
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

export default HomeNavbar;
