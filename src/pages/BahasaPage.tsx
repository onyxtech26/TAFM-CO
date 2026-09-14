/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Clock, Languages } from 'lucide-react';
import CTABand from '../components/CTABand';
import SectionHeading from '../components/SectionHeading';
import WhatsAppIcon from '../components/WhatsAppIcon';
import {
  BM_HERO,
  BM_CREDENTIALS,
  BM_WELCOME,
  BM_PRACTICE_AREAS,
  BM_PROCESS,
  BM_COMMITMENTS,
  BM_FOUNDER,
  BM_DISCLAIMER
} from '../data/bahasa';
import { FIRM_DETAILS, OFFICES, formatOfficeAddress } from '../data/firm';
import { whatsappUrl } from '../lib/contact';

export default function BahasaPage() {
  return (
    <div className="space-y-0">
      {/* Hero */}
      <section className="relative overflow-hidden bg-transparent pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle,rgba(234,88,12,0.12)_0%,transparent_70%)] pointer-events-none blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#CBD5E1] bg-white/80 text-xs font-semibold text-[#475569] hover:text-[#EA580C] hover:border-amber-500/50 transition-colors"
            >
              <Languages className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Read this page in English</span>
            </Link>
          </div>

          <div className="eyebrow-label justify-center mb-4">
            <span className="w-6 h-[1px] bg-[#EA580C]" />
            <span>{BM_HERO.eyebrow}</span>
            <span className="w-6 h-[1px] bg-[#EA580C]" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.12] mb-6">
            Nasihat Guaman yang Jelas untuk{' '}
            <span className="italic font-normal gold-text-gradient">
              Individu, Keluarga dan Perniagaan
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#475569] leading-relaxed font-light max-w-2xl mx-auto">
            {BM_HERO.subheadline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto btn-primary px-7 py-3.5 text-sm font-semibold">
              <span>{BM_HERO.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-secondary px-6 py-3.5 text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{BM_HERO.secondaryCta}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Jalur kelayakan */}
      <section className="bg-slate-200/30 backdrop-blur-2xl border-b border-[#CBD5E1]/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BM_CREDENTIALS.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span className="text-xs text-[#0F172A] font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selamat datang */}
      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-6 text-center">
            {BM_WELCOME.heading}
          </h2>
          <div className="space-y-5 text-base text-[#475569] leading-relaxed font-light">
            {BM_WELCOME.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Bidang amalan */}
      <section className="bg-[#D8DDE3]/80 backdrop-blur-md py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Perkhidmatan"
            title="Bidang Amalan"
            subtitle="Kami bertindak dalam pelbagai urusan sivil, jenayah dan bukan pertikaian."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BM_PRACTICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                to={`/practice-areas/${area.slug}`}
                className="group card-luxury p-6 flex flex-col"
              >
                <span className="text-2xl mb-4" aria-hidden="true">
                  {area.emoji}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#0F172A] group-hover:text-[#EA580C] transition-colors mb-2 leading-snug">
                  {area.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed font-light">
                  {area.description}
                </p>
                <span className="mt-4 pt-3 border-t border-[#CBD5E1] text-[11px] text-[#C2410C] font-semibold uppercase tracking-wider">
                  Ketahui lanjut (English)
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apa yang perlu dijangka */}
      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Proses Kami"
            title={BM_PROCESS.heading}
            subtitle="Empat langkah mudah, supaya anda sentiasa tahu kedudukan urusan anda."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BM_PROCESS.steps.map((step) => (
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

      {/* Komitmen kami */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-16 sm:py-24 border-b border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Janji Kami" title={BM_COMMITMENTS.heading} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BM_COMMITMENTS.items.map((item) => (
              <div key={item.title} className="card-luxury p-6">
                <CheckCircle2 className="w-5 h-5 text-[#EA580C] mb-4" />
                <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed font-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profil pengasas */}
      <section className="bg-transparent py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Pengasas" title={BM_FOUNDER.heading} />

          <div className="card-luxury p-7 sm:p-10 space-y-4 text-center">
            <h3 className="font-serif text-2xl font-bold text-[#0F172A]">{BM_FOUNDER.name}</h3>
            <p className="text-sm text-[#475569]">{BM_FOUNDER.designation}</p>
            <p className="text-sm text-[#C2410C] font-semibold">{BM_FOUNDER.qualifications}</p>
            <p className="text-sm text-[#475569] leading-relaxed font-light pt-4 border-t border-[#CBD5E1] text-left">
              {BM_FOUNDER.biography}
            </p>
          </div>
        </div>
      </section>

      {/* Pejabat kami */}
      <section className="bg-[#D8DDE3]/80 backdrop-blur-md py-16 sm:py-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Lokasi"
            title="Pejabat Kami"
            subtitle="Temu janji diperlukan supaya peguam tersedia untuk bertemu anda."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <div key={office.id} className="card-luxury p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-[#EA580C]" />
                    <span className="text-xs uppercase tracking-[0.18em] text-[#C2410C] font-semibold">
                      {office.isMain ? 'Pejabat Utama' : 'Pejabat'}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0F172A] mb-2">
                    {office.isMain ? 'Skudai' : office.id === 'adda-heights' ? 'Adda Heights' : office.city}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-light">
                    {formatOfficeAddress(office)}
                  </p>
                </div>
                <a
                  href={office.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 pt-4 border-t border-[#CBD5E1] inline-flex items-center gap-1.5 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C]"
                >
                  <span>Dapatkan Arah</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-sm">
            <a
              href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
              className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/75 border border-[#CBD5E1] text-[#0F172A] hover:text-[#EA580C] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#EA580C]" />
              <span className="font-semibold">{FIRM_DETAILS.contact.primaryPhone}</span>
            </a>
            <a
              href={`mailto:${FIRM_DETAILS.contact.generalEmail}`}
              className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/75 border border-[#CBD5E1] text-[#0F172A] hover:text-[#EA580C] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#EA580C]" />
              <span className="font-semibold text-xs break-all">
                {FIRM_DETAILS.contact.generalEmail}
              </span>
            </a>
            <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/75 border border-[#CBD5E1] text-[#475569]">
              <Clock className="w-4 h-4 text-[#EA580C]" />
              <span className="text-xs">Isnin – Jumaat, 9.00 pagi – 5.30 petang</span>
            </div>
          </div>
        </div>
      </section>

      {/* Penafian */}
      <section className="bg-transparent py-12 border-b border-[#CBD5E1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#64748B] italic leading-relaxed text-center">
            {BM_DISCLAIMER}
          </p>
          <p className="mt-4 text-center">
            <Link
              to="/notis-privasi"
              className="text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] transition-colors"
            >
              Baca Notis Privasi kami
            </Link>
          </p>
        </div>
      </section>

      <CTABand
        heading="Ada Soalan Guaman?"
        subheading="Hubungi kami tentang urusan anda. Kami akan menerangkan pilihan dan langkah seterusnya dengan jelas."
      />
    </div>
  );
}
