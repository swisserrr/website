import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './public/static/locales/en/translation.json';
import translationHI from './public/static/locales/hi/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  hi: {
    translation: translationHI,
  },
};

i18n
  // passes i18n down to react-i18next
  .use(initReactI18next)
  .init({
    resources,

    debug: true,

    // Set default namespace
    defaultNS: 'translation',
    lng: 'en',

    interpolation: {
      // react already safes from xss
      escapeValue: false,
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
