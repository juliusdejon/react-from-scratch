import * as React from "react";
import { Input } from "semantic-ui-react";

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

export { GenericInput };
