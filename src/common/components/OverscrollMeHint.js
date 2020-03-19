import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../../i18n';

import './style.sass';

const OverscrollMeHint = ({ t }) => (
  <div id="overscrollMe">
    <span>
      &#x2193;
      {' '}
      {t('overscrollMeExplanation')}
      {' '}
      &#x2193;
    </span>
  </div>
);

OverscrollMeHint.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(OverscrollMeHint);
