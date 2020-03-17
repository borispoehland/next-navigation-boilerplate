const I18N = require('next-i18next').default;

const i18nInstance = new I18N({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  localeSubpaths: {
    de: 'de',
    en: 'en',
  },
});

module.exports = i18nInstance;
