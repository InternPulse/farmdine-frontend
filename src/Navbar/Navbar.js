import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
      <div className="navbar">
        <img
          src={process.env.PUBLIC_URL + "/images/nav-logo.jpg"}
          alt="Navbar Logo"
        />
        <ul>
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">Product Listing</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="#">Help</Link>
          </li>
        </ul>
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    );
};