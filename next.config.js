const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(withSass({
  env: {
    PORT: 3000,
    SOME_OTHER_VAR: true,
  },
}));
