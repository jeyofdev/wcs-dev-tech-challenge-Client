import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({ align, size, children }) => {
  const styles = {
    textAlign: align,
    fontSize: size,
  };

  return <h2 style={styles}>{children}</h2>;
};

H2.defaultProps = {
  size: '1.5em',
  align: 'center',
};

H2.propTypes = {
  size: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default H2;
