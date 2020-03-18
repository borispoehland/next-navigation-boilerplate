import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconWithText from '../../../common/components/IconWithText';

const GitHubLink = () => {
  const githubIcon = <FontAwesomeIcon icon={['fab', 'github']} />;

  return (
    <a id="github-link" href="https://github.com/borispoehland/next-navigation-boilerplate" target="__blank">
      <IconWithText label="GitHub" icon={githubIcon} />
    </a>
  );
};

export default GitHubLink;
