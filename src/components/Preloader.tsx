/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [isDone, setIsDone] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 600); // Allow exit transition to complete
    }, 2800);

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

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-neutral-800 select-none overflow-hidden"
        >
          {/* Dynamic Cosmic Nebulae Gradient Blobs (Matching website theme) */}
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
            className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-radial from-luxury-gold/15 to-transparent blur-[130px] pointer-events-none"
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
            className="absolute top-[30%] -right-[10%] w-[50%] h-[60%] rounded-full bg-radial from-amber-500/10 to-transparent blur-[120px] pointer-events-none"
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
            className="absolute -bottom-[10%] left-[20%] w-[55%] h-[55%] rounded-full bg-radial from-orange-400/10 to-transparent blur-[140px] pointer-events-none"
          />

          {/* Twinkling Star Dust Particles */}
          <svg className="absolute inset-0 w-full h-full opacity-60 pointer-events-none">
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

          {/* Subtle gold ambient glow in the center */}
          <div className="absolute inset-0 bg-radial from-gold-600/5 via-transparent to-transparent pointer-events-none" />

          <div className="relative flex flex-col items-center max-w-lg px-6 text-center z-10">
            {/* Elegant Emblem SVG Animation */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-28 h-28 mb-8"
            >
              {/* Outer circular gold border */}
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#c9a227"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 300" }}
                  animate={{ strokeDasharray: "283 300" }}
                  transition={{ duration: 1.8, ease: "easeInOut", delay: 0.2 }}
                />
                
                {/* Scales of Justice Icon */}
                <motion.path
                  d="M50 22v56M34 38h32M34 38l-6 16h12l-6-16zm32 0l-6 16h12l-6-16zM34 38c0 10 10 16 16 16s16-6 16-16"
                  stroke="#c9a227"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
                />
              </svg>
              

            </motion.div>

            {/* Firm Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-neutral-900 leading-snug font-bold mb-3 uppercase"
            >
              TETUAN AMIN FIRDAUS
            </motion.h1>
            
            <motion.h2
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 0.8 }}
              transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
              className="font-sans text-xs md:text-sm tracking-[0.3em] text-luxury-gold uppercase font-semibold mb-6"
            >
              MASHUDI & CO.
            </motion.h2>

            {/* Fine Divider Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeInOut" }}
              className="h-[1px] bg-luxury-gold/50 mb-4"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-neutral-500 font-light uppercase leading-loose"
            >
              Advocate & Solicitor
              <span className="mx-2 text-luxury-gold/60">•</span>
              Peguambela & Peguamcara
            </motion.p>
          </div>

          {/* Absolute bottom indicator */}
          <div className="absolute bottom-12 flex flex-col items-center z-10">
            <div className="h-[2px] w-48 bg-neutral-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="relative h-full w-1/2 bg-gradient-to-r from-transparent via-luxury-gold to-transparent"
              />
            </div>
            <span className="text-[10px] tracking-[0.25em] text-neutral-400 uppercase mt-4 font-light">
              Securing Confidentiality
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
