import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; 

const Navbar = () => (
  <header>
    <div className="logo">
      <h1>JobLance</h1>
    </div>
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;

