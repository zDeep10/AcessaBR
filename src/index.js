import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/global.scss";

ReactDOM.render(
  <div className="main__wrapper">
    <div className="main__container">
      <Header />
      <Home />
    </div>
  </div>,
  document.getElementById("root")
);
