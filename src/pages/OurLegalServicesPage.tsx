/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import {
  Home,
  FileText,
  Scale,
  ShieldAlert,
  Briefcase,
  Receipt,
  ScrollText,
  CreditCard,
  MessageSquare,
  Key,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import PageHero from '../components/PageHero';
import CTABand from '../components/CTABand';
import { OUR_LEGAL_SERVICES } from '../data/firm';
import { whatsappUrl } from '../lib/contact';

const SERVICE_ICONS: Record<string, typeof Home> = {
  Home,
  FileText,
  Scale,
  ShieldAlert,
  Briefcase,
  Receipt,
  ScrollText,
  CreditCard,
  MessageSquare,
  Key
};

export default function OurLegalServicesPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Areas of Practice"
        title="Our Legal"
        italicAccent="Services"
        intro="Amin Firdaus Mashudi & Co. provides comprehensive legal representation, advisory services and tailored legal solutions across 10 core practice disciplines for individuals, families, businesses, property owners, investors and corporate clients."
        breadcrumbs={[{ label: 'Our Legal Services' }]}
      />

      {/* Services Navigation Pills */}
      <section className="bg-white/60 backdrop-blur-md py-6 border-b border-[#CBD5E1] sticky top-16 z-30 shadow-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            <span className="font-semibold text-[#C2410C] shrink-0 uppercase tracking-wider text-[11px] mr-2">
              Quick Jump:
            </span>
            {OUR_LEGAL_SERVICES.map((s) => (
              <a
                key={s.number}
                href={`#service-${s.number}`}
                className="px-3 py-1.5 rounded-full bg-white/80 border border-[#CBD5E1] hover:border-amber-500 hover:text-[#EA580C] transition-colors shrink-0 font-medium text-[#0F172A]"
              >
                {s.number}. {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List (01 to 10) */}
      <section className="bg-transparent pt-12 pb-24 sm:pt-16 sm:pb-32 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {OUR_LEGAL_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.icon] || Scale;

            return (
              <article
                key={service.number}
                id={`service-${service.number}`}
                className="card-luxury p-8 sm:p-12 scroll-mt-28 relative overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number, Title, Badge, Icon */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EA580C] via-[#F97316] to-[#F59E0B] text-white font-serif text-2xl font-bold flex items-center justify-center shadow-[0_4px_16px_rgba(234,88,12,0.35)] shrink-0">
                        {service.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl border border-amber-500/40 bg-white/90 flex items-center justify-center text-[#EA580C] shadow-sm shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-[#C2410C] font-semibold tracking-wider uppercase block mb-1.5">
                        Practice Discipline {service.number}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] leading-snug">
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#C2410C] font-medium mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="pt-2">
                      <a
                        href={whatsappUrl(
                          `Hello, I would like to enquire about your services in ${service.title}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F172A] hover:text-[#EA580C] transition-colors py-2 px-3.5 rounded-xl bg-white/80 border border-[#CBD5E1] shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                        <span>Enquire via WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Paragraph narrative */}
                  <div className="lg:col-span-8 space-y-4 text-base text-[#334155] leading-relaxed font-light border-t lg:border-t-0 lg:border-l border-[#CBD5E1]/80 pt-6 lg:pt-0 lg:pl-10">
                    {service.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-[#334155] leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTABand />
    </div>
  );
}
