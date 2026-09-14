/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Navigation, Video, ArrowRight, Star } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import CTABand from '../components/CTABand';
import { FIRM_DETAILS, OFFICES, ONLINE_CONSULTATION_NOTE } from '../data/firm';

function mapEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

export default function OfficesPage() {
  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Visit Us"
        title="Our Offices"
        intro="We serve clients from three offices in Johor and Pahang. Consultations are by appointment so that a lawyer is available to meet you. Online consultations by video call are also available."
        breadcrumbs={[{ label: 'Our Offices' }]}
      />

      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {OFFICES.map((office, idx) => (
            <article
              key={office.id}
              id={office.id}
              className="card-luxury overflow-hidden scroll-mt-28"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Details */}
                <div className="p-7 sm:p-10 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold">
                        Office {idx + 1} of {OFFICES.length}
                      </span>
                      {office.isMain && (
                        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-semibold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3" />
                          Main Office
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] leading-snug">
                      {office.name}
                    </h2>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                      <address className="not-italic text-[#475569] leading-relaxed">
                        {office.addressLines.map((line) => (
                          <span key={line} className="block">
                            {line},
                          </span>
                        ))}
                        <span className="block">
                          {office.postcode} {office.city}, {office.state}
                        </span>
                      </address>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                      <div className="space-y-1">
                        {office.phones.map((phone) => (
                          <a
                            key={phone.tel}
                            href={`tel:${phone.tel}`}
                            className="block text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors"
                          >
                            {phone.display}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#EA580C] shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-[#0F172A] hover:text-[#EA580C] font-semibold transition-colors break-all"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                      <div className="text-[#475569]">
                        <span className="block text-[#0F172A] font-medium">
                          {FIRM_DETAILS.officeHours.weekdays}
                        </span>
                        <span className="block text-xs mt-0.5">
                          {FIRM_DETAILS.officeHours.weekend}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 border-t border-[#CBD5E1] flex flex-col sm:flex-row gap-3">
                    <a
                      href={office.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-5 py-3 text-xs font-semibold justify-center"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>
                    <a
                      href={office.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-5 py-3 text-xs justify-center"
                    >
                      <span>Open in Waze</span>
                    </a>
                  </div>

                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {FIRM_DETAILS.officeHours.note}
                  </p>
                </div>

                {/* Map */}
                <div className="relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-[#CBD5E1] bg-slate-100">
                  <iframe
                    title={`Map of ${office.name}`}
                    src={mapEmbedUrl(
                      `${office.addressLines.join(', ')}, ${office.postcode} ${office.city}, ${office.state}, Malaysia`
                    )}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 8.4 Online consultations */}
      <section className="bg-[#D8DDE3]/80 backdrop-blur-md py-16 sm:py-20 border-b border-[#CBD5E1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Anywhere in Malaysia"
            title="Online Consultations"
            subtitle="Meet us by video call when visiting an office is not convenient."
          />

          <div className="card-luxury p-7 sm:p-9 flex flex-col sm:flex-row items-start gap-5">
            <div className="w-12 h-12 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] shrink-0 shadow-sm">
              <Video className="w-6 h-6" />
            </div>
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                {ONLINE_CONSULTATION_NOTE}
              </p>
              <Link to="/contact" className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2">
                <span>Book an appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </div>
  );
}
