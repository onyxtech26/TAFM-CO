/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
        </div>
      </section>

      <CTABand />
    </div>
  );
}
