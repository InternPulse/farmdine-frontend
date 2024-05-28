import React from "react";
import "./Navbar.css";
import navLogo1 from "../../assets/nav-logo1.jpg";

const Navbar: React.FC = () => {
  return (
    <div className="container">
      <nav className="navbar flex items-center flex-grow justify-between">
        <img src={navLogo1} alt="Company Logo" className="logo" />
        <div className="products flex justify-center space-x-8">
          <a href="/" className="nav-link-home">
            Home
          </a>
          <a href="/" className="nav-link">
            Product Listing
          </a>
          <a href="/" className="nav-link">
            Contact
          </a>
          <a href="/" className="nav-link">
            Help
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="log-in-button">
            Log in
          </a>
          <a href="/" className="sign-up-button">
            Sign Up
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
