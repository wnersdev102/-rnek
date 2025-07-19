import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import './Commands.css';

const Commands = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  const commands = [
    {
      name: '/kayıt',
      description: 'Kullanıcının kaydını yapar.',
      category: 'Kayıt',
      usage: '/kayıt @kullanıcı [isim]'
    },
    {
      name: '/kayıtsız',
      description: 'Kullanıcıyı kayıtsız durumuna çeker.',
      category: 'Kayıt',
      usage: '/kayıtsız @kullanıcı'
    },
    {
      name: '/kayıt-kanal',
      description: 'Kayıt kanalını ayarlar.',
      category: 'Kayıt',
      usage: '/kayıt-kanal #kanal'
    },
    {
      name: '/kayıt-log',
      description: 'Kayıt log kanalını ayarlar.',
      category: 'Kayıt',
      usage: '/kayıt-log #kanal'
    },
    {
      name: '/ban',
      description: 'Kullanıcıyı sunucudan yasaklar.',
      category: 'Moderasyon',
      usage: '/ban @kullanıcı [sebep]'
    },
    {
      name: '/kick',
      description: 'Kullanıcıyı sunucudan atar.',
      category: 'Moderasyon',
      usage: '/kick @kullanıcı [sebep]'
    },
    {
      name: '/mute',
      description: 'Kullanıcıyı susturur.',
      category: 'Moderasyon',
      usage: '/mute @kullanıcı [süre] [sebep]'
    },
    {
      name: '/unmute',
      description: 'Kullanıcının susturulmasını kaldırır.',
      category: 'Moderasyon',
      usage: '/unmute @kullanıcı'
    },
    {
      name: '/warn',
      description: 'Kullanıcıyı uyarır.',
      category: 'Moderasyon',
      usage: '/warn @kullanıcı [sebep]'
    },
    {
      name: '/clear',
      description: 'Belirtilen sayıda mesajı siler.',
      category: 'Moderasyon',
      usage: '/clear [sayı]'
    },
    {
      name: '/avatar',
      description: 'Kullanıcının avatarını gösterir.',
      category: 'Genel',
      usage: '/avatar [@kullanıcı]'
    },
    {
      name: '/sunucu-bilgi',
      description: 'Sunucu hakkında bilgi verir.',
      category: 'Genel',
      usage: '/sunucu-bilgi'
    },
    {
      name: '/kullanıcı-bilgi',
      description: 'Kullanıcı hakkında bilgi verir.',
      category: 'Genel',
      usage: '/kullanıcı-bilgi [@kullanıcı]'
    },
    {
      name: '/ping',
      description: 'Botun ping değerini gösterir.',
      category: 'Genel',
      usage: '/ping'
    }
  ];

  const categories = [t.all, t.registration, t.moderation, t.general];
  const [selectedCategory, setSelectedCategory] = useState(t.all);

  const filteredCommands = commands.filter(command => {
    const matchesSearch = command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         command.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tümü' || command.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="commands">
      <div className="container">
        <div className="commands-header">
          <h1 className="page-title">{t.commandsTitle}</h1>
          <p className="page-subtitle">{t.commandsSubtitle}</p>
        </div>

        <div className="commands-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="commands-grid">
          {filteredCommands.map((command, index) => (
            <div key={index} className="command-card">
              <div className="command-header">
                <h3 className="command-name">{command.name}</h3>
                <span className="command-category">{command.category}</span>
              </div>
              <p className="command-description">{command.description}</p>
              <div className="command-usage">
                <strong>Kullanım:</strong> <code>{command.usage}</code>
              </div>
            </div>
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="no-results">
            <h3>Komut bulunamadı</h3>
            <p>Arama kriterlerinize uygun komut bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Commands;
