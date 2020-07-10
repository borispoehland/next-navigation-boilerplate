import React from 'react';
import PropTypes from 'prop-types';
import NextError from 'next/error';
import { withTranslation } from '../i18n';

const Error = ({ statusCode, t }) => (
  <NextError statusCode={statusCode} title={t(statusCode)} />
);

Error.getInitialProps = async ({ res, err }) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ['nav', 'error', 'footer', 'aria'],
    statusCode,
  };
};

Error.defaultProps = {
  statusCode: 500,
};

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default withTranslation('error')(Error);
