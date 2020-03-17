import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../../../i18n';

import './style.sass';

const Footer = ({ t }) => (
  <footer aria-label={t('aria:footer')}>
    <h1>{t('footer')}</h1>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['footer', 'aria'])(Footer);
