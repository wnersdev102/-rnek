import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Canvas boyutunu ayarla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Kar tanesi sınıfı
    class Snowflake {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // İlk pozisyon rastgele
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 4 + 1; // 1-5px arası boyut
        this.speed = Math.random() * 2 + 0.5; // Düşme hızı
        this.drift = Math.random() * 2 - 1; // Yatay hareket
        this.opacity = Math.random() * 0.8 + 0.2; // Şeffaflık
        this.rotation = Math.random() * 360; // Dönüş açısı
        this.rotationSpeed = (Math.random() - 0.5) * 2; // Dönüş hızı
      }

      update() {
        this.y += this.speed;
        this.x += this.drift * 0.5;
        this.rotation += this.rotationSpeed;

        // Ekrandan çıktıysa yukarıdan başlat
        if (this.y > canvas.height + 10) {
          this.reset();
        }

        // Yanlara çıktıysa karşı taraftan getir
        if (this.x > canvas.width + 10) {
          this.x = -10;
        } else if (this.x < -10) {
          this.x = canvas.width + 10;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);

        // Kar tanesi çiz (yıldız şekli)
        ctx.beginPath();
        ctx.fillStyle = '#ffffff';
        
        // Ana yıldız şekli
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3;
          const x1 = Math.cos(angle) * this.size;
          const y1 = Math.sin(angle) * this.size;
          const x2 = Math.cos(angle + Math.PI / 6) * (this.size * 0.5);
          const y2 = Math.sin(angle + Math.PI / 6) * (this.size * 0.5);
          
          if (i === 0) {
            ctx.moveTo(x1, y1);
          } else {
            ctx.lineTo(x1, y1);
          }
          ctx.lineTo(x2, y2);
        }
        
        ctx.closePath();
        ctx.fill();

        // Merkez nokta
        ctx.beginPath();
        ctx.arc(0, 0, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Partikülleri oluştur
    const createParticles = () => {
      const particleCount = Math.min(150, Math.floor(canvas.width * canvas.height / 8000));
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Snowflake());
      }
    };

    // Animasyon döngüsü
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gradient arka plan
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(26, 11, 46, 0.1)');
      gradient.addColorStop(0.5, 'rgba(22, 33, 62, 0.05)');
      gradient.addColorStop(1, 'rgba(15, 52, 96, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Kar tanelerini güncelle ve çiz
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    // Resize olduğunda partikülleri yeniden oluştur
    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
