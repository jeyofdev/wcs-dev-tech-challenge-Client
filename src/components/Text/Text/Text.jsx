import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ size, children }) => {
  const styles = {
    fontSize: size,
  };

  return <p style={styles}>{children}</p>;
};

Text.defaultProps = {
  size: '1rem',
};

Text.propTypes = {
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Text;
