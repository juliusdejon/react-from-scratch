import React from "react";

import "./hamburger-button.scss";

const HamburgerButton = props => (
  <button
    className="hamburger-button"
    onClick={props.handleHamburgerButtonClick}
  >
    <div className="hamburger-button-line" />
    <div className="hamburger-button-line" />
    <div className="hamburger-button-line" />
  </button>
);

export default HamburgerButton;
