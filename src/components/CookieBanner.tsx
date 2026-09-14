/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { COOKIE_BANNER } from '../data/legal';

/**
 * Cookie consent banner (Part 3.5 of the content pack).
 * Only essential cookies run until the visitor accepts analytics.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(COOKIE_BANNER.storageKey);
      if (!stored) setVisible(true);
    } catch {
      // Storage blocked — show the banner but do not persist the choice.
      setVisible(true);
    }
  }, []);

  const choose = (value: 'all' | 'essential') => {
    try {
      window.localStorage.setItem(COOKIE_BANNER.storageKey, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[60] p-3 sm:p-4"
    >
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/97 backdrop-blur-2xl border border-amber-500/40 shadow-[0_18px_45px_rgba(15,23,42,0.18)] p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-9 h-9 rounded-full border border-amber-500/50 bg-amber-50 flex items-center justify-center text-[#EA580C] shrink-0">
            <Cookie className="w-4.5 h-4.5" />
          </div>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            {COOKIE_BANNER.message}{' '}
            <Link to="/cookies" className="text-[#C2410C] font-semibold hover:underline">
              {COOKIE_BANNER.readMoreLabel}
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => choose('essential')}
            className="btn-secondary px-4 py-2.5 text-xs justify-center cursor-pointer"
          >
            {COOKIE_BANNER.rejectLabel}
          </button>
          <button
            type="button"
            onClick={() => choose('all')}
            className="btn-primary px-5 py-2.5 text-xs font-semibold justify-center cursor-pointer"
          >
            {COOKIE_BANNER.acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
