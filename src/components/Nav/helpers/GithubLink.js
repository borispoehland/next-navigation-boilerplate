import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconWithText from '../../../common/components/IconWithText';

const GithubLink = () => {
  const githubIcon = <FontAwesomeIcon icon={['fab', 'github']} />;

  return (
    <a href="https://github.com/borispoehland/next-navigation-boilerplate" target="__blank">
      <IconWithText id="github-link" label="GitHub" icon={githubIcon} />
    </a>
  );
};

export default GithubLink;
