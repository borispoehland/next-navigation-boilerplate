import React from 'react';
import PropTypes from 'prop-types';
import { Link as LanguageLink } from '../../../../i18n';

// NavbarBrand from reactstrap causes errors, so I made it manually

const Brand = ({ href, children, onClick }) => (
  <LanguageLink href={href} passHref>
    <button type="button" className="navbar-brand order-1 btn btn-link" onClick={onClick}>
      {children}
    </button>
  </LanguageLink>
);

Brand.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

Brand.defaultProps = {
  href: '/',
};

export default Brand;
