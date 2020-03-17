import React from 'react';
import PropTypes from 'prop-types';

const IconWithText = ({ icon, label, id }) => (
  <div id={id} className="d-inline">
    {icon}
    <span>{` ${label}`}</span>
  </div>
);

IconWithText.defaultProps = {
  id: undefined,
};

IconWithText.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default IconWithText;
