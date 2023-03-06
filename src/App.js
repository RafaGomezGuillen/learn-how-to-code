import React from "react";
import Home from "./pages/Home";
import HtmlHome from "./pages/html_tutorials/HtmlHome";
import HtmlIntroduction from "./pages/html_tutorials/HtmlIntroduction";
import HtmlBasics from "./pages/html_tutorials/HtmlBasics";
import HtmlText from "./pages/html_tutorials/HtmlText";
import HtmlLists from "./pages/html_tutorials/HtmlLists";
import HtmlImages from "./pages/html_tutorials/HtmlImages";
import HtmlTables from "./pages/html_tutorials/HtmlTables";
import HtmlLinks from "./pages/html_tutorials/HtmlLinks";
import HtmlForms from "./pages/html_tutorials/HtmlForms";
import HtmlExercises from "./pages/html_exercises/HtmlExercises";
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
        <Route exact path="/pages/html_tutorials/HtmlBasics" element={<HtmlBasics />} />
        <Route exact path="/pages/html_tutorials/HtmlText" element={<HtmlText />} />
        <Route exact path="/pages/html_tutorials/HtmlLists" element={<HtmlLists />} />
        <Route exact path="/pages/html_tutorials/HtmlImages" element={<HtmlImages />} />
        <Route exact path="/pages/html_tutorials/HtmlTables" element={<HtmlTables />} />
        <Route exact path="/pages/html_tutorials/HtmlLinks" element={<HtmlLinks />} />
        <Route exact path="/pages/html_tutorials/HtmlForms" element={<HtmlForms />} />
        <Route exact path="/pages/html_exercises/HtmlExercises" element={<HtmlExercises />} />
      </Routes>
    </>
  );
}

export default App;
