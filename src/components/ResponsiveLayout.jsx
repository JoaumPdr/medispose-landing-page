import React from 'react';
import { motion } from 'framer-motion';

const ResponsiveContainer = ({ 
  children, 
  className = "",
  maxWidth = "7xl",
  padding = "px-4 md:px-6 lg:px-8"
}) => {
  return (
    <div className={`max-w-${maxWidth} mx-auto ${padding} ${className}`}>
      {children}
    </div>
  );
};

const ResponsiveGrid = ({ 
  children, 
  className = "",
  cols = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = "gap-6 md:gap-8"
}) => {
  const gridClasses = `grid grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg} xl:grid-cols-${cols.xl} ${gap} ${className}`;
  
  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
};

const ResponsiveText = ({ 
  children, 
  variant = "body",
  className = ""
}) => {
  const variants = {
    hero: "text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none",
    title: "text-3xl md:text-4xl lg:text-5xl font-bold",
    subtitle: "text-xl md:text-2xl lg:text-3xl",
    body: "text-base md:text-lg",
    small: "text-sm md:text-base"
  };
  
  return (
    <div className={`${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

const ResponsiveSection = ({ 
  children, 
  className = "",
  padding = "py-16 md:py-20 lg:py-24"
}) => {
  return (
    <section className={`${padding} ${className}`}>
      <ResponsiveContainer>
        {children}
      </ResponsiveContainer>
    </section>
  );
};

const MobileOptimizedCard = ({ 
  children, 
  className = "",
  hover = true
}) => {
  return (
    <motion.div
      className={`
        backdrop-blur-2xl bg-white/80 rounded-2xl md:rounded-3xl 
        p-4 md:p-6 lg:p-8 
        shadow-lg md:shadow-xl 
        border border-white/30
        ${className}
      `}
      whileHover={hover ? { 
        scale: 1.02,
        y: -5,
        boxShadow: "0 25px 50px rgba(16, 185, 129, 0.15)"
      } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
    </motion.div>
  );
};

const ResponsiveButton = ({ 
  children, 
  className = "",
  size = "default",
  variant = "primary"
}) => {
  const sizes = {
    small: "px-4 py-2 text-sm md:px-6 md:py-3 md:text-base",
    default: "px-6 py-3 text-base md:px-8 md:py-4 md:text-lg",
    large: "px-8 py-4 text-lg md:px-12 md:py-6 md:text-xl"
  };
  
  const variants = {
    primary: "bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white",
    secondary: "backdrop-blur-2xl bg-white/80 text-gray-800 border border-white/30",
    outline: "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white"
  };
  
  return (
    <motion.button
      className={`
        ${sizes[size]} 
        ${variants[variant]} 
        rounded-xl md:rounded-2xl 
        font-semibold 
        shadow-lg hover:shadow-xl 
        transition-all duration-300
        ${className}
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveText,
  ResponsiveSection,
  MobileOptimizedCard,
  ResponsiveButton
};

