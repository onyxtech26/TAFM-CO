/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { WHY_CHOOSE_US, STATS } from '../data';

const IconMap: { [key: string]: React.ComponentType<any> } = {
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Zap
};

// Simple Count-up subcomponent for premium stats feel (Inverted to Black)
function CountUpNumber({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 10);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-wider">
      {count}
      <span className="text-luxury-gold">{suffix}</span>
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-24 bg-transparent border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Two-Column split layout for Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Stats and Differentiating pillars */}
          <div className="lg:col-span-7 flex flex-col items-start" id="why-choose-us-left">
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="h-[1px] w-10 bg-luxury-gold" />
              <span className="font-sans text-xs tracking-[0.4em] text-luxury-gold uppercase font-bold">
                Our Differentiators
              </span>
            </motion.div>
 
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6"
            >
              Upholding Professional Excellence
            </motion.h2>
 
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[1.5px] bg-luxury-gold mb-8"
            />
 
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-sm text-neutral-600 leading-relaxed font-light mb-12 max-w-xl"
            >
              We bring rigorous academic preparation and strategic depth to every client. Our focus is built on transparency, prompt delivery, and achieving pragmatic outcomes for complex corporate or conveyancing hurdles.
            </motion.p>
 
            {/* Premium Stat Counter Dashboard */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 w-full border-t border-neutral-200 pt-10" id="stats-dashboard">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <CountUpNumber value={stat.numericValue} suffix={stat.suffix} />
                  <span className="font-sans text-[10px] sm:text-xs tracking-wider text-neutral-500 uppercase mt-2 font-semibold">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Side: Key Pillars cards list */}
          <div className="lg:col-span-5 space-y-6" id="why-choose-us-right">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = IconMap[item.iconName] || ShieldCheck;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="glass p-6 rounded-xs flex gap-5 hover:bg-gold-600/10 transition-colors duration-500 cursor-default border-l-2 border-l-luxury-gold group"
                >
                  <div className="shrink-0 p-3 bg-gold-600/5 border border-gold-600/20 rounded-xs group-hover:bg-gold-600/15 group-hover:border-luxury-gold/30 transition-all duration-500 h-fit">
                    <IconComponent className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-serif text-base text-neutral-900 tracking-wide font-bold mb-1.5 group-hover:text-luxury-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
