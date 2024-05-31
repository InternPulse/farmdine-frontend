import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import navLogo1 from "../../assets/nav-logo1.jpg";

const Navbar: React.FC = () => {
  return (
    <div className="container">
      <nav className="navbar flex items-center flex-grow justify-between">
        <img src={navLogo1} alt="Company Logo" className="logo" />
        <div className="products flex justify-center space-x-8">
          <Link to="/" className="nav-link-home">
            Home
          </Link>
          <Link to="/products" className="nav-link">
            Product Listing
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/help" className="nav-link">
            Help
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="log-in-button">
            Log in
          </Link>
          <Link to="/signup" className="sign-up-button">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
