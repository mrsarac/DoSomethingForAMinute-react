'use client'

import React from 'react';
import { motion } from 'framer-motion';

export const LoadingDots: React.FC = () => {
  const dotVariants = {
    hidden: { opacity: 0.2, scale: 0.8 },
    visible: { opacity: 0.5, scale: 1 }
  };

  const containerVariants = {
    hidden: { transition: { staggerChildren: 0 } },
    visible: { transition: { staggerChildren: 0.2, repeat: Infinity } }
  };

  return (
    <motion.div 
      className="flex gap-1.5"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-1.5 h-1.5 bg-gray-500 rounded-full"
          variants={dotVariants}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
        />
      ))}
    </motion.div>
  );
};
