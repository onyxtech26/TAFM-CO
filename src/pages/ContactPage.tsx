/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  AlertCircle,
  Navigation,
  ArrowRight,
  Info
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { FIRM_DETAILS, OFFICES, formatOfficeAddress } from '../data/firm';
import { MATTER_TYPE_OPTIONS } from '../data/services';
import { whatsappUrl, satelliteMapEmbedUrl } from '../lib/contact';

const OFFICE_OPTIONS = [
  'Skudai, Johor Bahru',
  'Online consultation'
];

const CONTACT_METHODS = ['Phone', 'WhatsApp', 'Email'];

const DESCRIPTION_LIMIT = 1000;

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const matterParam = searchParams.get('matter');

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredOffice: OFFICE_OPTIONS[0],
    matterType:
      matterParam && MATTER_TYPE_OPTIONS.includes(matterParam)
        ? matterParam
        : MATTER_TYPE_OPTIONS[0],
    preferredContact: '',
    description: '',
    otherParty: '',
    consent: false,
    // Honeypot — must stay empty; bots that fill it are rejected silently.
    website: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (matterParam && MATTER_TYPE_OPTIONS.includes(matterParam)) {
      setFormData((prev) => ({ ...prev, matterType: matterParam }));
    }
  }, [matterParam]);

  const validate = () => {
    const next: Record<string, string> = {};

    if (!formData.fullName.trim()) next.fullName = 'Please enter your full name.';

    if (!formData.phoneNumber.trim()) {
      next.phoneNumber = 'Please enter a contact number.';
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 8) {
      next.phoneNumber = 'Please enter a valid contact number.';
    }

    if (!formData.email.trim()) {
      next.email = 'Please enter an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      next.email = 'Please enter a valid email address.';
    }

    if (!formData.preferredOffice) next.preferredOffice = 'Please choose an office.';
    if (!formData.matterType) next.matterType = 'Please choose a type of matter.';

    if (!formData.description.trim()) {
      next.description = 'Please give a short summary of your matter.';
    }

    if (!formData.consent) {
      next.consent = 'Please confirm that you have read the Privacy Notice.';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Silently drop honeypot submissions.
    if (formData.website) return;

    if (!validate()) return;

    setIsSubmitting(true);

    const body = [
      `Full name: ${formData.fullName}`,
      `Phone number: ${formData.phoneNumber}`,
      `Email address: ${formData.email}`,
      `Preferred office: ${formData.preferredOffice}`,
      `Type of matter: ${formData.matterType}`,
      `Preferred contact method: ${formData.preferredContact || 'Not stated'}`,
      `Name of other party: ${formData.otherParty || 'Not stated'}`,
      '',
      'Brief description:',
      formData.description
    ].join('\n');

    const mailto = `mailto:${FIRM_DETAILS.contact.generalEmail}?subject=${encodeURIComponent(
      `Website enquiry – ${formData.matterType} – ${formData.fullName}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    window.setTimeout(() => {
      setIsSubmitting(false);
      navigate('/thank-you');
    }, 600);
  };

  return (
    <div className="space-y-0">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        intro={`Tell us briefly about your matter and we will get back to you ${FIRM_DETAILS.responseTime}. For urgent criminal matters, please call us directly.`}
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT: contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-luxury p-7 sm:p-8 space-y-5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold block">
                  Contact details
                </span>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs text-[#64748B] block">Phone / WhatsApp</span>
                      <a
                        href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
                        className="text-[#0F172A] hover:text-[#EA580C] font-semibold block"
                      >
                        {FIRM_DETAILS.contact.primaryPhone}
                      </a>
                      <a
                        href={`tel:${FIRM_DETAILS.contact.secondaryPhoneTel}`}
                        className="text-[#0F172A] hover:text-[#EA580C] font-semibold block"
                      >
                        {FIRM_DETAILS.contact.secondaryPhone}{' '}
                        <span className="text-xs font-normal text-[#64748B]">(alternative)</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs text-[#64748B] block">Email</span>
                      <a
                        href={`mailto:${FIRM_DETAILS.contact.generalEmail}`}
                        className="text-[#0F172A] hover:text-[#EA580C] font-semibold break-all"
                      >
                        {FIRM_DETAILS.contact.generalEmail}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs text-[#64748B] block">Office hours</span>
                      <p className="text-[#0F172A] font-medium">
                        {FIRM_DETAILS.officeHours.weekdays}
                      </p>
                      <p className="text-xs text-[#475569]">{FIRM_DETAILS.officeHours.weekend}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary py-3 text-xs font-semibold justify-center"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <p className="text-[11px] text-[#64748B] leading-relaxed">
                  {FIRM_DETAILS.contact.whatsappNote}
                </p>
              </div>

              {/* Office */}
              <div className="card-luxury p-7 sm:p-8 space-y-5">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C2410C] font-semibold block">
                  Our office
                </span>

                <div className="space-y-5">
                  {OFFICES.map((office) => (
                    <div key={office.id} className="pb-5 border-b border-[#CBD5E1] last:border-0 last:pb-0">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold text-[#0F172A] mb-1">
                            {office.name}
                          </h3>
                          <p className="text-xs text-[#475569] leading-relaxed">
                            {formatOfficeAddress(office)}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                            {office.phones.map((phone) => (
                              <a
                                key={phone.tel}
                                href={`tel:${phone.tel}`}
                                className="text-xs text-[#0F172A] hover:text-[#EA580C] font-semibold"
                              >
                                {phone.display}
                              </a>
                            ))}
                            <a
                              href={office.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C]"
                            >
                              <Navigation className="w-3 h-3" />
                              <span>Directions</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/offices"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#C2410C] hover:text-[#EA580C] pt-2"
                >
                  <span>View full office details and opening hours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Urgent matters */}
              <div className="p-6 rounded-2xl bg-amber-50/70 backdrop-blur-xl border border-amber-300 text-xs space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-900 font-semibold uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>Urgent criminal matters</span>
                </div>
                <p className="text-amber-900/85 leading-relaxed">
                  If you or a family member has been arrested or is being held for investigation,
                  please call{' '}
                  <a
                    href={`tel:${FIRM_DETAILS.contact.primaryPhoneTel}`}
                    className="font-semibold underline"
                  >
                    {FIRM_DETAILS.contact.primaryPhone}
                  </a>{' '}
                  rather than using this form.
                </p>
              </div>
            </div>

            {/* RIGHT: enquiry form */}
            <div className="lg:col-span-7">
              <div className="card-luxury p-7 sm:p-10 border-amber-500/40">
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <div className="eyebrow-label mb-2">
                      <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#EA580C] to-[#F59E0B] rounded-full" />
                      <span>Enquiry form</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F172A] mb-2">
                      Send us an enquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569]">
                      Fields marked with an asterisk are required.
                    </p>
                  </div>

                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Leave this field empty</label>
                    <input
                      id="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  {/* Full name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block"
                    >
                      Full name <span className="text-[#D96C1E]">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-4 py-3 rounded bg-white border text-sm text-[#0F172A] placeholder-[#64748B]/50 transition-colors focus:border-[#EA580C] shadow-sm ${
                        errors.fullName ? 'border-[#D96C1E]' : 'border-[#CBD5E1]'
                      }`}
                    />
                    {errors.fullName && <p className="text-xs text-[#D96C1E]">{errors.fullName}</p>}
                  </div>

                  {/* Phone & email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="phoneNumber"
                        className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block"
                      >
                        Phone number <span className="text-[#D96C1E]">*</span>
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        autoComplete="tel"
                        placeholder="e.g. 012-345 6789"
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className={`w-full px-4 py-3 rounded bg-white border text-sm text-[#0F172A] placeholder-[#64748B]/50 transition-colors focus:border-[#EA580C] shadow-sm ${
                          errors.phoneNumber ? 'border-[#D96C1E]' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-[#D96C1E]">{errors.phoneNumber}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block"
                      >
                        Email address <span className="text-[#D96C1E]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="e.g. name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded bg-white border text-sm text-[#0F172A] placeholder-[#64748B]/50 transition-colors focus:border-[#EA580C] shadow-sm ${
                          errors.email ? 'border-[#D96C1E]' : 'border-[#CBD5E1]'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-[#D96C1E]">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Office & matter type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="preferredOffice"
                        className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block"
                      >
                        Preferred office <span className="text-[#D96C1E]">*</span>
                      </label>
                      <select
                        id="preferredOffice"
                        value={formData.preferredOffice}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredOffice: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded bg-white border border-[#CBD5E1] text-sm text-[#0F172A] transition-colors focus:border-[#EA580C] cursor-pointer shadow-sm"
                      >
                        {OFFICE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="matterType"
                        className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block"
                      >
                        Type of matter <span className="text-[#D96C1E]">*</span>
                      </label>
                      <select
                        id="matterType"
                        value={formData.matterType}
                        onChange={(e) => setFormData({ ...formData, matterType: e.target.value })}
                        className="w-full px-4 py-3 rounded bg-white border border-[#CBD5E1] text-sm text-[#0F172A] transition-colors focus:border-[#EA580C] cursor-pointer shadow-sm"
                      >
                        {MATTER_TYPE_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Preferred contact method */}
                  <fieldset className="space-y-2">
                    <legend className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold mb-1">
                      Preferred contact method
                    </legend>
                    <div className="flex flex-wrap gap-3">
                      {CONTACT_METHODS.map((method) => (
                        <label
                          key={method}
                          className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm cursor-pointer transition-colors ${
                            formData.preferredContact === method
                              ? 'border-[#EA580C] bg-amber-50 text-[#C2410C] font-semibold'
                              : 'border-[#CBD5E1] bg-white text-[#475569] hover:border-[#EA580C]/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={(e) =>
                              setFormData({ ...formData, preferredContact: e.target.value })
                            }
                            className="accent-[#EA580C]"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="description"
                      className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block"
                    >
                      Brief description <span className="text-[#D96C1E]">*</span>
                    </label>
                    <textarea
                      id="description"
                      rows={5}
                      maxLength={DESCRIPTION_LIMIT}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className={`w-full px-4 py-3 rounded bg-white border text-sm text-[#0F172A] placeholder-[#64748B]/50 transition-colors focus:border-[#EA580C] shadow-sm ${
                        errors.description ? 'border-[#D96C1E]' : 'border-[#CBD5E1]'
                      }`}
                    />
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-xs text-[#64748B] italic leading-relaxed">
                        Please give a short summary only. Do not include confidential details or
                        upload documents at this stage.
                      </p>
                      <span className="text-[11px] font-mono text-[#64748B] shrink-0">
                        {formData.description.length}/{DESCRIPTION_LIMIT}
                      </span>
                    </div>
                    {errors.description && (
                      <p className="text-xs text-[#D96C1E]">{errors.description}</p>
                    )}
                  </div>

                  {/* Other party */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="otherParty"
                      className="text-xs uppercase tracking-wider text-[#0F172A] font-semibold block"
                    >
                      Name of other party
                    </label>
                    <input
                      id="otherParty"
                      type="text"
                      value={formData.otherParty}
                      onChange={(e) => setFormData({ ...formData, otherParty: e.target.value })}
                      className="w-full px-4 py-3 rounded bg-white border border-[#CBD5E1] text-sm text-[#0F172A] transition-colors focus:border-[#EA580C] shadow-sm"
                    />
                    <p className="text-xs text-[#64748B] italic">
                      This helps us check for conflicts of interest before we advise you.
                    </p>
                  </div>

                  {/* Consent */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-[#CBD5E1] bg-white accent-[#EA580C]"
                      />
                      <span className="text-xs text-[#475569] leading-relaxed">
                        I have read and agree to the{' '}
                        <Link to="/privacy" className="text-[#C2410C] font-semibold hover:underline">
                          Privacy Notice
                        </Link>
                        . I understand that submitting this form does not create an advocate–client
                        relationship. <span className="text-[#D96C1E]">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-[#D96C1E] mt-1.5">{errors.consent}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-sm font-semibold tracking-wide disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Preparing your enquiry…</span>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-[#64748B] pt-1">
                    <Info className="w-3.5 h-3.5 text-[#EA580C] shrink-0 mt-0.5" />
                    <span>
                      Sending this form opens your email application with the details filled in, so
                      the enquiry reaches us directly. If it does not open, email us at{' '}
                      <a
                        href={`mailto:${FIRM_DETAILS.contact.generalEmail}`}
                        className="text-[#C2410C] font-semibold hover:underline break-all"
                      >
                        {FIRM_DETAILS.contact.generalEmail}
                      </a>
                      .
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>
                      Your personal data is handled under the Personal Data Protection Act 2010
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maps */}
      <section className="bg-slate-200/30 backdrop-blur-2xl py-16 sm:py-20 border-b border-[#CBD5E1]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Find Us"
            title="Office Locations"
            subtitle="Consultations at any of our three offices are by appointment."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office) => (
              <div
                key={office.id}
                className="rounded-2xl overflow-hidden border border-[#CBD5E1] bg-white shadow-sm"
              >
                <div className="aspect-[4/3] bg-slate-100">
                  <iframe
                    title={`Map of ${office.name}`}
                    src={satelliteMapEmbedUrl(
                      `${office.addressLines.join(', ')}, ${office.postcode} ${office.city}, ${office.state}, Malaysia`
                    )}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-semibold text-[#0F172A] mb-1">
                    {office.isMain ? 'Skudai (HQ)' : office.label}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {formatOfficeAddress(office)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
