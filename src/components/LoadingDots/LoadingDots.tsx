"use client";

import React from "react";
import { motion } from "framer-motion";

const LoadingDots = () => {
  const dots = React.useMemo(() => [0, 1, 2], []);

  return (
    <div className="flex space-x-1">
      {dots.map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 bg-gray-600 rounded-full"
          initial={{ scale: 1, opacity: 0.3 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            delay: index * 0.333,
          }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;
