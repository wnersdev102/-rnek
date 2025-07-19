import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import './Terms.css';

const Terms = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="terms">
      <div className="container">
        <div className="terms-header">
          <h1 className="page-title">{t.termsTitle}</h1>
          <p className="page-subtitle">
            {t.termsSubtitle}
          </p>
          <p className="last-updated">{t.lastUpdated}: 20 Temmuz 2025</p>
        </div>

        <div className="terms-content">
          <section className="terms-section">
            <h2>{t.acceptanceTitle}</h2>
            <p>{t.acceptanceDesc}</p>
          </section>

          <section className="terms-section">
            <h2>{t.serviceDescTitle}</h2>
            <p>{t.serviceDescDesc}</p>
            <ul>
              <li>{t.serviceDesc1}</li>
              <li>{t.serviceDesc2}</li>
              <li>{t.serviceDesc3}</li>
              <li>{t.serviceDesc4}</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>{t.userObligationsTitle}</h2>
            <p>{t.userObligationsDesc}</p>
            <ul>
              <li>{t.userObligation1}</li>
              <li>{t.userObligation2}</li>
              <li>{t.userObligation3}</li>
              <li>{t.userObligation4}</li>
              <li>{t.userObligation5}</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>{t.prohibitedUsesTitle}</h2>
            <p>{t.prohibitedUsesDesc}</p>
            <ul>
              <li>{t.prohibitedUse1}</li>
              <li>{t.prohibitedUse2}</li>
              <li>{t.prohibitedUse3}</li>
              <li>{t.prohibitedUse4}</li>
              <li>{t.prohibitedUse5}</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>{t.intellectualPropertyTitle}</h2>
            <p>{t.intellectualPropertyDesc}</p>
          </section>

          <section className="terms-section">
            <h2>{t.disclaimerTitle}</h2>
            <p>{t.disclaimerDesc}</p>
          </section>

          <section className="terms-section">
            <h2>{t.limitationTitle}</h2>
            <p>{t.limitationDesc}</p>
          </section>

          <section className="terms-section">
            <h2>{t.terminationTitle}</h2>
            <p>{t.terminationDesc}</p>
          </section>

          <section className="terms-section">
            <h2>{t.changesTitle}</h2>
            <p>{t.changesDesc}</p>
          </section>

          <section className="terms-section">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactDesc}</p>
            <div className="contact-info">
              <p><strong>Email:</strong> legal@ezbro.com</p>
              <p><strong>Discord:</strong> EzBro Support Server</p>
              <p><strong>Website:</strong> https://ezbro.vercel.app</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
