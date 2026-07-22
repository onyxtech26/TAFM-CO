/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, Key, Shield, FileSignature, Landmark, HelpCircle } from 'lucide-react';
import { EXPERIENCE_AREAS } from '../data';

const CategoryIcons = [Briefcase, Key, Shield, FileSignature, Landmark, HelpCircle];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-transparent border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header (Inverted to Black) */}
        <div className="text-center max-w-3xl mx-auto mb-20" id="experience-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 justify-center mb-3"
          >
            <div className="h-[1px] w-10 bg-luxury-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-luxury-gold uppercase font-bold">
              Track Record
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
            Areas of Legal Experience
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
            While upholding strict, professional client confidentiality by omitting specific names, we showcase the core transactional sectors and casework parameters handled by our chambers.
          </motion.p>
        </div>

        {/* Portfolio Bento/Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="experience-grid">
          {EXPERIENCE_AREAS.map((area, idx) => {
            const IconComponent = CategoryIcons[idx] || HelpCircle;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.05 }}
                className="relative aspect-4/3 rounded-xs overflow-hidden border border-luxury-gold/25 group cursor-pointer shadow-md shadow-neutral-200"
                id={`experience-card-${area.id}`}
              >
                {/* Image Background */}
                <img
                  src={area.imageUrl}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-[0.45] group-hover:scale-105 transition-all duration-1000 ease-out z-0"
                  referrerPolicy="no-referrer"
                />

                {/* Golden Radial glow from bottom right */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-luxury-gold/0 via-luxury-gold/0 to-luxury-gold/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

                {/* Thin internal custom gold border margin */}
                <div className="absolute inset-4 border border-luxury-gold/15 pointer-events-none z-20 group-hover:border-luxury-gold/35 transition-all duration-500" />

                {/* Content Box */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  
                  {/* Category icon overlay */}
                  <div className="mb-4 p-2 bg-gold-600/20 border border-gold-600/30 rounded-xs w-fit text-luxury-gold group-hover:bg-gold-600/30 group-hover:border-luxury-gold/50 transition-all duration-500 transform group-hover:-translate-y-1">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  <h3 className="font-serif text-lg text-white font-bold tracking-wide mb-2 group-hover:text-luxury-gold transition-colors">
                    {area.title}
                  </h3>

                  <p className="font-sans text-xs text-gray-300 leading-relaxed font-light transform opacity-90 group-hover:opacity-100 transition-opacity">
                    {area.description}
                  </p>

                  {/* Golden subtle detail tag */}
                  <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-pulse" />
                    <span className="font-sans text-[8px] tracking-[0.25em] text-luxury-gold uppercase font-bold">
                      Casework Expertise
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
