import React from "react";
import { Input } from "semantic-ui-react";
import PropTypes from "prop-types";

const GenericInput = ({ type, id, value, placeholder, handleChange }) => (
  <Input
    focus
    placeholder={placeholder}
    type={type}
    className="ui focus input"
    id={id}
    value={value}
    onChange={handleChange}
    required
  />
);

GenericInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default GenericInput;
