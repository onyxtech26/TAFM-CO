/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, GraduationCap, Scale, ShieldCheck, MapPin } from 'lucide-react';
import { FIRM_INFO } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-transparent border-t border-neutral-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Title with Subtitle and Gold Accents (Inverted to Black) */}
        <div className="text-center md:text-left mb-16 md:mb-20 max-w-3xl" id="about-header">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 justify-center md:justify-start mb-3"
          >
            <div className="h-[1px] w-10 bg-luxury-gold" />
            <span className="font-sans text-xs tracking-[0.4em] text-luxury-gold uppercase font-bold">
              Corporate Counsel
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 mb-6"
          >
            About The Chambers
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1.5px] bg-luxury-gold mb-6 mx-auto md:mx-0"
          />
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="about-grid">
          
          {/* Left Column: Extensive Bio Text & Statement */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-2xl md:text-3xl text-luxury-gold font-bold leading-snug">
                {FIRM_INFO.name} represents reliable advocacy with deep corporate compliance.
              </h3>
              
              <p className="font-sans text-sm md:text-base text-neutral-700 leading-relaxed font-light">
                {FIRM_INFO.aboutDetailed}
              </p>

              <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed font-light">
                Led by Muhammad Amin Firdaus Bin Mashudi, an Advocate & Solicitor with LLB UUM and LLM UM qualifications, the firm focuses on providing professional legal guidance with strong attention to detail, integrity, and client-focused strategies. We advise both individual property buyers and private enterprises in Kuantan and throughout Malaysia.
              </p>
            </motion.div>

            {/* Core Values row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-neutral-200"
            >
              <div className="flex gap-3">
                <div className="mt-1 p-1.5 rounded-xs bg-gold-600/10 text-luxury-gold border border-gold-600/10 h-fit">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-neutral-900 tracking-wider font-bold mb-1">Confidential Protection</h4>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">
                    Your legal matters are secured with complete attorney-client privilege.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 p-1.5 rounded-xs bg-gold-600/10 text-luxury-gold border border-gold-600/10 h-fit">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-neutral-900 tracking-wider font-bold mb-1">Strategic Advocacy</h4>
                  <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light">
                    Formulating legal pathways customized to local judicial processes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-End Lawyer Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 glass p-8 rounded-xs relative group border-t-2 border-l-0 border-r-0 border-b-0 border-t-luxury-gold"
            id="lawyer-profile-card"
          >
            <div className="flex flex-col items-center text-center">
              
              {/* Lawyer Photo Profile Frame */}
              <div className="relative w-36 h-48 mb-6 overflow-hidden rounded-xs border border-luxury-gold/30 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-white/35 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=400"
                  alt="Muhammad Amin Firdaus Bin Mashudi"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Identity labels */}
              <span className="font-sans text-[9px] tracking-[0.25em] text-luxury-gold uppercase font-bold mb-1">
                Managing Counsel
              </span>
              
              <h4 className="font-serif text-lg text-neutral-900 font-bold tracking-wide mb-1">
                {FIRM_INFO.lawyerName}
              </h4>
              
              <p className="font-sans text-xs text-neutral-500 font-medium tracking-wide mb-4 italic">
                {FIRM_INFO.position}
              </p>

              {/* Divider */}
              <div className="w-16 h-[1px] bg-luxury-gold/30 mb-6" />

              {/* Education details */}
              <div className="w-full text-left space-y-4">
                <span className="font-serif text-xs tracking-widest text-neutral-900 uppercase font-bold block mb-2 border-b border-neutral-200 pb-1">
                  Credentials & Degrees
                </span>
                
                {FIRM_INFO.qualifications.map((q, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <GraduationCap className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-serif text-xs font-bold text-neutral-800">{q.degree}</p>
                      <p className="font-sans text-[10px] text-neutral-600 font-light">{q.school}</p>
                    </div>
                  </div>
                ))}

                <div className="flex gap-3 items-start pt-2">
                  <Award className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-serif text-xs font-bold text-neutral-800">High Court Admission</p>
                    <p className="font-sans text-[10px] text-neutral-600 font-light">{FIRM_INFO.admission}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start pt-2">
                  <MapPin className="w-4 h-4 text-luxury-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-serif text-xs font-bold text-neutral-800">Chambers Jurisdiction</p>
                    <p className="font-sans text-[10px] text-neutral-600 font-light">{FIRM_INFO.location}</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
