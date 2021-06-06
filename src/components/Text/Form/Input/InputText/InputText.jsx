import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ name, placeholder, handleChange }) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputText;
