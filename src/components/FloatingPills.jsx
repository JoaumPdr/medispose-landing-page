import React from 'react';
import { motion } from 'framer-motion';

const FloatingPills = ({ count = 20, className = "" }) => (
  <div className={`absolute inset-0 overflow-hidden ${className}`}>
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        initial={{ 
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          rotate: Math.random() * 360,
          scale: 0.5 + Math.random() * 0.5
        }}
        animate={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          rotate: 360,
          scale: [0.5, 1.2, 0.8, 1]
        }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 5
        }}
      >
        <div className="w-4 h-8 bg-gradient-to-b from-emerald-400/60 to-blue-400/60 rounded-full shadow-lg backdrop-blur-sm" 
             style={{ 
               filter: `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 4px 8px rgba(0,0,0,0.1))`
             }} />
      </motion.div>
    ))}
  </div>
);

export default FloatingPills;

