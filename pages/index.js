import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '../i18n';

const Home = ({ t }) => (
  <>
    <main>
      <h1>{t('helloHome')}</h1>
      <h3>{t('mainExplanation1')}</h3>
      <h3>{t('mainExplanation2')}</h3>
    </main>
    <div id="no-main">
      <h3>{t('belowMain1')}</h3>
      <h3>{t('belowMain2')}</h3>
    </div>
  </>
);

Home.getInitialProps = async () => ({
  namespacesRequired: ['nav', 'common', 'footer', 'aria'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Home);
