/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LegalService, WhyChooseUsItem, StatItem, ProcessStep, ExperienceArea } from './types';

export const FIRM_INFO = {
  name: "Tetuan Amin Firdaus Mashudi & Co.",
  tagline: "Protecting Your Rights. Guiding Your Future.",
  shortDescription: "Tetuan Amin Firdaus Mashudi & Co. provides professional legal solutions with integrity, dedication, and strategic advice.",
  aboutDetailed: "Tetuan Amin Firdaus Mashudi & Co. is a Malaysian legal practice dedicated to delivering reliable legal representation and practical solutions for individuals, businesses, and organisations. Guided by the highest principles of advocacy, we represent our clients with diligence and resolve.",
  lawyerName: "Muhammad Amin Firdaus Bin Mashudi",
  position: "Advocate & Solicitor (Peguambela & Peguamcara)",
  qualifications: [
    { school: "Universiti Utara Malaysia (UUM)", degree: "Bachelor of Laws (LLB)" },
    { school: "Universiti Malaya (UM)", degree: "Master of Laws (LLM)" }
  ],
  admission: "Admitted as an Advocate & Solicitor of the High Court of Malaya",
  location: "Kuantan, Pahang, Malaysia",
  address: {
    line1: "22, Lorong Berjaya Permai 30,",
    line2: "Taman Berjaya Permai,",
    line3: "Kempadang,",
    city: "25150 Kuantan,",
    state: "Pahang"
  },
  contacts: [
    { label: "Main Office Line", value: "010-252 0859", url: "tel:0102520859" },
    { label: "Secondary Office Line", value: "011-5175 4152", url: "tel:01151754152" }
  ],
  whatsapp: {
    number: "60102520859",
    message: "Assalamualaikum Tetuan Amin Firdaus Mashudi & Co. I would like to seek legal consultation regarding..."
  },
  email: "moamien89@gmail.com",
};

export const SERVICES: LegalService[] = [
  {
    id: "corp-comm",
    title: "Corporate & Commercial Law",
    description: "Comprehensive legal advisory for businesses encompassing corporate matters, contract drafting, regulatory compliance, and commercial transactions.",
    iconName: "Briefcase",
    details: [
      "Company Formation & Structuring",
      "Drafting & Reviewing Commercial Contracts",
      "Shareholder Agreements & Joint Ventures",
      "Regulatory & Corporate Compliance Advisory",
      "Partnership & Vendor Agreements"
    ]
  },
  {
    id: "civil-lit",
    title: "Civil Litigation & Dispute Resolution",
    description: "Professional and assertive representation for civil disputes, multi-party claims, settlement negotiations, and court proceedings.",
    iconName: "Scale",
    details: [
      "Contractual Disputes & Breach Claims",
      "Debt Recovery & Insolvency Proceedings",
      "Torts & Defamation Claims",
      "Injunctions & Urgent Court Reliefs",
      "Alternative Dispute Resolution (ADR)"
    ]
  },
  {
    id: "property-conv",
    title: "Property & Conveyancing",
    description: "Seamless legal assistance with property acquisitions, divestments, financing, tenancy agreements, and intricate ownership transfers.",
    iconName: "Home",
    details: [
      "Sale and Purchase Agreements (SPA)",
      "Loan Documentation & Property Financing",
      "Transfer of Land Titles & Charge Registrations",
      "Tenancy & Commercial Lease Agreements",
      "Perfection of Transfer & Charge"
    ]
  },
  {
    id: "employment",
    title: "Employment & Industrial Relations",
    description: "Guidance on employment contracts, workplace regulations, industrial disputes, and employee-employer legal matters.",
    iconName: "Users",
    details: [
      "Employment Agreements & Policies",
      "Unfair Dismissal & Constructive Dismissal Claims",
      "Industrial Court Representation",
      "Retrenchment & Restructuring Compliance",
      "Mutual Separation Schemes (MSS)"
    ]
  },
  {
    id: "family-law",
    title: "Family Law",
    description: "Professional assistance for sensitive family-related legal matters, ensuring privacy, confidentiality, and legal protection.",
    iconName: "HeartHandshake",
    details: [
      "Civil Divorce Proceedings",
      "Child Custody, Care & Control Applications",
      "Spousal Maintenance & Alimony",
      "Distribution of Matrimonial Assets",
      "Deeds of Separation & Settlement Agreements"
    ]
  },
  {
    id: "estate-planning",
    title: "Wills, Probate & Estate Planning",
    description: "Helping clients safeguard their wealth, structure inheritance, draft valid wills, and apply for probate and letters of administration.",
    iconName: "FileText",
    details: [
      "Wills Drafting & Wealth Allocation",
      "Grant of Probate Applications",
      "Letters of Administration (LA)",
      "Distribution of Estate Assets",
      "Trusts Setup & Advisory"
    ]
  },
  {
    id: "criminal-defence",
    title: "Criminal Defence",
    description: "Aggressive advocacy and meticulous legal representation to defend the rights of individuals in criminal-related matters.",
    iconName: "ShieldAlert",
    details: [
      "Bail Applications & Mitigation",
      "Representation During Remand & Investigations",
      "Defence for Penal Code & Statutory Offences",
      "Appeals to Higher Courts",
      "Compliance & White-Collar Investigation Support"
    ]
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    description: "Strategic protection and advisory services relating to trademarks, brand protection, and intellectual property rights.",
    iconName: "Award",
    details: [
      "Trademark Searching & Registration",
      "IP Licensing & Assignment Agreements",
      "Brand Advisory & Protection Strategies",
      "Cease and Desist Notices",
      "IP Dispute Consultation"
    ]
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "expertise",
    title: "Professional Expertise",
    description: "Providing knowledgeable legal advice backed by dual prestigious Malaysian law degrees (LLB UUM, LLM UM) and deep local procedural insights.",
    iconName: "GraduationCap"
  },
  {
    id: "client-focus",
    title: "Client-Focused Approach",
    description: "Every legal issue receives personalized attention. We actively listen, communicate clearly, and craft tailor-made strategies that align with your goals.",
    iconName: "Sparkles"
  },
  {
    id: "integrity",
    title: "Integrity & Confidentiality",
    description: "Adhering to the strictest ethical standards of the Malaysian Bar, ensuring client files and disclosures are guarded with ultimate confidentiality.",
    iconName: "ShieldCheck"
  },
  {
    id: "practical-solutions",
    title: "Practical Legal Solutions",
    description: "We bypass legal jargon to offer clear, actionable, and pragmatic avenues focused on resolving disputes and securing transactions efficiently.",
    iconName: "Zap"
  }
];

