import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Places from "./components/Places";
import Curator from "./components/Curator";
import Footer from "./components/Footer";
import "./styles/global.scss";

// import { useState } from "react";
// import { LocationContext } from "./contexts/LocationContext";

export default function App() {

  return (
    <div className="main__wrapper">
      <div className="main__container">
          <Header />
          <Home />
          <Places />
          <Curator />
      </div>
      <Footer />
    </div>
  );
}
