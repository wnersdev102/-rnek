import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: '/flags/türkiye.png' },
    { code: 'en', name: 'English', flag: '/flags/ingiltere.png' },
    { code: 'az', name: 'Azərbaycan', flag: '/flags/azerbaijan.png' },
    { code: 'ru', name: 'Русский', flag: '/flags/russia.png' },
    { code: 'de', name: 'Deutsch', flag: '/flags/germany.png' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={currentLang.flag} alt={currentLang.name} className="flag" />
        <span className="lang-name">{currentLang.name}</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map(lang => (
            <button
              key={lang.code}
              className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <img src={lang.flag} alt={lang.name} className="flag" />
              <span className="lang-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
