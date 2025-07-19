import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Güzel trail efekti için
      setTrails(prev => [
        ...prev.slice(-8), // Son 8 pozisyonu tut
        { 
          x: e.clientX, 
          y: e.clientY, 
          id: Date.now() + Math.random(),
          timestamp: Date.now()
        }
      ]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Interactive elementleri dinle
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .feature-card, .number-card, .dashboard-feature, .language-button, .social-link, .footer-links a'
      );
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return interactiveElements;
    };

    let interactiveElements = updateInteractiveElements();

    // Event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Periodically update interactive elements for dynamic content
    const intervalId = setInterval(() => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      interactiveElements = updateInteractiveElements();
    }, 2000);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      clearInterval(intervalId);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Trail temizleme
  useEffect(() => {
    const cleanupTrails = () => {
      const now = Date.now();
      setTrails(prev => prev.filter(trail => now - trail.timestamp < 500));
    };

    const intervalId = setInterval(cleanupTrails, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {/* Ana cursor - güzel gradient ve glow efekti */}
      <div
        className={`magic-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div className="cursor-core"></div>
        <div className="cursor-glow"></div>
        <div className="cursor-ring"></div>
      </div>
      
      {/* Güzel trail efekti */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="magic-cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index + 1) / trails.length * 0.6,
            transform: `scale(${(index + 1) / trails.length * 0.8})`,
            animationDelay: `${index * 20}ms`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
