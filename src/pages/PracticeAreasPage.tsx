/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import PracticeAreaCard from '../components/PracticeAreaCard';
import CTABand from '../components/CTABand';
import {
  PRACTICE_AREAS,
  PRACTICE_AREAS_INTRO,
  PRACTICE_AREAS_FOOTNOTE
} from '../data/services';

export default function PracticeAreasPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="What We Do"
        title="Practice Areas"
        intro={PRACTICE_AREAS_INTRO}
        breadcrumbs={[{ label: 'Practice Areas' }]}
      />

      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center p-6 sm:p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-[#CBD5E1] shadow-sm">
            <p className="text-sm text-[#475569] leading-relaxed mb-4">
              {PRACTICE_AREAS_FOOTNOTE}
            </p>
            <Link to="/contact" className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2">
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
