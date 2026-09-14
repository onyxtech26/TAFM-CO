/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/** Footer legal pages: Disclaimer, Privacy Notice, Terms of Use, Cookie Notice. */

export interface LegalBlock {
  heading?: string;
  paragraphs?: string[];
  items?: string[];
  table?: { columns: string[]; rows: string[][] };
}

export interface LegalDocument {
  slug: string;
  title: string;
  eyebrow: string;
  intro?: string;
  lastUpdated?: string;
  blocks: LegalBlock[];
}

const PRIVACY_LAST_UPDATED = "February 2026";

export const DISCLAIMER: LegalDocument = {
  slug: "disclaimer",
  title: "Disclaimer",
  eyebrow: "Legal Notice",
  blocks: [
    {
      heading: "General information only",
      paragraphs: [
        "The content of this website is provided by Amin Firdaus Mashudi & Co. for general information purposes only. It does not constitute legal advice and should not be relied upon as such. The law may change, and its application depends on the specific facts of each case. You should obtain legal advice specific to your circumstances before taking or refraining from any action."
      ]
    },
    {
      heading: "No advocate–client relationship",
      paragraphs: [
        "Browsing this website, contacting us through it, or sending us information does not create an advocate–client relationship. That relationship arises only when we have agreed in writing to act for you. Until then, please do not send confidential or time-sensitive information."
      ]
    },
    {
      heading: "Accuracy",
      paragraphs: [
        "While we take reasonable care to keep the information on this website accurate and up to date, we make no warranty as to its completeness or accuracy. We accept no liability for any loss arising from reliance on the content of this website, to the extent permitted by law."
      ]
    },
    {
      heading: "External links",
      paragraphs: [
        "This website may contain links to third-party websites, including government and regulatory bodies. We are not responsible for the content or availability of those websites."
      ]
    },
    {
      heading: "Publicity Rules",
      paragraphs: [
        "This website is published in compliance with the Legal Profession (Publicity) Rules 2025. Nothing on this website is intended to solicit business in any manner contrary to those Rules."
      ]
    },
    {
      heading: "Jurisdiction",
      paragraphs: [
        "Our lawyers are admitted to practise in Peninsular Malaysia. Information on this website relates to Malaysian law unless otherwise stated."
      ]
    }
  ]
};

export const PRIVACY_NOTICE: LegalDocument = {
  slug: "privacy",
  title: "Privacy Notice (Personal Data Protection Act 2010)",
  eyebrow: "Personal Data",
  lastUpdated: PRIVACY_LAST_UPDATED,
  intro:
    "This Privacy Notice is issued by Amin Firdaus Mashudi & Co. (“we”, “us”, “the Firm”) in accordance with the Personal Data Protection Act 2010 (“PDPA”). It explains how we collect, use, disclose and protect your personal data.",
  blocks: [
    {
      heading: "1. Personal data we collect",
      paragraphs: [
        "We may collect: your name, identity card or passport number, date of birth, address, telephone number, email address, occupation, financial information (such as bank and loan details), property and asset details, family details, employment details, and any other information you provide in connection with your matter. For certain matters, this may include sensitive personal data such as information about your health or alleged criminal offences."
      ]
    },
    {
      heading: "2. How we collect it",
      paragraphs: [
        "From you directly (in person, by phone, WhatsApp, email or our website form); from documents you provide; from public registries (such as land offices, SSM and the Malaysia Department of Insolvency); from courts and government authorities; and from other parties involved in your matter, such as banks, developers, insurers, other lawyers and agents."
      ]
    },
    {
      heading: "3. Purposes",
      paragraphs: ["We process your personal data to:"],
      items: [
        "(a) respond to your enquiry and assess whether we can act for you, including conflict checks;",
        "(b) provide legal services and manage your matter;",
        "(c) communicate with you, courts, authorities and other parties on your behalf;",
        "(d) verify your identity and meet our obligations under the Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 and other applicable laws;",
        "(e) bill for our services and maintain accounts, including clients' accounts;",
        "(f) comply with legal, regulatory and professional obligations, including those under the Legal Profession Act 1976;",
        "(g) process job applications; and",
        "(h) any other purpose related to the above."
      ]
    },
    {
      heading: "4. Disclosure",
      paragraphs: [
        "We may disclose your personal data to: courts and tribunals; land offices and government agencies; financial institutions; developers; insurers; other parties and their lawyers in your matter; professional advisers such as accountants, valuers, company secretaries and interpreters; our professional indemnity insurers and brokers; the Malaysian Bar and regulatory authorities; and service providers such as IT, cloud storage and courier companies. We do not sell your personal data."
      ]
    },
    {
      heading: "5. Transfer outside Malaysia",
      paragraphs: [
        "Some of our service providers (such as email and cloud storage providers) may store data on servers outside Malaysia. Where this happens, we take reasonable steps to ensure your data is protected in accordance with the PDPA."
      ]
    },
    {
      heading: "6. Whether you must provide your data",
      paragraphs: [
        "Providing your personal data is voluntary. However, if you do not provide the information we need, we may be unable to act for you or complete your matter."
      ]
    },
    {
      heading: "7. Security and retention",
      paragraphs: [
        "We take practical steps to protect personal data from loss, misuse, unauthorised access and disclosure. We keep personal data for as long as necessary to fulfil the purposes above and as required by law and professional rules, after which it is securely destroyed."
      ]
    },
    {
      heading: "8. Your rights",
      paragraphs: [
        "Subject to the PDPA, you may request access to and correction of your personal data, withdraw consent, or limit processing. We may charge a fee permitted by law for access requests and may refuse requests in circumstances allowed by the PDPA, including where legal privilege applies."
      ]
    },
    {
      heading: "9. Website cookies",
      paragraphs: ["Our website uses cookies. See our Cookie Notice for details."]
    },
    {
      heading: "10. Contact",
      paragraphs: [
        "For enquiries, access or correction requests, or complaints, contact the Data Protection Officer, Muhammad Amin Firdaus bin Mashudi (Sole Proprietor), Amin Firdaus Mashudi & Co., No. 85-01, Jalan Wira 2, Taman Tan Sri Yaacob, 81300 Skudai, Johor. Email: aminfirdausco@gmail.com. Tel: +60 11-5785 6100."
      ]
    },
    {
      heading: "11. Changes",
      paragraphs: [
        "We may update this notice from time to time. The latest version will be posted on this page."
      ]
    }
  ]
};

