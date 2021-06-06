import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children }) => {
  const styles = {
    display: 'block',
    marginBottom: '0.5em',
  };

  return (
    <label htmlFor={htmlFor} style={styles}>
      {children}
    </label>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Label;
