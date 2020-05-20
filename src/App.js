import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav.js";
import Landing from "./Components/Landing/Landing";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio.js";
import Gallery from "./Pages/Gallery/Gallery.js";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />

      <Landing />

      <Home />

      <Portfolio />

      <Gallery />

      <Footer />
    </div>
  );
}

export default App;
