/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ShieldCheck,
  Users,
  Lightbulb,
  CheckCircle2,
  Layers,
  Eye,
  Lock,
  CheckSquare,
  Target,
  HeartHandshake,
  Award,
  Scale
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import { WHY_CHOOSE_US_PILLARS, PROFESSIONAL_VALUES } from '../data/firm';

const PILLAR_ICONS: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Users,
  Lightbulb,
  CheckCircle2,
  Layers,
  Eye
};

const VALUE_ICONS: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Lock,
  CheckSquare,
  Target,
  HeartHandshake,
  Award
};

export default function WhyChooseUsPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Firm Distinction"
        title="Why Choose"
        italicAccent="Amin Firdaus Mashudi & Co."
        intro="We combine rigorous legal competence, structured modern case progression, and accessible, responsive client communication to protect what matters most to you."
        breadcrumbs={[{ label: 'Why Choose Us' }]}
      />

      {/* 5. Core Pillars */}
      <section className="bg-transparent pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Distinctions"
            title="A Legal Practice Built on"
            italicAccent="Integrity & Precision"
            subtitle="Six fundamental reasons why individuals, families, property owners and businesses entrust their legal affairs to our chambers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[pillar.icon] || ShieldCheck;

              return (
                <div
                  key={pillar.title}
                  className="card-luxury p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-[#C2410C] font-semibold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#EA580C] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Professional Values */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-20 sm:py-28 border-b border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Guiding Principles"
            title="Our Professional"
            italicAccent="Values"
            subtitle="The professional standards that inform every piece of advice we give and every document we prepare."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROFESSIONAL_VALUES.map((val) => {
              const Icon = VALUE_ICONS[val.icon] || ShieldCheck;

              return (
                <div key={val.title} className="card-luxury p-7 sm:p-8 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl border border-amber-500/40 bg-white/90 flex items-center justify-center text-[#EA580C] shrink-0 shadow-sm mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0F172A] mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
