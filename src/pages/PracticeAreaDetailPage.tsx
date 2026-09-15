/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Phone,
  Mail,
  Clock,
  MapPin,
  Info,
  AlertTriangle
} from 'lucide-react';
import PageHero from '../components/PageHero';
import FAQAccordion from '../components/FAQAccordion';
import CTABand from '../components/CTABand';
import WhatsAppIcon from '../components/WhatsAppIcon';
import {
  PRACTICE_AREAS,
  PRACTICE_AREAS_MAP,
  getRelatedPracticeAreas,
  SLUG_TO_MATTER_TYPE
} from '../data/services';
import { FIRM_DETAILS } from '../data/firm';
import { whatsappUrl } from '../lib/contact';

export default function PracticeAreaDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !PRACTICE_AREAS_MAP[slug]) {
    return <Navigate to="/practice-areas" replace />;
  }

  const area = PRACTICE_AREAS_MAP[slug];
  const related = getRelatedPracticeAreas(slug);
  const waUrl = whatsappUrl(
    `Hello, I would like to enquire about a legal matter regarding ${area.navTitle}.`
  );

  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Practice Area"
        title={area.title}
        intro={area.intro}
        breadcrumbs={[
          { label: 'Practice Areas', path: '/practice-areas' },
          { label: area.navTitle }
        ]}
      />

      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main column */}
            <div className="lg:col-span-8 space-y-12">
              {/* How we can assist */}
              <div className="space-y-6">
                <div className="eyebrow-label">
                  <span className="w-5 h-[1px] bg-[#EA580C]" />
                  <span>Scope of Work</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] leading-snug">
                  How we can assist
                </h2>

                <div className="space-y-6">
                  {area.howWeHelp.map((group, gi) => (
                    <div key={group.heading || gi} className="card-luxury p-6 sm:p-8">
                      {group.heading && (
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A] mb-4 pb-3 border-b border-[#CBD5E1]">
                          {group.heading}
                        </h3>
                      )}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {group.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#0F172A] font-light leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {area.note && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/75 backdrop-blur-xl border-l-4 border-[#EA580C] border-y border-r border-[#CBD5E1]/70 shadow-sm flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#0F172A] leading-relaxed">{area.note}</p>
                  </div>
                )}
              </div>

              {/* Process */}
              {area.processSteps && area.processSteps.length > 0 && (
                <div className="space-y-6">
                  <div className="eyebrow-label">
                    <span className="w-5 h-[1px] bg-[#EA580C]" />
                    <span>Step by Step</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                    {area.processTitle}
                  </h2>

                  <ol className="space-y-4">
                    {area.processSteps.map((step) => (
                      <li
                        key={step.stepNumber}
                        className="card-luxury p-6 flex items-start gap-4 sm:gap-5"
                      >
                        <span className="w-9 h-9 rounded-full bg-gradient-to-br from-white to-amber-50 border border-amber-500 text-[#EA580C] flex items-center justify-center font-serif text-sm font-bold shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                          {step.stepNumber}
                        </span>
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-1.5">
                            {step.title}
                          </h3>
                          <p className="text-sm text-[#475569] leading-relaxed font-light">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Extra sections */}
              {area.extraSections?.map((section) => (
                <div key={section.title} className="space-y-5">
                  <div className="eyebrow-label">
                    <span className="w-5 h-[1px] bg-[#EA580C]" />
                    <span>Good to Know</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                    {section.title}
                  </h2>

                  {section.paragraphs?.map((p, i) => (
                    <p key={i} className="text-base text-[#475569] leading-relaxed font-light">
                      {p}
                    </p>
                  ))}

                  {section.definitions && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {section.definitions.map((def) => (
                        <div key={def.term} className="card-luxury p-6">
                          <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">
                            {def.term}
                          </h3>
                          <p className="text-sm text-[#475569] leading-relaxed font-light">
                            {def.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.items && (
                    <div
                      className={
                        section.callout
                          ? 'p-6 sm:p-8 rounded-2xl bg-amber-50/70 backdrop-blur-xl border border-amber-300 shadow-sm'
                          : 'card-luxury p-6 sm:p-8'
                      }
                    >
                      {section.callout && (
                        <div className="flex items-center gap-2 text-amber-900 font-semibold uppercase tracking-wider text-xs mb-4">
                          <AlertTriangle className="w-4 h-4 text-amber-600" />
                          <span>Act quickly</span>
                        </div>
                      )}
                      {section.ordered ? (
                        <ol className="space-y-3">
                          {section.items.map((item, i) => (
                            <li key={item} className="flex items-start gap-3">
                              <span className="w-6 h-6 rounded-full bg-white border border-amber-500 text-[#EA580C] flex items-center justify-center text-xs font-bold shrink-0">
                                {i + 1}
                              </span>
                              <span
                                className={`text-sm leading-relaxed ${
                                  section.callout ? 'text-amber-900/90' : 'text-[#475569]'
                                }`}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ol>
                      ) : (
                        <ul className="space-y-3">
                          {section.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  section.callout ? 'text-amber-600' : 'text-[#EA580C]'
                                }`}
                              />
                              <span
                                className={`text-sm leading-relaxed ${
                                  section.callout ? 'text-amber-900/90' : 'text-[#475569]'
                                }`}
                              >
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Relevant laws */}
              <div className="space-y-5">
                <div className="eyebrow-label">
                  <span className="w-5 h-[1px] bg-[#EA580C]" />
                  <span>Statutory Framework</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Relevant Malaysian laws
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {area.relevantLaws.map((law) => (
                    <div
                      key={law}
                      className="p-4 rounded-xl bg-white/75 backdrop-blur-xl border border-[#CBD5E1]/70 flex items-start gap-3 shadow-sm"
                    >
                      <BookOpen className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#0F172A] font-medium leading-snug">
                        {law}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-6">
                <div className="eyebrow-label">
                  <span className="w-5 h-[1px] bg-[#EA580C]" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                  Common questions
                </h2>
                <FAQAccordion faqs={area.faqs} />
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-[#CBD5E1] space-y-4">
                {area.ctaLead && (
                  <p className="text-base font-semibold text-[#0F172A]">{area.ctaLead}</p>
                )}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to={`/contact?matter=${encodeURIComponent(SLUG_TO_MATTER_TYPE[area.slug] || 'Other')}`}
                    className="btn-primary px-8 py-4 text-sm font-semibold tracking-wide text-center"
                  >
                    <span>{area.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary px-6 py-4 text-sm text-center"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              <div className="bg-white/80 backdrop-blur-xl border border-[#CBD5E1]/70 rounded-2xl p-6 shadow-sm">
                <h2 className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold mb-4 pb-3 border-b border-[#CBD5E1]/70">
                  All practice areas
                </h2>
                <ul className="space-y-1">
                  {PRACTICE_AREAS.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/practice-areas/${item.slug}`}
                        className={`block px-3 py-2 rounded-xl text-xs transition-colors ${
                          item.slug === area.slug
                            ? 'bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-yellow-500/15 text-[#C2410C] font-semibold border-l-2 border-[#EA580C]'
                            : 'text-[#475569] hover:text-[#0F172A] hover:bg-slate-100/70'
                        }`}
                      >
                        {item.navTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/85 backdrop-blur-xl border border-amber-500/40 rounded-2xl p-6 space-y-4 shadow-md">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C2410C] font-semibold block">
                  Speak with us
                </span>
                <h3 className="font-serif text-lg font-bold text-[#0F172A]">
                  Tell us about your matter
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  We will get back to you {FIRM_DETAILS.responseTime}. For urgent criminal matters,
                  please call us directly.
                </p>

                <div className="space-y-3 pt-2 text-xs">
                  <a
                    href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
                    className="flex items-center gap-2.5 text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#EA580C] shrink-0" />
                    <span>{FIRM_DETAILS.contact.primaryPhone}</span>
                  </a>

                  <a
                    href={`mailto:${FIRM_DETAILS.contact.generalEmail}`}
                    className="flex items-center gap-2.5 text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                    <span>{FIRM_DETAILS.contact.generalEmail}</span>
                  </a>

                  <div className="flex items-start gap-2.5 text-[#475569]">
                    <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <span>{FIRM_DETAILS.officeHours.weekdays}</span>
                  </div>

                  <div className="flex items-start gap-2.5 text-[#475569]">
                    <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <span>Skudai, Johor Bahru</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#CBD5E1]">
                  <Link to="/contact" className="w-full btn-primary py-3 text-center text-xs font-semibold">
                    Send an enquiry
                  </Link>
                </div>
              </div>

              {related.length > 0 && (
                <div className="bg-white/80 backdrop-blur-xl border border-[#CBD5E1]/70 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold mb-4 pb-3 border-b border-[#CBD5E1]/70">
                    Related areas
                  </h2>
                  <ul className="space-y-3">
                    {related.map((item) => (
                      <li key={item.slug}>
                        <Link
                          to={`/practice-areas/${item.slug}`}
                          className="group block"
                        >
                          <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#EA580C] transition-colors block">
                            {item.navTitle}
                          </span>
                          <span className="text-xs text-[#64748B] leading-snug block mt-0.5">
                            {item.cardLine}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
