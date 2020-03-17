import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Layout from '../src/components/Layout';
import { appWithTranslation } from '../i18n';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(fas, fab);

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>next-navigation-boilerplate</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
export default appWithTranslation(CustomApp);
