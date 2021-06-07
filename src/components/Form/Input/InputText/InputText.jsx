import React from 'react';
import PropTypes from 'prop-types';
import './InputText.css';

const InputText = ({
  name,
  size,
  className,
  placeholder,
  value,
  handleChange,
}) => {
  const styles = {
    fontSize: size,
  };

  return (
    <input
      type="text"
      id={name}
      name={name}
      className={className}
      style={styles}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

InputText.defaultProps = {
  className: '',
  size: '1em',
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputText;
