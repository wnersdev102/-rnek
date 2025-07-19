import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Home from './pages/Home';
import Commands from './pages/Commands';
import Premium from './pages/Premium';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="App">
            <ParticleBackground />
            <CustomCursor />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/komutlar" element={<Commands />} />
              <Route path="/premium" element={<Premium />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
