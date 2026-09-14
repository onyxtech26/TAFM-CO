/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  MapPin,
  Mail,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import {
  CAREERS_INTRO,
  CAREERS_WHY_JOIN,
  CAREER_OPENINGS,
  CAREERS_HOW_TO_APPLY
} from '../data/resources';
import { FIRM_DETAILS } from '../data/firm';

const ICONS: Record<string, typeof Briefcase> = {
  Briefcase,
  GraduationCap,
  TrendingUp,
  MapPin
};

export default function CareersPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Join Us"
        title="Careers"
        intro={CAREERS_INTRO}
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Why join us */}
      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Working Here"
            title="Why Join Us"
            subtitle="A small firm where you work on real files from the start."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREERS_WHY_JOIN.map((item) => {
              const Icon = ICONS[item.icon] || Briefcase;
              return (
                <div key={item.title} className="card-luxury p-7">
                  <div className="w-11 h-11 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] mb-5 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-light">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current opportunities */}
      <section className="bg-[#D8DDE3]/80 backdrop-blur-md py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Openings"
            title="Current Opportunities"
            subtitle="Positions across our Skudai, Johor Bahru and Kuantan offices."
          />

          <div className="space-y-4">
            {CAREER_OPENINGS.map((opening, idx) => (
              <article key={opening.title} className="card-luxury p-6 sm:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-serif text-2xl font-bold text-[#EA580C]/30 shrink-0">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">
                      {opening.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed font-light">
                      {opening.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Next Step"
            title="How to Apply"
            subtitle="Send us your CV and we will be in touch if there is a fit."
          />

          <div className="card-luxury p-7 sm:p-10 space-y-6">
            <p className="text-base text-[#475569] leading-relaxed font-light">
              {CAREERS_HOW_TO_APPLY.instruction}
            </p>

            <a
              href={`mailto:${FIRM_DETAILS.contact.careersEmail}?subject=${encodeURIComponent(
                'Application – [Position] – [Preferred Office]'
              )}`}
              className="btn-primary px-6 py-3.5 text-sm inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email your application</span>
            </a>

            <div className="pt-5 border-t border-[#CBD5E1] space-y-3 text-xs text-[#64748B]">
              <p>{CAREERS_HOW_TO_APPLY.shortlistNote}</p>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-[#0F172A]">Privacy note: </strong>
                  {CAREERS_HOW_TO_APPLY.privacyNote}{' '}
                  <Link to="/privacy" className="text-[#C2410C] font-semibold hover:underline">
                    Read our Privacy Notice
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            >
              <span>Learn more about the firm first</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        heading="Interested in joining us?"
        subheading="Send your CV and a short cover letter, and tell us which office you would prefer."
      />
    </div>
  );
}
