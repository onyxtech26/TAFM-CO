/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** FAQ, Client Guide, Careers and Legal Insights content. */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  id: string;
  title: string;
  items: FAQItem[];
}

export const FAQ_GROUPS: FAQGroup[] = [
  {
    id: "working-with-us",
    title: "About working with us",
    items: [
      {
        question: "How do I make an appointment?",
        answer:
          "Call or WhatsApp us on +60 11-5785 6100, email aminfirdausco@gmail.com, or use the form on our Contact page. Please tell us briefly what your matter involves and which office you prefer."
      },
      {
        question: "What should I bring to my first consultation?",
        answer:
          "Your identity card and any documents related to your matter, such as agreements, letters, court papers, land titles or photographs. If you are unsure, bring everything you have. See our Client Guide for a checklist by type of matter."
      },
      {
        question: "How much will it cost?",
        answer:
          "Fees depend on the type and complexity of your matter. For certain conveyancing and loan transactions, fees are regulated under the Solicitors' Remuneration Order. For other matters, fees are agreed with you. In every case, we explain the basis of our fees and expected disbursements in writing before you instruct us."
      },
      {
        question: "Do you offer online consultations?",
        answer: "Yes. We can arrange consultations by video call."
      },
      {
        question: "Which languages do you use?",
        answer: "We advise clients in Bahasa Malaysia and English."
      },
      {
        question: "Is what I tell you confidential?",
        answer:
          "Yes. Communications between you and your lawyer for the purpose of legal advice are protected by advocate–client privilege, and we are bound by professional duties of confidentiality. We also handle your personal data in accordance with the Personal Data Protection Act 2010."
      },
      {
        question: "Does contacting you through the website make you my lawyer?",
        answer:
          "No. An advocate–client relationship is only created once we have agreed to act for you and confirmed this in writing. Please do not send confidential or time-sensitive information until we have confirmed that we can act for you."
      }
    ]
  },
  {
    id: "where-we-practise",
    title: "About where we practise",
    items: [
      {
        question: "Do you only handle matters in Johor and Pahang?",
        answer:
          "No. Our Practising Certificate allows us to practise in the courts of Peninsular Malaysia, including the Federal Court, Court of Appeal, High Court in Malaya, Sessions Courts and Magistrates' Courts. We can assist with matters in other states in Peninsular Malaysia."
      },
      {
        question: "Can you handle matters in Sabah or Sarawak?",
        answer:
          "Sabah and Sarawak have separate legal professions and admission rules. For matters in those states, we can refer you or work with a locally admitted advocate."
      },
      {
        question: "Can you act for clients living in Singapore or overseas?",
        answer:
          "We can advise on matters governed by Malaysian law, such as property in Johor or estates in Malaysia, for clients who live abroad. Some documents may need to be signed before a notary public or Malaysian embassy."
      }
    ]
  },
  {
    id: "safety-verification",
    title: "About safety and verification",
    items: [
      {
        question: "How do I know your firm is genuine?",
        answer:
          "You can check our status on the Malaysian Bar Legal Directory. See our Registration & Credentials page for step-by-step instructions."
      },
      {
        question: "How do I pay the firm?",
        answer:
          "Payments for transactions are made to the firm's clients' account or office account, as stated in our official letter or invoice. We will never ask you to pay into a personal account. If in doubt, call us before paying."
      }
    ]
  }
];

