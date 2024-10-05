import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './en.json';
import uaTranslations from './ua.json';

// Определите языки и файлы локализации
const resources = {
  en: {
    translation: enTranslations
  },
  ua: {
    translation: uaTranslations
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Установите язык по умолчанию
    fallbackLng: 'en', // Язык, используемый в случае отсутствия перевода
    interpolation: {
      escapeValue: false // Не экранировать специальные символы
    }
  });

export default i18n;
