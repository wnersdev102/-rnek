import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import LanguageSelector from './LanguageSelector';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="EzBro" className="logo-image" />
            <span className="logo-text">EzBro</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">{t.home}</Link>
            <Link to="/komutlar" className="nav-link">{t.commands}</Link>
            <Link to="/premium" className="nav-link premium-link">{t.premium}</Link>
          </nav>

          <div className="header-actions">
            <LanguageSelector />
            <a href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot" className="invite-button">{t.invite}</a>
            <button 
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
