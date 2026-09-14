/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { FIRM_DETAILS } from '../data/firm';
import { whatsappUrl } from '../lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

/** Floating WhatsApp button (Part 3.3 of the content pack). */
export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    setShowTooltip(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setShowTooltip(false), 5000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShowTooltip(false);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <aside
      aria-label="WhatsApp enquiry"
      className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showTooltip && (
        <div
          role="status"
          className="hidden sm:block max-w-[260px] bg-white/95 backdrop-blur-md border border-[#EA580C]/50 px-4 py-3 rounded-xl shadow-[0_10px_25px_rgba(15,23,42,0.12),0_0_15px_rgba(234,88,12,0.15)] text-[#0F172A] animate-fadeIn pointer-events-none"
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#25D366] shrink-0" />
            <span className="text-xs font-semibold whitespace-nowrap">Chat with our office</span>
          </div>
          <p className="text-[10px] text-[#64748B] leading-relaxed">
            {FIRM_DETAILS.contact.whatsappNote}
          </p>
        </div>
      )}

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        aria-label="WhatsApp Amin Firdaus Mashudi & Co."
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_6px_25px_rgba(37,211,102,0.6)] focus-visible:outline-none shrink-0"
      >
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
        <span className="absolute -inset-2 rounded-full border border-[#25D366]/20 pointer-events-none" />
        <WhatsAppIcon className="w-7 h-7 text-white transition-transform group-hover:scale-105" />
      </a>
    </aside>
  );
}
