import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './CommandSimulator.css';

const CommandSimulator = () => {
  const { currentLanguage } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const botCommands = {
    '/help': {
      tr: 'Merhaba! Ben EzBro. İşte kullanabileceğin komutlar:\n/ban - Kullanıcı yasakla\n/kick - Kullanıcı at\n/mute - Kullanıcı sustur\n/play - Müzik çal',
      en: 'Hello! I\'m EzBro. Here are the commands you can use:\n/ban - Ban user\n/kick - Kick user\n/mute - Mute user\n/play - Play music'
    },
    '/ban': {
      tr: '🔨 Kullanıcı başarıyla yasaklandı!',
      en: '🔨 User successfully banned!'
    },
    '/kick': {
      tr: '👢 Kullanıcı sunucudan atıldı!',
      en: '👢 User kicked from server!'
    },
    '/mute': {
      tr: '🔇 Kullanıcı susturuldu!',
      en: '🔇 User muted!'
    },
    '/play': {
      tr: '🎵 Müzik çalınıyor... ♪ Never Gonna Give You Up ♪',
      en: '🎵 Now playing... ♪ Never Gonna Give You Up ♪'
    },
    '/stats': {
      tr: '📊 Sunucu İstatistikleri:\n👥 Üye Sayısı: 1,234\n💬 Mesaj Sayısı: 45,678\n🎵 Çalınan Şarkı: 2,345',
      en: '📊 Server Statistics:\n👥 Members: 1,234\n💬 Messages: 45,678\n🎵 Songs Played: 2,345'
    }
  };

  useEffect(() => {
    // Başlangıç mesajı
    setMessages([
      {
        type: 'bot',
        content: currentLanguage === 'tr' 
          ? '👋 Merhaba! Ben EzBro. Komutları test etmek için /help yazabilirsin!'
          : '👋 Hello! I\'m EzBro. You can type /help to test commands!',
        timestamp: new Date()
      }
    ]);
  }, [currentLanguage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Kullanıcı mesajını ekle
    const userMessage = {
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Bot yanıtını simüle et
    setTimeout(() => {
      const command = input.toLowerCase().trim();
      let botResponse;

      if (botCommands[command]) {
        botResponse = botCommands[command][currentLanguage] || botCommands[command]['en'];
      } else {
        botResponse = currentLanguage === 'tr' 
          ? '❓ Bilinmeyen komut. /help yazarak mevcut komutları görebilirsin.'
          : '❓ Unknown command. Type /help to see available commands.';
      }

      const botMessage = {
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);

    setInput('');
  };

  return (
    <div className="command-simulator">
      <div className="simulator-header">
        <div className="bot-avatar">🤖</div>
        <div className="bot-info">
          <h4>EzBro Bot</h4>
          <span className="status online">● Online</span>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            <div className="message-avatar">
              {message.type === 'bot' ? '🤖' : '👤'}
            </div>
            <div className="message-content">
              <div className="message-author">
                {message.type === 'bot' ? 'EzBro' : 'You'}
              </div>
              <div className="message-text">
                {message.content.split('\n').map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>
              <div className="message-time">
                {message.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message bot typing">
            <div className="message-avatar">🤖</div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={currentLanguage === 'tr' ? 'Komut yazın... (örn: /help)' : 'Type a command... (e.g: /help)'}
          className="input-field"
        />
        <button type="submit" className="send-button">
          📤
        </button>
      </form>
    </div>
  );
};

export default CommandSimulator;
