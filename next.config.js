const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {
  de: 'de',
  en: 'en',
};

module.exports = withCSS(withSass({
  publicRuntimeConfig: {
    localeSubpaths,
  },
  experimental: {
    async rewrites() {
      return [
        ...nextI18NextRewrites(localeSubpaths),
      ];
    },
  },
}));
