/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import CTABand from '../components/CTABand';
import { ARTICLES_INTRO, ARTICLE_TOPICS } from '../data/resources';

export default function ArticlesPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Resources"
        title="Legal Insights"
        intro={ARTICLES_INTRO}
        breadcrumbs={[{ label: 'Resources' }, { label: 'Articles' }]}
      />

      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 p-5 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#CBD5E1] shadow-sm flex items-start gap-3">
            <BookOpen className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
            <p className="text-sm text-[#475569] leading-relaxed">
              These articles are being prepared and will be published here in English and Bahasa
              Malaysia. In the meantime, our{' '}
              <Link to="/faq" className="text-[#C2410C] font-semibold hover:underline">
                FAQ
              </Link>{' '}
              and{' '}
              <Link to="/client-guide" className="text-[#C2410C] font-semibold hover:underline">
                Client Guide
              </Link>{' '}
              answer many of the same questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLE_TOPICS.map((topic, idx) => (
              <article key={topic.title} className="card-luxury p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-[#C2410C] font-semibold">
                      {topic.area}
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#EA580C]/25">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="font-serif text-lg font-bold text-[#0F172A] mb-2.5 leading-snug">
                    {topic.title}
                  </h2>
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

          <div className="mt-12 text-center">
            <Link to="/contact" className="btn-secondary px-8 py-3.5 text-sm inline-flex items-center gap-2">
              <span>Ask us about your matter instead</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
