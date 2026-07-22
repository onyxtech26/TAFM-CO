/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Lightbulb, 
  Search, 
  Scale, 
  FileCheck2 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data';

const StepIcons = [
  Lightbulb,
  Search,
  Scale,
  FileCheck2
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 bg-transparent border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header (Inverted to Black) */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="process-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 justify-center mb-3"
          >
            <div className="h-[1px] w-10 bg-luxury-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-luxury-gold uppercase font-bold">
              Client Journey
            </span>
            <div className="h-[1px] w-10 bg-luxury-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6"
          >
            Our Legal Process
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1.5px] w-24 bg-luxury-gold mx-auto mb-6 origin-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-sm text-neutral-600 leading-relaxed font-light"
          >
            We adhere to a structured, four-step framework designed to maintain direct clarity, manage compliance risks, and establish consistent progress for your legal matters.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-16" id="process-timeline">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-luxury-gold/50 via-gold-600/20 to-transparent transform -translate-x-1/2 z-0" />

          {/* Staggered Timeline Steps */}
          <div className="space-y-12 md:space-y-20 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = StepIcons[idx] || Lightbulb;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={step.stepNumber} 
                  className={`flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`process-step-${step.stepNumber}`}
                >
                  
                  {/* Left/Right content block */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-12">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="glass p-6 rounded-xs hover:bg-gold-600/10 border-l-2 border-l-luxury-gold transition-all duration-500 group relative shadow-sm"
                    >
                      {/* Step Number Bubble overlay */}
                      <span className="absolute -top-3 -left-3 font-serif text-xs font-bold text-black bg-luxury-gold border border-luxury-gold/20 w-7 h-7 flex items-center justify-center rounded-xs shadow-md">
                        0{step.stepNumber}
                      </span>

                      <h3 className="font-serif text-base text-neutral-900 font-bold tracking-wide mb-2 group-hover:text-luxury-gold transition-colors">
                        {step.title}
                      </h3>
                      
                      <p className="font-sans text-xs text-luxury-gold font-bold mb-3 italic">
                        {step.description}
                      </p>

                      <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">
                        {step.details}
                      </p>
                    </motion.div>
                  </div>

                  {/* Centered Node Icon Bubble */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                      className="w-12 h-12 rounded-full bg-white border-2 border-luxury-gold flex items-center justify-center shadow-md shadow-neutral-200 group-hover:shadow-[0_0_15px_rgba(201,162,39,0.3)] transition-all duration-500"
                    >
                      <IconComponent className="w-5 h-5 text-luxury-gold" />
                    </motion.div>
                  </div>

                  {/* Empty block to pad opposite side on desktop */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
