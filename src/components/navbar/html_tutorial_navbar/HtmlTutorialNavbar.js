import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHtml5, FaImage, FaHome } from "react-icons/fa";
import { IoConstructOutline } from "react-icons/io5";
import { TbSection } from "react-icons/tb";
import { VscTextSize } from "react-icons/vsc";
import {
  MdSpaceBar,
  MdFormatListBulleted,
  MdSystemUpdateAlt,
} from "react-icons/md";
import { BiCode, BiCodeBlock } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import DarkMode from "../../dark_mode/DarkMode";
import Searcher from "../../searcher/Searcher";

function HtmlTutorialNavbar() {
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
        <NavItem eventKey="html-tutorial">
          <NavIcon>
            <FaHtml5 style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Tutorial</NavText>
          <NavItem eventKey="html-tutorial/Home">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Home
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Introduction">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Introduction
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Basics">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Basics
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-structure">
          <NavIcon>
            <IoConstructOutline style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Structure</NavText>
          <NavItem eventKey="html-structure/p">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML &lt;p&gt;
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-sections">
          <NavIcon>
            <TbSection style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Sections</NavText>
          <NavItem eventKey="html-sections/h1">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML &lt;h1&gt;, &lt;h2&gt;...
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-text-markup">
          <NavIcon>
            <VscTextSize style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Text Markup</NavText>
          <NavItem eventKey="html-text-markup/basic">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Basic Text Markup
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-text-markup/advanzed">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Advanzed Text Markup
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-lists">
          <NavIcon>
            <MdFormatListBulleted style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Lists</NavText>
          <NavItem eventKey="html-lists/ordered">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Oderder Lists
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-lists/unordered">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Unordered Lists
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-lists/definition">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Definition Lists
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-spaces">
          <NavIcon>
            <MdSpaceBar style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Whitespace</NavText>
          <NavItem eventKey="html-spaces/br">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML &lt;br&gt;, &amp;nbsp;...
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-preformatted-text">
          <NavIcon>
            <BiCode style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Preformatted Text</NavText>
          <NavItem eventKey="html-preformatted-text/pre">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML &lt;br&gt;, &amp;nbsp;...
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-character-encoding">
          <NavIcon>
            <BiCodeBlock style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Character Encoding</NavText>
          <NavItem eventKey="html-character-encoding/ampersand">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML less than, ampersand..
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-images">
          <NavIcon>
            <FaImage style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Images</NavText>
          <NavItem eventKey="html-images/img">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML &lt;img&gt;
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-images/map">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML &lt;map&gt;
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-forms">
          <NavIcon>
            <MdSystemUpdateAlt style={iconStyle} />
          </NavIcon>
          <NavText style={linkText}>HTML Forms</NavText>
          <NavItem eventKey="html-forms/elements">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Elements Forms
              </NavLink>
            </NavText>
          </NavItem>
          <NavItem eventKey="html-forms/forms">
            <NavText>
              <NavLink to="#" style={linkText}>
                HTML Advanzed Forms
              </NavLink>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="searcher">
          <NavIcon>
            <Searcher />
          </NavIcon>
          <NavText style={linkText}>&nbsp;&nbsp;Searcher</NavText>
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

export default HtmlTutorialNavbar;
