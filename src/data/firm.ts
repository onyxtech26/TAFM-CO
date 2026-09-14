/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Firm data for Messrs. Amin Firdaus Mashudi & Co.
 *
 * Every fact below is drawn from the firm's own verified documents
 * (Certificate of Registration of Law Firm, Practising Certificate 2026,
 * Sijil Annual 2026, Pahang Bar subscription certificate and the Malaysian
 * Bar PII Scheme 2026 schedule).
 *
 * COMPLIANCE NOTE — Legal Profession (Publicity) Rules 2025:
 * Do not add superlatives ("best", "leading", "expert", "specialist"),
 * success rates, case counts, client testimonials, fee amounts or
 * comparisons with other firms to any string in this file.
 * The Registration & Credentials data must be reviewed every January.
 */

export interface Qualification {
  degree: string;
  institution: string;
}

export interface LawyerProfile {
  id: string;
  name: string;
  role: string;
  designation: string;
  qualifications: Qualification[];
  admission: string;
  admissionDate: string;
  languages: string[];
  areasOfFocus: string[];
  courts: string[];
  biography: string[];
  /** Real photograph URL; empty renders the monogram placeholder. */
  photoUrl: string;
  initials: string;
  email: string;
  phone: string;
}

export interface OfficeLocation {
  id: string;
  name: string;
  label: string;
  /** Headquarters (HQ). */
  isMain: boolean;
  addressLines: string[];
  city: string;
  state: string;
  postcode: string;
  phones: { display: string; tel: string }[];
  email: string;
  googleMapsUrl: string;
  wazeUrl: string;
}

export const FIRM_DETAILS = {
  name: "Amin Firdaus Mashudi & Co.",
  legalName: "Messrs. Amin Firdaus Mashudi & Co.",
  shortName: "AFM & Co.",
  fullTitle: "Amin Firdaus Mashudi & Co. (Advocates & Solicitors)",
  descriptor: "Advocates & Solicitors",

  tagline: "Clear Legal Guidance for Individuals, Families and Businesses",

  registrationNumber: "000020009279",
  registrationBasis:
    "Registered with the Malaysian Bar under Section 85(1) of the Legal Profession Act 1976",
  registrationDate: "30 January 2026",
  structure: "Sole proprietorship",
  soleProprietor: "Muhammad Amin Firdaus bin Mashudi",
  foundedYear: "2026",
  commencedPractice: "February 2026",
  jurisdiction: "Advocate & Solicitor of the High Court in Malaya",
  headquarters: "Skudai, Johor",
  areasServed: ["Johor", "Pahang", "Peninsular Malaysia"],

  description:
    "Amin Firdaus Mashudi & Co. is a Malaysian law firm registered with the Malaysian Bar (Registration No. 000020009279). Founded in 2026 by Advocate & Solicitor Muhammad Amin Firdaus bin Mashudi, the firm advises and represents individuals, families and businesses in property transactions, court disputes, criminal matters, family and estate matters, and business affairs, from offices in Johor and Pahang.",

  heroSubheadline:
    "Messrs. Amin Firdaus Mashudi & Co. advises and represents clients in property transactions, court disputes, criminal matters, family and estate matters, and business affairs, from offices in Johor and Pahang.",

  vision:
    "To be a trusted and accessible law firm for the communities we serve in Johor and Pahang.",
  mission:
    "To provide legal services that are clear, careful and responsive, delivered with integrity and respect for every client.",

  foundingStory:
    "The firm was established with a simple aim: to make proper legal help easier to reach and easier to understand. Many people put off seeing a lawyer because they are unsure what it will cost, worried they will not understand the advice, or do not know where to begin. We set out to remove those barriers by explaining matters clearly, being upfront about fees, and staying in contact throughout each matter.",

  disclaimer:
    "The information on this website is for general information only and does not constitute legal advice. No advocate–client relationship is created by using this website or contacting us through it. This website is published in accordance with the Legal Profession (Publicity) Rules 2025.",

  officeHours: {
    weekdays: "Monday – Friday: 10.00 am – 5.00 pm",
    weekend: "Saturday, Sunday & Public Holidays: Closed",
    shortLabel: "Mon – Fri, 10.00 am – 5.00 pm",
    note: "Consultations are by appointment so that a lawyer is available to meet you. For urgent criminal matters, please call us directly."
  },

  languages: ["Bahasa Malaysia", "English"],

  responseTime: "within one working day",

  contact: {
    primaryPhone: "+60 11-5785 6100",
    primaryPhoneTel: "+601157856100",
    secondaryPhone: "+60 7-906 0256",
    secondaryPhoneTel: "+6079060256",
    generalEmail: "aminfirdausco@gmail.com",
    careersEmail: "aminfirdausco@gmail.com",
    whatsappNumber: "601157856100",
    whatsappDefaultMessage: "Hello, I would like to enquire about a legal matter.",
    whatsappNote:
      "Please do not send confidential documents through WhatsApp before we have confirmed your appointment."
  },

  credentialsStrip: [
    { label: "Registered with the Malaysian Bar", detail: "Reg. No. 000020009279" },
    { label: "Practising Certificate 2026", detail: "High Court in Malaya" },
    { label: "Professional Indemnity Insured", detail: "Malaysian Bar PII Scheme 2026" },
    { label: "3 Offices in Johor & Pahang", detail: "Skudai · Johor Bahru · Kuantan" }
  ]
};

