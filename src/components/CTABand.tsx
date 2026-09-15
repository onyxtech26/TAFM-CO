/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firm';
import { whatsappUrl } from '../lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

interface CTABandProps {
  heading?: string;
  subheading?: string;
}

export default function CTABand({
  heading = 'Have a Legal Question?',
  subheading = 'Speak with us about your matter. We will explain your options and the next steps clearly.'
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-slate-200/25 backdrop-blur-2xl border-t border-b border-[#CBD5E1]/60 py-16 sm:py-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[radial-gradient(ellipse,rgba(250,204,21,0.15)_0%,rgba(234,88,12,0.08)_40%,transparent_70%)] pointer-events-none blur-2xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/40 bg-gradient-to-r from-white via-amber-50/50 to-white text-[#C2410C] text-xs uppercase tracking-[0.2em] font-semibold mb-5 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
          <span>Confidential Enquiry</span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight mb-4">
          {heading}
        </h2>

        <p className="text-sm sm:text-base text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8">
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto btn-primary px-8 py-3.5 text-sm font-semibold tracking-wide shadow-lg"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
            className="w-full sm:w-auto btn-secondary px-6 py-3.5 text-sm"
          >
            <Phone className="w-4 h-4 text-[#EA580C]" />
            <span>Call {FIRM_DETAILS.contact.primaryPhone}</span>
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-sm text-[#0F172A] hover:text-[#16a34a] bg-white/70 border border-[#CBD5E1] hover:border-[#25D366]/50 transition-colors shadow-sm"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div className="mt-8 text-xs text-[#64748B] flex flex-wrap items-center justify-center gap-2 font-medium">
          <span>Advocates &amp; Solicitors, High Court in Malaya</span>
          <span aria-hidden="true">&bull;</span>
          <span>Skudai, Johor Bahru</span>
        </div>
      </div>
    </section>
  );
}
