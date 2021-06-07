import React from 'react';
import PropTypes from 'prop-types';
import './Member.css';

const Member = ({ children }) => {
  return <div className="member-item">{children}</div>;
};

Member.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Member;
