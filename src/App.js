// src/App.js
import React from "react";
import "./App.css"; 
import navLogo from "./images/nav-logo.jpg";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <img src={navLogo} alt="Company Logo" className="logo" />
        <div className="products">
          <a href="#" className="nav-link-home">
            Home
          </a>
          <a href="#" className="nav-link">
            Product Listing
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
          <a href="#" className="nav-link">
            Help
          </a>
        </div>
        <a href="#" className="log-in-button">
          Log in
        </a>
        <a href="#" className="sign-up-button">
          Sign Up
        </a>
      </nav>
    </div>
  );
}

export default App;

