import React from "react";
import Input from "../Input";
import InputError from "../InputError";
import { TextArea } from "./styled";
import PropTypes from "prop-types";

const ControlView = ({
  onClear,
  value,
  error,
  onChange,
  onKeyPress,
  valid,
  id,
  type,
  noValidStyle,
  placeholder,
  autoFocus,
  autoComplete,
}) => {
  return (
    <>
      {type === "textarea" ? (
        <TextArea
          id={id}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          valid={valid}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
        />
      ) : (
        <Input
          noValidStyle={noValidStyle}
          type={type}
          id={id}
          onClear={onClear}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          valid={valid}
          placeholder={placeholder}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
        />
      )}
      <InputError>{error}</InputError>
    </>
  );
};

ControlView.propTypes = {
  type: PropTypes.oneOf(["textarea", "text", "password"]).isRequired,
  onClear: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.string,
};

export default ControlView;
