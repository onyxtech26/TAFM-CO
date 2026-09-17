/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { Award, Globe, Phone, Mail, Gavel, ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import LawyerPortrait from '../components/LawyerPortrait';
import { PRINCIPAL_LAWYER, LAWYER_QUICK_FACTS, LEADERSHIP_TEAM } from '../data/firm';

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
                <div className="space-y-4 text-base text-[#475569] leading-relaxed font-light text-justify">
                  {PRINCIPAL_LAWYER.biography.map((paragraph, idx) => (
                    <p key={idx} className="text-justify">{paragraph}</p>
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

      {/* 2. Operations Manager & Management Lead */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-20 sm:py-24 border-b border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Key Personnel"
            title="Firm Operations &"
            italicAccent="Management Lead"
            subtitle="Professional management ensuring efficient case progression, systematic administration, and exceptional client coordination."
          />

          <div className="max-w-4xl mx-auto">
            {LEADERSHIP_TEAM.filter((m) => m.id !== 'founder-principal').map((member) => (
              <div key={member.id} className="card-luxury p-7 sm:p-9 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-9 items-start">
                  <div className="md:col-span-4 flex flex-col items-center text-center">
                    {member.photoUrl && (
                      <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-b from-white/95 via-amber-50/40 to-slate-100/70 border border-amber-500/30 shadow-md overflow-hidden flex items-end justify-center mb-4">
                        <img
                          src={member.photoUrl}
                          alt={member.name}
                          className="w-full h-full object-contain object-bottom scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <span className="text-[11px] font-mono text-[#C2410C] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 inline-block mb-2">
                      {member.badge}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#EA580C] font-bold mt-1">
                      {member.role}
                    </p>
                    {member.motto && (
                      <div className="mt-5 sm:mt-6 w-full flex justify-center">
                        <div className="inline-flex items-center justify-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-500/35 shadow-sm text-center">
                          <span className="font-serif italic text-sm sm:text-base font-bold text-[#C2410C] tracking-wide text-center">
                            &ldquo;{member.motto}&rdquo;
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-8 space-y-4">
                    <p className="text-sm text-[#475569] leading-relaxed font-light">
                      {member.description}
                    </p>

                    <p className="text-sm text-[#475569] leading-relaxed font-light">
                      The combination of legal knowledge, operational experience and property intelligence enables a more structured approach to matters where legal issues and complex property information intersect.{' '}
                      <a
                        href="https://conglomerate4u.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-[#EA580C] hover:text-[#C2410C] transition-colors underline decoration-amber-500/40 hover:decoration-amber-500 break-all"
                      >
                        <span>https://conglomerate4u.com/</span>
                        <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </p>

                    {member.responsibilities && (
                      <div className="pt-4 border-t border-[#CBD5E1]/70">
                        <span className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block mb-3">
                          Key Responsibilities:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {member.responsibilities.map((resp) => (
                            <li key={resp} className="flex items-start gap-2 text-xs text-[#475569]">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] shrink-0 mt-1.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {member.note && (
                      <p className="mt-4 text-xs italic text-[#64748B] border-l-2 border-amber-500/40 pl-3">
                        {member.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
