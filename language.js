// LANGUAGE SYSTEM - Shared across all pages
let currentLanguage = 'fr';
let translations = {};

const langConfig = {
  'fr': { flag: '🇫🇷', code: 'FR', dir: 'ltr' },
  'ar': { flag: '🇲🇦', code: 'AR', dir: 'rtl' },
  'en': { flag: '🇬🇧', code: 'EN', dir: 'ltr' }
};

async function loadTranslations(lang) {
  try {
    // Detect if we're in pages/ directory or root
    const isInPages = window.location.pathname.includes('/pages/');
    const path = isInPages ? `../translations/${lang}.json` : `translations/${lang}.json`;
    const response = await fetch(path);
    translations = await response.json();
    applyTranslations();
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

function applyTranslations() {
  // Update text content
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedTranslation(translations, key);
    if (translation) {
      element.textContent = translation;
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    const translation = getNestedTranslation(translations, key);
    if (translation) {
      element.placeholder = translation;
    }
  });

  // Update direction for Arabic
  const html = document.documentElement;
  html.setAttribute('dir', langConfig[currentLanguage].dir);
  html.setAttribute('lang', currentLanguage);
}

function getNestedTranslation(obj, path) {
  return path.split('.').reduce((o, key) => o && o[key], obj);
}

function changeLanguage(lang) {
  if (lang === currentLanguage) return;
  
  currentLanguage = lang;
  localStorage.setItem('gtel-lang', lang);
  
  // Update language switcher UI
  const currentLangBtn = document.getElementById('current-lang-btn');
  if (currentLangBtn) {
    const flagEl = document.getElementById('current-lang-flag');
    const codeEl = document.getElementById('current-lang-code');
    if (flagEl) flagEl.textContent = langConfig[lang].flag;
    if (codeEl) codeEl.textContent = langConfig[lang].code;
  }
  
  loadTranslations(lang);
}

// Initialize language system
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('gtel-lang') || 'fr';
  changeLanguage(savedLang);
});
