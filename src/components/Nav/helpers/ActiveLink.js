import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import { NavLink } from 'reactstrap';
import { Link as LanguageLink } from '../../../../i18n';

const ActiveLink = ({
  router, href, label, onClick,
}) => {
  const isActive = router.pathname === href;
  return (
    <LanguageLink href={href} passHref>
      <NavLink aria-current={isActive ? 'page' : undefined} className={isActive ? 'nav-link-active' : undefined} onClick={onClick}>
        {label}
      </NavLink>
    </LanguageLink>
  );
};

ActiveLink.propTypes = {
  router: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withRouter(ActiveLink);
