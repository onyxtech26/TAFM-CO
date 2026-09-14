/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import {
  FileSearch,
  CheckCircle2,
  Scale,
  Compass,
  FileCheck2,
  Users,
  Award,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import { LEGAL_PROCESS_STEPS } from '../data/firm';

const STEP_ICONS = [
  Users,       // 1. Initial Consultation
  FileSearch,  // 2. Document & Fact Review
  Scale,       // 3. Legal Assessment
  Compass,     // 4. Strategy & Engagement
  FileCheck2,  // 5. Legal Documentation
  Users,       // 6. Negotiation / Representation
  Award,       // 7. Completion
  Clock        // 8. Client Update & Record
];

export default function LegalProcessPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Methodical Workflow"
        title="Our Legal"
        italicAccent="Process"
        intro="A structured legal process ensures clarity, precision and accountability at every stage. We guide our clients step by step from preliminary consultation through to final resolution."
        breadcrumbs={[{ label: 'Our Legal Process' }]}
      />

      {/* Intro Overview */}
      <section className="bg-transparent pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#CBD5E1]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
            Structured &amp; Transparent
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            How We Manage Your Legal Matter
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto font-light">
            Every legal matter is handled with professionalism, confidentiality and attention to detail. Below is the 8-step framework our firm follows to protect your rights and achieve commercially sensible outcomes.
          </p>
        </div>
      </section>

      {/* 8 Steps Timeline */}
      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {LEGAL_PROCESS_STEPS.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];

            return (
              <div
                key={step.stepCode}
                className="card-luxury p-8 sm:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  {/* Step Code & Icon Badge */}
                  <div className="flex sm:flex-col items-center gap-3 shrink-0">
                    <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#F59E0B] text-white font-serif text-xl font-bold flex items-center justify-center shadow-[0_4px_16px_rgba(234,88,12,0.35)]">
                      {String(step.stepNumber).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] font-mono text-[#C2410C] font-bold tracking-widest uppercase">
                      {step.stepCode}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                        {step.title}
                      </h3>
                      <p className="text-base text-[#0F172A] font-medium mt-1.5 leading-relaxed">
                        {step.summary}
                      </p>
                    </div>

                    {step.details && step.details.length > 0 && (
                      <div className="space-y-2 text-sm text-[#475569] font-light leading-relaxed">
                        {step.details.map((d, dIdx) => (
                          <p key={dIdx}>{d}</p>
                        ))}
                      </div>
                    )}

                    {step.documentsOrParties && (
                      <div className="pt-4 border-t border-[#CBD5E1]/70 mt-4">
                        <span className="text-xs uppercase tracking-wider text-[#C2410C] font-semibold block mb-3">
                          {step.documentsOrParties.label}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {step.documentsOrParties.items.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1.5 rounded-lg bg-white/80 border border-[#CBD5E1] text-xs text-[#0F172A] font-medium shadow-2xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reassurance Banner */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-16 sm:py-20 border-b border-[#CBD5E1]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl border border-amber-500/40 bg-white/90 flex items-center justify-center text-[#EA580C] mx-auto shadow-sm">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Ready to Begin?
          </h2>
          <p className="text-base text-[#475569] max-w-2xl mx-auto font-light leading-relaxed">
            Schedule an initial consultation with our chambers to discuss your matter with complete confidentiality and strategic clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm justify-center">
              <span>Book an appointment</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-secondary px-7 py-3 text-sm justify-center">
              <span>Explore legal services</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
