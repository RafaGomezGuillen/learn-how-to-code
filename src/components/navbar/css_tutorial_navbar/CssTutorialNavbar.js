import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHtml5, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DarkMode from "../../dark_mode/DarkMode";
import Searcher from "../../searcher/Searcher";

function CssTutorialNavbar() {
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
        <NavItem eventKey="html-tutorial">
          <NavIcon>
            <FaHtml5 style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Tutorial</NavText>
          <NavItem eventKey="html-tutorial/Home">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlHome" style={linkText}>
                HTML Home
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Introduction">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlIntroduction" style={linkText}>
                HTML Introduction
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Basics">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlBasics" style={linkText}>
                HTML Basics
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Text">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlText" style={linkText}>
                HTML Text
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Lists">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlLists" style={linkText}>
                HTML Lists
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Images">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlImages" style={linkText}>
                HTML Images
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Tables">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlTables" style={linkText}>
                HTML Tables
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Links">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlLinks" style={linkText}>
                HTML Links
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Forms">
            <NavText>
              <NavLink to="../../../pages/html_tutorials/HtmlForms" style={linkText}>
                HTML Forms
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

export default CssTutorialNavbar;
