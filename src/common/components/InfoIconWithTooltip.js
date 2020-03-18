import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.sass';

const InfoIconWithTooltip = ({ tooltip }) => (
  <>
    <div className="pulse">
      <FontAwesomeIcon icon="info-circle" size="lg" data-tip={tooltip} />
    </div>
    <ReactTooltip type="info" effect="float" place="bottom" clickable multiline />
  </>
);

InfoIconWithTooltip.propTypes = {
  tooltip: PropTypes.string.isRequired,
};

export default InfoIconWithTooltip;
