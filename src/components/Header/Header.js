import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/order">Order</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Header;
