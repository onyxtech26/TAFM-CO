/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Amin Firdaus Mashudi & Co.',
  '/about': 'About The Chambers | Amin Firdaus Mashudi & Co.',
  '/services': 'Our Legal Services | AFM & Co.',
  '/why-us': 'Why Choose Our Chambers | AFM & Co.',
  '/process': 'Our Legal Process & Engagement | AFM & Co.',
  '/clients': 'Our Clients | AFM & Co.',
  '/our-clients': 'Our Clients | AFM & Co.',
  '/experience': 'Experience, Practice Forums & Counsel Profile | AFM & Co.',
  '/contact': 'Confidential Consultation & Office Location | AFM & Co.'
};

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // Determine document title
    if (ROUTE_TITLES[pathname]) {
      document.title = ROUTE_TITLES[pathname];
    } else if (pathname.startsWith('/services/')) {
      // Handled inside ServiceDetailPage or fallback
      const slug = pathname.replace('/services/', '');
      const formatted = slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      document.title = `${formatted} | Practice Area | AFM & Co.`;
    } else {
      document.title = 'Amin Firdaus Mashudi & Co.';
    }
  }, [pathname]);

  return null;
}
