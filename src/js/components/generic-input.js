import React from "react";
import { Input } from "semantic-ui-react";
import PropTypes from "prop-types";

const GenericInput = ({
  label,
  text,
  type,
  id,
  value,
  placeholder,
  handleChange
}) => (
  <div className="form-group">
    <label htmlFor={label}>{text}</label>
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
  </div>
);

GenericInput.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default GenericInput;
