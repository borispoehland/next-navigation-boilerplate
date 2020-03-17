import React from 'react';
import PropTypes from 'prop-types';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconWithText from '../../../common/components/IconWithText';
import { withTranslation } from '../../../../i18n';

const LanguageDropdown = ({ i18n, ariaLabel }) => {
  const languageIcon = <FontAwesomeIcon icon="globe" />;
  const currentLang = i18n.language.toUpperCase();

  return (
    <UncontrolledDropdown aria-label={ariaLabel} nav inNavbar>
      <DropdownToggle nav caret>
        <IconWithText label={currentLang} icon={languageIcon} />
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem disabled={currentLang === 'DE'} onClick={() => i18n.changeLanguage('de')}>
          DE
        </DropdownItem>
        <DropdownItem disabled={currentLang === 'EN'} onClick={() => i18n.changeLanguage('en')}>
          EN
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

LanguageDropdown.propTypes = {
  i18n: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default withTranslation()(LanguageDropdown);
