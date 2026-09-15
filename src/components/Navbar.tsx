/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firm';
import { whatsappUrl, mailtoUrl } from '../lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

interface NavChild {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

/** Main menu per Part 2 of the content pack. */
const NAV_ITEMS: NavItem[] = [
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About the Firm', path: '/about' },
      { label: 'Why Choose Us', path: '/why-us' },
      { label: 'Our Lawyer & Team', path: '/our-lawyer' },
      { label: 'Our Clients', path: '/clients' },
      { label: 'Registration & Credentials', path: '/credentials' }
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Our Legal Services', path: '/services' },
      { label: 'Practice Areas', path: '/practice-areas' },
      { label: 'Our Legal Process', path: '/process' }
    ]
  },
  { label: 'Our Office', path: '/offices' },
  {
    label: 'Resources',
    path: '/faq',
    children: [
      { label: 'FAQ', path: '/faq' },
      { label: 'Client Guide', path: '/client-guide' },
      { label: 'Articles', path: '/articles' }
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [consultDropdownOpen, setConsultDropdownOpen] = useState(false);
  const consultDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setConsultDropdownOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (consultDropdownRef.current && !consultDropdownRef.current.contains(e.target as Node)) {
        setConsultDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  const isItemActive = (item: NavItem) => {
    if (item.children) {
      return item.children.some(
        (child) => location.pathname === child.path || location.pathname.startsWith(`${child.path}/`)
      );
    }
    // Top-level links stay highlighted on their sub-pages (e.g. a practice area).
    return location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
  };

  return (
    <>
      {/* FLOATING PILL HEADER */}
      <header
        className="fixed top-1 sm:top-2 left-0 right-0 z-50 px-3 sm:px-5 w-full flex justify-center pointer-events-none transition-all duration-300"
        aria-label="Site Header"
      >
        <div
          className={`pointer-events-auto w-full max-w-xl xl:w-auto xl:max-w-none mx-auto rounded-full transition-all duration-300 ease-out flex items-center justify-between xl:justify-center xl:gap-3 border ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-2xl border-amber-500/50 py-1.5 sm:py-2 px-3 sm:px-4.5 shadow-[0_12px_30px_rgba(15,23,42,0.12),0_0_22px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/20'
              : 'bg-white/85 backdrop-blur-xl border-[#CBD5E1] py-1.5 sm:py-2 px-3.5 sm:px-5 shadow-[0_8px_25px_rgba(15,23,42,0.08),0_0_15px_rgba(245,158,11,0.1)]'
          }`}
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-2 sm:gap-2.5 text-left focus-visible:outline-none shrink-0 cursor-pointer"
            aria-label="Amin Firdaus Mashudi & Co. Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-amber-500 bg-gradient-to-br from-white via-amber-50/60 to-white flex items-center justify-center shadow-[0_0_12px_rgba(245,158,11,0.3)] transition-all duration-300 group-hover:border-[#FACC15] group-hover:shadow-[0_0_22px_rgba(250,204,21,0.5)] group-hover:scale-105 overflow-hidden p-0.5">
              <img
                src="/images/logo.png"
                alt="Amin Firdaus Mashudi & Co."
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="font-serif text-xs xs:text-sm sm:text-base font-bold tracking-tight text-[#0F172A] group-hover:text-[#EA580C] transition-colors leading-none whitespace-nowrap">
              Amin Firdaus Mashudi &amp; Co
            </span>
          </Link>

          <div className="hidden xl:block w-px h-5 bg-slate-300/80 mx-0.5 shrink-0" aria-hidden="true" />

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center gap-0.5 shrink-0" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = isItemActive(item);
              if (!item.children) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-full border ${
                      isActive
                        ? 'text-[#C2410C] bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-yellow-500/15 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.22)] font-semibold'
                        : 'text-[#1E293B] hover:text-[#EA580C] hover:bg-[#F1F5F9] border-transparent'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-full border inline-flex items-center gap-1 ${
                      isActive
                        ? 'text-[#C2410C] bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-yellow-500/15 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.22)] font-semibold'
                        : 'text-[#1E293B] hover:text-[#EA580C] hover:bg-[#F1F5F9] border-transparent'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </Link>

                  {openDropdown === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                      <div className="min-w-[248px] bg-white/98 border border-amber-500/40 rounded-2xl shadow-[0_20px_45px_rgba(15,23,42,0.15)] p-2 backdrop-blur-2xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                              location.pathname === child.path
                                ? 'bg-amber-500/10 text-[#C2410C] font-semibold'
                                : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

            <a
              href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
              className="xl:hidden w-8 h-8 rounded-full bg-white border border-[#CBD5E1] text-[#EA580C] hover:bg-gradient-to-r hover:from-[#EA580C] hover:to-[#F59E0B] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Call our office"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <div
              ref={consultDropdownRef}
              className="relative hidden sm:block"
              onMouseEnter={() => setConsultDropdownOpen(true)}
              onMouseLeave={() => setConsultDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setConsultDropdownOpen(!consultDropdownOpen)}
                aria-expanded={consultDropdownOpen}
                aria-haspopup="true"
                className="btn-primary text-xs px-3.5 sm:px-4.5 py-1.5 font-semibold rounded-full shadow-[0_2px_14px_rgba(234,88,12,0.35)] hover:shadow-[0_4px_20px_rgba(249,115,22,0.5)] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    consultDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {consultDropdownOpen && (
                <div className="absolute top-full right-0 w-72 sm:w-80 pt-2 z-50">
                  <div className="bg-white/98 border border-amber-500/40 rounded-2xl shadow-[0_20px_45px_rgba(15,23,42,0.15),0_0_22px_rgba(245,158,11,0.15)] p-3 backdrop-blur-2xl">
                    <div className="px-3 py-1.5 mb-2 border-b border-[#E2E8F0]">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
                        Get in touch
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <a
                        href={whatsappUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setConsultDropdownOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-[#25D366]/10 border border-[#E2E8F0] hover:border-[#25D366]/50 transition-all text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 border border-[#25D366]/40 text-[#16a34a] flex items-center justify-center shrink-0">
                          <WhatsAppIcon className="w-5 h-5 text-[#16a34a]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#0F172A] group-hover:text-[#16a34a] transition-colors">
                              WhatsApp Us
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#16a34a] transition-colors" />
                          </div>
                          <p className="text-[11px] text-[#C2410C] font-mono mt-0.5">
                            {FIRM_DETAILS.contact.primaryPhone}
                          </p>
                          <p className="text-[10px] text-[#64748B] mt-0.5">Chat with our office</p>
                        </div>
                      </a>

                      <a
                        href={mailtoUrl('Legal enquiry - Amin Firdaus Mashudi & Co.')}
                        onClick={() => setConsultDropdownOpen(false)}
                        className="group flex items-start gap-3 p-2.5 rounded-xl bg-[#F8FAFC] hover:bg-amber-500/10 border border-[#E2E8F0] hover:border-amber-500/50 transition-all text-left"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500/15 to-amber-500/20 border border-amber-500/40 text-[#EA580C] flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-[#0F172A] group-hover:text-[#EA580C] transition-colors">
                              Email Us
                            </span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-[#EA580C] transition-colors" />
                          </div>
                          <p className="text-[11px] text-[#C2410C] font-mono truncate mt-0.5">
                            {FIRM_DETAILS.contact.generalEmail}
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mt-2 pt-2 border-t border-[#E2E8F0] px-1 text-center">
                      <Link
                        to="/contact"
                        onClick={() => setConsultDropdownOpen(false)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#64748B] hover:text-[#EA580C] transition-colors"
                      >
                        <span>Or send an enquiry through our form</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <p className="mt-2 px-1 text-[10px] text-[#64748B] leading-relaxed">
                      {FIRM_DETAILS.contact.whatsappNote}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0F172A] hover:text-[#EA580C] hover:border-amber-500/50 flex items-center justify-center transition-all cursor-pointer focus-visible:outline-none shadow-sm"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <>
          <div
            className="xl:hidden fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="xl:hidden fixed top-16 sm:top-20 left-3 right-3 sm:left-6 sm:right-6 max-w-md mx-auto bg-white/98 border border-amber-500/40 rounded-3xl p-5 shadow-[0_25px_50px_rgba(15,23,42,0.2)] backdrop-blur-2xl z-50 max-h-[calc(100vh-95px)] overflow-y-auto space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
                Menu
              </span>
              <span className="text-[11px] text-[#64748B]">Skudai, Johor Bahru</span>
            </div>

            <div className="space-y-1">
              <Link
                to="/"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleLogoClick(e);
                }}
                className={`block px-4 py-2.5 rounded-full text-sm font-serif transition-colors ${
                  location.pathname === '/'
                    ? 'text-[#C2410C] bg-amber-500/10 font-bold border border-amber-500/30'
                    : 'text-[#0F172A] hover:text-[#EA580C] hover:bg-[#F1F5F9]'
                }`}
              >
                Home
              </Link>

              {NAV_ITEMS.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-full text-sm font-serif transition-colors ${
                      isItemActive(item)
                        ? 'text-[#C2410C] bg-amber-500/10 font-bold border border-amber-500/30'
                        : 'text-[#0F172A] hover:text-[#EA580C] hover:bg-[#F1F5F9]'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-5 py-1 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 rounded-lg text-xs text-[#475569] hover:text-[#EA580C] hover:bg-[#F8FAFC] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-full text-sm font-serif transition-colors ${
                  location.pathname === '/contact'
                    ? 'text-[#C2410C] bg-amber-500/10 font-bold border border-amber-500/30'
                    : 'text-[#0F172A] hover:text-[#EA580C] hover:bg-[#F1F5F9]'
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-3 border-t border-[#E2E8F0] space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs font-semibold hover:bg-emerald-100 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={mailtoUrl('Legal enquiry - Amin Firdaus Mashudi & Co.')}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-orange-50 border border-orange-300 text-orange-700 text-xs font-semibold hover:bg-orange-100 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-primary py-2.5 text-center text-xs font-semibold rounded-full block"
              >
                Book a Consultation
              </Link>

              <div className="flex items-center justify-between text-[11px] text-[#64748B] px-2 pt-1">
                <a
                  href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
                  className="flex items-center gap-1.5 hover:text-[#EA580C]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>{FIRM_DETAILS.contact.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
