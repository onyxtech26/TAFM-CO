/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Award, Globe, Phone, Mail, Gavel, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import LawyerPortrait from '../components/LawyerPortrait';
import { PRINCIPAL_LAWYER, LAWYER_QUICK_FACTS } from '../data/firm';

export default function OurLawyerPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="The Lawyer"
        title="Our Lawyer"
        intro="Amin Firdaus Mashudi & Co. is led by its founder and sole proprietor, an Advocate & Solicitor of the High Court in Malaya."
        breadcrumbs={[{ label: 'About', path: '/about' }, { label: 'Our Lawyer' }]}
      />

      {/* 6.1 Profile card + 6.2 Verified biography */}
      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Profile card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
              <div className="card-luxury overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden bg-white border-b border-[#CBD5E1]">
                  <LawyerPortrait
                    photoUrl={PRINCIPAL_LAWYER.photoUrl}
                    name={PRINCIPAL_LAWYER.name}
                    initials={PRINCIPAL_LAWYER.initials}
                    showNote
                  />
                  {PRINCIPAL_LAWYER.photoUrl && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  )}
                </div>

                <div className="p-7 space-y-4">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#0F172A] uppercase tracking-wide leading-tight">
                      {PRINCIPAL_LAWYER.name}
                    </h2>
                    <p className="text-sm text-[#C2410C] font-semibold mt-1.5">
                      {PRINCIPAL_LAWYER.role}
                    </p>
                    <p className="text-sm text-[#475569] mt-0.5">{PRINCIPAL_LAWYER.designation}</p>
                  </div>

                  <div className="pt-4 border-t border-[#CBD5E1] space-y-2">
                    {PRINCIPAL_LAWYER.qualifications.map((q) => (
                      <div key={q.degree} className="flex items-start gap-2.5 text-xs">
                        <Award className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#0F172A] block">{q.degree}</span>
                          <span className="text-[#475569]">{q.institution}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#CBD5E1] space-y-2.5 text-xs">
                    <a
                      href={`tel:${PRINCIPAL_LAWYER.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-2.5 text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                      <span>{PRINCIPAL_LAWYER.phone}</span>
                    </a>
                    <a
                      href={`mailto:${PRINCIPAL_LAWYER.email}`}
                      className="flex items-center gap-2.5 text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                      <span>{PRINCIPAL_LAWYER.email}</span>
                    </a>
                    <div className="flex items-center gap-2.5 text-[#475569]">
                      <Globe className="w-4 h-4 text-[#EA580C] shrink-0" />
                      <span>{PRINCIPAL_LAWYER.languages.join(' · ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Biography & quick facts */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-5">
                <div className="eyebrow-label">
                  <span className="w-5 h-[1px] bg-[#EA580C]" />
                  <span>Profile</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] leading-snug">
                  Biography
                </h2>
                <div className="space-y-4 text-base text-[#475569] leading-relaxed font-light">
                  {PRINCIPAL_LAWYER.biography.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* 6.4 Quick facts */}
              <div className="card-luxury overflow-hidden">
                <div className="px-6 py-4 border-b border-[#CBD5E1] bg-white/50">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
                    Quick facts
                  </h3>
                </div>
                <dl>
                  {LAWYER_QUICK_FACTS.map((fact, idx) => (
                    <div
                      key={fact.label}
                      className={`grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-6 py-4 ${
                        idx !== 0 ? 'border-t border-[#CBD5E1]/70' : ''
                      }`}
                    >
                      <dt className="text-xs uppercase tracking-wider text-[#C2410C] font-semibold">
                        {fact.label}
                      </dt>
                      <dd className="sm:col-span-2 text-sm text-[#0F172A] leading-relaxed">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Courts */}
              <div className="space-y-4">
                <div className="eyebrow-label">
                  <span className="w-5 h-[1px] bg-[#EA580C]" />
                  <span>Rights of Audience</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Courts he is entitled to practise in
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PRINCIPAL_LAWYER.courts.map((court) => (
                    <div
                      key={court}
                      className="p-4 rounded-xl bg-white/75 backdrop-blur-xl border border-[#CBD5E1]/70 flex items-start gap-3 shadow-sm"
                    >
                      <Gavel className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0F172A] font-medium leading-snug">{court}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#64748B] italic">
                  As stated on his Practising Certificate for 2026, valid from 1 January to 31
                  December 2026.
                </p>
              </div>

              {/* Areas of practice */}
              <div className="space-y-4">
                <div className="eyebrow-label">
                  <span className="w-5 h-[1px] bg-[#EA580C]" />
                  <span>Practice</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Areas of practice
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PRINCIPAL_LAWYER.areasOfFocus.map((area) => (
                    <li key={area} className="flex items-start gap-2.5 text-sm text-[#475569]">
                      <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#CBD5E1] flex flex-col sm:flex-row gap-3">
                <Link to="/credentials" className="btn-primary px-6 py-3.5 text-sm justify-center">
                  <span>Registration &amp; credentials</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/practice-areas"
                  className="btn-secondary px-6 py-3.5 text-sm justify-center"
                >
                  <span>View practice areas</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team note (6.5) */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-16 border-b border-[#CBD5E1]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Our Team"
            title="A Growing Practice"
            subtitle="The firm is currently led by its sole proprietor. As lawyers and staff join, their profiles will be published here."
          />
          <Link
            to="/careers"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
          >
            <span>See current opportunities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
