import React from "react";
import Home from "./pages/Home";
import HtmlHome from "./pages/html_tutorials/HtmlHome";
import HtmlIntroduction from "./pages/html_tutorials/HtmlIntroduction";
import { Routes, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pages/Home" element={<Home />} />
        <Route exact path="/pages/html_tutorials/HtmlHome" element={<HtmlHome />} />
        <Route exact path="/pages/html_tutorials/HtmlIntroduction" element={<HtmlIntroduction />} />
      </Routes>
    </>
  );
}

export default App;
