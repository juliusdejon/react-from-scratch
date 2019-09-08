import React from "react";

import logo from "../../../img/rotunda-logo.png";

import "./layout.scss";

const Navbar = () => (
  <nav className="navbar">
    <a href="#" className="logo">
      <img src={logo} alt="rotunda-logo" />
    </a>
    <ul className="nav-links">
      <li className="nav-item">
        <a href="#">Employees</a>
      </li>
      <li className="nav-item">
        <a href="#">Payroll</a>
      </li>
      <li className="nav-item">
        <a href="#">Timesheets</a>
      </li>
      <li className="nav-item">
        <a href="#">Others</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
