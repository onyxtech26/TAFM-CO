/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Scale, Home, Mail } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-transparent px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full border border-amber-500 bg-gradient-to-br from-white via-amber-50/60 to-white flex items-center justify-center text-[#EA580C] mx-auto shadow-[0_0_20px_rgba(245,158,11,0.25)]">
          <Scale className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Page not found
          </h1>
          <p className="text-sm text-[#475569] leading-relaxed">
            The page you are looking for may have been moved or no longer exists.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link to="/" className="w-full sm:w-auto btn-primary px-6 py-3 text-sm font-semibold">
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto btn-secondary px-6 py-3 text-sm">
            <Mail className="w-4 h-4 text-[#EA580C]" />
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#64748B]">
          <Link to="/practice-areas" className="hover:text-[#EA580C] transition-colors">
            Practice Areas
          </Link>
          <Link to="/offices" className="hover:text-[#EA580C] transition-colors">
            Our Offices
          </Link>
          <Link to="/faq" className="hover:text-[#EA580C] transition-colors">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}
