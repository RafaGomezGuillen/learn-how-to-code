import React from "react";
import Home from "./pages/Home";
import Prueba from "./pages/Prueba";
import HtmlHome from "./pages/html_tutorials/HtmlHome";
import { Routes, Route } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pages/Home" element={<Home />} />
        <Route exact path="/pages/Prueba" element={<Prueba />} />
        <Route exact path="/pages/html_tutorials/HtmlHome" element={<HtmlHome />} />
      </Routes>
    </>
  );
}

export default App;
