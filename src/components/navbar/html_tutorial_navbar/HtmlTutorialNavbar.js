import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaHtml5, FaImage } from "react-icons/fa";
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
      <SideNav.Nav defaultSelected="home">
        {/*<NavLink to="../../../pages/Home">Home</NavLink> */}
        <NavItem eventKey="html-tutorial">
          <NavIcon>
            <FaHtml5
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Tutorial</NavText>
          <NavItem eventKey="html-tutorial/Home">
            <NavText>HTML Home</NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Introduction">
            <NavText>HTML Introduction</NavText>
          </NavItem>
          <NavItem eventKey="html-tutorial/Basics">
            <NavText>HTML Basics</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-structure">
          <NavIcon>
            <IoConstructOutline
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Structure</NavText>
          <NavItem eventKey="html-structure/p">
            <NavText>HTML &lt;p&gt;</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-sections">
          <NavIcon>
            <TbSection
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Sections</NavText>
          <NavItem eventKey="html-sections/h1">
            <NavText>HTML &lt;h1&gt;, &lt;h2&gt;...</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-text-markup">
          <NavIcon>
            <VscTextSize
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Text Markup</NavText>
          <NavItem eventKey="html-text-markup/basic">
            <NavText>HTML Basic Text Markup</NavText>
          </NavItem>
          <NavItem eventKey="html-text-markup/advanzed">
            <NavText>HTML Advanzed Text Markup</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-lists">
          <NavIcon>
            <MdFormatListBulleted
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Lists</NavText>
          <NavItem eventKey="html-lists/ordered">
            <NavText>HTML Oderder Lists</NavText>
          </NavItem>
          <NavItem eventKey="html-lists/unordered">
            <NavText>HTML Unordered Lists</NavText>
          </NavItem>
          <NavItem eventKey="html-lists/definition">
            <NavText>HTML Definition Lists</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-spaces">
          <NavIcon>
            <MdSpaceBar
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Whitespace, New Lines</NavText>
          <NavItem eventKey="html-spaces/br">
            <NavText>HTML &lt;br&gt;, &amp;nbsp;...</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-preformatted-text">
          <NavIcon>
            <BiCode
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Preformatted Text</NavText>
          <NavItem eventKey="html-preformatted-text/pre">
            <NavText>HTML &lt;pre&gt;, &lt;code&gt;...</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-character-encoding">
          <NavIcon>
            <BiCodeBlock
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Character Encoding</NavText>
          <NavItem eventKey="html-character-encoding/ampersand">
            <NavText>HTML less than, ampersand...</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-images">
          <NavIcon>
            <FaImage
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Images</NavText>
          <NavItem eventKey="html-images/img">
            <NavText>HTML &lt;img&gt;</NavText>
          </NavItem>
          <NavItem eventKey="html-images/map">
            <NavText>HTML &lt;map&gt;</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="html-forms">
          <NavIcon>
            <MdSystemUpdateAlt
              style={{
                width: "35px",
                height: "35px",
                color: "var(--font-color)",
              }}
            />
          </NavIcon>
          <NavText>HTML Forms</NavText>
          <NavItem eventKey="html-forms/elements">
            <NavText>HTML Elements Forms</NavText>
          </NavItem>
          <NavItem eventKey="html-forms/forms">
            <NavText>
              HTML Advanzed Forms
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="searcher">
          <NavIcon>
            <Searcher />
          </NavIcon>
          <NavText>&nbsp;&nbsp;Searcher</NavText>
        </NavItem>
        <NavItem eventKey="dark">
          <NavIcon>
            <DarkMode />
          </NavIcon>
          <NavText>&nbsp;&nbsp;Light/Dark mode</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default HtmlTutorialNavbar;
