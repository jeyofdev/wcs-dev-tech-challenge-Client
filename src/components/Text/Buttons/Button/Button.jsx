import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ submit, children }) => {
  return <button type={submit ? 'submit' : 'button'}>{children}</button>;
};

Button.defaultProps = {
  submit: false,
};

Button.propTypes = {
  submit: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Button;