export interface ChecklistGroup {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export const CLIENT_GUIDE_INTRO =
  "Coming prepared helps us understand your matter faster and give you more useful advice. Use the checklists below.";

export const CLIENT_GUIDE_CHECKLISTS: ChecklistGroup[] = [
  {
    id: "all-matters",
    title: "For all matters",
    icon: "ClipboardList",
    items: [
      "Identity card (MyKad) or passport",
      "A short written timeline of what happened, with dates",
      "Names and contact details of other parties involved",
      "Any deadlines you are aware of (court dates, payment dates, notice periods)"
    ]
  },
  {
    id: "property",
    title: "Buying or selling property",
    icon: "Home",
    items: [
      "Letter of offer or booking receipt",
      "Copy of the land title, or previous SPA if the property has no individual title",
      "Latest quit rent (cukai tanah) and assessment (cukai pintu) receipts",
      "Loan offer letter from your bank (if financing)",
      "Latest loan statement (if the property is still charged to a bank)"
    ]
  },
  {
    id: "disputes",
    title: "Disputes and debt recovery",
    icon: "Scale",
    items: [
      "The agreement, quotation, invoice or purchase order",
      "WhatsApp messages, emails and letters exchanged",
      "Proof of payment or non-payment",
      "Any letter of demand or court documents received"
    ]
  },
  {
    id: "criminal",
    title: "Criminal matters",
    icon: "ShieldAlert",
    items: [
      "Charge sheet, bail documents or police notices",
      "Police report (if any)",
      "Names of officers and police station involved"
    ]
  },
  {
    id: "family",
    title: "Divorce and family matters",
    icon: "Users",
    items: [
      "Marriage certificate",
      "Children's birth certificates",
      "List of assets and liabilities (property, vehicles, savings, loans)",
      "Any existing court orders or agreements"
    ]
  },
  {
    id: "estate",
    title: "Estate matters",
    icon: "FileText",
    items: [
      "Death certificate",
      "Original will (if any)",
      "Identity cards of beneficiaries",
      "Documents showing assets: land titles, bank books, EPF, ASB, shares, vehicle grants",
      "Details of any debts"
    ]
  },
  {
    id: "employment",
    title: "Employment matters",
    icon: "UserCheck",
    items: [
      "Offer letter and employment contract",
      "Payslips",
      "Show-cause letters, warning letters, termination letter",
      "Company handbook or policies"
    ]
  },
  {
    id: "accident",
    title: "Accident claims",
    icon: "Car",
    items: [
      "Police report and sketch plan (if available)",
      "Medical reports and hospital bills",
      "Photos of the scene, vehicles and injuries",
      "Proof of income (payslips, EPF statements)",
      "Vehicle repair quotations"
    ]
  }
];

export const CAREERS_INTRO =
  "Amin Firdaus Mashudi & Co. is a growing firm. We look for people who are diligent, honest and committed to serving clients well. If you would like to build your career in a supportive environment with direct exposure to a wide range of legal work, we would like to hear from you.";

export const CAREERS_WHY_JOIN = [
  {
    title: "Hands-on exposure",
    icon: "Briefcase",
    text: "Work directly with the principal on real files across conveyancing, litigation and advisory work."
  },
  {
    title: "Learning culture",
    icon: "GraduationCap",
    text: "Guidance, feedback and encouragement to develop your skills."
  },
  {
    title: "Growth",
    icon: "TrendingUp",
    text: "As the firm grows, so do opportunities for responsibility and advancement."
  },
  {
    title: "Locations",
    icon: "MapPin",
    text: "Opportunities in Skudai, Johor Bahru and Kuantan."
  }
];

export interface CareerOpening {
  title: string;
  description: string;
}

export const CAREER_OPENINGS: CareerOpening[] = [
  {
    title: "Legal Associate (Advocate & Solicitor)",
    description:
      "For admitted Advocates & Solicitors of the High Court in Malaya with a valid Practising Certificate, or eligibility to obtain one. Fresh and junior lawyers are welcome to apply. Interest in conveyancing and/or litigation is preferred."
  },
  {
    title: "Conveyancing Executive / Clerk",
    description:
      "Experience in handling sale and purchase, loan and transfer files, and Land Office procedures is an advantage."
  },
  {
    title: "Litigation Clerk",
    description:
      "Responsible for court filings, e-Filing, service of documents and diary management."
  },
  {
    title: "Legal Secretary / Administrative Assistant",
    description:
      "Responsible for correspondence, client appointments, billing support and filing."
  },
  {
    title: "Internship (Law Students)",
    description:
      "Short-term placements for law students to gain exposure to legal practice, including legal research, document preparation and court attendance."
  }
];

export const CAREERS_HOW_TO_APPLY = {
  instruction:
    "Email your CV, a short cover letter, and copies of your academic results to aminfirdausco@gmail.com with the subject line: “Application – [Position] – [Preferred Office]”.",
  shortlistNote: "Only shortlisted candidates will be contacted.",
  privacyNote:
    "Personal data submitted in job applications will be used only for recruitment purposes and handled in accordance with our Privacy Notice."
};

export interface ArticleTopic {
  title: string;
  summary: string;
  area: string;
}

export const ARTICLES_INTRO =
  "Practical explanations of everyday legal issues in Malaysia. These are the topics we are preparing for publication.";

export const ARTICLE_TOPICS: ArticleTopic[] = [
  {
    title: "Buying a Sub-Sale House in Johor: A Step-by-Step Legal Guide",
    summary: "Searches, SPA, deposit, completion period, and costs to budget for.",
    area: "Conveyancing & Property"
  },
  {
    title: "What Is a Love and Affection Transfer?",
    summary: "Who qualifies, stamp duty treatment, and the documents needed.",
    area: "Conveyancing & Property"
  },
  {
    title: "Tenancy Agreements in Malaysia: 10 Clauses Every Landlord and Tenant Should Check",
    summary: "Deposits, repairs, early termination and rent increases.",
    area: "Conveyancing & Property"
  },
  {
    title: "Joint Petition Divorce: How It Works for Non-Muslim Couples",
    summary: "Requirements, the two-year rule, and what the agreement should cover.",
    area: "Family Law"
  },
  {
    title: "Probate or Letters of Administration? Understanding the Difference",
    summary: "With or without a will, where to apply, and typical documents.",
    area: "Wills, Probate & Estates"
  },
  {
    title: "Why You Should Write a Will (and What Happens If You Don't)",
    summary: "Wills Act 1959, Distribution Act 1958, and a faraid overview.",
    area: "Wills, Probate & Estates"
  },
  {
    title: "Arrested? Know Your Rights Under Malaysian Law",
    summary: "Article 5 of the Federal Constitution, Section 28A CPC, remand and bail basics.",
    area: "Criminal Law"
  },
  {
    title: "Unfairly Dismissed? The 60-Day Deadline You Must Not Miss",
    summary: "Section 20 of the Industrial Relations Act 1967.",
    area: "Employment"
  },
  {
    title: "Road Accident in Malaysia: What to Do in the First 24 Hours",
    summary: "Police report, evidence, and dealing with insurers.",
    area: "Accident Claims"
  },
  {
    title: "Recovering a Debt: From Letter of Demand to Court Judgment",
    summary: "The process and the court jurisdiction limits.",
    area: "Civil Litigation"
  },
  {
    title: "Sole Proprietorship, Partnership or Sdn Bhd? Choosing a Business Structure",
    summary: "Liability, registration and compliance.",
    area: "Corporate & Commercial"
  },
  {
    title: "How to Check if a Lawyer Is Genuine Before You Pay",
    summary: "The Malaysian Bar directory, clients' accounts and common scams.",
    area: "Client Safety"
  }
];
