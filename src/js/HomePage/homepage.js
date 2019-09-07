import React, { Component } from "react";

import logo from "../../img/reactJS.gif";
import "./homepage.scss";

import GenericInput from "../components/generic-input";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { name } = this.state;
    return (
      <article>
        <img src={logo} alt="react-git" className="logo" />
        <form id="article-form">
          <GenericInput
            id="name"
            value={name}
            placeholder={"I'm a Generic Input"}
            handleChange={this.handleChange}
          />
        </form>
      </article>
    );
  }
}
export default HomePage;
