import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, size, children }) => {
  const styles = {
    display: 'block',
    marginBottom: '1.1em',
    fontSize: size,
  };

  return (
    <label htmlFor={htmlFor} style={styles}>
      {children}
    </label>
  );
};

Label.defaultProps = {
  size: '1em',
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  size: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Label;
