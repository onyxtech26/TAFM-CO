/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Scale, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { FIRM_DETAILS, OFFICES, formatOfficeAddress } from '../data/firm';
import { PRACTICE_AREAS } from '../data/services';
import { whatsappUrl } from '../lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white/40 backdrop-blur-3xl border-t border-white/70 shadow-[0_-10px_35px_rgba(15,23,42,0.05)] text-[#475569] pt-16 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-[550px] h-[250px] bg-[radial-gradient(ellipse,rgba(245,158,11,0.1)_0%,rgba(234,88,12,0.05)_45%,transparent_70%)] pointer-events-none blur-3xl -z-10" />
      <div className="absolute -bottom-24 right-1/4 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(250,204,21,0.08)_0%,rgba(234,88,12,0.04)_40%,transparent_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#CBD5E1]/70">
          {/* Column 1 — Firm */}
          <div className="lg:col-span-3 space-y-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-amber-500 bg-gradient-to-br from-white via-amber-50/50 to-white flex items-center justify-center text-[#EA580C] shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                <Scale className="w-5 h-5 text-[#EA580C]" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-[#0F172A] block leading-tight">
                  {FIRM_DETAILS.shortName}
                </span>
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#C2410C] block font-semibold">
                  Advocates &amp; Solicitors
                </span>
              </div>
            </Link>

            <div className="text-sm leading-relaxed space-y-1">
              <p className="text-[#0F172A] font-semibold">{FIRM_DETAILS.name}</p>
              <p>Advocates &amp; Solicitors</p>
              <p>Registered with the Malaysian Bar</p>
              <p className="font-mono text-xs text-[#C2410C]">
                Registration No. {FIRM_DETAILS.registrationNumber}
              </p>
            </div>

            <Link
              to="/credentials"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            >
              <span>Verify our registration</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Column 2 — Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-xs">
              {PRACTICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="hover:text-[#EA580C] transition-colors block py-0.5"
                  >
                    {area.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Offices */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
              Our Offices
            </h3>
            <ul className="space-y-4 text-xs">
              {OFFICES.map((office) => (
                <li key={office.id}>
                  <span className="block text-[#0F172A] font-semibold mb-0.5">
                    {office.isMain
                      ? `${office.city} (HQ)`
                      : office.id === 'adda-heights'
                        ? 'Johor Bahru (Adda Heights)'
                        : office.city}
                  </span>
                  <span className="block leading-relaxed">{formatOfficeAddress(office)}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/offices"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            >
              <span>Directions &amp; office details</span>
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Column 4 — Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
              Contact
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a
                    href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
                    className="block hover:text-[#0F172A]"
                  >
                    {FIRM_DETAILS.contact.primaryPhone}
                  </a>
                  <a
                    href={`tel:${FIRM_DETAILS.contact.secondaryPhoneTel}`}
                    className="block hover:text-[#0F172A]"
                  >
                    {FIRM_DETAILS.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                <a
                  href={`mailto:${FIRM_DETAILS.contact.generalEmail}`}
                  className="hover:text-[#0F172A] break-all"
                >
                  {FIRM_DETAILS.contact.generalEmail}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[#0F172A] font-medium">
                    {FIRM_DETAILS.officeHours.weekdays}
                  </span>
                  <span className="block text-[#64748B] text-[11px]">
                    {FIRM_DETAILS.officeHours.weekend}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>Skudai · Johor Bahru · Kuantan</span>
              </div>

              <div className="pt-2">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs px-3.5 py-2 w-full justify-center"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary navigation */}
        <div className="py-6 border-b border-[#CBD5E1]/70 flex flex-wrap gap-x-6 gap-y-2 text-xs">
          <Link to="/" className="hover:text-[#EA580C] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#EA580C] transition-colors">About the Firm</Link>
          <Link to="/our-lawyer" className="hover:text-[#EA580C] transition-colors">Our Lawyer</Link>
          <Link to="/credentials" className="hover:text-[#EA580C] transition-colors">Registration &amp; Credentials</Link>
          <Link to="/practice-areas" className="hover:text-[#EA580C] transition-colors">Practice Areas</Link>
          <Link to="/offices" className="hover:text-[#EA580C] transition-colors">Our Offices</Link>
          <Link to="/faq" className="hover:text-[#EA580C] transition-colors">FAQ</Link>
          <Link to="/client-guide" className="hover:text-[#EA580C] transition-colors">Client Guide</Link>
          <Link to="/articles" className="hover:text-[#EA580C] transition-colors">Articles</Link>
          <Link to="/careers" className="hover:text-[#EA580C] transition-colors">Careers</Link>
          <Link to="/contact" className="hover:text-[#EA580C] transition-colors">Contact Us</Link>
        </div>

        {/* Statutory disclaimer */}
        <div className="py-6 border-b border-[#CBD5E1]/70 text-xs leading-relaxed text-[#475569]">
          <p className="italic">{FIRM_DETAILS.disclaimer}</p>
        </div>

        {/* Bottom strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#64748B] gap-4">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} {FIRM_DETAILS.name} ({FIRM_DETAILS.registrationNumber}). All rights
              reserved.
            </p>
            <p>
              Powered by <span className="font-semibold text-[#C2410C]">Onyxx Tech Hub</span>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link to="/disclaimer" className="hover:text-[#EA580C] transition-colors">
              Disclaimer
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/privacy" className="hover:text-[#EA580C] transition-colors">
              Privacy Notice
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms" className="hover:text-[#EA580C] transition-colors">
              Terms of Use
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/cookies" className="hover:text-[#EA580C] transition-colors">
              Cookie Notice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
