import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const NavBar = () => (
  <nav className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Signup</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
