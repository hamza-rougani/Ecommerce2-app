import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import  LanguageDetector  from "i18next-browser-languagedetector";
import ar from './ar.json'
import en from './en.json'
import fr from './fr.json'
const resources = {
  ar: {
    translation: ar
  },
  en: {
    translation: en
  },
  fr: {
    translation: fr
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",


    interpolation: {
      escapeValue: false 
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;