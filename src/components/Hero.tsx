/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Gavel } from 'lucide-react';
import { FIRM_INFO } from '../data';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden pt-36 pb-20"
    >
      {/* Subtle grid lines pattern suited for light background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#c9a227 1.2px, transparent 1.2px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Editorial Typography & Brand Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-text-content">
          
          {/* Note: Est. Kuantan, Pahang badge removed per user request */}

          {/* Premium Headline with Bold Typography (Inverted to Black) */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] text-neutral-900 font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="block text-neutral-950"
            >
              Protecting Your Rights.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block italic font-normal text-luxury-gold"
            >
              Guiding Your Future.
            </motion.span>
          </h1>

          {/* Subheadline description (Inverted to neutral black/65) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-sans text-base md:text-lg text-neutral-700 leading-relaxed max-w-xl mb-10 font-light"
          >
            {FIRM_INFO.shortDescription}
          </motion.p>

          {/* Trust indicators at bottom (Inverted to black/neutral) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex items-center gap-8 border-t border-neutral-200 pt-6 w-full max-w-lg"
          >
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-neutral-900 tracking-widest">LLB UUM</span>
              <span className="font-sans text-[9px] tracking-widest text-neutral-500 uppercase font-medium">Bachelor of Laws</span>
            </div>
            <div className="h-8 w-[1px] bg-neutral-200" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-neutral-900 tracking-widest">LLM UM</span>
              <span className="font-sans text-[9px] tracking-widest text-neutral-500 uppercase font-medium">Master of Laws</span>
            </div>
            <div className="h-8 w-[1px] bg-neutral-200" />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold text-neutral-900 tracking-widest">KUANTAN</span>
              <span className="font-sans text-[9px] tracking-widest text-neutral-500 uppercase font-medium">Pahang Chambers</span>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Luxury Graphic Frame & Legal Image */}
        <div className="lg:col-span-5 relative flex items-center justify-center" id="hero-graphic">
          
          {/* Framer motion wrapper */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-xs overflow-hidden border border-luxury-gold/20 shadow-2xl shadow-neutral-200 group"
          >
            {/* Outer golden overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-gold/5 to-luxury-gold/10 z-10 pointer-events-none" />
            
            {/* Gold border overlay */}
            <div className="absolute inset-4 border border-luxury-gold/25 pointer-events-none z-10 group-hover:border-luxury-gold/45 transition-colors duration-700" />
            
            <img
              src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800"
              alt="Tetuan Amin Firdaus Mashudi & Co. Chambers"
              className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms] ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Glowing gold badge overlay inside the image */}
            <div className="absolute bottom-6 left-6 right-6 z-20 glass p-4 border-l-2 border-l-luxury-gold flex items-center gap-3">
              <div className="p-2 rounded-xs bg-gold-600/10">
                <Gavel className="w-5 h-5 text-luxury-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[11px] tracking-wider text-neutral-900 font-bold">TETUAN AMIN FIRDAUS MASHUDI & CO.</span>
                <span className="font-sans text-[8px] tracking-[0.2em] text-luxury-gold font-bold uppercase">Advocates & Solicitors</span>
              </div>
            </div>
          </motion.div>

          {/* Abstract floating card (Floating Stat badge) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1, ease: "easeOut" }}
            className="absolute -right-4 top-1/4 z-20 glass p-4 rounded-xs hidden md:flex items-center gap-3 shadow-lg max-w-[200px]"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse" />
            <div className="flex flex-col">
              <span className="font-sans text-[9px] tracking-widest text-neutral-500 uppercase font-medium">Court Practice</span>
              <span className="font-serif text-[11px] font-bold text-neutral-900 tracking-wide">High Court of Malaya</span>
            </div>
          </motion.div>

          {/* Second small floating badge */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 1, ease: "easeOut" }}
            className="absolute -left-6 bottom-12 z-20 glass p-4 rounded-xs hidden md:flex items-center gap-3 shadow-lg max-w-[200px]"
          >
            <div className="flex flex-col text-left">
              <span className="font-serif text-sm font-bold text-luxury-gold">LLB, LLM</span>
              <span className="font-sans text-[8px] tracking-[0.15em] text-neutral-500 uppercase font-semibold">Advocacy Counsel</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
