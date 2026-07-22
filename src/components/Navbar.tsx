/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scale } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-choose-us' },
    { label: 'Process', href: '#process' },
    { label: 'Experience', href: '#experience' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // adjusted height of floating navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleConsultNowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    // Dispatch custom event to trigger the consultation modal in Consultation.tsx
    window.dispatchEvent(new CustomEvent('open-consultation'));
  };

  return (
    <>
      <div className="fixed top-3 md:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.header
          id="main-navbar"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-6xl pointer-events-auto"
        >
          {/* Floating circular layout with neon clockwise running border light */}
          <div className="relative p-[2px] rounded-full overflow-hidden shadow-lg shadow-black/5 bg-neutral-100">
            
            {/* Neon spinning light background circle */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-full pointer-events-none">
              <div 
                className="absolute top-1/2 left-1/2 w-[220%] h-[220%] -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_35%,#c9a227_50%,transparent_65%)] animate-border-spin" 
              />
            </div>

          {/* Inner Header Glass Container */}
          <div className="relative z-10 w-full bg-white/90 backdrop-blur-md rounded-full px-5 md:px-8 py-3 flex items-center justify-between">
            
            {/* Logo Brand area - No Subtitle */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group focus:outline-none lg:flex-1 lg:justify-start shrink-0"
              id="nav-brand"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-luxury-gold/50 rounded-full bg-neutral-50 transition-all duration-500 group-hover:border-luxury-gold group-hover:shadow-[0_0_10px_rgba(201,162,39,0.3)] shrink-0">
                <Scale className="w-4 h-4 text-luxury-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
              </div>
              <div className="flex flex-col justify-center text-center items-center lg:items-start lg:text-left">
                <span className="font-serif text-xs sm:text-sm md:text-base font-bold tracking-wider text-neutral-900 transition-colors group-hover:text-luxury-gold leading-none text-center lg:text-left whitespace-nowrap">
                  TAFM & CO.
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center lg:flex-1 shrink-0 mx-4" id="desktop-nav">
              <ul className="flex items-center gap-6 whitespace-nowrap">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <li key={item.href} className="whitespace-nowrap">
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`relative font-sans text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 py-1.5 focus:outline-none whitespace-nowrap ${
                          isActive
                            ? 'text-luxury-gold font-semibold'
                            : 'text-neutral-500 hover:text-black'
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="activeIndicator"
                            className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Desktop Consultation Action */}
            <div className="hidden lg:flex items-center justify-end lg:flex-1 shrink-0" id="desktop-nav-cta">
              <button
                onClick={handleConsultNowClick}
                className="px-5 py-2.5 gold-gradient text-black font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-[1.05] shadow-sm hover:shadow-luxury-gold/30 cursor-pointer whitespace-nowrap"
                id="nav-consult-button"
              >
                Consult Now
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-600 hover:text-black transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>
      </div>

      {/* Mobile Menu Slide-Out Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg flex flex-col justify-between pt-28 pb-12 px-8"
          >
            {/* Ambient Gold backlights */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />

            <nav className="relative flex flex-col items-center">
              <ul className="flex flex-col items-center gap-6">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`text-sm font-serif tracking-[0.12em] uppercase transition-all duration-300 ${
                          isActive
                            ? 'text-luxury-gold scale-105 font-bold'
                            : 'text-neutral-500 hover:text-black'
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-12"
              >
                <button
                  onClick={handleConsultNowClick}
                  className="px-8 py-3.5 gold-gradient text-black font-sans text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:scale-105"
                >
                  Consult Now
                </button>
              </motion.div>
            </nav>

            {/* Bottom Contact Details inside Mobile Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="text-center flex flex-col gap-1 text-neutral-500 font-sans text-[10px] tracking-wider uppercase"
            >
              <span>Kuantan, Pahang, Malaysia</span>
              <span>moamien89@gmail.com</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
