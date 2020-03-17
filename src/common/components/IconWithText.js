import React from 'react';
import PropTypes from 'prop-types';

const IconWithText = ({ icon, label }) => (
  <div className="d-inline">
    {icon}
    <span>{` ${label}`}</span>
  </div>
);


IconWithText.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};

export default IconWithText;
