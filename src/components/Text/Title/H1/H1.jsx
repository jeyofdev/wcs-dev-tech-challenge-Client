import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ align, size, children }) => {
  const styles = {
    textAlign: align,
    fontSize: size,
  };

  return <h1 style={styles}>{children}</h1>;
};

H1.defaultProps = {
  size: '2.5em',
  align: 'center',
};

H1.propTypes = {
  size: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default H1;
