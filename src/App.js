import React from "react";
import Home from "./pages/Home";
import Prueba from "./pages/Prueba";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pages/Home" element={<Home />} />
        <Route exact path="/pages/Prueba" element={<Prueba />} />
      </Routes>
    </>
  );
}

export default App;
