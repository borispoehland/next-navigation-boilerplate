import React from 'react';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import Footer from '../Footer';
import {withTranslation} from '../../../i18n';

import './style.sass';

const Layout = ({ children, t }) => (
  <Page>
    <PageWithoutFooter>
      <Nav />
      <Content aria-label={t('content')}>
        {children}
      </Content>
    </PageWithoutFooter>
    <Footer />
  </Page>
);

const PageWithoutFooter = ({ children }) => <div id="page-without-footer">{children}</div>;
const Page = ({ children }) => <div id="page">{children}</div>;
const Content = ({ children, ...props }) => <div id="content" {...props}>{children}</div>;

const childrenRequired = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

const translationRequired = {
  t: PropTypes.func.isRequired,
};

Layout.propTypes = { ...childrenRequired, ...translationRequired };
PageWithoutFooter.propTypes = childrenRequired;
Page.propTypes = childrenRequired;
Content.propTypes = childrenRequired;

export default withTranslation('aria')(Layout);