export const OFFICES: OfficeLocation[] = [
  {
    id: "skudai",
    name: "Johor Bahru — HQ (Skudai)",
    label: "Skudai (HQ)",
    isMain: true,
    addressLines: ["No. 85-01, Jalan Wira 2", "Taman Tan Sri Yaacob"],
    city: "Skudai",
    state: "Johor",
    postcode: "81300",
    phones: [
      { display: "+60 11-5785 6100", tel: "+601157856100" },
      { display: "+60 7-906 0256", tel: "+6079060256" }
    ],
    email: "aminfirdausco@gmail.com",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=No.%2085-01%2C%20Jalan%20Wira%202%2C%20Taman%20Tan%20Sri%20Yaacob%2C%2081300%20Skudai%2C%20Johor",
    wazeUrl:
      "https://www.waze.com/ul?q=Jalan%20Wira%202%20Taman%20Tan%20Sri%20Yaacob%2081300%20Skudai%20Johor"
  },
  {
    id: "adda-heights",
    name: "Johor Bahru — Adda Heights Office",
    label: "Johor Bahru (Adda Heights)",
    isMain: false,
    addressLines: ["26, Jalan Adda 7", "Taman Adda Heights"],
    city: "Johor Bahru",
    state: "Johor",
    postcode: "81100",
    phones: [{ display: "+60 10-252 0859", tel: "+60102520859" }],
    email: "aminfirdausco@gmail.com",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=26%2C%20Jalan%20Adda%207%2C%20Taman%20Adda%20Heights%2C%2081100%20Johor%20Bahru%2C%20Johor",
    wazeUrl:
      "https://www.waze.com/ul?q=Jalan%20Adda%207%20Taman%20Adda%20Heights%2081100%20Johor%20Bahru"
  },
  {
    id: "kuantan",
    name: "Kuantan Office",
    label: "Kuantan",
    isMain: false,
    addressLines: ["22, Lorong Berjaya Permai 30", "Taman Berjaya Permai, Kempadang"],
    city: "Kuantan",
    state: "Pahang",
    postcode: "25150",
    phones: [{ display: "+60 10-252 0859", tel: "+60102520859" }],
    email: "aminfirdausco@gmail.com",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=22%2C%20Lorong%20Berjaya%20Permai%2030%2C%20Taman%20Berjaya%20Permai%2C%20Kempadang%2C%2025150%20Kuantan%2C%20Pahang",
    wazeUrl:
      "https://www.waze.com/ul?q=Lorong%20Berjaya%20Permai%2030%20Kempadang%2025150%20Kuantan%20Pahang"
  }
];

export const MAIN_OFFICE = OFFICES[0];

export function formatOfficeAddress(office: OfficeLocation): string {
  return `${office.addressLines.join(", ")}, ${office.postcode} ${office.city}, ${office.state}`;
}

export const ONLINE_CONSULTATION_NOTE =
  "Unable to visit an office? We offer consultations by video call. Contact us to arrange a suitable time. You may be asked to show your identity card at the start of the call for verification purposes.";

