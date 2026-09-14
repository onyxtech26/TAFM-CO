/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useTransform
} from 'motion/react';
import {
  Users,
  FileSearch,
  Scale,
  Compass,
  FileCheck2,
  Award,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ArrowDown
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
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  // 1:1 direct scroll binding to ensure silky smooth performance without lag or rubber-banding
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  // Moves the track horizontally as the user scrolls vertically through the container
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ['0vw', `-${(LEGAL_PROCESS_STEPS.length - 1) * 100}vw`]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      const stepIndex = Math.min(
        LEGAL_PROCESS_STEPS.length - 1,
        Math.max(0, Math.round(latest * (LEGAL_PROCESS_STEPS.length - 1)))
      );
      setActiveStep(stepIndex);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToStep = (index: number) => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetTop = scrollTop + rect.top;
    const scrollDistance = targetRef.current.offsetHeight - window.innerHeight;
    const targetScroll = targetTop + (index / (LEGAL_PROCESS_STEPS.length - 1)) * scrollDistance;
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const scrollToProcessGallery = () => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.scrollTo({
      top: scrollTop + rect.top + 5,
      behavior: 'smooth'
    });
  };

  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Methodical Workflow"
        title="Our Legal"
        italicAccent="Process"
        intro="A structured legal process ensures clarity, precision and accountability at every stage. We guide our clients step by step from preliminary consultation through to final resolution."
        breadcrumbs={[{ label: 'Our Legal Process' }]}
      />

      {/* Intro Overview Section */}
      <section className="bg-transparent pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-[#CBD5E1]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
            Structured &amp; Transparent Framework
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            How We Manage Your Legal Matter
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto font-light">
            Every legal matter is handled with professionalism, confidentiality and attention to detail.
            Scroll down to walk through our 8-stage motion workflow from initial consultation to final resolution.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={scrollToProcessGallery}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/85 border border-amber-500/40 text-xs font-mono font-semibold text-[#C2410C] hover:bg-amber-50 hover:text-[#EA580C] shadow-sm transition-all cursor-pointer"
            >
              <span>Explore 8-Stage Motion Workflow</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* 8-Step Motion Graphic Scroll Section */}
      <section ref={targetRef} className="relative h-[450vh] bg-transparent">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 pb-6 sm:pb-8">
          {/* Top Sticky Header */}
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between shrink-0 z-20">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#C2410C] uppercase">
                Workflow Gallery
              </span>
              <span className="hidden sm:inline text-[#CBD5E1]">|</span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#0F172A] hidden sm:inline">
                Stage {activeStep + 1} of {LEGAL_PROCESS_STEPS.length}: {LEGAL_PROCESS_STEPS[activeStep]?.title}
              </span>
            </div>

            {/* Scroll Indicator Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#CBD5E1] shadow-xs">
              <span className="text-[#EA580C] font-bold">#{String(activeStep + 1).padStart(3, '0')}</span>
              <span>/ #008</span>
            </div>
          </div>

          {/* Horizontal Motion Track */}
          <div className="flex-1 flex items-center overflow-hidden my-auto w-full">
            <motion.div style={{ x }} className="flex h-full items-center will-change-transform">
              {LEGAL_PROCESS_STEPS.map((step, idx) => {
                const Icon = STEP_ICONS[idx % STEP_ICONS.length];
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.stepCode}
                    className="w-screen h-full flex items-center justify-center px-4 sm:px-8 md:px-12 shrink-0 select-none"
                  >
                    <div
                      className={`card-luxury relative p-6 sm:p-8 md:p-10 w-full max-w-5xl rounded-3xl border transition-all duration-300 shadow-xl overflow-hidden ${
                        isActive
                          ? 'bg-white/95 border-amber-500/60 ring-2 ring-amber-500/20 shadow-[0_20px_50px_rgba(15,23,42,0.12),0_0_25px_rgba(245,158,11,0.18)]'
                          : 'bg-white/85 border-[#CBD5E1]/80 shadow-md'
                      }`}
                    >
                      {/* Giant Watermark Numeral echoing reference #001 */}
                      <div
                        aria-hidden="true"
                        className="absolute right-4 bottom-2 sm:right-8 sm:bottom-4 font-mono text-[90px] sm:text-[140px] md:text-[180px] font-black text-[#EA580C]/[0.06] select-none pointer-events-none tracking-tighter leading-none"
                      >
                        #{String(step.stepNumber).padStart(3, '0')}
                      </div>

                      {/* 2-Column Balanced Widescreen Layout */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center relative z-10">
                        {/* Left Column: Stage code, Icon, Title, Summary */}
                        <div className="md:col-span-5 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#F59E0B] text-white flex items-center justify-center shrink-0 shadow-[0_6px_18px_rgba(234,88,12,0.35)]">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-[10px] sm:text-xs font-mono font-bold text-[#C2410C] tracking-wider uppercase">
                                STAGE {String(step.stepNumber).padStart(2, '0')} OF 08
                              </span>
                              <span className="text-[11px] text-[#64748B] font-mono tracking-widest uppercase block mt-0.5 font-semibold">
                                {step.stepCode}
                              </span>
                            </div>
                          </div>

                          <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
                            {step.title}
                          </h3>

                          <p className="text-sm sm:text-base text-[#0F172A] font-medium leading-relaxed border-l-2 border-[#EA580C] pl-3 py-1 bg-amber-50/50 rounded-r-xl">
                            {step.summary}
                          </p>
                        </div>

                        {/* Right Column: In-depth details, Documents/Parties badges, Next preview */}
                        <div className="md:col-span-7 space-y-4 md:border-l md:border-[#CBD5E1]/70 md:pl-8">
                          {step.details && step.details.length > 0 && (
                            <div className="space-y-2 text-xs sm:text-sm text-[#475569] font-light leading-relaxed">
                              {step.details.map((d, dIdx) => (
                                <p key={dIdx}>{d}</p>
                              ))}
                            </div>
                          )}

                          {step.documentsOrParties && (
                            <div className="pt-3 border-t border-[#CBD5E1]/60">
                              <span className="text-[11px] uppercase tracking-wider text-[#C2410C] font-semibold block mb-2 font-mono">
                                {step.documentsOrParties.label}
                              </span>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {step.documentsOrParties.items.map((item) => (
                                  <span
                                    key={item}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/95 border border-[#CBD5E1] text-[11px] sm:text-xs text-[#0F172A] font-medium shadow-2xs"
                                  >
                                    <CheckCircle2 className="w-3 h-3 text-[#EA580C] shrink-0" />
                                    <span>{item}</span>
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Step Flow Footer */}
                          <div className="pt-3 border-t border-[#CBD5E1]/60 flex items-center justify-between text-xs text-[#64748B]">
                            <span>
                              {idx > 0 ? (
                                <button
                                  type="button"
                                  onClick={() => scrollToStep(idx - 1)}
                                  className="hover:text-[#EA580C] transition-colors cursor-pointer"
                                >
                                  ← Prev Stage
                                </button>
                              ) : (
                                <span className="text-amber-600 font-medium">Initial Intake</span>
                              )}
                            </span>
                            <span>
                              {idx < LEGAL_PROCESS_STEPS.length - 1 ? (
                                <button
                                  type="button"
                                  onClick={() => scrollToStep(idx + 1)}
                                  className="text-[#C2410C] hover:text-[#EA580C] font-semibold transition-colors cursor-pointer flex items-center gap-1"
                                >
                                  <span>Next: {LEGAL_PROCESS_STEPS[idx + 1].title}</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              ) : (
                                <span className="text-[#059669] font-semibold flex items-center gap-1">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                                  <span>Workflow Complete</span>
                                </span>
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Bottom Sticky Controller & Progress Bar */}
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 shrink-0 z-20 space-y-2.5">
            {/* Continuous Progress Bar */}
            <div className="h-1.5 w-full bg-slate-300/70 rounded-full overflow-hidden relative shadow-inner">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="absolute top-0 left-0 bottom-0 w-full bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#F59E0B] origin-left rounded-full shadow-[0_0_12px_rgba(234,88,12,0.4)]"
              />
            </div>

            {/* Clickable Step Navigation Pills */}
            <div className="flex items-center justify-between gap-1 sm:gap-2">
              {LEGAL_PROCESS_STEPS.map((s, idx) => {
                const isActive = activeStep === idx;
                const isCompleted = activeStep > idx;

                return (
                  <button
                    key={s.stepCode}
                    type="button"
                    onClick={() => scrollToStep(idx)}
                    title={`Stage ${idx + 1}: ${s.title}`}
                    className={`group cursor-pointer flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-all text-[11px] sm:text-xs font-mono font-semibold ${
                      isActive
                        ? 'bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white shadow-[0_2px_10px_rgba(234,88,12,0.35)] scale-105'
                        : isCompleted
                        ? 'bg-amber-100/80 text-[#C2410C] hover:bg-amber-100'
                        : 'bg-white/70 text-[#64748B] hover:bg-white/95 border border-[#CBD5E1]/60'
                    }`}
                  >
                    <span>{String(s.stepNumber).padStart(2, '0')}</span>
                    <span className="hidden md:inline font-sans font-normal truncate max-w-[85px]">
                      {s.title.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Complete Workflow Overview Grid */}
      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quick Reference"
            title="All 8 Stages at a Glance"
            subtitle="A comprehensive snapshot of our full case management framework."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {LEGAL_PROCESS_STEPS.map((step, idx) => {
              const Icon = STEP_ICONS[idx % STEP_ICONS.length];
              return (
                <div
                  key={step.stepCode}
                  className="card-luxury p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-white via-amber-50/50 to-white border border-amber-500/40 flex items-center justify-center text-[#EA580C] shadow-xs group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-[11px] font-mono text-[#C2410C] font-bold">
                        {step.stepCode}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2 group-hover:text-[#EA580C] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed font-light">
                      {step.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#CBD5E1]/60 flex items-center justify-between text-[11px] text-[#64748B]">
                    <span>Stage {step.stepNumber} of 8</span>
                    <button
                      type="button"
                      onClick={() => scrollToStep(idx)}
                      className="text-[#C2410C] hover:text-[#EA580C] font-semibold cursor-pointer flex items-center gap-1"
                    >
                      <span>View</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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

