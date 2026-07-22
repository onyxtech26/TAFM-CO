/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function GalaxyBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate star coordinates across the screen
    const generatedStars: Star[] = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 2.5 + 1, // px
      duration: Math.random() * 4 + 3, // seconds
      delay: Math.random() * 5, // seconds
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dynamic Cosmic Nebulae Gradient Blobs (Light Celestial Theme) */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-radial from-luxury-gold/15 to-transparent blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] -right-[10%] w-[50%] h-[60%] rounded-full bg-radial from-amber-500/10 to-transparent blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, 40, 30, 0],
          scale: [0.9, 1.05, 0.95, 0.9],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[10%] left-[20%] w-[55%] h-[55%] rounded-full bg-radial from-orange-400/10 to-transparent blur-[140px]"
      />

      {/* Twinkling Star Dust Particles */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        {stars.map((star) => (
          <motion.circle
            key={star.id}
            cx={`${star.x}%`}
            cy={`${star.y}%`}
            r={star.size}
            fill="#c9a227"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
