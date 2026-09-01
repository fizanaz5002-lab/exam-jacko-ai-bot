import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import hiTranslations from './locales/hi.json';

const resources = {
  en: { translation: enTranslations },
  hi: { translation: hiTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || import.meta.env.VITE_DEFAULT_LANGUAGE || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
