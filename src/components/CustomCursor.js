import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Trail efekti için eski pozisyonları sakla
      setTrails(prev => [
        ...prev.slice(-10), // Son 10 pozisyonu tut
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Interactive elementleri dinle
    const interactiveElements = document.querySelectorAll('a, button, .feature-card, .number-card, .dashboard-feature');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Ana cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      
      {/* Trail efekti */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="custom-cursor-trail"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
            opacity: (index + 1) / trails.length * 0.5,
            transform: `scale(${(index + 1) / trails.length})`,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
