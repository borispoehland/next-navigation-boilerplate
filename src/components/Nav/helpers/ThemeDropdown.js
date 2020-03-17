import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconWithText from '../../../common/components/IconWithText';
import { withTranslation } from '../../../../i18n';

let body;
let light;
let dark;

const ThemeDropdown = ({ t, ariaLabel }) => {
  const themeIcon = <FontAwesomeIcon icon="tint" />;

  useEffect(() => {
    body = $('body');
    light = $('#light-theme');
    dark = $('#dark-theme');
  });

  const toggleTheme = () => {
    body.toggleClass('theme-light theme-dark');
    light.toggleClass('disabled');
    dark.toggleClass('disabled');
  };

  return (
    <UncontrolledDropdown aria-label={ariaLabel} nav inNavbar>
      <DropdownToggle nav caret>
        <IconWithText label={t('themeLabel')} icon={themeIcon} />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem id="light-theme" className="disabled" onClick={toggleTheme}>
          {t('themeLight')}
        </DropdownItem>
        <DropdownItem id="dark-theme" onClick={toggleTheme}>
          {t('themeDark')}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

ThemeDropdown.propTypes = {
  t: PropTypes.func.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default withTranslation('nav')(ThemeDropdown);
