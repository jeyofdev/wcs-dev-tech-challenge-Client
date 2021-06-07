import React from 'react';
import PropTypes from 'prop-types';

const H1 = ({ align, size, weight, children }) => {
  const styles = {
    textAlign: align,
    fontSize: size,
    fontWeight: weight,
  };

  return <h1 style={styles}>{children}</h1>;
};

H1.defaultProps = {
  size: '2.5em',
  align: 'center',
  weight: 'normal',
};

H1.propTypes = {
  size: PropTypes.string,
  align: PropTypes.string,
  weight: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default H1;
