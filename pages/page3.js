import React from 'react';
import PropTypes from 'prop-types';
import InfoIconWithTooltip from '../src/common/components/InfoIconWithTooltip';
import { withTranslation } from '../i18n';

const Page3 = ({ t }) => (
  <>
    <main>
      <h1>{t('helloPage3')}</h1>
      <InfoIconWithTooltip tooltip={t('mainExplanation')} />
    </main>
    <div id="no-main">
      <InfoIconWithTooltip tooltip={t('belowMainExplanation')} />
    </div>
  </>
);

Page3.getInitialProps = async () => ({
  namespacesRequired: ['nav', 'common', 'footer', 'aria'],
});

Page3.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Page3);
