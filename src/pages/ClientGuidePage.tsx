/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ClipboardList,
  Home,
  Scale,
  ShieldAlert,
  Users,
  FileText,
  UserCheck,
  Car,
  CheckCircle2
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import { CLIENT_GUIDE_INTRO, CLIENT_GUIDE_CHECKLISTS } from '../data/resources';
import { HOW_WE_WORK } from '../data/firm';

const ICONS: Record<string, typeof ClipboardList> = {
  ClipboardList,
  Home,
  Scale,
  ShieldAlert,
  Users,
  FileText,
  UserCheck,
  Car
};

export default function ClientGuidePage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Resources"
        title="Client Guide:"
        italicAccent="Preparing for Your Consultation"
        intro={CLIENT_GUIDE_INTRO}
        breadcrumbs={[{ label: 'Resources' }, { label: 'Client Guide' }]}
      />

      {/* What to expect */}
      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-20 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Before You Arrive"
            title="What to Expect"
            subtitle="How a matter moves from your first message to a written engagement."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_WE_WORK.map((step) => (
              <div key={step.stepNumber} className="card-luxury p-6">
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-white to-amber-50 border border-amber-500 text-[#EA580C] flex items-center justify-center font-serif text-sm font-bold mb-4 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                  {step.stepNumber}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklists */}
      <section className="bg-[#D8DDE3]/80 backdrop-blur-md py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Checklists"
            title="What to Bring"
            subtitle="Use the checklist that matches your matter. If you are unsure, bring everything you have."
          />

          {/* Flex-wrap + justify-center so an incomplete last row sits in the middle. */}
          <div className="flex flex-wrap justify-center gap-6">
            {CLIENT_GUIDE_CHECKLISTS.map((group) => {
              const Icon = ICONS[group.icon] || ClipboardList;
              return (
                <div key={group.id} className="card-luxury p-7 flex flex-col w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#CBD5E1]">
                    <div className="w-10 h-10 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#0F172A] leading-snug">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#475569] leading-relaxed font-light">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
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
