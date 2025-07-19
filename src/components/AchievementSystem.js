import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './AchievementSystem.css';

const AchievementSystem = () => {
  const { currentLanguage } = useLanguage();
  const [achievements, setAchievements] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState(null);

  const achievementData = {
    tr: [
      { id: 1, name: 'İlk Adım', desc: 'Siteyi ziyaret ettiniz!', icon: '🎯', unlocked: true, progress: 100 },
      { id: 2, name: 'Keşifçi', desc: 'Tüm özellikleri inceledi', icon: '🔍', unlocked: true, progress: 100 },
      { id: 3, name: 'Bot Uzmanı', desc: 'Komut simulator\'ı kullandı', icon: '🤖', unlocked: false, progress: 75 },
      { id: 4, name: 'Premium Avcısı', desc: 'Premium sayfasını ziyaret etti', icon: '💎', unlocked: false, progress: 50 },
      { id: 5, name: 'Sosyal Medya Guru', desc: 'Discord\'a katıldı', icon: '🎮', unlocked: false, progress: 25 }
    ],
    en: [
      { id: 1, name: 'First Step', desc: 'Visited the website!', icon: '🎯', unlocked: true, progress: 100 },
      { id: 2, name: 'Explorer', desc: 'Explored all features', icon: '🔍', unlocked: true, progress: 100 },
      { id: 3, name: 'Bot Expert', desc: 'Used command simulator', icon: '🤖', unlocked: false, progress: 75 },
      { id: 4, name: 'Premium Hunter', desc: 'Visited premium page', icon: '💎', unlocked: false, progress: 50 },
      { id: 5, name: 'Social Media Guru', desc: 'Joined Discord', icon: '🎮', unlocked: false, progress: 25 }
    ]
  };

  useEffect(() => {
    setAchievements(achievementData[currentLanguage] || achievementData.en);
    
    // Simulate achievement unlock
    const timer = setTimeout(() => {
      const newAchievement = achievementData[currentLanguage][2];
      setCurrentAchievement(newAchievement);
      setShowNotification(true);
      
      setTimeout(() => setShowNotification(false), 4000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentLanguage]);

  return (
    <div className="achievement-system">
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id} 
            className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
          >
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-info">
              <h4 className="achievement-name">{achievement.name}</h4>
              <p className="achievement-desc">{achievement.desc}</p>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${achievement.progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{achievement.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      {showNotification && currentAchievement && (
        <div className="achievement-notification">
          <div className="notification-content">
            <div className="notification-icon">{currentAchievement.icon}</div>
            <div className="notification-text">
              <h4>Achievement Unlocked!</h4>
              <p>{currentAchievement.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementSystem;