export const TERMS_OF_USE: LegalDocument = {
  slug: "terms",
  title: "Terms of Use",
  eyebrow: "Website Terms",
  intro:
    "By accessing and using this website, you agree to these Terms of Use. If you do not agree, please do not use the website.",
  blocks: [
    {
      heading: "1. Use of content",
      paragraphs: [
        "All content on this website, including text, graphics and the firm's logo, is owned by or licensed to Amin Firdaus Mashudi & Co. You may view and print content for personal, non-commercial use. You may not copy, reproduce or republish it without our written permission."
      ]
    },
    {
      heading: "2. No legal advice",
      paragraphs: ["The content is general information only. See our Disclaimer."]
    },
    {
      heading: "3. Prohibited use",
      paragraphs: [
        "You must not use this website for any unlawful purpose, attempt to gain unauthorised access to it, introduce malicious code, or send unsolicited promotional material through our forms."
      ]
    },
    {
      heading: "4. Impersonation and fraud",
      paragraphs: [
        "We will never ask you to transfer money to a personal account. If you receive any suspicious communication claiming to be from us, contact us directly using the details on this website."
      ]
    },
    {
      heading: "5. Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, we are not liable for any loss or damage arising from use of, or inability to use, this website or reliance on its content."
      ]
    },
    {
      heading: "6. Changes",
      paragraphs: [
        "We may amend these Terms at any time by posting the updated version on this page."
      ]
    },
    {
      heading: "7. Governing law",
      paragraphs: ["These Terms are governed by the laws of Malaysia."]
    }
  ]
};

export const COOKIE_NOTICE: LegalDocument = {
  slug: "cookies",
  title: "Cookie Notice",
  eyebrow: "Cookies",
  blocks: [
    {
      heading: "What are cookies?",
      paragraphs: [
        "Cookies are small text files stored on your device when you visit a website."
      ]
    },
    {
      heading: "Cookies we use",
      table: {
        columns: ["Type", "Purpose", "Can be turned off?"],
        rows: [
          [
            "Essential",
            "Make the website function (e.g. security, form submission, remembering your cookie choice)",
            "No"
          ],
          [
            "Analytics",
            "Help us understand how visitors use the website (e.g. Google Analytics) so we can improve it",
            "Yes"
          ],
          [
            "Embedded content",
            "Google Maps and WhatsApp widgets may set their own cookies",
            "Yes"
          ]
        ]
      }
    },
    {
      heading: "Managing cookies",
      paragraphs: [
        "You can block or delete cookies at any time through your browser settings. Blocking some cookies may affect how the website works."
      ]
    }
  ]
};

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  DISCLAIMER,
  PRIVACY_NOTICE,
  TERMS_OF_USE,
  COOKIE_NOTICE
];

export const LEGAL_DOCUMENTS_MAP: Record<string, LegalDocument> = LEGAL_DOCUMENTS.reduce(
  (acc, doc) => {
    acc[doc.slug] = doc;
    return acc;
  },
  {} as Record<string, LegalDocument>
);