export const PRINCIPAL_LAWYER: LawyerProfile = {
  id: "amin-firdaus",
  name: "Muhammad Amin Firdaus bin Mashudi",
  role: "Founder & Sole Proprietor",
  designation: "Advocate & Solicitor, High Court in Malaya",
  qualifications: [
    { degree: "Bachelor of Laws (LLB)", institution: "Universiti Utara Malaysia (UUM)" },
    { degree: "Master of Laws (LLM)", institution: "Universiti Malaya (UM)" }
  ],
  admission: "Admitted as an Advocate and Solicitor of the High Court in Malaya",
  admissionDate: "5 August 2022",
  languages: ["Bahasa Malaysia", "English"],
  areasOfFocus: [
    "Conveyancing & property transactions",
    "Civil & commercial litigation",
    "Criminal matters",
    "Family law",
    "Wills & estate administration",
    "Corporate & commercial advisory"
  ],
  courts: [
    "Federal Court",
    "Court of Appeal",
    "High Court in Malaya",
    "Sessions Courts (Peninsular Malaysia)",
    "Magistrates' Courts (Peninsular Malaysia)"
  ],
  biography: [
    "Encik Muhammad Amin Firdaus bin Mashudi is the founder and sole proprietor of Amin Firdaus Mashudi & Co.",
    "He obtained his Bachelor of Laws (LLB) from Universiti Utara Malaysia (UUM) and his Master of Laws (LLM) from Universiti Malaya (UM).",
    "He was admitted as an Advocate and Solicitor of the High Court in Malaya on 5 August 2022. In 2026, he established Amin Firdaus Mashudi & Co., which is registered with the Malaysian Bar.",
    "He holds a Practising Certificate for 2026 which entitles him to practise as an Advocate and Solicitor in the Federal Court, the Court of Appeal, the High Court in Malaya, and the Sessions Courts and Magistrates' Courts in Peninsular Malaysia. He is a member of the Malaysian Bar.",
    "His practice covers conveyancing and property transactions, civil and commercial litigation, criminal matters, family law, wills and estate administration, and general corporate and commercial advisory work. He advises individual and business clients in Bahasa Malaysia and English."
  ],
  // Served from public/images/team/.
  photoUrl: "/images/team/muhammad-amin-firdaus-bin-mashudi.jpg",
  initials: "AF",
  email: "aminfirdausco@gmail.com",
  phone: "+60 11-5785 6100"
};

export const LAWYER_QUICK_FACTS = [
  { label: "Admitted", value: "5 August 2022, High Court in Malaya" },
  { label: "Qualifications", value: "LLB (UUM), LLM (UM)" },
  { label: "Practising Certificate", value: "2026 — valid 1 January to 31 December 2026" },
  {
    label: "Courts",
    value:
      "Federal Court, Court of Appeal, High Court in Malaya, Sessions Courts, Magistrates' Courts (Peninsular Malaysia)"
  },
  {
    label: "Areas of practice",
    value: "Conveyancing · Litigation · Criminal · Family · Estates · Corporate"
  },
  { label: "Languages", value: "Bahasa Malaysia · English" }
];

export const CORE_VALUES = [
  {
    title: "Integrity",
    eyebrow: "Honest Advice",
    description: "We give honest advice, even when it is not what a client hopes to hear.",
    icon: "ShieldCheck"
  },
  {
    title: "Clarity",
    eyebrow: "Plain Language",
    description: "We explain the law and the process in language our clients understand.",
    icon: "MessageSquare"
  },
  {
    title: "Diligence",
    eyebrow: "Careful Preparation",
    description: "We prepare every document and every case with care.",
    icon: "FileCheck"
  },
  {
    title: "Respect",
    eyebrow: "Every Client",
    description: "We treat every client with courtesy, whatever the size of their matter.",
    icon: "Handshake"
  },
  {
    title: "Confidentiality",
    eyebrow: "Protected Information",
    description: "We protect our clients' information at all times.",
    icon: "Lock"
  }
];

export const OUR_APPROACH = [
  {
    title: "We listen first",
    description:
      "Every matter starts with understanding your circumstances and what outcome matters most to you."
  },
  {
    title: "We explain your options honestly",
    description:
      "We tell you the strengths and risks of your position, including when a matter may be better resolved through negotiation than through court."
  },
  {
    title: "We put terms in writing",
    description:
      "Before we start, you receive a letter of engagement setting out the work we will do, the basis of our fees, and expected disbursements."
  },
  {
    title: "We keep you updated",
    description: "You will know what stage your matter is at and what happens next."
  },
  {
    title: "We act with integrity",
    description:
      "We are bound by the Legal Profession Act 1976 and the professional rules of the Malaysian Bar, including strict duties of confidentiality and to the court."
  }
];

