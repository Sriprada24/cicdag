// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: "Welcome, Farmer!",
      addCrop: "Add Crop",
      chat: "Chat",
      selectLanguage: "Select Language",
      send: "Send",
      aiTyping: "AI is typing..."
    }
  },
  hi: {
    translation: {
      welcome: "स्वागत है, किसान!",
      addCrop: "फसल जोड़ें",
      chat: "बात करें",
      selectLanguage: "भाषा चुनें",
      send: "भेजें",
      aiTyping: "एआई लिख रहा है..."
    }
  },
  te: {
    translation: {
      welcome: "స్వాగతం రైతు!",
      addCrop: "పంట జోడించండి",
      chat: "చాట్",
      selectLanguage: "భాషను ఎంచుకోండి",
      send: "పంపించు",
      aiTyping: "AI టైప్ చేస్తోంది..."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
