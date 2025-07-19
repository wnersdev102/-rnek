import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import './Privacy.css';

const Privacy = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="privacy">
      <div className="container">
        <div className="privacy-header">
          <h1 className="page-title">{t.privacyTitle}</h1>
          <p className="page-subtitle">
            {t.privacySubtitle}
          </p>
          <p className="last-updated">{t.lastUpdated}: 20 Temmuz 2025</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>{t.dataCollectionTitle}</h2>
            <p>{t.dataCollectionDesc}</p>
            <ul>
              <li>{t.dataCollection1}</li>
              <li>{t.dataCollection2}</li>
              <li>{t.dataCollection3}</li>
              <li>{t.dataCollection4}</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t.dataUsageTitle}</h2>
            <p>{t.dataUsageDesc}</p>
            <ul>
              <li>{t.dataUsage1}</li>
              <li>{t.dataUsage2}</li>
              <li>{t.dataUsage3}</li>
              <li>{t.dataUsage4}</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t.dataSharingTitle}</h2>
            <p>{t.dataSharingDesc}</p>
          </section>

          <section className="privacy-section">
            <h2>{t.dataSecurityTitle}</h2>
            <p>{t.dataSecurityDesc}</p>
          </section>

          <section className="privacy-section">
            <h2>{t.userRightsTitle}</h2>
            <p>{t.userRightsDesc}</p>
            <ul>
              <li>{t.userRights1}</li>
              <li>{t.userRights2}</li>
              <li>{t.userRights3}</li>
              <li>{t.userRights4}</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>{t.cookiesTitle}</h2>
            <p>{t.cookiesDesc}</p>
          </section>

          <section className="privacy-section">
            <h2>{t.contactTitle}</h2>
            <p>{t.contactDesc}</p>
            <div className="contact-info">
              <p><strong>Email:</strong> privacy@ezbro.com</p>
              <p><strong>Discord:</strong> EzBro Support Server</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
