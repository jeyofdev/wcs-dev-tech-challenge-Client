import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ name, placeholder }) => {
  return <input type="text" id={name} name={name} placeholder={placeholder} />;
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputText;
