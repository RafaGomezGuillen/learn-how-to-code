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
import CssIntroduction from "./pages/css_tutorials/quarter_01/CssIntroduction";
import CssBasics from "./pages/css_tutorials/quarter_01/CssBasics";
import CssBoxModel from "./pages/css_tutorials/quarter_01/CssBoxModel";
import CssLinks from "./pages/css_tutorials/quarter_01/CssLinks";
import CssLists from "./pages/css_tutorials/quarter_01/CssLists";
import CssMeasureColors from "./pages/css_tutorials/quarter_01/CssMeasureColors";
import CssPositioningVisual from "./pages/css_tutorials/quarter_01/CssPositioningVisual";
import CssSelectors from "./pages/css_tutorials/quarter_01/CssSelectors";
import CssTables from "./pages/css_tutorials/quarter_01/CssTables";
import CssText from "./pages/css_tutorials/quarter_01/CssText";
import SqlIntroduction from "./pages/sql_tutorials/SqlIntroduction";
import SqlBasicQueries01 from "./pages/sql_tutorials/SqlBasicQueries01";
import SqlBasicQueries02 from "./pages/sql_tutorials/SqlBasicQueries02";
import SqlBasics from "./pages/sql_tutorials/SqlBasics";
import SqlFundamentalQueries01 from "./pages/sql_tutorials/SqlFundamentalQueries01";
import SqlFundamentalQueries02 from "./pages/sql_tutorials/SqlFundamentalQueries02";
import SqlFundamentalQueries03 from "./pages/sql_tutorials/SqlFundamentalQueries03";
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
        <Route exact path="/pages/css_tutorials/quarter_01/CssIntroduction" element={<CssIntroduction />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssBasics" element={<CssBasics />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssBoxModel" element={<CssBoxModel />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssLinks" element={<CssLinks />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssLists" element={<CssLists />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssMeasureColors" element={<CssMeasureColors />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssPositioningVisual" element={<CssPositioningVisual />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssSelectors" element={<CssSelectors />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssTables" element={<CssTables />} />
        <Route exact path="/pages/css_tutorials/quarter_01/CssText" element={<CssText />} />
        <Route exact path="/pages/sql_tutorials/SqlIntroduction" element={<SqlIntroduction />} />
        <Route exact path="/pages/sql_tutorials/SqlBasicQueries01" element={<SqlBasicQueries01 />} />
        <Route exact path="/pages/sql_tutorials/SqlBasicQueries02" element={<SqlBasicQueries02 />} />
        <Route exact path="/pages/sql_tutorials/SqlBasics" element={<SqlBasics />} />
        <Route exact path="/pages/sql_tutorials/SqlFundamentalQueries01" element={<SqlFundamentalQueries01 />} />
        <Route exact path="/pages/sql_tutorials/SqlFundamentalQueries02" element={<SqlFundamentalQueries02 />} />
        <Route exact path="/pages/sql_tutorials/SqlFundamentalQueries03" element={<SqlFundamentalQueries03 />} />
      </Routes>
    </>
  );
}

export default App;
