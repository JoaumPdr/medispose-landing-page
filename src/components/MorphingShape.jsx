import React from 'react';
import { motion } from 'framer-motion';

const MorphingShape = ({ className = "", size = "w-32 h-32", mousePosition = { x: 0, y: 0 }, scrollY = 0 }) => (
  <motion.div 
    className={`absolute ${className}`}
    animate={{
      x: mousePosition.x * 30,
      y: mousePosition.y * 30,
      rotate: scrollY * 0.1
    }}
    transition={{ type: "spring", stiffness: 100, damping: 10 }}
  >
    <motion.div 
      className={`${size} bg-gradient-to-r from-blue-400/20 to-emerald-400/20 rounded-full backdrop-blur-sm`}
      animate={{
        borderRadius: [
          "50% 30% 70% 40%",
          "30% 70% 40% 50%", 
          "70% 40% 50% 30%",
          "40% 50% 30% 70%",
          "50% 30% 70% 40%"
        ],
        scale: [1, 1.2, 0.8, 1.1, 1]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      style={{
        filter: 'blur(1px) drop-shadow(0 8px 16px rgba(0,0,0,0.1))'
      }}
    />
  </motion.div>
);

export default MorphingShape;

