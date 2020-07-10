import React from 'react';
import PropTypes from 'prop-types';
import NextError from 'next/error';
import { withTranslation } from '../i18n';

const Error404 = ({ t }) => (
  <NextError statusCode={404} title={t('404')} />
);

Error404.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('error')(Error404);
