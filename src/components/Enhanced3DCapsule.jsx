import React from 'react';
import { motion } from 'framer-motion';

const Enhanced3DCapsule = ({ scrollY = 0, mousePosition = { x: 0, y: 0 } }) => (
  <motion.div 
    className="absolute right-16 top-1/2 transform -translate-y-1/2"
    initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{ duration: 2, ease: "easeOut" }}
    style={{
      perspective: "1000px",
      transformStyle: "preserve-3d"
    }}
  >
    <motion.div 
      className="relative w-80 h-80"
      animate={{
        rotateX: scrollY * 0.1 + mousePosition.y * 10,
        rotateY: scrollY * 0.2 + mousePosition.x * 10,
        z: Math.sin(scrollY * 0.01) * 50
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Main Capsule with enhanced 3D effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-400/90 to-emerald-500/90 rounded-full shadow-2xl"
        animate={{
          boxShadow: [
            "0 25px 50px rgba(0,0,0,0.2)",
            "0 35px 70px rgba(16, 185, 129, 0.3)",
            "0 25px 50px rgba(59, 130, 246, 0.3)",
            "0 25px 50px rgba(0,0,0,0.2)"
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{ 
          filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.2))',
          transformStyle: "preserve-3d"
        }} 
      />
      
      {/* Inner layer with depth effect */}
      <motion.div 
        className="absolute top-10 left-10 w-60 h-60 bg-gradient-to-br from-white/95 to-blue-100/95 rounded-full shadow-inner backdrop-blur-lg"
        animate={{
          rotateX: -scrollY * 0.15 - mousePosition.y * 8,
          rotateY: -scrollY * 0.1 - mousePosition.x * 8
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        
        {/* Orbiting molecules with enhanced physics */}
        <motion.div 
          className="absolute inset-8 rounded-full bg-gradient-to-br from-emerald-400/70 to-blue-500/70"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div 
              key={i} 
              className="absolute w-5 h-5 bg-white rounded-full shadow-lg"
              style={{
                left: `${50 + 35 * Math.cos(i * Math.PI / 6)}%`,
                top: `${50 + 35 * Math.sin(i * Math.PI / 6)}%`,
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            >
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating particles around capsule */}
      {[...Array(8)].map((_, i) => (
        <motion.div 
          key={i}
          className="absolute w-3 h-6 bg-gradient-to-b from-white to-emerald-200 rounded-full opacity-70"
          style={{
            left: `${20 + i * 10}%`,
            top: `${10 + (i % 3) * 30}%`
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  </motion.div>
);

export default Enhanced3DCapsule;

