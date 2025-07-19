import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { 
  RiCheckLine, 
  RiStarLine, 
  RiShieldCheckLine, 
  RiHeadphoneLine,
  RiRocketLine 
} from 'react-icons/ri';
import './Premium.css';

const Premium = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const plans = [
    {
      name: 'Premium',
      price: '₺100',
      period: '/sınırsız',
      features: [
        'Tüm özelliklere erişim',
        'Oy zorunluluğu yok',
        'Gelişmiş güvenlik sistemleri',
        'Yüksek emoji rol limiti',
        'Öncelikli destek'
      ],
      popular: false
    },
    {
      name: 'Özel Bot',
      price: '₺350',
      period: '/sınırsız',
      features: [
        'Tamamen özelleştirilebilir',
        'Premium özellikler dahil',
        'Gelişmiş güvenlik sistemleri',
        '%99.9 aktiflik süresi',
        '20 sunucuda kullanılabilir'
      ],
      popular: true
    }
  ];

  return (
    <div className="premium">
      <div className="container">
        <div className="premium-header">
          <h1 className="page-title">{t.premiumTitle}</h1>
          <p className="page-subtitle">
            {t.premiumSubtitle}
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">{t.mostPopular}</div>}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/{t.unlimited}</span>
                </div>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <RiStarLine size={16} className="feature-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="plan-button">
                {t.buyNow} - {plan.price}/{t.unlimited}
              </button>
            </div>
          ))}
        </div>

        <div className="premium-info">
          <div className="info-section">
            <h2 className="section-title">{t.whyPremiumTitle}</h2>
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon"><RiRocketLine size={48} /></div>
                <h3>{t.advancedFeatures}</h3>
                <p>{t.advancedFeaturesDesc}</p>
              </div>
              <div className="info-card">
                <div className="info-icon"><RiShieldCheckLine size={48} /></div>
                <h3>{t.topSecurity}</h3>
                <p>{t.topSecurityDesc}</p>
              </div>
              <div className="info-card">
                <div className="info-icon"><RiHeadphoneLine size={48} /></div>
                <h3>{t.prioritySupport}</h3>
                <p>{t.prioritySupportDesc}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="faq-section">
          <h2 className="section-title">{t.faqTitle}</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Premium üyelik nasıl satın alınır?</h3>
              <p>Yukarıdaki planlardan birini seçip "Satın Al" butonuna tıklayarak ödeme işlemini tamamlayabilirsiniz.</p>
            </div>
            <div className="faq-item">
              <h3>Özel bot ne kadar sürede hazır olur?</h3>
              <p>Özel bot siparişiniz ödeme onayından sonra 24-48 saat içerisinde hazırlanır ve size teslim edilir.</p>
            </div>
            <div className="faq-item">
              <h3>Premium özellikler hangileri?</h3>
              <p>Gelişmiş moderasyon, özel komutlar, emoji rol sistemi, gelişmiş güvenlik ve daha birçok özellik premium ile gelir.</p>
            </div>
            <div className="faq-item">
              <h3>İade politikası var mı?</h3>
              <p>Ürünlerimizin dijital olması sebebiyle iade kabul edilmemektedir. Ancak teknik sorunlarda destek sağlanır.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
