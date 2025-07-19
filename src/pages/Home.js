import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { 
  RiShieldCheckLine, 
  RiRobotLine, 
  RiMessage3Line, 
  RiUserHeartLine, 
  RiClipboardLine, 
  RiGamepadLine,
  RiMusicLine,
  RiDashboardLine,
  RiBarChartLine,
  RiSettingsLine,
  RiFileTextLine
} from 'react-icons/ri';
import CommandSimulator from '../components/CommandSimulator';
import './Home.css';

const Home = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const features = [
    {
      icon: <RiShieldCheckLine size={48} />,
      title: t.autoModeration,
      description: t.autoModerationDesc
    },
    {
      icon: <RiRobotLine size={48} />,
      title: t.customBot,
      description: t.customBotDesc
    },
    {
      icon: <RiMessage3Line size={48} />,
      title: t.autoReply,
      description: t.autoReplyDesc
    },
    {
      icon: <RiUserHeartLine size={48} />,
      title: t.welcome,
      description: t.welcomeDesc
    },
    {
      icon: <RiClipboardLine size={48} />,
      title: t.auditLog,
      description: t.auditLogDesc
    },
    {
      icon: <RiMusicLine size={48} />,
      title: t.musicSystem,
      description: t.musicSystemDesc
    }
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            {t.heroTitle} <span className="highlight">{t.heroTitleHighlight}</span>
          </h1>
          <p className="hero-subtitle">
            {t.heroSubtitle}
          </p>
          <div className="hero-buttons">
            <a href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot" className="discord-button">
              <RiGamepadLine size={20} />
              {t.discordAdd}
            </a>
            <a href="#features" className="cta-button">{t.exploreFeatures}</a>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="container">
          <h2 className="section-title">{t.featuresTitle}</h2>
          <p className="section-subtitle">
            {t.featuresSubtitle}
          </p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">{t.ctaTitle}</h2>
          <p className="section-subtitle">
            {t.ctaSubtitle}
          </p>
          <div className="cta-buttons">
            <a href="https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=8&scope=bot" className="discord-button">
              <RiGamepadLine size={20} />
              {t.discordAdd}
            </a>
          </div>
        </div>
      </section>

      <section className="numbers-section">
        <div className="container">
          <div className="numbers-grid">
            <div className="number-card">
              <div className="number">{t.serversCount}</div>
              <div className="number-label">{t.serversLabel}</div>
            </div>
            <div className="number-card">
              <div className="number">{t.usersCount}</div>
              <div className="number-label">{t.usersLabel}</div>
            </div>
            <div className="number-card">
              <div className="number">{t.commandsCount}</div>
              <div className="number-label">{t.commandsLabel}</div>
            </div>
            <div className="number-card">
              <div className="number">{t.uptimeCount}</div>
              <div className="number-label">{t.uptimeLabel}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="simulator-section">
        <div className="container">
          <h2 className="section-title">{t.simulatorTitle}</h2>
          <p className="section-subtitle">
            {t.simulatorSubtitle}
          </p>
          
          <div className="simulator-container">
            <CommandSimulator />
          </div>
        </div>
      </section>

      <section className="dashboard-section">
        <div className="container">
          <h2 className="section-title">{t.dashboardTitle}</h2>
          <p className="section-subtitle">
            {t.dashboardSubtitle}
          </p>
          
          <div className="dashboard-preview">
            <div className="dashboard-mockup">
              <div className="dashboard-header">
                <div className="dashboard-nav">
                  <RiDashboardLine size={24} />
                  <span>EzBro Dashboard</span>
                </div>
              </div>
              <div className="dashboard-content">
                <div className="dashboard-stats">
                  <div className="mini-stat">
                    <RiBarChartLine size={20} />
                    <span>15,000+</span>
                  </div>
                  <div className="mini-stat">
                    <RiUserHeartLine size={20} />
                    <span>2.5M+</span>
                  </div>
                  <div className="mini-stat">
                    <RiSettingsLine size={20} />
                    <span>150+</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="dashboard-features">
              <div className="dashboard-feature">
                <RiBarChartLine size={32} />
                <h4>{t.dashboardFeature1}</h4>
              </div>
              <div className="dashboard-feature">
                <RiSettingsLine size={32} />
                <h4>{t.dashboardFeature2}</h4>
              </div>
              <div className="dashboard-feature">
                <RiFileTextLine size={32} />
                <h4>{t.dashboardFeature3}</h4>
              </div>
              <div className="dashboard-feature">
                <RiDashboardLine size={32} />
                <h4>{t.dashboardFeature4}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">{t.statsTitle}</h2>
          <p className="section-subtitle">
            {t.statsSubtitle}
          </p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{t.securityTitle}</h3>
              <p>{t.securityDesc}</p>
            </div>
            <div className="stat-card">
              <h3>{t.emojiRoleTitle}</h3>
              <p>{t.emojiRoleDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
