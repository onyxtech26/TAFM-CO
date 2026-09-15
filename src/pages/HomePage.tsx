/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Scale,
  Award,
  Navigation,
  Ear,
  Target
} from 'lucide-react';
import {
  FIRM_DETAILS,
  OFFICES,
  PRINCIPAL_LAWYER,
  OUR_COMMITMENTS,
  OUR_PROMISE,
  HOW_WE_WORK,
  formatOfficeAddress
} from '../data/firm';
import { PRACTICE_AREAS } from '../data/services';
import { ARTICLE_TOPICS } from '../data/resources';
import LawyerPortrait from '../components/LawyerPortrait';
import PracticeAreaCard from '../components/PracticeAreaCard';
import CTABand from '../components/CTABand';
import SectionHeading from '../components/SectionHeading';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { whatsappUrl } from '../lib/contact';

const COMMITMENT_ICONS: Record<string, typeof MessageSquare> = {
  Ear,
  Target,
  MessageSquare,
  ShieldCheck
};

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO (4.1) */}
      <section className="relative overflow-hidden bg-transparent pt-6 pb-16 sm:pt-10 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(234,88,12,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(234,88,12,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-7">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="eyebrow-label"
              >
                <span className="w-6 h-[1px] bg-[#EA580C]" />
                <span>Advocates &amp; Solicitors &bull; Johor Bahru &bull; Kuantan</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.08]"
              >
                Clear Legal Guidance for{' '}
                <span className="italic font-normal gold-text-gradient">
                  Individuals, Families and Businesses
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-light"
              >
                {FIRM_DETAILS.heroSubheadline}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <Link
                  to="/contact"
                  className="btn-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-center"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-3.5 text-sm text-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-[#475569] border-t border-[#CBD5E1]"
              >
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#EA580C]" />
                  <span>Registered with the Malaysian Bar</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Scale className="w-4 h-4 text-[#EA580C]" />
                  <span>High Court in Malaya</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Award className="w-4 h-4 text-[#EA580C]" />
                  <span>LLB (UUM) &bull; LLM (UM)</span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative max-w-md mx-auto lg:max-w-none"
              >
                <div className="absolute -inset-3 sm:-inset-4 border border-amber-500/40 rounded-xl pointer-events-none translate-x-3 translate-y-3" />

                <div className="relative rounded-xl overflow-hidden border border-amber-500/50 bg-white aspect-[4/5] shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=900"
                    alt="Statue of Lady Justice holding the scales of justice"
                    className="w-full h-full object-cover filter contrast-105 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>

                <div className="absolute -top-4 -right-4 sm:-right-6 bg-white/95 border border-amber-500/40 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg max-w-[220px]">
                  <div className="flex items-center gap-2 text-[#C2410C] text-xs font-semibold uppercase tracking-wider mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Bar Registration</span>
                  </div>
                  <p className="text-xs text-[#0F172A] font-medium leading-snug">
                    Reg. No. {FIRM_DETAILS.registrationNumber}
                  </p>
                </div>

                <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 border border-amber-500/40 backdrop-blur-md p-3.5 sm:p-4 rounded-xl shadow-lg max-w-[240px]">
                  <div className="flex items-center gap-2 text-[#C2410C] text-xs font-semibold uppercase tracking-wider mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Three Offices</span>
                  </div>
                  <p className="text-xs text-[#0F172A] font-medium leading-snug">
                    Skudai &bull; Johor Bahru &bull; Kuantan
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDENTIALS STRIP (4.2) */}
      <section className="bg-slate-200/30 backdrop-blur-2xl border-b border-[#CBD5E1]/60 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {FIRM_DETAILS.credentialsStrip.map((item) => (
              <div key={item.label} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs sm:text-sm text-[#0F172A] font-semibold leading-snug">
                    {item.label}
                  </span>
                  <span className="block text-[11px] text-[#64748B] mt-0.5">{item.detail}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#CBD5E1]/60 text-center">
            <Link
              to="/credentials"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            >
              <span>Verify our registration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. WELCOME (4.3) */}
      <section className="bg-transparent py-20 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="eyebrow-label justify-center mb-4">
            <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#EA580C] to-[#F59E0B] rounded-full" />
            <span>Welcome</span>
            <span className="w-6 h-[1.5px] bg-gradient-to-l from-[#EA580C] to-[#F59E0B] rounded-full" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight mb-3">
            Welcome to{' '}
            <span className="italic font-normal gold-text-gradient">
              Amin Firdaus Mashudi &amp; Co.
            </span>
          </h2>

          <p className="text-sm sm:text-base font-semibold text-[#EA580C] uppercase tracking-wider mb-8">
            Trusted Legal Guidance &bull; Professional Representation &bull; Practical Solutions
          </p>

          <div className="space-y-5 text-base text-[#475569] leading-relaxed font-light text-left sm:text-center">
            <p>
              Welcome to Amin Firdaus Mashudi &amp; Co., a Malaysian law firm committed to providing
              professional, reliable and client-focused legal services to individuals, families,
              businesses, property owners and corporate clients.
            </p>
            <p>
              Established in 2021 and incorporated in 2025, our firm has grown with a commitment to
              providing practical legal solutions while maintaining the highest standards of
              professionalism, integrity and confidentiality.
            </p>
            <p>
              We understand that every legal matter is different. Whether you are purchasing or
              selling a property, administering a loved one&apos;s estate, preparing important legal
              documents, managing a business transaction or facing a legal dispute, the right legal
              guidance can make a significant difference.
            </p>
            <p>
              Our approach begins with understanding your circumstances. We carefully review the
              relevant facts and documents, identify the legal issues and advise you on the available
              options. From there, we work with you to develop an appropriate legal strategy and guide
              you through each stage of the process.
            </p>
          </div>

          <div className="mt-8">
            <Link to="/about" className="btn-secondary px-6 py-3 text-sm inline-flex items-center gap-2">
              <span>Learn more about the firm</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. PRACTICE AREAS (4.4) */}
      <section className="bg-transparent py-20 sm:py-28 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Practice Areas"
            title="How We Can Help"
            subtitle="We act in a broad range of civil, criminal and non-contentious matters."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRACTICE_AREAS.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/practice-areas"
              className="btn-secondary px-8 py-3.5 text-sm inline-flex items-center gap-2"
            >
              <span>View all practice areas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (4.5) */}
      <section className="bg-[#D8DDE3]/80 backdrop-blur-md py-20 sm:py-28 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Working With Us"
            title="What to Expect"
            italicAccent="When You Contact Us"
            subtitle="Four straightforward stages, so you always know where your matter stands."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_WORK.map((step) => (
              <div key={step.stepNumber} className="card-luxury p-7 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-br from-white to-amber-50 border border-amber-500 text-[#EA580C] flex items-center justify-center font-serif text-sm font-bold shadow-[0_0_12px_rgba(245,158,11,0.25)]">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] uppercase font-medium">
                    {step.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2 leading-snug">
                  {step.title}
                </h3>

                <p className="text-sm text-[#475569] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/process"
              className="btn-primary px-8 py-3.5 text-sm inline-flex items-center gap-2"
            >
              <span>Explore our full legal process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. OUR COMMITMENTS / OUR PROMISE (4.6) */}
      <section className="bg-transparent py-20 sm:py-28 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Promise"
            title="Our Commitment"
            italicAccent="to Every Client"
            subtitle="Built around four key stages to deliver transparent, attentive and responsible representation."
          />

          <div className="max-w-3xl mx-auto text-center mb-12 -mt-4">
            <p className="text-base text-[#475569] leading-relaxed font-light">
              At <span className="font-medium text-[#0F172A] italic">Amin Firdaus Mashudi &amp; Co.</span>,
              we believe that good legal service is more than simply providing legal advice. It means
              listening to our clients, understanding their objectives, communicating clearly, and
              taking responsibility for every stage of the matter entrusted to us.
            </p>
            <p className="text-xs uppercase tracking-wider text-[#EA580C] font-semibold mt-4">
              Our commitment is built around four key stages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OUR_COMMITMENTS.map((commitment) => {
              const Icon = COMMITMENT_ICONS[commitment.icon] || CheckCircle2;
              return (
                <div key={commitment.title} className="card-luxury p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-[#C2410C] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30">
                        {commitment.step}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-3 leading-snug">
                      {commitment.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-light">
                      {commitment.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Promise Box */}
          <div className="mt-14 max-w-4xl mx-auto p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-white/90 via-amber-50/40 to-white/90 border border-amber-500/40 shadow-lg text-center relative overflow-hidden">
            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#C2410C] text-[11px] font-mono font-bold tracking-widest uppercase mb-4">
              Our Promise
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] italic mb-4 leading-snug">
              &ldquo;{OUR_PROMISE.motto}&rdquo;
            </h3>
            <p className="text-sm sm:text-base text-[#475569] font-light max-w-2xl mx-auto leading-relaxed">
              These principles guide the way we work and reflect our commitment to providing{' '}
              <span className="font-medium text-[#0F172A] italic">
                professional, practical and client-focused legal services
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOUNDER SNIPPET (4.7) */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-20 sm:py-28 border-b border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="gold-offset-frame max-w-sm mx-auto">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-amber-500/40 bg-white shadow-xl">
                  <LawyerPortrait
                    photoUrl={PRINCIPAL_LAWYER.photoUrl}
                    name={PRINCIPAL_LAWYER.name}
                    initials={PRINCIPAL_LAWYER.initials}
                  />
                  {PRINCIPAL_LAWYER.photoUrl && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span
                      className={`text-xs uppercase tracking-[0.2em] font-semibold block ${
                        PRINCIPAL_LAWYER.photoUrl ? 'text-[#F59E0B]' : 'text-[#C2410C]'
                      }`}
                    >
                      {PRINCIPAL_LAWYER.role}
                    </span>
                    <h3
                      className={`font-serif text-lg font-bold leading-snug ${
                        PRINCIPAL_LAWYER.photoUrl ? 'text-white' : 'text-[#0F172A]'
                      }`}
                    >
                      {PRINCIPAL_LAWYER.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <div className="eyebrow-label">
                <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#EA580C] to-[#F59E0B] rounded-full" />
                <span>Meet Our Founder</span>
              </div>

              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight">
                  {PRINCIPAL_LAWYER.name}
                </h2>
                <p className="text-sm text-[#475569] mt-2 font-medium">
                  {PRINCIPAL_LAWYER.designation}
                </p>
                <p className="text-sm text-[#C2410C] font-semibold mt-1">
                  LLB (Universiti Utara Malaysia) &bull; LLM (Universiti Malaya)
                </p>
              </div>

              <p className="text-base text-[#475569] leading-relaxed font-light">
                Mr. Amin Firdaus was admitted as an Advocate and Solicitor of the High Court in
                Malaya in 2022 and founded Amin Firdaus Mashudi &amp; Co. in 2026. He holds a current
                Practising Certificate entitling him to practise in the Federal Court, Court of
                Appeal, High Court in Malaya, Sessions Courts and Magistrates&apos; Courts in
                Peninsular Malaysia.
              </p>

              <div className="pt-2">
                <Link
                  to="/our-lawyer"
                  className="btn-secondary px-6 py-3 text-sm inline-flex items-center gap-2"
                >
                  <span>Read full profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OFFICES SNAPSHOT (4.8) */}
      <section className="bg-transparent py-20 sm:py-28 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Where to Find Us"
            title="Our Offices"
            subtitle="Three offices across Johor and Pahang, with online consultations also available."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <div key={office.id} className="card-luxury p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#EA580C] shrink-0" />
                    <span className="text-xs uppercase tracking-[0.18em] text-[#C2410C] font-semibold">
                      {office.isMain ? 'HQ' : 'Office'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-3 leading-snug">
                    {office.id === 'adda-heights'
                      ? 'Johor Bahru (Adda Heights)'
                      : office.isMain
                        ? 'Johor Bahru (Skudai)'
                        : office.city}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed font-light">
                    {formatOfficeAddress(office)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CBD5E1] flex items-center justify-between">
                  <a
                    href={`tel:${office.phones[0].tel}`}
                    className="text-xs text-[#0F172A] font-semibold hover:text-[#EA580C] transition-colors"
                  >
                    {office.phones[0].display}
                  </a>
                  <a
                    href={office.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get directions</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/offices"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            >
              <span>See all office details and opening hours</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. LEGAL INSIGHTS (4.9) */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-20 sm:py-24 border-b border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Resources"
            title="Legal Insights"
            subtitle="Practical explanations of everyday legal issues in Malaysia."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ARTICLE_TOPICS.slice(0, 3).map((topic) => (
              <article key={topic.title} className="card-luxury p-7 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[#C2410C] font-semibold block mb-3">
                    {topic.area}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2.5 leading-snug">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-light">
                    {topic.summary}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#CBD5E1] text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
                  In preparation
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/articles"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            >
              <span>See all upcoming topics</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA (4.10) */}
      <CTABand />
    </div>
  );
}