export const OUR_COMMITMENTS = [
  {
    title: "Plain language",
    icon: "MessageSquare",
    text: "We explain your legal position without unnecessary jargon, in Bahasa Malaysia or English."
  },
  {
    title: "Transparency",
    icon: "FileText",
    text: "We tell you the basis of our fees and expected disbursements in writing before starting work."
  },
  {
    title: "Confidentiality",
    icon: "Lock",
    text: "Your affairs are protected by advocate–client privilege and our obligations under the Personal Data Protection Act 2010."
  },
  {
    title: "Accessibility",
    icon: "MapPin",
    text: "With offices in Skudai, Johor Bahru and Kuantan, and online consultations available, you can reach us where it suits you."
  }
];

export interface EngagementStep {
  stepNumber: number;
  badge: string;
  title: string;
  shortSummary: string;
  description: string;
}

export const HOW_WE_WORK: EngagementStep[] = [
  {
    stepNumber: 1,
    badge: "Step 01",
    title: "Get in touch",
    shortSummary: "Call, WhatsApp, email or use our online form.",
    description:
      "Call, WhatsApp, email or use our online form. Tell us briefly what your matter is about and which office is most convenient for you."
  },
  {
    stepNumber: 2,
    badge: "Step 02",
    title: "Initial consultation",
    shortSummary: "We meet in person or online to understand your situation.",
    description:
      "We meet in person or online to understand your situation, review your documents, and explain your legal options."
  },
  {
    stepNumber: 3,
    badge: "Step 03",
    title: "Clear terms in writing",
    shortSummary: "A written letter of engagement before any work begins.",
    description:
      "If you would like us to act for you, we confirm the scope of work, the next steps, and our fees in a written letter of engagement before any work begins."
  },
  {
    stepNumber: 4,
    badge: "Step 04",
    title: "We keep you informed",
    shortSummary: "Updates at each important stage of your matter.",
    description:
      "We update you at each important stage and explain any decision you need to make, so you are never left guessing about your own matter."
  }
];

export const WHO_WE_ACT_FOR = [
  "Home buyers and sellers",
  "Property investors and landlords",
  "Families and individuals",
  "Sole proprietors, partnerships and private limited companies (Sdn. Bhd.)",
  "Employers and employees",
  "Beneficiaries, executors and administrators of estates",
  "Persons under investigation or facing criminal charges"
];

export const FIRM_AT_A_GLANCE = [
  { label: "Firm name", value: "Amin Firdaus Mashudi & Co." },
  { label: "Legal structure", value: "Sole proprietorship" },
  { label: "Registered with", value: "Malaysian Bar (Registration No. 000020009279)" },
  { label: "Commenced practice", value: "February 2026" },
  { label: "Sole Proprietor", value: "Muhammad Amin Firdaus bin Mashudi" },
  { label: "Offices", value: "Skudai (HQ), Johor Bahru, Kuantan" },
  { label: "Languages", value: "Bahasa Malaysia, English" }
];

export interface CredentialRecord {
  id: string;
  title: string;
  icon: string;
  rows: { label: string; value: string }[];
  note?: string;
}

