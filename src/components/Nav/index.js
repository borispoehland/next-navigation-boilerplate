import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import $ from 'jquery';
import useWindowEvent from '../../common/hooks/useWindowEvent';
import useEffectOnce from '../../common/hooks/useEffectOnce';
import useMobileState from '../../common/hooks/useMobileState';
import LanguageDropdown from './helpers/LanguageDropdown';
import ThemeDropdown from './helpers/ThemeDropdown';
import ActiveLink from './helpers/ActiveLink';
import BrandLink from './helpers/BrandLink';
import GithubLink from './helpers/GithubLink';
import links from './links';
import { withTranslation } from '../../../i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.sass';

let $nav;
let $navBottom;
let $main;
let $mainBottom;

function navBarScrollListener() {
  function makeNavFixed() {
    $nav.addClass('fixed');
  }

  function makeNavAbsoluteAgain() {
    $nav.removeClass('transition').removeClass('fixed');
  }

  function scrollFixedNavIntoView() {
    $nav.addClass('transition').addClass('fixed-show');
  }

  function scrollFixedNavOutOfView() {
    $nav.removeClass('fixed-show');
  }

  const scrollPos = window.scrollY;

  if (scrollPos > $navBottom) makeNavFixed();
  else makeNavAbsoluteAgain();

  if (scrollPos > $mainBottom) scrollFixedNavIntoView();
  else scrollFixedNavOutOfView();
}

const NavBar = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobileState();
  const toggleMobileMenu = () => isMobile && setIsOpen(!isOpen);
  const closeMobileMenu = () => isMobile && setIsOpen(false);
  const convertJSONLinkToNavItem = (link) => {
    if (!link.mobileOnly || (link.mobileOnly && isMobile)) {
      const { href, languageID } = link;
      return (
        <NavItem key={href}>
          <ActiveLink key={href} href={href} label={t(languageID)} onClick={closeMobileMenu} />
        </NavItem>
      );
    }
    return undefined;
  };

  useEffect(() => {
    $nav = $('header');
    $main = $('main');
    // eslint-disable-next-line max-len
    $mainBottom = $main.length ? $main.position().top + $main.outerHeight(true) : Number.MAX_SAFE_INTEGER;
    $navBottom = $nav.position().top + $nav.outerHeight(true);
  });

  useEffectOnce(navBarScrollListener);

  useWindowEvent('scroll', navBarScrollListener); // if the landing container is surpassed, scroll down the navbar

  return (
    <header aria-label={t('aria:nav')}>
      <Navbar light expand="md">

        <BrandLink onClick={closeMobileMenu}>
          Logo
        </BrandLink>

        <Nav className="flex-row order-2 order-md-3 align-items-center" navbar>
          <ThemeDropdown ariaLabel={t('aria:chooseTheme')} />
          <LanguageDropdown ariaLabel={t('aria:chooseLanguage')} />
          <NavbarToggler onClick={toggleMobileMenu} />
        </Nav>

        <Collapse className="order-3 order-md-2" isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {links.map(convertJSONLinkToNavItem)}
          </Nav>
        </Collapse>

        <GithubLink />
      </Navbar>
    </header>
  );
};


NavBar.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['nav', 'aria'])(NavBar);
