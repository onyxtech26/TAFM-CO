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
    "Amin Firdaus Mashudi & Co. is a Malaysian law firm providing legal representation, advisory services and comprehensive legal solutions to individuals, families, businesses, property owners, investors and corporate clients.",

  heroSubheadline:
    "Messrs. Amin Firdaus Mashudi & Co. advises and represents clients in property transactions, court disputes, criminal matters, family and estate matters, and business affairs, from offices in Johor and Pahang.",

  vision:
    "To be a distinguished and progressive Malaysian law firm recognised for legal excellence, uncompromising integrity, and unwavering dedication to safeguarding our clients' legal and commercial interests across Peninsular Malaysia.",
  mission:
    "To deliver precise, commercially sound legal solutions and robust representation through structured case management, clear communication, and an agile, client-focused multidisciplinary approach.",

  objective:
    "To provide clear legal advice, structured processes and effective representation while protecting our clients' legal and commercial interests.",

  aboutOfficial: [
    "Amin Firdaus Mashudi & Co. is a Malaysian law firm providing legal representation, advisory services and comprehensive legal solutions to individuals, families, businesses, property owners, investors and corporate clients.",
    "Established in 2021 and subsequently incorporated in 2025, the firm has developed a multidisciplinary approach to legal practice, combining legal knowledge, practical case management and strategic client support.",
    "Our practice covers a range of legal matters, with particular emphasis on property and conveyancing, estate administration, litigation, corporate and commercial matters, legal documentation and advisory services.",
    "The firm is registered with the Malaysian Bar Council under Registration No. 000020009279.",
    "Our objective is simple: To provide clear legal advice, structured processes and effective representation while protecting our clients' legal and commercial interests."
  ],

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

/** 2. OUR LEADERSHIP */
export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  badge: string;
  summary: string;
  description: string;
  responsibilities?: string[];
  note?: string;
}

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: "founder-principal",
    name: "Muhammad Amin Firdaus Bin Mashudi",
    role: "Founder & Principal",
    badge: "Founder & Principal",
    summary: "Oversees the firm's strategic direction, legal practice, client matters, and professional standards.",
    description:
      "Muhammad Amin Firdaus Bin Mashudi is the founder of Amin Firdaus Mashudi & Co., providing leadership and strategic direction to the firm. His role includes overseeing the firm's legal direction, client matters, professional standards and development of the firm's legal practice.",
    note: "Under his leadership, the firm aims to build a professional legal practice that combines traditional legal expertise with efficient modern case management."
  },
  {
    id: "operations-manager",
    name: "Mr. Mohan",
    role: "Operations Manager",
    badge: "Operations Management",
    summary: "Oversees the operational and administrative functions, internal workflow, and cross-party communication.",
    description:
      "Mr. Mohan oversees the operational and administrative functions of the firm. The Operations Manager works closely with the legal team to ensure that client matters are handled efficiently and systematically.",
    responsibilities: [
      "Firm operations",
      "Client coordination",
      "Case administration",
      "Internal workflow",
      "Documentation management",
      "Communication between clients, lawyers and external parties",
      "Monitoring case progress",
      "Operational planning and coordination"
    ],
    note: "The Operations Manager works closely with the legal team to ensure that client matters are handled efficiently and systematically."
  },
  {
    id: "management-lead",
    name: "Mr. Shiva",
    role: "Management Lead",
    badge: "Strategic Management",
    summary: "Leads firm management functions, business development, and strategic operational initiatives.",
    description:
      "Mr. Shiva leads the firm's management functions and supports the development and implementation of the firm's operational and management strategies.",
    responsibilities: [
      "Management coordination",
      "Business development",
      "Strategic planning",
      "Internal administration",
      "Client relationship management",
      "Workflow improvement",
      "Coordination between legal and operational teams",
      "Supporting the firm's long-term development"
    ],
    note: "Supports the ongoing expansion and high-standard service delivery of the chambers across Johor and Pahang."
  }
];

/** 3. OUR LEGAL SERVICES (10 items, narrative paragraph format) */
export interface LegalServiceItem {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  icon: string;
}

