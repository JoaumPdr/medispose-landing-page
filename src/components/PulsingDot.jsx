import React from 'react';
import { motion } from 'framer-motion';

const PulsingDot = ({ delay = 0, color = "emerald" }) => (
  <motion.div 
    className="relative"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: delay / 1000 }}
  >
    <motion.div 
      className={`w-3 h-3 bg-${color}-500 rounded-full`}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: delay / 1000 }}
    />
    <motion.div 
      className={`absolute inset-0 w-3 h-3 bg-${color}-400 rounded-full`}
      animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
      transition={{ duration: 2, repeat: Infinity, delay: delay / 1000 }}
    />
  </motion.div>
);

export default PulsingDot;

