/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Meta titles and descriptions (Part 15.1 of the content pack).
 *
 * COMPLIANCE NOTE: SEO text is also publicity. Never use "best lawyer",
 * "top law firm", "expert lawyer" or "No. 1" in any value below.
 */

export interface PageMeta {
  title: string;
  description: string;
}

export const DEFAULT_META: PageMeta = {
  title: "Amin Firdaus Mashudi & Co.",
  description:
    "Law firm in Skudai, Johor Bahru advising on property, litigation, criminal, family, estate and business matters."
};

export const PAGE_META: Record<string, PageMeta> = {
  "/": DEFAULT_META,
  "/about": {
    title: "About Us | Amin Firdaus Mashudi & Co.",
    description:
      "Registered Malaysian law firm founded in 2026, serving individuals, families and businesses in Johor."
  },
  "/our-lawyer": {
    title: "Muhammad Amin Firdaus bin Mashudi | Advocate & Solicitor",
    description:
      "Founder of Amin Firdaus Mashudi & Co. LLB (UUM), LLM (UM). Advocate & Solicitor of the High Court in Malaya."
  },
  "/credentials": {
    title: "Registration & Credentials | Amin Firdaus Mashudi & Co.",
    description:
      "Malaysian Bar registration, 2026 Practising Certificate and insurance details, with steps to verify our firm."
  },
  "/services": {
    title: "Our Legal Services | Amin Firdaus Mashudi & Co.",
    description:
      "Comprehensive legal assistance across 10 core practice disciplines including conveyancing, probate, litigation, land disputes, and commercial law."
  },
  "/process": {
    title: "Our Legal Process | Amin Firdaus Mashudi & Co.",
    description:
      "Our 8-step legal framework ensuring systematic case management, clear strategy, and structured completion."
  },
  "/why-us": {
    title: "Why Choose Us | Amin Firdaus Mashudi & Co.",
    description:
      "Discover the 6 core pillars and professional values that define our practice in Johor."
  },
  "/clients": {
    title: "Our Clients | Amin Firdaus Mashudi & Co.",
    description:
      "Serving individuals, families, property owners, businesses, investors, and corporate organisations across Malaysia."
  },
  "/our-clients": {
    title: "Our Clients | Amin Firdaus Mashudi & Co.",
    description:
      "Serving individuals, families, property owners, businesses, investors, and corporate organisations across Malaysia."
  },
  "/practice-areas": {
    title: "Practice Areas | Amin Firdaus Mashudi & Co.",
    description:
      "Conveyancing, civil litigation, criminal law, family law, wills and probate, corporate, employment and accident claims."
  },
  "/offices": {
    title: "Our Office | Skudai, Johor Bahru",
    description:
      "Office address, contact numbers and directions for our Skudai, Johor Bahru office."
  },
  "/faq": {
    title: "FAQ | Amin Firdaus Mashudi & Co.",
    description:
      "Answers on appointments, fees, confidentiality, verification and where we practise."
  },
  "/client-guide": {
    title: "Client Guide | Amin Firdaus Mashudi & Co.",
    description:
      "Checklists of the documents to bring to your consultation, by type of legal matter."
  },
  "/contact": {
    title: "Contact Us | Amin Firdaus Mashudi & Co.",
    description:
      "Call or WhatsApp +60 11-5785 6100 or send an enquiry to our Skudai, Johor Bahru office."
  },
  "/thank-you": {
    title: "Thank You | Amin Firdaus Mashudi & Co.",
    description: "Your enquiry has been sent. We will contact you shortly."
  },
  "/disclaimer": {
    title: "Disclaimer | Amin Firdaus Mashudi & Co.",
    description:
      "This website is for general information only and does not constitute legal advice."
  },
  "/privacy": {
    title: "Privacy Notice | Amin Firdaus Mashudi & Co.",
    description:
      "How we collect, use, disclose and protect personal data under the Personal Data Protection Act 2010."
  },
  "/terms": {
    title: "Terms of Use | Amin Firdaus Mashudi & Co.",
    description: "The terms that apply when you access and use this website."
  },
  "/cookies": {
    title: "Cookie Notice | Amin Firdaus Mashudi & Co.",
    description: "The cookies this website uses and how to manage your choices."
  }
};

/** Target keywords (Part 15.2), kept for reference. */
export const TARGET_KEYWORDS_EN = [
  "lawyer Skudai",
  "law firm Skudai",
  "lawyer Johor Bahru",
  "law firm Johor Bahru",
  "conveyancing lawyer Johor Bahru",
  "property lawyer Skudai",
  "divorce lawyer Johor Bahru",
  "criminal lawyer Johor Bahru",
  "probate lawyer Johor",
  "letters of administration Johor Bahru",
  "tenancy agreement lawyer JB",
  "lawyer Taman Tan Sri Yaacob"
];
