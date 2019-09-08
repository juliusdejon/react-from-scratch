import React, { Component } from "react";

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
        <form id="article-form">
          <GenericInput
            id="name"
            type="text"
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
