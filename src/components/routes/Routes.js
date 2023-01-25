import React from "react";
import Header from "../header/Header";
import Prueba from "../../pages/Prueba";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function MyRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="../../pages/Prueba" element={<Prueba />}></Route>
          <Route path="../header/Header" element={<Header />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default MyRoutes;