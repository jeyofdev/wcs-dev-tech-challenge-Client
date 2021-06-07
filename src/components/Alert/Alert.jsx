import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ variant, size, children }) => {
  const styles = {
    fontSize: size,
  };

  return (
    <div className={`alert alert-${variant}`} role="alert" style={styles}>
      {children}
    </div>
  );
};

Alert.defaultProps = {
  size: '1em',
};

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Alert;
