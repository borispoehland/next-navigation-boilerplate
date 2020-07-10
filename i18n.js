const I18N = require('next-i18next').default;
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;
const path = require('path');

const i18nInstance = new I18N({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localePath: path.resolve('./public/static/locales/'),
  localeSubpaths,
});

module.exports = i18nInstance;
