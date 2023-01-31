import React from "react";
import "./Header.css";
import { SiDuolingo } from "react-icons/si";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkMode from "../dark_mode/DarkMode";
import Searcher from "../searcher/Searcher";

function Header() {
  return (
    <>
      <header className="header">
        <div className="icon-home">
          <a href="../../pages/Home">
            <SiDuolingo className="icon-home-img" />
          </a>
        </div>
        <nav>
          <Dropdown className="d-inline">
            <Dropdown.Toggle id="nav-btn">Tutorials</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Menu Item</Dropdown.Item>
              <Dropdown.Item>Menu Item</Dropdown.Item>
              <Dropdown.Item>Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline">
            <Dropdown.Toggle id="nav-btn">Exercises</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Menu Item</Dropdown.Item>
              <Dropdown.Item>Menu Item</Dropdown.Item>
              <Dropdown.Item>Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a className="about-us" href="../../pages/Prueba">
              About me
            </a>
          <div className="dark-mode">
            <DarkMode />
          </div>
          <Searcher />
        </nav>
      </header>
    </>
  );
}

export default Header;
