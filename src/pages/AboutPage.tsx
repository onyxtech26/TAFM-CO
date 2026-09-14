/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import {
  Eye,
  Target,
  CheckCircle2,
  ShieldCheck,
  MessageSquare,
  FileCheck,
  Handshake,
  Lock,
  ArrowRight
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import {
  FIRM_DETAILS,
  CORE_VALUES,
  OUR_APPROACH,
  WHO_WE_ACT_FOR,
  FIRM_AT_A_GLANCE
} from '../data/firm';

const VALUE_ICONS: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  MessageSquare,
  FileCheck,
  Handshake,
  Lock
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="About Us"
        title="About Amin Firdaus"
        italicAccent="Mashudi & Co."
        intro="A Malaysian law firm registered with the Malaysian Bar, serving individuals, families and businesses from offices in Skudai and Johor Bahru, Johor, and in Kuantan, Pahang."
        breadcrumbs={[{ label: 'About the Firm' }]}
      />

      {/* 5.1 Introduction & 5.2 Why the firm was founded */}
      <section className="bg-transparent py-20 sm:py-28 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow-label">
                <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#EA580C] to-[#F59E0B] rounded-full" />
                <span>Introduction</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight">
                A registered Malaysian law firm{' '}
                <span className="italic font-normal gold-text-gradient">
                  in Johor and Pahang
                </span>
              </h2>

              <div className="space-y-4 text-base text-[#475569] leading-relaxed font-light">
                <p>
                  Amin Firdaus Mashudi &amp; Co. is a Malaysian law firm registered with the Malaysian
                  Bar under Section 85(1) of the Legal Profession Act 1976 (Registration No.{' '}
                  {FIRM_DETAILS.registrationNumber}). The firm was founded in 2026 by Muhammad Amin
                  Firdaus bin Mashudi, Advocate &amp; Solicitor of the High Court in Malaya, and
                  operates as a sole proprietorship.
                </p>
                <p>
                  From our main office in Skudai and our offices in Johor Bahru and Kuantan, we advise
                  and act for individuals, families, small and medium-sized businesses, and property
                  owners across Johor, Pahang and the rest of Peninsular Malaysia.
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-3">
                  Why the firm was founded
                </h3>
                <p className="text-base text-[#475569] leading-relaxed font-light">
                  {FIRM_DETAILS.foundingStory}
                </p>
              </div>
            </div>

            {/* Vision & Mission (5.4) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-luxury p-8">
                <div className="w-12 h-12 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] mb-5 shadow-sm">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold block mb-2">
                  Vision
                </span>
                <p className="text-base text-[#0F172A] leading-relaxed font-light">
                  {FIRM_DETAILS.vision}
                </p>
              </div>

              <div className="card-luxury p-8">
                <div className="w-12 h-12 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] mb-5 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold block mb-2">
                  Mission
                </span>
                <p className="text-base text-[#0F172A] leading-relaxed font-light">
                  {FIRM_DETAILS.mission}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 Our approach */}
      <section className="bg-[#D8DDE3]/80 backdrop-blur-md py-20 sm:py-28 border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Work"
            title="Our Approach"
            subtitle="Five things we do on every matter, whatever its size."
          />

          <div className="space-y-4">
            {OUR_APPROACH.map((item, idx) => (
              <div
                key={item.title}
                className="card-luxury p-6 sm:p-7 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-amber-50 border border-amber-500 text-[#EA580C] flex items-center justify-center font-serif text-sm font-bold shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5 Core values */}
      <section className="bg-transparent py-20 sm:py-28 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Core Values"
            subtitle="The standards that inform every piece of advice we give and every document we prepare."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((value) => {
              const Icon = VALUE_ICONS[value.icon] || ShieldCheck;
              return (
                <div key={value.title} className="card-luxury p-6 flex flex-col">
                  <div className="w-10 h-10 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-[#C2410C] font-semibold tracking-wider uppercase block mb-1">
                    {value.eyebrow}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.6 Who we act for & 5.7 Firm at a glance */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-20 sm:py-28 border-b border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="eyebrow-label mb-4">
                <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#EA580C] to-[#F59E0B] rounded-full" />
                <span>Our Clients</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">
                Who we act for
              </h2>
              <ul className="space-y-3">
                {WHO_WE_ACT_FOR.map((who) => (
                  <li key={who} className="flex items-start gap-3 text-sm text-[#475569]">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <span>{who}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="eyebrow-label mb-4">
                <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#EA580C] to-[#F59E0B] rounded-full" />
                <span>Firm Record</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6">
                Firm at a glance
              </h2>

              <div className="card-luxury overflow-hidden">
                <dl>
                  {FIRM_AT_A_GLANCE.map((row, idx) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4 ${
                        idx % 2 === 0 ? 'bg-white/40' : ''
                      } ${idx !== 0 ? 'border-t border-[#CBD5E1]/70' : ''}`}
                    >
                      <dt className="text-xs uppercase tracking-wider text-[#C2410C] font-semibold">
                        {row.label}
                      </dt>
                      <dd className="sm:col-span-2 text-sm text-[#0F172A]">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/our-lawyer" className="btn-primary px-6 py-3 text-sm justify-center">
                  <span>Meet our lawyer</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/practice-areas"
                  className="btn-secondary px-6 py-3 text-sm justify-center"
                >
                  <span>View practice areas</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
