import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaCss3Alt, FaHome } from "react-icons/fa";
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
        <NavItem eventKey="css-tutorial">
          <NavIcon>
            <FaCss3Alt style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>CSS Tutorial. 1st quarter.</NavText>
          <NavItem eventKey="css-tutorial/Introduction">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssIntroduction"
                style={linkText}
              >
                CSS Introduction
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/Basics">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssBasics"
                style={linkText}
              >
                CSS Basics
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/Selectors">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssSelectors"
                style={linkText}
              >
                CSS Selectors
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/MeasureColors">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssMeasureColors"
                style={linkText}
              >
                css Measure & Colors
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/BoxModel">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssBoxModel"
                style={linkText}
              >
                CSS Box model
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/Text">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssText"
                style={linkText}
              >
                CSS Text
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/Links">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssLinks"
                style={linkText}
              >
                CSS Links
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/Lists">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssLists"
                style={linkText}
              >
                CSS Lists
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/Tables">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssTables"
                style={linkText}
              >
                CSS Tables
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/PositioningVisual">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssPositioningVisual"
                style={linkText}
              >
                CSS Positioning & Visuals
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/Forms">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssForms"
                style={linkText}
              >
                CSS Forms
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="css-tutorial/Layout">
            <NavText>
              <NavLink
                to="../../../pages/css_tutorials/quarter_01/CssLayout"
                style={linkText}
              >
                CSS Layout
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
