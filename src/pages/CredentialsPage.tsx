/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Building2,
  ScrollText,
  BadgeCheck,
  Receipt,
  AlertTriangle,
  ExternalLink,
  Phone,
  Mail,
  Info
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import {
  CREDENTIAL_RECORDS,
  VERIFICATION_STEPS,
  VERIFICATION_CONTACT,
  FRAUD_WARNING,
  CREDENTIALS_FOOTNOTE
} from '../data/firm';

const RECORD_ICONS: Record<string, typeof Building2> = {
  Building2,
  ScrollText,
  BadgeCheck,
  Receipt
};

export default function CredentialsPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Transparency"
        title="Registration"
        italicAccent="& Credentials"
        intro="You should always be able to confirm that a law firm and its lawyer are properly registered and entitled to practise. This page sets out our registration details for 2026 and explains how you can verify them independently."
        breadcrumbs={[{ label: 'About', path: '/about' }, { label: 'Registration & Credentials' }]}
      />

      {/* Credential records (9.1 – 9.5) */}
      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {CREDENTIAL_RECORDS.map((record) => {
            const Icon = RECORD_ICONS[record.icon] || Building2;
            return (
              <article key={record.id} className="card-luxury overflow-hidden">
                <header className="px-6 sm:px-8 py-5 border-b border-[#CBD5E1] bg-white/50 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] shrink-0 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                    {record.title}
                  </h2>
                </header>

                <dl>
                  {record.rows.map((row, idx) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 px-6 sm:px-8 py-4 ${
                        idx % 2 === 0 ? 'bg-white/30' : ''
                      } ${idx !== 0 ? 'border-t border-[#CBD5E1]/60' : ''}`}
                    >
                      <dt className="text-xs uppercase tracking-wider text-[#C2410C] font-semibold">
                        {row.label}
                      </dt>
                      <dd className="sm:col-span-2 text-sm text-[#0F172A] leading-relaxed">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {record.note && (
                  <div className="px-6 sm:px-8 py-5 border-t border-[#CBD5E1] bg-slate-50/70 flex items-start gap-3">
                    <Info className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-light">
                      {record.note}
                    </p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* 9.7 How to verify */}
      <section className="bg-[#D8DDE3]/80 backdrop-blur-md py-20 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Independent Check"
            title="How to Verify"
            italicAccent="Our Registration"
            subtitle="You can confirm our registration yourself at any time."
          />

          <div className="space-y-4">
            {VERIFICATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="card-luxury p-6 flex items-start gap-4 sm:gap-6"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-amber-50 border border-amber-500 text-[#EA580C] flex items-center justify-center font-serif text-sm font-bold shrink-0 shadow-[0_0_12px_rgba(245,158,11,0.2)]">
                  {step.step}
                </span>
                <div className="flex-1">
                  <p className="text-sm sm:text-base text-[#0F172A] leading-relaxed">{step.text}</p>
                  {step.linkUrl && (
                    <a
                      href={step.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
                    >
                      <span>Open the Malaysian Bar Legal Directory</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-luxury p-6 sm:p-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold mb-4">
              Contact the Malaysian Bar directly
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
              <a
                href={`tel:${VERIFICATION_CONTACT.phoneTel}`}
                className="flex items-center gap-2.5 text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#EA580C]" />
                <span>{VERIFICATION_CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${VERIFICATION_CONTACT.email}`}
                className="flex items-center gap-2.5 text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#EA580C]" />
                <span>{VERIFICATION_CONTACT.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fraud warning */}
      <section className="bg-transparent py-16 sm:py-20 border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 backdrop-blur-xl border border-amber-300 shadow-sm">
            <div className="flex items-center gap-2.5 text-amber-900 font-semibold uppercase tracking-wider text-xs mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Why verification matters</span>
            </div>
            <p className="text-sm text-amber-900/90 leading-relaxed">{FRAUD_WARNING}</p>
          </div>

          <p className="mt-6 text-xs text-[#64748B] italic text-center">{CREDENTIALS_FOOTNOTE}</p>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
