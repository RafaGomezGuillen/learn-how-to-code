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
          <NavText style={ linkText }>HTML</NavText>
          <NavItem eventKey="html/Tutorial">
            <NavText>
              <NavLink to="/pages/html_tutorials/HtmlHome" style={linkText}>
                HTML Tutorial
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html/Exercises">
            <NavText>
              <NavLink to="/pages/html_exercises/HtmlExercises" style={linkText}>
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
              <NavLink to="../../../pages/Home" style={linkText}>
                CSS Tutorial
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css/Exercises">
            <NavText>
              <NavLink to="../../../pages/Home" style={linkText}>
                CSS Exercises
              </NavLink>
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
              <NavLink to="../../../pages/Home" style={linkText}>
                C# Tutorial
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="c#/Exercises">
            <NavText>
              <NavLink to="../../../pages/Home" style={linkText}>
                C# Exercises
              </NavLink>
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
              <NavLink to="../../../pages/Home" style={linkText}>
                SQL Tutorial
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="sql/Exercises">
            <NavText>
              <NavLink to="../../../pages/Home" style={linkText}>
                SQL Exercises
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

export default HomeNavbar;
