/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import FAQAccordion from '../components/FAQAccordion';
import CTABand from '../components/CTABand';
import { FAQ_GROUPS } from '../data/resources';

export default function FaqPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Resources"
        title="Frequently Asked"
        italicAccent="Questions"
        intro="Answers to the questions we are asked most often — about appointments, fees, confidentiality, where we practise, and how to check that a firm is genuine."
        breadcrumbs={[{ label: 'Resources' }, { label: 'FAQ' }]}
      />

      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {FAQ_GROUPS.map((group) => (
            <div key={group.id} id={group.id} className="space-y-5 scroll-mt-28">
              <div className="eyebrow-label">
                <span className="w-5 h-[1px] bg-[#EA580C]" />
                <span>{group.title}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A]">
                {group.title}
              </h2>
              <FAQAccordion faqs={group.items} />
            </div>
          ))}

          <div className="p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#CBD5E1] shadow-sm text-center">
            <h3 className="font-serif text-xl font-bold text-[#0F172A] mb-2">
              Still have a question?
            </h3>
            <p className="text-sm text-[#475569] mb-5">
              Tell us briefly about your matter and we will let you know whether we can assist.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary px-6 py-3 text-sm">
                <span>Contact us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/client-guide" className="btn-secondary px-6 py-3 text-sm">
                <span>Read the Client Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
