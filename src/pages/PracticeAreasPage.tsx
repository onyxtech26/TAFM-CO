/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageHero from '../components/PageHero';
import PracticeAreaCard from '../components/PracticeAreaCard';
import CTABand from '../components/CTABand';
import {
  PRACTICE_AREAS,
  PRACTICE_AREAS_INTRO
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

      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flex-wrap + justify-center so an incomplete last row sits in the middle. */}
          <div className="flex flex-wrap justify-center gap-6">
            {PRACTICE_AREAS.map((area) => (
              <PracticeAreaCard
                key={area.slug}
                area={area}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
