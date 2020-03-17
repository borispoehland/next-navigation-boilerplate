import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const Page2 = ({ t }) => (
  <>
    <main>
      <h1>{t('helloPage2')}</h1>
      <h3>{t('mainExplanation1')}</h3>
      <h3>{t('mainExplanation2')}</h3>
    </main>
    <div id="no-main">
      <h3>{t('belowMain1')}</h3>
      <h3>{t('belowMain2')}</h3>
    </div>
  </>
);

Page2.getInitialProps = async () => ({
  namespacesRequired: ['nav', 'common', 'footer', 'aria'],
});

Page2.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Page2);
