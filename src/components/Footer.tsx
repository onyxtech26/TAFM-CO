/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { FIRM_INFO } from '../data';

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer 
      id="footer-chambers" 
      className="relative mt-24 text-neutral-600 pt-20 pb-12 overflow-hidden bg-white/50 backdrop-blur-xl border-t border-white/40 shadow-2xl rounded-t-3xl"
    >
      {/* Liquid Glass Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      {/* Decorative floating liquid blobs inside the footer glass */}
      <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '9s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-200/60">
          
          {/* Brand block (Left col) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center border border-luxury-gold/30 rounded-xs bg-white/80 shadow-sm">
                <Scale className="w-5 h-5 text-luxury-gold" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-sm md:text-base font-bold tracking-widest text-neutral-900 leading-none">
                  TETUAN AMIN FIRDAUS MASHUDI & CO.
                </span>
                <span className="font-sans text-[8px] tracking-[0.25em] text-luxury-gold mt-1 font-bold uppercase">
                  Advocates & Solicitors
                </span>
              </div>
            </div>

            <p className="font-sans text-xs text-neutral-600 leading-relaxed font-light text-left">
              Advocates & Solicitors (Peguambela & Peguamcara) of the High Court of Malaya. Providing tailored, high-performance legal representation and commercial advisory services in Kuantan, Pahang, and throughout Malaysia.
            </p>

            {/* Micro regulatory declaration */}
            <p className="font-sans text-[9px] text-neutral-500 font-semibold tracking-wide text-left uppercase">
              Regulated by the Bar Council of Malaysia. Registered Office: Kempadang, Kuantan, Pahang.
            </p>
          </div>

          {/* Quick links directory (Middle col) */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-4 text-left">
            <h4 className="font-serif text-xs font-bold text-neutral-900 uppercase tracking-widest border-b border-neutral-200 pb-2">
              Practice Directories
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="font-sans text-xs text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
                  Chambers Profile
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="font-sans text-xs text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
                  Legal Specialisations
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleNavClick(e, '#why-choose-us')} className="font-sans text-xs text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
                  Differentiating Pillars
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, '#process')} className="font-sans text-xs text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
                  Our Legal Process
                </a>
              </li>
              <li>
                <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="font-sans text-xs text-neutral-600 hover:text-luxury-gold transition-colors font-medium">
                  Casework Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Direct directories block (Right col) */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-serif text-xs font-bold text-neutral-900 uppercase tracking-widest border-b border-neutral-200 pb-2">
              Direct Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-neutral-600 font-light leading-relaxed">
                  22, Lorong Berjaya Permai 30, Taman Berjaya Permai, Kempadang, 25150 Kuantan, Pahang, Malaysia.
                </span>
              </li>
              <li className="flex gap-3 items-center whitespace-nowrap">
                <Phone className="w-4 h-4 text-luxury-gold shrink-0" />
                <div className="flex gap-3 items-center whitespace-nowrap">
                  <a href="tel:0102520859" className="font-sans text-xs text-neutral-600 hover:text-luxury-gold transition-colors font-semibold whitespace-nowrap">
                    010-252 0859
                  </a>
                  <span className="text-neutral-300 font-light">|</span>
                  <a href="tel:01151754152" className="font-sans text-xs text-neutral-600 hover:text-luxury-gold transition-colors font-semibold whitespace-nowrap">
                    011-5175 4152
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-luxury-gold shrink-0" />
                <a href={`mailto:${FIRM_INFO.email}`} className="font-sans text-xs text-neutral-600 hover:text-luxury-gold transition-colors font-semibold">
                  {FIRM_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-6">
          
          {/* Copyright and PDPA notice */}
          <div className="text-center md:text-left space-y-1.5">
            <p className="font-sans text-[10px] tracking-wide font-bold text-neutral-500">
              &copy; {new Date().getFullYear()} {FIRM_INFO.name}. All Rights Reserved.
            </p>
            <p className="font-sans text-[9px] text-neutral-500 font-light max-w-xl leading-normal">
              Disclaimer: The materials on this website are for general information purposes only and do not constitute formal legal advice. Access to this website does not create an attorney-client relationship.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
