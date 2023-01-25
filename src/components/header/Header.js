import React from "react";
import "./Header.css";
import { SiDuolingo } from "react-icons/si";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import DarkMode from "../dark_mode/DarkMode";
import { Navigate } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="icon-home">
        <a href="https://www.duolingo.com">
          <SiDuolingo className="icon-home-img" />
        </a>
      </div>
      <nav>
        <Dropdown className="d-inline">
          <Dropdown.Toggle id="nav-btn">Tutorials</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Navigate to={"../../pages/Prueba"}></Navigate> Menu Item
            </Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="d-inline">
          <Dropdown.Toggle id="nav-btn">Exercises</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a href="#" className="about-us">
          About me
        </a>
      </nav>
      <div className="dark-mode">
        <DarkMode />
      </div>
    </header>
  );
}

export default Header;
