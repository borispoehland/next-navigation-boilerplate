import React from 'react';
import PropTypes from 'prop-types';
import InfoIconWithTooltip from '../src/common/components/InfoIconWithTooltip';
import { withTranslation } from '../i18n';

const withNewLines = (translation) => translation.replace(/\n/g, '<br />');

const Home = ({ t }) => (
  <>
    <main>
      <h1>{t('helloHome')}</h1>
      <InfoIconWithTooltip tooltip={withNewLines(t('mainExplanation'))} />
    </main>
    <div id="no-main">
      <InfoIconWithTooltip tooltip={withNewLines(t('belowMainExplanation'))} />
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
