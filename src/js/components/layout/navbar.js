import React from "react";
import { Dropdown, Image } from "semantic-ui-react";

import logo from "../../../img/rotunda-logo.png";

import "./layout.scss";

const trigger = (
  <span>
    <Image
      avatar
      src={"https://react.semantic-ui.com/images/avatar/large/jenny.jpg"}
    />{" "}
    John Doe
  </span>
);

const options = [
  { key: "user", text: "Account", icon: "user" },
  { key: "settings", text: "Settings", icon: "settings" },
  { key: "sign-out", text: "Sign Out", icon: "sign out" }
];

const Navbar = () => (
  <nav className="navbar">
    <a href="#" className="logo">
      <img src={logo} alt="rotunda-logo" />
    </a>
    <ul className="nav-links">
      <li className="nav-item">
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
  </nav>
);

export default Navbar;