export const STATS: StatItem[] = [
  {
    id: "stat-years",
    value: "12+",
    numericValue: 12,
    label: "Years of Dedication",
    suffix: "+"
  },
  {
    id: "stat-matters",
    value: "850+",
    numericValue: 850,
    label: "Legal Matters Resolved",
    suffix: "+"
  },
  {
    id: "stat-clients",
    value: "99%",
    numericValue: 99,
    label: "Client Trust & Satisfaction",
    suffix: "%"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: "Initial Consultation",
    description: "Understand your legal concerns and objectives.",
    details: "We conduct an in-depth conversation via phone, email, video conference, or in person at our Kuantan office to thoroughly grasp the facts, timeline, and goals surrounding your legal query."
  },
  {
    stepNumber: 2,
    title: "Case Assessment",
    description: "Review documents, facts, and possible legal strategies.",
    details: "We analyze all relevant documentation, identify underlying legal issues, evaluate strengths and potential challenges, and present a honest diagnostic assessment of your rights and risks."
  },
  {
    stepNumber: 3,
    title: "Legal Strategy",
    description: "Develop the most suitable approach based on your situation.",
    details: "We map out an optimal pathway, detailing legal remedies, draft specific contracts, or design a dispute strategy including transparent breakdowns of estimated timelines and costs."
  },
  {
    stepNumber: 4,
    title: "Representation & Resolution",
    description: "Provide professional assistance until resolution.",
    details: "Whether negotiating complex out-of-court settlements, filing conveyancing documents, drafting company policies, or providing robust courtroom advocacy, we stand by you until final resolution."
  }
];

export const EXPERIENCE_AREAS: ExperienceArea[] = [
  {
    id: "exp-corp",
    title: "Corporate Matters",
    description: "Drafting robust commercial agreements, compliance frameworks, and advising local SMEs and business owners in Pahang.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "exp-prop",
    title: "Property Transactions",
    description: "Facilitating smooth residential and commercial property conveyancing, developer contracts, and security charges.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "exp-disputes",
    title: "Civil Disputes",
    description: "Representing individual and corporate clients in breach of contract claims, debt recovery, tenancy, and corporate disputes.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "exp-agreements",
    title: "Commercial Agreements",
    description: "Structuring highly-tailored commercial arrangements including shareholder, partnership, franchise, and vendor contracts.",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "exp-estate",
    title: "Estate Planning",
    description: "Protecting family legacies through drafted wills, trusts, and successful applications for Grants of Probate and Letters of Administration.",
    imageUrl: "https://images.unsplash.com/photo-1505664194779-8bebcb95c539?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "exp-advisory",
    title: "Legal Advisory",
    description: "Providing ongoing retainer legal counsel, risk analysis, and strategic risk-mitigation advisories for local businesses.",
    imageUrl: "https://images.unsplash.com/photo-1521791136364-728647530e59?auto=format&fit=crop&q=80&w=600"
  }
];
