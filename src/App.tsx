/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Experience from './components/Experience';
import Consultation from './components/Consultation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GalaxyBackground from './components/GalaxyBackground';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // If the preloader is running, disable scrolling on body
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  useEffect(() => {
    // Scroll active element tracking using IntersectionObserver
    const sections = ['home', 'about', 'services', 'why-choose-us', 'process', 'experience', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // trigger near center scroll
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-white font-sans selection:bg-luxury-gold selection:text-black text-neutral-800">
      
      {/* 1. Loading Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Global animated galaxy background behind all transparent sections */}
      {!loading && <GalaxyBackground />}

      {/* Main Website Wrapper */}
      {!loading && (
        <div className="fade-in-content relative z-10">
          
          {/* Subtle gold noise texture overlay */}
          <div className="fixed inset-0 pointer-events-none z-40 opacity-[0.015] bg-repeat" 
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

          {/* 2. Sticky Floating Navbar with spin neon clockwise border */}
          <Navbar activeSection={activeSection} />

          {/* 3. Hero Section (Updated to high contrast text and white/cosmic background) */}
          <Hero />

          {/* 4. About Us Section */}
          <About />

          {/* 5. Legal Services Grid Section */}
          <Services />

          {/* 6. Why Choose Us Section with stats */}
          <WhyChooseUs />

          {/* 7. Timeline Process Section */}
          <Process />

          {/* 8. Areas of Experience Section */}
          <Experience />

          {/* 9. Mid-page Consultation CTA with interactive modal */}
          <Consultation />

          {/* 10. Contact Info directory & inquiry form & interactive map */}
          <Contact />

          {/* 11. Authoritative Corporate Footer in liquid glassmorphism design */}
          <Footer />

        </div>
      )}
    </div>
  );
}
