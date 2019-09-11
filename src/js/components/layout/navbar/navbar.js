import React from "react";
import { Dropdown, Image } from "semantic-ui-react";

import HamburgerButton from "../sidebar/hamburger-button";

import logo from "../../../../img/rotunda-logo.png";

import "./navbar.scss";

const trigger = (
  <span>
    <Image
      avatar
      src={"https://react.semantic-ui.com/images/avatar/large/jenny.jpg"}
    />
    John Doe
  </span>
);

const options = [
  { key: "user", text: "Account", icon: "user" },
  { key: "settings", text: "Settings", icon: "settings" },
  { key: "sign-out", text: "Sign Out", icon: "sign out" }
];

const Navbar = props => (
  <nav className="navbar">
    <div className="navbar-content">
      <div>
        <HamburgerButton
          handleHamburgerButtonClick={props.handleHamburgerButtonClick}
        />
      </div>
      <div className="navbar-logo">
        <a href="#">
          <img src={logo} alt="rotunda-logo" />
        </a>
      </div>
      <div className="spacer" />
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="#">
            <Dropdown
              trigger={trigger}
              options={options}
              pointing="top left"
              icon={null}
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
