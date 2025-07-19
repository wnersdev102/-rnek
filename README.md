# EzBro Discord Bot Website

Demo Site: https://eztheboss-site.vercel.app/

Modern ve responsive Discord bot tanıtım sitesi. React ile geliştirilmiş, 5 dil desteği ve interaktif özellikler içerir.

## 🚀 Özellikler

- **📱 Tam Responsive**: Tüm cihazlarda mükemmel görünüm
- **🌍 5 Dil Desteği**: TR, EN, DE, AZ, RU
- **🤖 Bot Komut Simulator**: Canlı komut test arayüzü
- **🎨 Modern UI/UX**: Glassmorphism ve gradient efektler
- **⚡ Hızlı Performance**: Optimize edilmiş React uygulaması
- **🎯 SEO Friendly**: Meta tags ve semantic HTML

## 🛠️ Teknolojiler

- **React 18** - Modern UI framework
- **React Router** - SPA routing
- **React Icons** - Icon library
- **CSS3** - Modern styling (Flexbox, Grid, Animations)
- **Vercel** - Deployment platform

## 📦 Kurulum

```bash
# Repository'yi klonla
git clone <repository-url>

# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm start

# Production build
npm run build
```

## 🌐 Deployment

### Vercel ile Deploy

1. **GitHub'a Push Et**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Vercel'e Bağlan**
- [vercel.com](https://vercel.com) adresine git
- GitHub ile giriş yap
- "New Project" tıkla
- Repository'yi seç
- Deploy et

3. **Otomatik Deploy**
- Her push'da otomatik deploy
- Preview deployments
- Production domain

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 360px - 479px
- **Extra Small**: < 360px

## 🎨 Renk Paleti

```css
/* Ana Renkler */
--primary: #8a2be2;      /* Mor */
--secondary: #9932cc;    /* Açık Mor */
--background: #1a0b2e;   /* Koyu Mavi */
--text: #ffffff;         /* Beyaz */
--text-secondary: #cccccc; /* Gri */
```

## 📂 Proje Yapısı

```
src/
├── components/          # React componentleri
│   ├── Header.js       # Navigation
│   ├── CommandSimulator.js # Bot simulator
│   ├── LanguageSelector.js # Dil seçici
│   └── ...
├── pages/              # Sayfa componentleri
│   ├── Home.js         # Ana sayfa
│   ├── Commands.js     # Komutlar
│   └── Premium.js      # Premium
├── contexts/           # React Context'ler
│   ├── LanguageContext.js # Dil yönetimi
│   └── ThemeContext.js    # Tema yönetimi
├── data/               # Veri dosyaları
│   └── translations.js # Çeviriler
└── styles/             # CSS dosyaları
```

## 🌍 Çok Dil Desteği

Desteklenen diller:
- 🇹🇷 **Türkçe** (Varsayılan)
- 🇬🇧 **English**
- 🇩🇪 **Deutsch**
- 🇦🇿 **Azərbaycan**
- 🇷🇺 **Русский**

## 🎯 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork et
2. Feature branch oluştur (`git checkout -b feature/amazing-feature`)
3. Commit et (`git commit -m 'Add amazing feature'`)
4. Push et (`git push origin feature/amazing-feature`)
5. Pull Request oluştur

## 📞 İletişim

- **Website**: [ezbro.vercel.app](https://ezbro.vercel.app)
- **Discord**: [Discord Sunucusu](#)
- **Email**: support@ezbro.com

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
