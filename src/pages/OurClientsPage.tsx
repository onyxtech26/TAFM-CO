/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import {
  User,
  Users,
  Home,
  Briefcase,
  TrendingUp,
  ScrollText,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import { OUR_CLIENTS_LIST } from '../data/firm';

const CLIENT_ICONS: Record<string, typeof User> = {
  User,
  Users,
  Home,
  Briefcase,
  TrendingUp,
  ScrollText,
  Building2
};

export default function OurClientsPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Who We Serve"
        title="Our"
        italicAccent="Clients"
        intro="Amin Firdaus Mashudi & Co. serves a diverse spectrum of clients across Peninsular Malaysia, providing dedicated counsel, structured documentation, and determined representation tailored to each client's unique legal objectives."
        breadcrumbs={[{ label: 'Our Clients' }]}
      />

      {/* Intro section */}
      <section className="bg-transparent pt-12 pb-8 sm:pt-16 sm:pb-12 border-b border-[#CBD5E1]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
            Dedicated &amp; Accessible Counsel
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Tailored Legal Support for Every Client
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light">
            Whether you are buying your first home, navigating an estate succession, managing a commercial enterprise, or resolving a dispute, our chambers provides clear and responsive legal solutions.
          </p>
        </div>
      </section>

      {/* 7 Client Categories */}
      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {OUR_CLIENTS_LIST.map((client) => {
              const Icon = CLIENT_ICONS[client.icon] || Scale;

              return (
                <div
                  key={client.title}
                  className="card-luxury p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-4rem)/3)]"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono text-[#C2410C] font-semibold tracking-wider uppercase block mb-1">
                      {client.scope}
                    </span>

                    <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#EA580C] transition-colors">
                      {client.title}
                    </h3>

                    <p className="text-sm text-[#475569] leading-relaxed font-light mb-6">
                      {client.description}
                    </p>

                    <div className="pt-4 border-t border-[#CBD5E1]/70">
                      <span className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block mb-3">
                        How we assist:
                      </span>
                      <ul className="space-y-2">
                        {client.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs text-[#475569]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Banner */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-16 sm:py-20 border-b border-[#CBD5E1]/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
            How May We Assist You?
          </h2>
          <p className="text-base text-[#475569] max-w-2xl mx-auto font-light leading-relaxed">
            Every client matter receives individualized attention from our principal and dedicated management team. Contact us to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link to="/contact" className="btn-primary px-7 py-3 text-sm justify-center">
              <span>Schedule a consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/process" className="btn-secondary px-7 py-3 text-sm justify-center">
              <span>View our legal process</span>
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