export const OUR_LEGAL_SERVICES: LegalServiceItem[] = [
  {
    number: "01",
    slug: "conveyancing-property",
    title: "Conveyancing & Property",
    subtitle: "Property Transactions From Start to Completion",
    paragraphs: [
      "We provide comprehensive legal assistance for property transactions, from the initial documentation and due diligence stage through to completion and registration. Our services cover the purchase, sale, transfer and financing of residential, commercial and other properties.",
      "Our conveyancing services include Sale and Purchase Agreements, Options to Purchase, subsale transactions, property transfers, loan and financing documentation, redemption and discharge of charges, refinancing, land searches and related Land Office matters. We coordinate with buyers, sellers, banks, agents and relevant authorities to ensure transactions progress efficiently and in accordance with legal requirements."
    ],
    icon: "Home"
  },
  {
    number: "02",
    slug: "probate-letters-of-administration",
    title: "Probate & Letters of Administration (LA)",
    subtitle: "Estate Administration & Succession Support",
    paragraphs: [
      "We assist families, beneficiaries, executors and administrators with the legal process of administering the estate of a deceased person.",
      "Our services include applications for Probate and Letters of Administration, identification and administration of estate assets, transmission of properties, estate property sales, beneficiary documentation and distribution-related matters.",
      "We guide clients through the necessary legal procedures and documentation, helping to simplify what can often be a complicated and sensitive process for families."
    ],
    icon: "FileText"
  },
  {
    number: "03",
    slug: "civil-commercial-litigation",
    title: "Civil & Commercial Litigation",
    subtitle: "Court Representation & Dispute Resolution",
    paragraphs: [
      "We provide legal representation and advice for individuals and businesses involved in civil and commercial disputes.",
      "Our services cover contractual disputes, property disputes, debt recovery, breach of agreements, ownership disputes, commercial claims and other civil matters. We assess the circumstances and available evidence before advising clients on the appropriate course of action, whether through negotiation, settlement or court proceedings.",
      "Where litigation is necessary, we assist clients throughout the relevant legal proceedings and work to protect their interests at every stage."
    ],
    icon: "Scale"
  },
  {
    number: "04",
    slug: "land-property-disputes",
    title: "Land & Property Disputes",
    subtitle: "Protecting Land Rights & Real Estate Interests",
    paragraphs: [
      "Property and land disputes can involve ownership, possession, boundaries, title restrictions, caveats, contractual obligations or competing interests.",
      "We assist clients in identifying the legal and factual issues surrounding their property disputes and advise on available remedies and strategies.",
      "Our services may include land title review, caveat-related matters, ownership disputes, boundary issues, property possession, sale and purchase disputes, estate property disputes and land-related court proceedings."
    ],
    icon: "ShieldAlert"
  },
  {
    number: "05",
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    subtitle: "Strategic Counsel for Businesses & Enterprises",
    paragraphs: [
      "We provide legal support to businesses, entrepreneurs, companies, investors and commercial organisations in their day-to-day and strategic activities.",
      "Our services include drafting and reviewing commercial agreements, shareholder arrangements, partnership matters, business transactions, corporate documentation, joint ventures, restructuring and general corporate advisory.",
      "We aim to help businesses understand their legal obligations, manage risks and structure their commercial relationships effectively."
    ],
    icon: "Briefcase"
  },
  {
    number: "06",
    slug: "banking-finance",
    title: "Banking & Finance",
    subtitle: "Financing Documentation & Institutional Facilities",
    paragraphs: [
      "We assist clients with legal matters relating to property financing, banking transactions and financial arrangements.",
      "Our services include bank loan documentation, property financing, refinancing, redemption of existing loans, discharge of charges, security documentation and other financing-related legal matters.",
      "We work with clients, financial institutions and relevant parties to facilitate the documentation and completion process while ensuring the necessary legal requirements are addressed."
    ],
    icon: "Receipt"
  },
  {
    number: "07",
    slug: "wills-writing",
    title: "Wills Writing",
    subtitle: "Testamentary Planning & Asset Protection",
    paragraphs: [
      "Proper estate planning can help individuals organise their assets and provide greater clarity for their families and beneficiaries.",
      "We provide legal assistance relating to Wills, inheritance and succession planning. Our services include preparation and review of Wills, estate planning, beneficiary arrangements, succession matters and legal advice concerning the future administration of assets.",
      "We work with clients to understand their circumstances and objectives and assist in putting appropriate legal arrangements in place."
    ],
    icon: "ScrollText"
  },
  {
    number: "08",
    slug: "debt-recovery",
    title: "Debt Recovery",
    subtitle: "Monies Recovery & Commercial Claims",
    paragraphs: [
      "We assist individuals and businesses in recovering outstanding debts and monies owed to them.",
      "Our approach may begin with reviewing the underlying agreement, invoices, correspondence and supporting documents to establish the basis of the claim. Where appropriate, we assist with Letters of Demand, negotiations, settlement arrangements and legal proceedings.",
      "Where a matter proceeds to court, we provide legal assistance in pursuing the claim and appropriate enforcement measures in accordance with applicable law."
    ],
    icon: "CreditCard"
  },
  {
    number: "09",
    slug: "legal-advisory-consultation",
    title: "Legal Advisory & Consultation",
    subtitle: "Objective Guidance Before Important Decisions",
    paragraphs: [
      "We provide legal consultation and advisory services to individuals, families, property owners, entrepreneurs and businesses seeking professional guidance before making important decisions.",
      "Clients may seek advice on property transactions, contracts, estate matters, business arrangements, potential disputes, legal documentation or other legal concerns.",
      "Our role is to understand the client's circumstances, identify the relevant legal issues and explain the available options in a clear and practical manner so that clients can make informed decisions."
    ],
    icon: "MessageSquare"
  },
  {
    number: "10",
    slug: "tenancy-property-management",
    title: "Tenancy & Property Management Matters",
    subtitle: "Residential & Commercial Leasing Administration",
    paragraphs: [
      "We assist landlords, tenants, property owners and businesses with legal matters relating to the occupation and management of properties.",
      "Our services include preparation and review of tenancy agreements, rental arrangements, tenancy termination, rental arrears, landlord-tenant disputes, recovery of possession and other property-related contractual matters.",
      "We help clients understand their contractual rights and obligations and provide legal assistance when disagreements or disputes arise during the tenancy."
    ],
    icon: "Key"
  }
];

