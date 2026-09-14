/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The eight practice areas of Amin Firdaus Mashudi & Co.
 *
 * COMPLIANCE NOTE — Legal Profession (Publicity) Rules 2025:
 * Practice-area copy must describe what we do, not how well we do it.
 * Never add fee amounts, success rates, "expert"/"specialist" claims,
 * client names, case names or testimonials to this file.
 *
 * The `heroImage` values are generic stock placeholders held for future use.
 * Replace them with the firm's own photographs before displaying any of them,
 * and never caption a stock photograph as the firm's own premises.
 */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface HowWeHelpGroup {
  heading?: string;
  items: string[];
}

export interface Definition {
  term: string;
  text: string;
}

export interface ExtraSection {
  title: string;
  intro?: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: boolean;
  definitions?: Definition[];
  callout?: boolean;
}

export interface PracticeArea {
  slug: string;
  title: string;
  navTitle: string;
  cardLine: string;
  icon: string;
  emoji: string;
  heroImage: string;
  intro: string;
  howWeHelp: HowWeHelpGroup[];
  note?: string;
  processTitle?: string;
  processSteps?: ServiceProcessStep[];
  extraSections?: ExtraSection[];
  faqs: ServiceFAQ[];
  ctaLead?: string;
  ctaLabel: string;
  relevantLaws: string[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    slug: "conveyancing-property",
    title: "Conveyancing & Property Transactions",
    navTitle: "Conveyancing & Property",
    cardLine:
      "Sale and purchase agreements, loan documentation, transfers, tenancy, and land matters.",
    icon: "Home",
    emoji: "🏠",
    heroImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Buying, selling, financing or transferring property involves legal documents, stamp duty, government filings and strict deadlines. A mistake at any stage can delay completion or put your money at risk. We act for purchasers, vendors, borrowers and financiers in residential, commercial, industrial and agricultural property transactions, and guide you through each stage from search to registration.",
    howWeHelp: [
      {
        heading: "Sale and purchase",
        items: [
          "Sub-sale (secondary market) purchases and sales",
          "Purchases of new properties from licensed housing developers",
          "Sale and purchase of commercial, industrial and agricultural land",
          "Auction property purchases",
          "Properties with individual titles, strata titles, and properties still under master title",
          "Deeds of assignment for properties without individual or strata title"
        ]
      },
      {
        heading: "Financing",
        items: [
          "Loan and facility agreements for housing and commercial property loans",
          "Charge and assignment documentation",
          "Refinancing of existing loans",
          "Discharge of charge and redemption of loans"
        ]
      },
      {
        heading: "Transfers",
        items: [
          "Transfers between family members (love and affection transfers)",
          "Transfers following a divorce settlement or estate distribution",
          "Transfer of undivided shares"
        ]
      },
      {
        heading: "Land matters",
        items: [
          "State Authority consent applications for land with restrictions in interest",
          "Matters involving FELDA land and land under the Land (Group Settlement Areas) Act 1960",
          "Title searches, private searches and bankruptcy searches",
          "Caveat entry and removal"
        ]
      },
      {
        heading: "Tenancy",
        items: [
          "Tenancy agreements for residential and commercial premises",
          "Renewal, termination and recovery of rental arrears",
          "Stamping of tenancy agreements"
        ]
      },
      {
        heading: "Tax and duties",
        items: [
          "Stamp duty assessment and adjudication",
          "Real Property Gains Tax (RPGT) filings on disposal"
        ]
      }
    ],
    processTitle: "The sub-sale purchase process",
    processSteps: [
      {
        stepNumber: 1,
        title: "Searches and checks",
        description:
          "We conduct a land title search to confirm ownership, encumbrances and restrictions, and a bankruptcy or company search on the vendor."
      },
      {
        stepNumber: 2,
        title: "Sale and Purchase Agreement",
        description:
          "We prepare or review the SPA, advise on the terms, and arrange signing."
      },
      {
        stepNumber: 3,
        title: "Stamping",
        description: "The SPA is stamped within the time required by law."
      },
      {
        stepNumber: 4,
        title: "Consent and loan documents",
        description:
          "Where the land requires State Authority consent, we apply for it. If you are taking a loan, the loan documents are prepared and executed."
      },
      {
        stepNumber: 5,
        title: "Completion",
        description:
          "The balance purchase price is paid within the completion period stated in the SPA."
      },
      {
        stepNumber: 6,
        title: "Registration and handover",
        description:
          "The Memorandum of Transfer (and charge, if any) is presented for registration at the Land Office, and vacant possession is delivered."
      }
    ],
    faqs: [
      {
        question: "How long does a sub-sale transaction take?",
        answer:
          "It depends on the terms of the SPA. Many sub-sale agreements provide a completion period of about three months, often with an extension period. Transactions that need State Authority consent, or where the property is under master title, usually take longer."
      },
      {
        question: "What documents should I prepare?",
        answer:
          "Copies of your identity card, the property title or previous SPA (if selling), the latest quit rent (cukai tanah) and assessment (cukai pintu) receipts, and your loan offer letter if you are financing the purchase."
      },
      {
        question: "How are conveyancing legal fees calculated?",
        answer:
          "Legal fees for many conveyancing transactions are regulated by law under the Solicitors' Remuneration Order. We will give you a written breakdown of fees, stamp duty and disbursements before you instruct us."
      },
      {
        question: "Do I need a lawyer for a tenancy agreement?",
        answer:
          "It is not compulsory, but a properly drafted tenancy agreement protects both landlord and tenant on deposits, repairs, rental increases, early termination and recovery of premises."
      }
    ],
    ctaLead: "Buying or selling property?",
    ctaLabel: "Speak with us about your transaction",
    relevantLaws: [
      "National Land Code (Revised 2020)",
      "Solicitors' Remuneration Order",
      "Stamp Act 1949",
      "Real Property Gains Tax Act 1976",
      "Land (Group Settlement Areas) Act 1960",
      "Housing Development (Control and Licensing) Act 1966"
    ],
    relatedSlugs: ["civil-commercial-litigation", "wills-probate-estates", "corporate-commercial"],
    metaTitle: "Conveyancing Lawyer Skudai & Johor Bahru | Property Law",
    metaDescription:
      "SPA, loan documents, transfers, tenancy and land matters for buyers, sellers and banks in Johor and Pahang."
  },
  {
    slug: "civil-commercial-litigation",
    title: "Civil & Commercial Litigation",
    navTitle: "Civil & Commercial Litigation",
    cardLine:
      "Contract disputes, debt recovery, injunctions, and enforcement of judgments.",
    icon: "Scale",
    emoji: "⚖️",
    heroImage:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200",
    intro:
      "When a dispute cannot be resolved by discussion, you need clear advice on your rights, the risks of going to court, and the most practical way forward. We act for individuals and businesses in civil claims and defences before the Magistrates' Courts, Sessions Courts, High Court and appellate courts, and we also consider negotiation and mediation where they may resolve a matter more efficiently.",
    howWeHelp: [
      {
        heading: "Disputes and claims",
        items: [
          "Breach of contract",
          "Debt recovery for individuals and businesses",
          "Property and land disputes",
          "Landlord and tenant disputes, including recovery of premises and rental arrears",
          "Defamation",
          "Negligence and professional negligence",
          "Construction and renovation disputes",
          "Partnership and shareholder disputes"
        ]
      },
      {
        heading: "Urgent court applications",
        items: [
          "Injunctions to preserve assets or stop wrongful acts",
          "Removal of caveats"
        ]
      },
      {
        heading: "After judgment",
        items: [
          "Enforcement of judgments, including writs of seizure and sale, garnishee proceedings and judgment debtor summons",
          "Bankruptcy proceedings against individuals",
          "Winding-up proceedings against companies"
        ]
      },
      {
        heading: "Appeals",
        items: ["Appeals to the High Court and Court of Appeal"]
      }
    ],
    processTitle: "How a civil claim usually proceeds",
    processSteps: [
      {
        stepNumber: 1,
        title: "Case assessment",
        description:
          "We review your documents and advise on the merits, likely costs, and time frame."
      },
      {
        stepNumber: 2,
        title: "Letter of demand",
        description:
          "Many disputes begin with a formal demand, which sometimes resolves the matter without court."
      },
      {
        stepNumber: 3,
        title: "Filing",
        description:
          "If needed, we file a Writ and Statement of Claim (or a Defence, if you are sued) in the appropriate court."
      },
      {
        stepNumber: 4,
        title: "Case management",
        description:
          "The court sets directions for documents and witnesses. Parties may be directed to mediation."
      },
      {
        stepNumber: 5,
        title: "Hearing or trial",
        description:
          "Some cases are decided on documents (for example, summary judgment); others proceed to full trial."
      },
      {
        stepNumber: 6,
        title: "Judgment and enforcement",
        description:
          "If judgment is obtained and not paid, we take enforcement steps. Either party may appeal."
      }
    ],
    faqs: [
      {
        question: "Which court will hear my case?",
        answer:
          "It generally depends on the value of the claim. The Magistrates' Court hears civil claims of up to RM100,000, the Sessions Court hears claims of up to RM1 million, and the High Court hears claims above that and certain types of matters regardless of value."
      },
      {
        question: "Is there a time limit to sue?",
        answer:
          "Yes. Under the Limitation Act 1953, many claims in contract and tort must generally be filed within six years, and some claims, such as those against public authorities, have shorter limits. Get advice early so your rights are not lost."
      },
      {
        question: "Can I recover my legal costs if I win?",
        answer:
          "The court may order the losing party to pay costs, but the amount awarded is at the court's discretion and may not cover all of your actual legal fees."
      },
      {
        question: "Do I have to go to court?",
        answer:
          "Not always. Many disputes settle after a letter of demand, during negotiations, or at mediation."
      }
    ],
    ctaLead: "Facing a dispute?",
    ctaLabel: "Get advice on your options",
    relevantLaws: [
      "Rules of Court 2012",
      "Limitation Act 1953",
      "Contracts Act 1950",
      "Courts of Judicature Act 1964",
      "Subordinate Courts Act 1948",
      "Insolvency Act 1967",
      "Companies Act 2016"
    ],
    relatedSlugs: ["corporate-commercial", "conveyancing-property", "employment"],
    metaTitle: "Civil Litigation Lawyer Johor Bahru | Debt Recovery",
    metaDescription:
      "Contract disputes, debt recovery, injunctions and enforcement of judgments in Malaysian courts."
  },
  {
    slug: "criminal-law",
    title: "Criminal Law",
    navTitle: "Criminal Law",
    cardLine: "Advice during investigation, bail, trial representation, and appeals.",
    icon: "ShieldAlert",
    emoji: "🛡️",
    heroImage:
      "https://images.unsplash.com/photo-1505664194779-8bebcb95c539?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Being investigated, arrested or charged with an offence is stressful and the consequences can be serious. Early legal advice matters. We advise and represent persons at every stage of the criminal process, from police investigation to trial and appeal, and ensure that your rights are protected.",
    howWeHelp: [
      {
        heading: "During investigation",
        items: [
          "Advice before and during police or agency interviews and recording of statements",
          "Attendance at remand hearings",
          "Advice on your rights upon arrest"
        ]
      },
      {
        heading: "Bail and charge",
        items: [
          "Bail applications and variation of bail conditions",
          "Representations to the Deputy Public Prosecutor for reduction or withdrawal of charges"
        ]
      },
      {
        heading: "Trial and sentencing",
        items: [
          "Representation at trial in the Magistrates' Courts, Sessions Courts and High Court",
          "Pleas in mitigation where a person pleads guilty"
        ]
      },
      {
        heading: "Appeals",
        items: ["Criminal appeals to the High Court and Court of Appeal"]
      },
      {
        heading: "Types of offences",
        items: [
          "Offences under the Penal Code",
          "Drug offences under the Dangerous Drugs Act 1952",
          "Road traffic offences under the Road Transport Act 1987",
          "Offences under the Malaysian Anti-Corruption Commission Act 2009",
          "Online and communications offences under the Communications and Multimedia Act 1998",
          "Domestic violence matters",
          "Other statutory offences"
        ]
      }
    ],
    extraSections: [
      {
        title: "If you or a family member has been arrested",
        callout: true,
        items: [
          "Stay calm and be polite to the officers.",
          "You have the right to be informed of the grounds of your arrest and to consult a legal practitioner of your choice (Article 5(3) of the Federal Constitution; Section 28A of the Criminal Procedure Code).",
          "Ask to contact a lawyer or family member.",
          "Do not sign any document you do not understand.",
          "Contact us as soon as possible: +60 11-5785 6100."
        ]
      }
    ],
    faqs: [
      {
        question: "How long can the police hold someone?",
        answer:
          "A person arrested must be brought before a Magistrate within 24 hours. After that, further detention for investigation (remand) must be authorised by a Magistrate and is limited by law, depending on the seriousness of the offence."
      },
      {
        question: "Will I get bail?",
        answer:
          "It depends on whether the offence is bailable, the seriousness of the charge, and the circumstances of the case. For some offences, bail is not available by law. We will advise you on your specific situation."
      },
      {
        question: "What is a representation?",
        answer:
          "It is a formal written request to the Deputy Public Prosecutor asking for a charge to be reduced, amended or withdrawn, based on the facts and law. It can be made before or during trial."
      }
    ],
    ctaLead: "Need urgent criminal law assistance?",
    ctaLabel: "Call +60 11-5785 6100",
    relevantLaws: [
      "Criminal Procedure Code (Act 593)",
      "Federal Constitution (Article 5)",
      "Penal Code (Act 574)",
      "Dangerous Drugs Act 1952",
      "Road Transport Act 1987",
      "Malaysian Anti-Corruption Commission Act 2009",
      "Communications and Multimedia Act 1998"
    ],
    relatedSlugs: ["family-law", "civil-commercial-litigation", "accident-personal-injury"],
    metaTitle: "Criminal Lawyer Johor Bahru & Kuantan | Bail & Trials",
    metaDescription:
      "Advice during investigation, remand and bail, trial representation and appeals in Peninsular Malaysia."
  },
  {
    slug: "family-law",
    title: "Family Law",
    navTitle: "Family Law",
    cardLine:
      "Divorce, custody, maintenance, division of matrimonial assets, and adoption.",
    icon: "Users",
    emoji: "👪",
    heroImage:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Family matters are personal and often emotional. We handle them with sensitivity and discretion, while giving you clear and practical advice on your rights and your children's welfare. We act in divorce, custody, maintenance and related matters under the civil family law system.",
    howWeHelp: [
      {
        items: [
          "Divorce by joint petition (mutual consent)",
          "Divorce by single petition (contested)",
          "Custody, care and control of children, and access arrangements",
          "Maintenance for spouse and children",
          "Division of matrimonial assets",
          "Variation of existing court orders",
          "Adoption",
          "Protection orders under the Domestic Violence Act 1994",
          "Separation and settlement agreements"
        ]
      }
    ],
    note:
      "Note for Muslim clients: Divorce, custody (hadhanah), nafkah, and harta sepencarian for Muslims are heard in the Syariah Courts. We can provide general guidance and refer you to a Peguam Syarie for Syariah Court proceedings.",
    extraSections: [
      {
        title: "Joint petition vs single petition",
        definitions: [
          {
            term: "Joint petition",
            text: "Both spouses agree to divorce and agree on arrangements such as custody, maintenance and division of assets. This is usually the faster and less costly route."
          },
          {
            term: "Single petition",
            text: "One spouse files for divorce when the other does not agree. The petitioner must generally show that the marriage has irretrievably broken down. The matter usually first goes through a conciliation process before the petition is filed."
          }
        ]
      }
    ],
    faqs: [
      {
        question: "How soon after marriage can we file for divorce?",
        answer:
          "For civil marriages, a divorce petition generally cannot be filed within two years of the date of marriage, except in exceptional circumstances with the court's leave."
      },
      {
        question: "Who gets custody of the children?",
        answer:
          "The court decides based on the welfare of the child as the main consideration. Parents can also agree on custody arrangements, which the court will usually record if they are in the child's interest."
      },
      {
        question: "Do I need to attend court?",
        answer:
          "In most divorce matters, the parties are required to attend the hearing. We will prepare you for what to expect."
      }
    ],
    ctaLabel: "Speak with us in confidence",
    relevantLaws: [
      "Law Reform (Marriage and Divorce) Act 1976",
      "Guardianship of Infants Act 1961",
      "Domestic Violence Act 1994",
      "Adoption Act 1952"
    ],
    relatedSlugs: ["wills-probate-estates", "conveyancing-property", "criminal-law"],
    metaTitle: "Divorce & Family Lawyer Johor Bahru | Custody & Maintenance",
    metaDescription:
      "Joint and single petition divorce, custody, maintenance and division of matrimonial assets."
  },
  {
    slug: "wills-probate-estates",
    title: "Wills, Probate & Estate Administration",
    navTitle: "Wills, Probate & Estates",
    cardLine: "Will writing, Grant of Probate, and Letters of Administration.",
    icon: "FileText",
    emoji: "📜",
    heroImage:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Planning your estate protects your family from uncertainty and delay. When a loved one passes away, dealing with their assets can feel overwhelming. We help clients prepare wills, and we assist families, executors and administrators to obtain the necessary grants and distribute estates according to law.",
    howWeHelp: [
      {
        heading: "Estate planning",
        items: [
          "Preparation of wills for non-Muslims under the Wills Act 1959",
          "Estate planning guidance for Muslim clients, including wasiat and hibah documentation, with reference to faraid principles",
          "Appointment of executors and guardians for minor children"
        ]
      },
      {
        heading: "Estate administration",
        items: [
          "Applications for Grant of Probate (where there is a will)",
          "Applications for Letters of Administration (where there is no will)",
          "Advice on whether an estate should be handled by the High Court, the Estate Distribution Unit (Unit Pembahagian Pusaka), or Amanah Raya Berhad",
          "Collection of assets, payment of debts, and distribution to beneficiaries",
          "Transfer of land and property to beneficiaries"
        ]
      }
    ],
    extraSections: [
      {
        title: "Probate vs Letters of Administration",
        definitions: [
          {
            term: "Grant of Probate",
            text: "Issued by the High Court where the deceased left a valid will. It confirms the executor's authority to manage the estate."
          },
          {
            term: "Letters of Administration",
            text: "Issued where there is no valid will. The court appoints an administrator, and the estate is distributed under the Distribution Act 1958 (for non-Muslims) or according to faraid (for Muslims)."
          }
        ]
      },
      {
        title: "Documents usually needed",
        items: [
          "Death certificate",
          "Original will (if any)",
          "Identity cards of the executor/administrator and beneficiaries",
          "Marriage and birth certificates to show relationships",
          "List of assets and liabilities (land titles, bank statements, EPF, shares, vehicles, loans)"
        ]
      }
    ],
    faqs: [
      {
        question: "Who can make a will?",
        answer:
          "Under the Wills Act 1959, a person of sound mind aged 18 or above may make a will. The will must be signed in the presence of two witnesses, who should not be beneficiaries or spouses of beneficiaries."
      },
      {
        question: "What happens if someone dies without a will?",
        answer:
          "The estate is distributed according to law, and someone must apply to be appointed administrator. This usually takes longer and may involve additional steps, such as obtaining sureties."
      },
      {
        question: "Can Muslims make a will?",
        answer:
          "Yes, but a wasiat is generally limited to one-third of the estate and cannot be made in favour of faraid heirs without the consent of the other heirs. Hibah is another estate planning tool. We will explain the options."
      }
    ],
    ctaLabel: "Plan your estate or get help with an estate",
    relevantLaws: [
      "Wills Act 1959",
      "Probate and Administration Act 1959",
      "Distribution Act 1958",
      "Small Estates (Distribution) Act 1955"
    ],
    relatedSlugs: ["family-law", "conveyancing-property", "civil-commercial-litigation"],
    metaTitle: "Wills, Probate & Letters of Administration | Johor & Pahang",
    metaDescription:
      "Will writing, Grant of Probate, Letters of Administration and estate distribution in Malaysia."
  },
  {
    slug: "corporate-commercial",
    title: "Corporate & Commercial",
    navTitle: "Corporate & Commercial",
    cardLine:
      "Business agreements, partnership and shareholder documents, and business setup advice.",
    icon: "Briefcase",
    emoji: "🏢",
    heroImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Good legal documents prevent disputes before they start. We advise business owners, start-ups and SMEs on setting up and structuring their businesses, preparing and reviewing commercial agreements, and managing everyday legal risks.",
    howWeHelp: [
      {
        heading: "Business setup and structure",
        items: [
          "Advice on choosing between sole proprietorship, partnership, limited liability partnership (LLP) and private limited company (Sdn. Bhd.)",
          "Partnership agreements",
          "Shareholders' agreements",
          "Coordination with licensed company secretaries for company incorporation and compliance under the Companies Act 2016"
        ]
      },
      {
        heading: "Commercial agreements",
        items: [
          "Sale of goods and supply agreements",
          "Service agreements",
          "Distribution and agency agreements",
          "Joint venture agreements",
          "Non-disclosure and confidentiality agreements",
          "Loan and security documentation",
          "Settlement agreements"
        ]
      },
      {
        heading: "Ongoing business support",
        items: [
          "Review of terms and conditions for businesses",
          "Personal Data Protection Act 2010 compliance documents (privacy notices, consent forms)",
          "Letters of demand and commercial debt recovery",
          "Employment contracts and HR documentation"
        ]
      }
    ],
    extraSections: [
      {
        title: "Why have agreements reviewed?",
        paragraphs: [
          "A clear agreement sets out each party's obligations, payment terms, what happens if something goes wrong, and how disputes are resolved. Many business disputes arise from informal arrangements or agreements copied from templates that do not fit the actual deal."
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need a lawyer to register a company?",
        answer:
          "Company incorporation is done through the Companies Commission of Malaysia (SSM), and a company must appoint a licensed company secretary. A lawyer's role is typically to advise on structure and to prepare the shareholders' agreement and other legal documents."
      },
      {
        question: "Can you review an agreement that someone else has drafted?",
        answer:
          "Yes. We review the terms, explain the risks, and propose amendments to protect your position before you sign."
      }
    ],
    ctaLabel: "Talk to us about your business",
    relevantLaws: [
      "Companies Act 2016",
      "Contracts Act 1950",
      "Partnership Act 1961",
      "Limited Liability Partnerships Act 2012",
      "Sale of Goods Act 1957",
      "Personal Data Protection Act 2010"
    ],
    relatedSlugs: ["employment", "civil-commercial-litigation", "conveyancing-property"],
    metaTitle: "Business & Commercial Lawyer Johor | Agreements",
    metaDescription:
      "Shareholders' agreements, partnership agreements, commercial contracts and business setup advice."
  },
  {
    slug: "employment",
    title: "Employment & Industrial Relations",
    navTitle: "Employment & Industrial Relations",
    cardLine:
      "Advice for employers and employees, including dismissal and Industrial Court matters.",
    icon: "UserCheck",
    emoji: "👔",
    heroImage:
      "https://images.unsplash.com/photo-1521791136364-728647530e59?auto=format&fit=crop&q=80&w=1200",
    intro:
      "Employment relationships are governed by detailed legislation, and mistakes can be costly for both employers and employees. We advise employers on compliance and workplace issues, and we advise employees on their rights, including in cases of dismissal.",
    howWeHelp: [
      {
        heading: "For employers",
        items: [
          "Employment contracts and offer letters",
          "Employee handbooks and workplace policies",
          "Compliance with the Employment Act 1955 and related laws",
          "Misconduct investigations, show-cause letters and domestic inquiries",
          "Termination, retrenchment and voluntary separation schemes",
          "Representation in the Industrial Court"
        ]
      },
      {
        heading: "For employees",
        items: [
          "Review of employment contracts and settlement offers",
          "Advice on unfair dismissal claims under the Industrial Relations Act 1967",
          "Claims relating to unpaid wages and benefits",
          "Representation in the Industrial Court"
        ]
      }
    ],
    faqs: [
      {
        question: "I think I was dismissed without just cause. What should I do?",
        answer:
          "Act quickly. A representation for reinstatement under Section 20 of the Industrial Relations Act 1967 must be filed with the Director General of Industrial Relations within 60 days of dismissal. Keep your employment letters, payslips and any termination notice."
      },
      {
        question: "Can an employer terminate an employee without a domestic inquiry?",
        answer:
          "The need for a fair process depends on the circumstances. Failure to follow a fair process can affect whether a dismissal is found to be with just cause. Employers should get advice before taking disciplinary action."
      }
    ],
    ctaLabel: "Get employment law advice",
    relevantLaws: [
      "Employment Act 1955",
      "Industrial Relations Act 1967",
      "Trade Unions Act 1959",
      "Employees Provident Fund Act 1991"
    ],
    relatedSlugs: ["corporate-commercial", "civil-commercial-litigation", "accident-personal-injury"],
    metaTitle: "Employment Lawyer Johor Bahru | Unfair Dismissal",
    metaDescription:
      "Advice for employers and employees on contracts, dismissal and Industrial Court matters."
  },
  {
    slug: "accident-personal-injury",
    title: "Accident & Personal Injury Claims",
    navTitle: "Accident & Personal Injury",
    cardLine: "Road and workplace accident claims and related insurance matters.",
    icon: "Car",
    emoji: "🚗",
    heroImage:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200",
    intro:
      "An accident can leave you with injuries, medical bills, lost income and damaged property. We advise injured persons and their families on claims for compensation, and we act for defendants where appointed.",
    howWeHelp: [
      {
        items: [
          "Road accident claims for injuries and vehicle damage",
          "Claims on behalf of families of persons who died in accidents (dependency claims)",
          "Workplace accident claims",
          "Public place injury claims (occupiers' liability)",
          "Claims involving insurance companies",
          "Defence of accident claims for defendants and their insurers, where appointed"
        ]
      }
    ],
    extraSections: [
      {
        title: "What to do after a road accident",
        ordered: true,
        callout: true,
        items: [
          "Get medical attention first.",
          "Lodge a police report. Under the Road Transport Act 1987, accidents must be reported to the police within 24 hours.",
          "Take photos of the scene, vehicles and injuries.",
          "Collect the other driver's details, vehicle number and insurer.",
          "Keep all medical reports, receipts and records of lost income.",
          "Speak with a lawyer before signing any settlement or discharge form offered by an insurer."
        ]
      }
    ],
    faqs: [
      {
        question: "Is there a time limit to make a claim?",
        answer:
          "Yes. Most personal injury claims must be filed within a limited period under the Limitation Act 1953, and claims against public authorities have shorter limits. Seek advice early."
      },
      {
        question: "What can I claim for?",
        answer:
          "Depending on the case, compensation may cover pain and suffering, medical expenses, loss of earnings, future treatment, and vehicle repair costs."
      }
    ],
    ctaLabel: "Discuss your accident claim",
    relevantLaws: [
      "Road Transport Act 1987",
      "Limitation Act 1953",
      "Civil Law Act 1956",
      "Occupational Safety and Health Act 1994"
    ],
    relatedSlugs: ["civil-commercial-litigation", "employment", "criminal-law"],
    metaTitle: "Accident Claim Lawyer Johor Bahru & Kuantan",
    metaDescription: "Road and workplace accident injury claims and insurance-related matters."
  }
];

export const PRACTICE_AREAS_INTRO =
  "Amin Firdaus Mashudi & Co. handles contentious and non-contentious matters for individuals, families and businesses. Select an area below to learn how we can assist, what the process involves, and answers to common questions.";

export const PRACTICE_AREAS_FOOTNOTE =
  "Not sure which area your matter falls under? Contact us and describe your situation briefly. We will let you know whether we can assist.";

export const PRACTICE_AREAS_MAP: Record<string, PracticeArea> = PRACTICE_AREAS.reduce(
  (acc, area) => {
    acc[area.slug] = area;
    return acc;
  },
  {} as Record<string, PracticeArea>
);

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return PRACTICE_AREAS_MAP[slug];
}

export function getRelatedPracticeAreas(slug: string): PracticeArea[] {
  const current = getPracticeArea(slug);
  if (!current) return PRACTICE_AREAS.slice(0, 3);
  return current.relatedSlugs
    .map((s) => getPracticeArea(s))
    .filter((a): a is PracticeArea => a !== undefined)
    .slice(0, 3);
}

/** Options for the "Type of matter" dropdown on the enquiry form (Part 13.2). */
export const MATTER_TYPE_OPTIONS = [
  "Conveyancing & Property",
  "Civil Litigation",
  "Criminal",
  "Family",
  "Wills & Estates",
  "Corporate & Commercial",
  "Employment",
  "Accident Claim",
  "Other"
];

/** Maps a practice-area slug to its matching enquiry-form matter type. */
export const SLUG_TO_MATTER_TYPE: Record<string, string> = {
  "conveyancing-property": "Conveyancing & Property",
  "civil-commercial-litigation": "Civil Litigation",
  "criminal-law": "Criminal",
  "family-law": "Family",
  "wills-probate-estates": "Wills & Estates",
  "corporate-commercial": "Corporate & Commercial",
  employment: "Employment",
  "accident-personal-injury": "Accident Claim"
};
