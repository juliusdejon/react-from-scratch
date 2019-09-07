import React, { Component } from "react";

import Input from "../components/generic-input";

import logo from "../../img/reactJS.gif";

import "./homepage.scss";
import GenericInput from "../components/generic-input";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <article>
        <img src={logo} alt="react-git" className="logo" />
        <form id="article-form">
          <GenericInput
            text="SEO title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={seo_title}
            placeholder={"Enter SEO"}
            handleChange={this.handleChange}
          />
        </form>
      </article>
    );
  }
}
export default HomePage;
