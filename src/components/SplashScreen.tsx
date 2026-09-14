/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Scale, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firm';

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter animation from 0% to 100%
    const startTime = Date.now();
    const duration = 2400; // 2.4s total animation

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed >= duration) {
        clearInterval(timer);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 200);
      }
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const handleKeyDown = () => {
      if (onComplete) onComplete();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  return (
    <motion.div
      key="splash-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(12px)',
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
      }}
      onClick={() => onComplete && onComplete()}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-[#D8DDE3] via-[#CCD2D8] to-[#BCC3CB] flex flex-col items-center justify-center px-4 overflow-hidden select-none cursor-pointer"
      role="dialog"
      aria-label="Amin Firdaus Mashudi & Co. Introduction"
    >
          {/* Subtle ambient radial orange glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(234,88,12,0.14)_0%,rgba(194,65,12,0.04)_45%,transparent_70%)] pointer-events-none blur-3xl animate-pulse" />

          {/* Concentric rotating 3D motion graphic rings */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center mb-8">
            {/* Outermost pulsing ring */}
            <motion.div
              animate={{
                scale: [1, 1.14, 1],
                opacity: [0.25, 0.55, 0.25]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-0 rounded-full border border-[#EA580C]/40"
            />

            {/* Orbiting Gyroscope Ring 1 */}
            <motion.div
              animate={{
                rotateZ: [0, 360],
                rotateX: [65, 65],
                rotateY: [15, 45, 15]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute inset-2 rounded-full border-2 border-dashed border-[#F59E0B]/60"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Orbiting Gyroscope Ring 2 */}
            <motion.div
              animate={{
                rotateZ: [360, 0],
                rotateX: [-60, -60],
                rotateY: [30, -30, 30]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear'
              }}
              className="absolute inset-4 rounded-full border border-[#EA580C]/60"
              style={{ transformStyle: 'preserve-3d' }}
            />

            {/* Orbiting Orange & Yellow Satellites */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 flex items-center justify-between pointer-events-none"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#EA580C] shadow-[0_0_10px_#EA580C]" />
              <div className="w-2 h-2 rounded-full bg-[#FACC15] shadow-[0_0_10px_#FACC15]" />
            </motion.div>

            {/* Central Executive Medallion with Scales */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#FFFFFF] via-[#FFFBEB] to-[#F1F5F9] border-2 border-[#F59E0B] flex items-center justify-center text-[#EA580C] shadow-[0_4px_25px_rgba(245,158,11,0.4)] z-10 overflow-hidden"
            >
              {/* Dynamic light reflection sweep */}
              <motion.div
                initial={{ x: '-150%' }}
                animate={{ x: '150%' }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: 'easeInOut',
                  repeatDelay: 0.8
                }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 pointer-events-none"
              />

              <Scale className="w-11 h-11 sm:w-14 sm:h-14 drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]" />
            </motion.div>
          </div>

          {/* TYPOGRAPHY CONTAINER */}
          <div className="text-center w-full max-w-4xl mx-auto space-y-4 relative z-10">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C2410C] font-semibold"
            >
              <span className="w-6 h-[1.5px] bg-gradient-to-r from-transparent to-[#F59E0B]" />
              <span>Advocates &amp; Solicitors &bull; High Court in Malaya</span>
              <span className="w-6 h-[1.5px] bg-gradient-to-l from-transparent to-[#F59E0B]" />
            </motion.div>

            {/* Full Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="space-y-1"
            >
              <h1 className="font-serif text-[clamp(1.35rem,5.6vw,3rem)] font-bold tracking-tight text-[#0F172A] leading-tight whitespace-nowrap">
                {FIRM_DETAILS.name}
              </h1>
              <p className="font-serif text-sm sm:text-base italic gold-text-gradient tracking-wide font-medium">
                {FIRM_DETAILS.tagline}
              </p>
            </motion.div>

            {/* Expanding Orange & Yellow Divider with Center Diamond */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center gap-3 py-1 max-w-xs mx-auto"
            >
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#EA580C] to-[#F59E0B]" />
              <div className="w-2.5 h-2.5 rotate-45 bg-gradient-to-br from-[#EA580C] to-[#FACC15] shadow-[0_0_8px_#F59E0B]" />
              <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#EA580C] to-[#F59E0B]" />
            </motion.div>

            {/* City & Legal Jurisdiction */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xs text-[#475569] tracking-wider uppercase font-medium"
            >
              Skudai &bull; Johor Bahru &bull; Kuantan &bull; Malaysia
            </motion.p>

            {/* Progress & Channel Initialization Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4 space-y-2 max-w-xs mx-auto"
            >
              <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden border border-[#CBD5E1]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#EA580C] via-[#F59E0B] to-[#FACC15] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-[#475569]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span className="font-medium">Registered with the Malaysian Bar</span>
                </span>
                <span className="font-mono text-[#C2410C] font-semibold">{progress}%</span>
              </div>
            </motion.div>
          </div>

          {/* Discreet prompt to enter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-6 text-center text-[11px] text-[#475569] font-medium tracking-wider"
          >
            Click anywhere or press any key to continue &rarr;
          </motion.div>
        </motion.div>
  );
}
