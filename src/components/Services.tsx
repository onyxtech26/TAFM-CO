/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Scale, 
  Home, 
  Users, 
  HeartHandshake, 
  FileText, 
  ShieldAlert, 
  Award, 
  ChevronDown, 
  Check 
} from 'lucide-react';
import { SERVICES } from '../data';

// Map icon strings to Lucide components
const IconMap: { [key: string]: React.ComponentType<any> } = {
  Briefcase,
  Scale,
  Home,
  Users,
  HeartHandshake,
  FileText,
  ShieldAlert,
  Award
};

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="relative py-24 bg-transparent border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header (Inverted to Black) */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="services-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 justify-center mb-3"
          >
            <div className="h-[1px] w-10 bg-luxury-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-luxury-gold uppercase font-bold">
              Areas of Practice
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
            Legal Specialisations
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
            We deliver targeted and meticulously prepared legal advisories across multiple fields, upholding the confidentiality and high performance expected of premier law chambers.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="services-grid">
          {SERVICES.map((service, index) => {
            const IconComponent = IconMap[service.iconName] || Scale;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`glass p-6 rounded-xs flex flex-col justify-between transition-all duration-500 cursor-pointer select-none group relative border-l-2 ${
                  isExpanded 
                    ? 'border-l-luxury-gold bg-gold-600/10 shadow-[0_4px_25px_rgba(201,162,39,0.08)] col-span-1 md:col-span-2 lg:col-span-2' 
                    : 'border-l-gold-600/20 hover:border-l-luxury-gold hover:shadow-md hover:-translate-y-1'
                }`}
                onClick={() => toggleExpand(service.id)}
                id={`service-card-${service.id}`}
              >
                {/* Thin gold accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div>
                  {/* Icon & Title row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-gold-600/5 border border-gold-600/20 rounded-xs group-hover:border-luxury-gold/40 group-hover:bg-gold-600/15 transition-all duration-500">
                      <IconComponent className="w-5 h-5 text-luxury-gold group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-neutral-500 group-hover:text-luxury-gold transition-colors"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>

                  <h3 className="font-serif text-lg text-neutral-900 font-bold tracking-wide mb-3 group-hover:text-luxury-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Expanded details container */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden mt-4 border-t border-neutral-200 pt-4 w-full"
                    >
                      <h4 className="font-serif text-xs text-luxury-gold uppercase tracking-wider font-bold mb-3">
                        Scope of Advisories:
                      </h4>
                      <ul className="space-y-2.5">
                        {service.details.map((detail, dIdx) => (
                          <motion.li
                            key={dIdx}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: dIdx * 0.05 }}
                            className="flex items-start gap-2.5 text-xs text-neutral-700 font-sans font-light"
                          >
                            <Check className="w-3.5 h-3.5 text-luxury-gold shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card CTA help text */}
                {!isExpanded && (
                  <span className="font-sans text-[9px] tracking-wider text-luxury-gold/50 group-hover:text-luxury-gold uppercase font-bold mt-4 block text-left">
                    Click to view legal scope
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
