/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import Interactive3DBackground from './components/Interactive3DBackground';
import SplashScreen from './components/SplashScreen';
import Seo from './components/Seo';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OurLawyerPage from './pages/OurLawyerPage';
import CredentialsPage from './pages/CredentialsPage';
import PracticeAreasPage from './pages/PracticeAreasPage';
import PracticeAreaDetailPage from './pages/PracticeAreaDetailPage';
import OfficesPage from './pages/OfficesPage';
import FaqPage from './pages/FaqPage';
import ClientGuidePage from './pages/ClientGuidePage';
import ArticlesPage from './pages/ArticlesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';
import OurLegalServicesPage from './pages/OurLegalServicesPage';
import LegalProcessPage from './pages/LegalProcessPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import OurClientsPage from './pages/OurClientsPage';

/**
 * The splash screen only plays when the visitor lands on the home page.
 * Deep links (a shared practice-area page, a search result, a link in an
 * email) must open on the page that was asked for.
 */
function shouldPlaySplash(): boolean {
  if (typeof window === 'undefined') return true;
  const hash = window.location.hash.replace(/^#/, '');
  return hash === '' || hash === '/';
}

function FirmApp() {
  const [showSplash, setShowSplash] = useState(shouldPlaySplash);
  const [isFromSplash, setIsFromSplash] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleReplay = () => {
      setIsFromSplash(true);
      setShowSplash(true);
      navigate('/');
    };
    window.addEventListener('replay-splash', handleReplay);
    return () => window.removeEventListener('replay-splash', handleReplay);
  }, [navigate]);

  useEffect(() => {
    if (!showSplash && isFromSplash && location.pathname !== '/') {
      setIsFromSplash(false);
    }
  }, [location.pathname, showSplash, isFromSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setIsFromSplash(true);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <ScrollToTop />
      <Seo />

      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      <Interactive3DBackground />

      <div className="grain-overlay" aria-hidden="true" />

      <motion.div
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen bg-transparent text-[#0F172A] flex flex-col relative z-10 selection:bg-[#EA580C] selection:text-[#FFFFFF]"
      >
        <Navbar />

        <main className="flex-1 pt-16 sm:pt-[4.5rem]">
          <AnimatePresence mode="wait">
            {!showSplash && (
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={
                  isFromSplash
                    ? { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }
                    : { duration: 0.18, ease: 'easeOut' }
                }
                onAnimationComplete={() => {
                  if (isFromSplash) setIsFromSplash(false);
                }}
              >
                <Routes location={location}>
                  <Route path="/" element={<HomePage />} />

                  {/* About */}
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/our-lawyer" element={<OurLawyerPage />} />
                  <Route path="/credentials" element={<CredentialsPage />} />

                  {/* Practice areas */}
                  <Route path="/practice-areas" element={<PracticeAreasPage />} />
                  <Route path="/practice-areas/:slug" element={<PracticeAreaDetailPage />} />

                  {/* Offices */}
                  <Route path="/offices" element={<OfficesPage />} />

                  {/* Resources */}
                  <Route path="/faq" element={<FaqPage />} />
                  <Route path="/client-guide" element={<ClientGuidePage />} />
                  <Route path="/articles" element={<ArticlesPage />} />

                  {/* Careers & contact */}
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/thank-you" element={<ThankYouPage />} />

                  {/* Legal pages */}
                  <Route path="/disclaimer" element={<LegalPage slug="disclaimer" />} />
                  <Route path="/privacy" element={<LegalPage slug="privacy" />} />
                  <Route path="/terms" element={<LegalPage slug="terms" />} />
                  <Route path="/cookies" element={<LegalPage slug="cookies" />} />

                  {/* Dedicated Pages from firm profile */}
                  <Route path="/services" element={<OurLegalServicesPage />} />
                  <Route path="/process" element={<LegalProcessPage />} />
                  <Route path="/why-us" element={<WhyChooseUsPage />} />
                  <Route path="/clients" element={<OurClientsPage />} />
                  <Route path="/our-clients" element={<OurClientsPage />} />

                  {/* Redirects from previous site structure */}
                  <Route
                    path="/services/:slug"
                    element={<Navigate to="/practice-areas" replace />}
                  />
                  <Route path="/experience" element={<Navigate to="/our-lawyer" replace />} />
                  <Route path="/ms" element={<Navigate to="/" replace />} />
                  <Route path="/notis-privasi" element={<Navigate to="/privacy" replace />} />

                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <WhatsAppButton />

        <Footer />
      </motion.div>

    </>
  );
}

export default function App() {
  return (
    <HashRouter>
      <FirmApp />
    </HashRouter>
  );
}