export const CREDENTIAL_RECORDS: CredentialRecord[] = [
  {
    id: "firm-registration",
    title: "Law firm registration",
    icon: "Building2",
    rows: [
      { label: "Firm name", value: "Amin Firdaus Mashudi & Co." },
      { label: "Certificate", value: "Certificate of Registration of Law Firm" },
      { label: "Issued under", value: "Section 85(1) of the Legal Profession Act 1976" },
      { label: "Issued by", value: "Malaysian Bar (Badan Peguam Malaysia)" },
      { label: "Registration Number", value: "000020009279" },
      { label: "Dated", value: "30 January 2026" },
      { label: "Structure", value: "Sole proprietorship" },
      { label: "Sole Proprietor", value: "Muhammad Amin Firdaus bin Mashudi" }
    ],
    note:
      "The Bar Council confirmed that it has no objection to the use of the firm name “Amin Firdaus Mashudi & Co.” and the firm commenced practice in February 2026."
  },
  {
    id: "practising-certificate",
    title: "Practising Certificate 2026",
    icon: "ScrollText",
    rows: [
      { label: "Issued under", value: "Legal Profession Act 1976" },
      { label: "Issued by", value: "High Court in Malaya" },
      {
        label: "Holder",
        value:
          "Muhammad Amin Firdaus bin Mashudi, Advocate and Solicitor, High Court in Malaya"
      },
      {
        label: "Entitled to practise in",
        value:
          "Federal Court, Court of Appeal, High Court in Malaya, Sessions Courts and Magistrates' Courts in Peninsular Malaysia"
      },
      { label: "Valid", value: "1 January 2026 to 31 December 2026 (both dates inclusive)" },
      { label: "Date issued", value: "30 January 2026" }
    ]
  },
  {
    id: "sijil-annual",
    title: "Sijil Annual 2026",
    icon: "BadgeCheck",
    rows: [
      { label: "Issued by", value: "Bar Council (Malaysian Bar)" },
      { label: "Issued under", value: "Section 32, Part III of the Legal Profession Act 1976" },
      { label: "Date issued", value: "30 January 2026" }
    ],
    note:
      "The Sijil Annual certifies that Mr. Muhammad Amin Firdaus bin Mashudi is an Advocate and Solicitor and member of the Malaysian Bar, is not prohibited from holding a practising certificate, has delivered an Accountant's Report as required under the Act, is not in arrears of contributions, subscriptions or levies due to the Malaysian Bar or any State Bar Committee, and intends to practise under an approved firm name."
  },
  {
    id: "bar-subscription",
    title: "Bar subscription 2026",
    icon: "Receipt",
    rows: [
      { label: "Certificate", value: "Certificate of Payment of Subscription for the Year 2026" },
      {
        label: "Issued by",
        value: "Pahang Bar Committee (Jawatankuasa Peguam Negeri Pahang Darul Makmur)"
      },
      { label: "Issued under", value: "Section 32(1)(d) of the Legal Profession Act 1976" },
      { label: "Date issued", value: "22 January 2026" }
    ],
    note:
      "Certifies that the 2026 subscription has been paid and that there are no arrears of subscription for past years."
  },
  {
    id: "indemnity-insurance",
    title: "Professional Indemnity Insurance",
    icon: "ShieldCheck",
    rows: [
      { label: "Scheme", value: "Malaysian Bar Professional Indemnity Insurance Scheme 2026" },
      { label: "Insurer", value: "Pacific & Orient Insurance Co. Berhad" },
      { label: "Arranged by", value: "AON Insurance Brokers (Malaysia) Sdn. Bhd." },
      { label: "Insured firm", value: "Amin Firdaus Mashudi & Co." },
      { label: "Period of insurance", value: "1 February 2026 to 31 December 2026" },
      {
        label: "Mandatory limit of indemnity",
        value: "RM250,000 for each and every claim, subject to policy terms"
      }
    ],
    note:
      "All law firms in Peninsular Malaysia are required to hold professional indemnity insurance under the Malaysian Bar's mandatory scheme. This protects clients in the event of a claim arising from professional negligence."
  }
];

export const VERIFICATION_STEPS = [
  {
    step: 1,
    text: "Visit the Malaysian Bar Legal Directory at www.malaysianbar.org.my.",
    linkLabel: "malaysianbar.org.my",
    linkUrl: "https://www.malaysianbar.org.my"
  },
  {
    step: 2,
    text: "Select “Lawyer” and search for “Amin Firdaus”, or select “Law firm” and search for “Amin Firdaus Mashudi”."
  },
  {
    step: 3,
    text: "Check that the status is shown as Active and that the firm details match those on this page."
  }
];

export const VERIFICATION_CONTACT = {
  phone: "+603-2050 2050",
  phoneTel: "+60320502050",
  email: "council@malaysianbar.org.my"
};

export const FRAUD_WARNING =
  "Scammers sometimes impersonate lawyers and law firms. Before transferring any money for a legal transaction, confirm that you are dealing with a registered firm, and check that payment is being made into the firm's official clients' account. If you receive a message claiming to be from us asking you to pay into a different account, call us on +60 11-5785 6100 before making any payment.";

export const CREDENTIALS_FOOTNOTE =
  "The details above relate to the year 2026 and will be updated annually.";
