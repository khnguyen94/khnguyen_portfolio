import React from "react";
import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Khoa Nguyen React Portfolio
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
