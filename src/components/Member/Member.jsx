import React from 'react';
import PropTypes from 'prop-types';

const Member = ({ padding, children }) => {
  const styles = {
    padding,
  };

  return (
    <div className="member-item" style={styles}>
      {children}
    </div>
  );
};

Member.defaultProps = {
  padding: '0.25em 0',
};

Member.propTypes = {
  padding: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Member;