/** 4. OUR LEGAL PROCESS (8 steps from the firm document) */
export interface LegalProcessStep {
  stepNumber: number;
  stepCode: string;
  title: string;
  summary: string;
  details: string[];
  documentsOrParties?: {
    label: string;
    items: string[];
  };
}

export const LEGAL_PROCESS_STEPS: LegalProcessStep[] = [
  {
    stepNumber: 1,
    stepCode: "STEP 1",
    title: "Initial Consultation",
    summary: "We first understand the client's situation, objectives and concerns.",
    details: [
      "During the initial meeting, our team listens carefully to understand the background, goals, and urgency of the client's matter."
    ],
    documentsOrParties: {
      label: "Clients may provide relevant documents such as:",
      items: [
        "Identification documents",
        "Agreements",
        "Property titles",
        "Letters",
        "Court documents",
        "Bank documents",
        "Estate documents",
        "Relevant correspondence"
      ]
    }
  },
  {
    stepNumber: 2,
    stepCode: "STEP 2",
    title: "Document & Fact Review",
    summary: "Our legal team reviews the information provided and identifies the key legal and factual issues.",
    details: [
      "Where necessary, further documents or information may be requested to ensure a thorough assessment."
    ]
  },
  {
    stepNumber: 3,
    stepCode: "STEP 3",
    title: "Legal Assessment",
    summary: "We assess the matter based on the applicable law, available evidence, contractual documents and surrounding circumstances.",
    details: [
      "The client will then be advised on the available legal options and appropriate remedies."
    ]
  },
  {
    stepNumber: 4,
    stepCode: "STEP 4",
    title: "Strategy & Engagement",
    summary: "After the client understands the proposed course of action, the firm will determine the appropriate legal strategy and scope of work.",
    details: [
      "Where applicable, an engagement or appointment letter and fee arrangement will be provided."
    ]
  },
  {
    stepNumber: 5,
    stepCode: "STEP 5",
    title: "Legal Documentation",
    summary: "Our team prepares, reviews or submits the relevant legal documents.",
    details: [
      "We prepare and execute legally binding instruments with strict compliance and attention to detail."
    ],
    documentsOrParties: {
      label: "Depending on the matter, this may involve:",
      items: [
        "Agreements",
        "Applications",
        "Court documents",
        "Land Office documents",
        "Bank documentation",
        "Estate documents",
        "Correspondence",
        "Notices",
        "Legal submissions"
      ]
    }
  },
  {
    stepNumber: 6,
    stepCode: "STEP 6",
    title: "Negotiation / Representation",
    summary: "Where required, we communicate and negotiate with external parties and provide legal representation.",
    details: [
      "For disputes, the firm may represent clients in the appropriate legal proceedings."
    ],
    documentsOrParties: {
      label: "Where required, we communicate and negotiate with:",
      items: [
        "Opposing solicitors",
        "Banks",
        "Government departments",
        "Land Offices",
        "Financial institutions",
        "Executors and beneficiaries",
        "Developers",
        "Agents",
        "Other relevant parties"
      ]
    }
  },
  {
    stepNumber: 7,
    stepCode: "STEP 7",
    title: "Completion",
    summary: "We monitor the matter through to completion and ensure the relevant documentation and legal requirements are attended to.",
    details: [
      "For property and estate matters, this may include registration, transfer, completion, distribution or other required procedures."
    ]
  },
  {
    stepNumber: 8,
    stepCode: "STEP 8",
    title: "Client Update & Record",
    summary: "Clients are kept informed of significant developments and the relevant file documentation is maintained accordingly.",
    details: [
      "We ensure organized file records, formal handover of completed documentation, and ongoing client communication."
    ]
  }
];

/** 5. WHY CHOOSE AMIN FIRDAUS MASHUDI & CO. */
export interface WhyChooseUsPillar {
  title: string;
  description: string;
  icon: string;
}

