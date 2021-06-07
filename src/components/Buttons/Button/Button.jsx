import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ submit, variant, size, children }) => {
  const styles = {
    fontSize: size,
  };

  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn btn-${variant}`}
      style={styles}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  submit: false,
  variant: 'primary',
  size: '1em',
};

Button.propTypes = {
  submit: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Button;
