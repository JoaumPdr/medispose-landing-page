import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const InteractiveCard = ({ 
  children, 
  className = "", 
  rotationIntensity = 10,
  scaleOnHover = 1.05,
  glowColor = "rgba(16, 185, 129, 0.2)"
}) => {
  const cardRef = useRef(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [rotationIntensity, -rotationIntensity]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-rotationIntensity, rotationIntensity]));
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        scale: scaleOnHover,
        boxShadow: `0 25px 50px ${glowColor}`,
        z: 50
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }}
    >
      {/* Card content */}
      <motion.div
        style={{
          transform: "translateZ(50px)"
        }}
      >
        {children}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-inherit opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
          transform: "translateZ(-10px)"
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Reflection effect */}
      <motion.div
        className="absolute inset-0 rounded-inherit opacity-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
          transform: "translateZ(25px)"
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default InteractiveCard;