export const WHY_CHOOSE_US_PILLARS: WhyChooseUsPillar[] = [
  {
    title: "Professional Legal Practice",
    description: "We approach every matter with professionalism, confidentiality and attention to detail.",
    icon: "ShieldCheck"
  },
  {
    title: "Client-Focused",
    description: "We take time to understand each client's objectives before recommending a legal course of action.",
    icon: "Users"
  },
  {
    title: "Practical Solutions",
    description: "Our focus is not simply on identifying legal problems, but on developing practical and commercially sensible solutions.",
    icon: "Lightbulb"
  },
  {
    title: "Structured Case Management",
    description: "We use a systematic approach to documentation, communication, follow-up and case progression.",
    icon: "CheckCircle2"
  },
  {
    title: "Multidisciplinary Support",
    description: "Our practice covers property, estate, litigation, corporate and commercial matters, allowing clients to obtain legal assistance across different stages of their personal or business needs.",
    icon: "Layers"
  },
  {
    title: "Transparency",
    description: "We aim to communicate clearly regarding the legal process, documentation required, expected steps and applicable professional fees.",
    icon: "Eye"
  }
];

/** 7. OUR PROFESSIONAL VALUES */
export interface ProfessionalValue {
  title: string;
  description: string;
  icon: string;
}

export const PROFESSIONAL_VALUES: ProfessionalValue[] = [
  {
    title: "Integrity",
    description: "We conduct our practice with honesty, professionalism and responsibility.",
    icon: "ShieldCheck"
  },
  {
    title: "Confidentiality",
    description: "Client information and documents are handled with appropriate confidentiality.",
    icon: "Lock"
  },
  {
    title: "Accountability",
    description: "We believe in clear communication and responsible case management.",
    icon: "CheckSquare"
  },
  {
    title: "Precision",
    description: "Legal work requires attention to detail. We carefully review documentation, facts and procedures.",
    icon: "Target"
  },
  {
    title: "Commitment",
    description: "We are committed to protecting our clients' interests and pursuing appropriate legal solutions.",
    icon: "HeartHandshake"
  },
  {
    title: "Professional Excellence",
    description: "We continuously strive to improve our legal knowledge, systems and client service.",
    icon: "Award"
  }
];

/** 6. OUR CLIENTS */
export interface ClientCategory {
  title: string;
  scope: string;
  description: string;
  icon: string;
  highlights: string[];
}

export const OUR_CLIENTS_LIST: ClientCategory[] = [
  {
    title: "Individuals",
    scope: "Personal Legal Matters",
    description: "Legal advice and representation for personal legal matters.",
    highlights: [
      "Personal contracts & agreements",
      "Tenancy & residential occupation",
      "Dispute resolution & court representation",
      "Personal rights advisory"
    ],
    icon: "User"
  },
  {
    title: "Families",
    scope: "Estate & Family Succession",
    description: "Estate, inheritance, property and succession-related matters.",
    highlights: [
      "Will writing & estate planning",
      "Grant of Probate applications",
      "Letters of Administration (LA)",
      "Inter-family property transfers"
    ],
    icon: "Users"
  },
  {
    title: "Property Owners & Buyers",
    scope: "Real Estate Transactions & Land Rights",
    description: "Legal assistance for property transactions and disputes.",
    highlights: [
      "Sale and Purchase Agreements (SPA)",
      "Sub-sale property conveyance",
      "Private caveat entry & removal",
      "Boundary & ownership disputes"
    ],
    icon: "Home"
  },
  {
    title: "Businesses",
    scope: "Commercial Support for SMEs & Enterprises",
    description: "Corporate, commercial and contractual legal support.",
    highlights: [
      "Commercial contract drafting & review",
      "Partnership & shareholder agreements",
      "Debt recovery & demand letters",
      "Business regulatory compliance"
    ],
    icon: "Briefcase"
  },
  {
    title: "Investors",
    scope: "Strategic Real Estate & Commercial Ventures",
    description: "Legal assistance relating to property and commercial transactions.",
    highlights: [
      "Commercial property acquisition due diligence",
      "Joint venture documentation",
      "Security documentation & financing perfection",
      "Asset risk mitigation"
    ],
    icon: "TrendingUp"
  },
  {
    title: "Executors & Beneficiaries",
    scope: "Deceased Estate Administration",
    description: "Probate, Letters of Administration and estate administration.",
    highlights: [
      "Estate asset identification & gathering",
      "Transmission of estate titles",
      "Settlement of estate debts & distribution",
      "High Court representation"
    ],
    icon: "ScrollText"
  },
  {
    title: "Corporate Clients",
    scope: "Institutional & Enterprise Advisory",
    description: "Ongoing legal support, documentation and commercial matters.",
    highlights: [
      "Ongoing commercial counsel",
      "Corporate governance & restructuring",
      "Banking & financing perfection",
      "Commercial dispute management"
    ],
    icon: "Building2"
  }
];
