/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { CheckCircle2, Home, BookOpen, Phone } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firm';

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-transparent px-4 py-24">
      <div className="max-w-xl mx-auto text-center space-y-7">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-500 flex items-center justify-center text-[#EA580C] mx-auto shadow-[0_0_30px_rgba(245,158,11,0.35)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
            Enquiry sent
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">Thank You</h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Your enquiry has been sent. We will contact you shortly. If your matter is urgent, please
            call{' '}
            <a
              href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
              className="text-[#C2410C] font-semibold hover:underline"
            >
              {FIRM_DETAILS.contact.primaryPhone}
            </a>
            .
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/75 backdrop-blur-xl border border-[#CBD5E1] text-left text-xs text-[#475569] leading-relaxed shadow-sm">
          <p>
            Please note that this acknowledgement does not mean that we have agreed to act for you,
            and no advocate–client relationship has been created at this stage. Please do not send
            confidential documents until we have confirmed our appointment.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/" className="w-full sm:w-auto btn-primary px-6 py-3 text-sm font-semibold">
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link to="/client-guide" className="w-full sm:w-auto btn-secondary px-6 py-3 text-sm">
            <BookOpen className="w-4 h-4" />
            <span>Read our Client Guide</span>
          </Link>
          <a
            href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
            className="w-full sm:w-auto btn-secondary px-6 py-3 text-sm"
          >
            <Phone className="w-4 h-4 text-[#EA580C]" />
            <span>Call us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
