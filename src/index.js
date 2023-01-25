import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import reportWebVitals from "./reportWebVitals";
import MyRoutes from "./components/routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header></Header>
    <MyRoutes></MyRoutes>
  </>
);

reportWebVitals();
