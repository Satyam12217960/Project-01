import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <h1 style={{ fontSize: "45px" }}>Chess Arena</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/booking">Booking</Link>
      </div>
    </nav>
  );
};

export default Header;

