import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { 
  RiDiscordFill, 
  RiTwitterFill, 
  RiGithubFill,
  RiHeartFill
} from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="EzBro" className="footer-logo-image" />
              <span className="footer-logo-text">EzBro</span>
            </div>
            <p className="footer-description">
              {t.footerDescription}
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Discord">
                <RiDiscordFill size={24} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <RiTwitterFill size={24} />
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <RiGithubFill size={24} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t.footerLinksTitle}</h3>
            <ul className="footer-links">
              <li><Link to="/">{t.home}</Link></li>
              <li><Link to="/komutlar">{t.commands}</Link></li>
              <li><Link to="/premium">{t.premium}</Link></li>
              <li><a href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot">{t.invite}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t.footerLegalTitle}</h3>
            <ul className="footer-links">
              <li><Link to="/privacy">{t.privacyPolicy}</Link></li>
              <li><Link to="/terms">{t.termsOfService}</Link></li>
              <li><a href="mailto:support@ezbro.com">{t.contact}</a></li>
              <li><a href="mailto:legal@ezbro.com">{t.legal}</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">{t.footerSupportTitle}</h3>
            <ul className="footer-links">
              <li><a href="#" target="_blank" rel="noopener noreferrer">{t.supportServer}</a></li>
              <li><a href="mailto:support@ezbro.com">{t.emailSupport}</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">{t.documentation}</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">{t.status}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© 2025 EzBro. {t.allRightsReserved}</p>
          </div>
          <div className="footer-credits">
            <p>
              {t.madeWith} <RiHeartFill className="heart-icon" /> {t.by} <span className="creator">EzTheBoss</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
