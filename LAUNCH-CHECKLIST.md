# Pre-launch checklist — Amin Firdaus Mashudi & Co. website

The site content is built from `Amin_Firdaus_Mashudi_Co_Website_Content.md`. Every page is populated
with verified facts only; no `[bracketed]` placeholder text remains in the published pages.

The items below still need the client's confirmation or a real asset before the site goes live.

## Must be supplied by the client

| Item | Where it lives | Status |
|---|---|---|
| Formal headshot of Mr. Amin Firdaus | `public/images/team/muhammad-amin-firdaus-bin-mashudi.jpg` | **Done** — supplied 14 Sep 2026. |
| Real office photograph for the home hero (optional) | `src/pages/HomePage.tsx` (hero `<img src>`) | Lady Justice stock image in place, at the client's request; alt text does **not** claim it is the firm's premises. |
| Real domain | `index.html` JSON-LD — replace every `https://www.example.com.my` | Placeholder domain |
| Firm logo (Bar Council Ruling 3.05 approval required) | Currently a scales icon in `Navbar`/`Footer`/`SplashScreen` | Not yet supplied |
| Social media links | Deliberately omitted rather than left as dead links | Add to `Footer.tsx` when available |

## Must be confirmed before publishing (Part 1 and Part 17 of the content pack)

- [ ] All **three office addresses** are notified to and recorded by the Bar Council (s.31(2) LPA 1976),
      and each branch is staffed by an advocate and solicitor (Rule 59, Practice and Etiquette Rules 1978).
      If any address is a *former* address, remove it from `OFFICES` in `src/data/firm.ts`.
- [x] Phone numbers per office (client instruction, 14 Sep 2026): HQ Skudai +60 11-5785 6100 / +60 7-906 0256;
      Adda Heights and Kuantan +60 10-252 0859. Site-wide call and WhatsApp number: +60 11-5785 6100.
- [ ] Email. The site uses `aminfirdausco@gmail.com` throughout. A domain email
      (e.g. `enquiry@[domain].com.my`) is strongly recommended, and Bar records should be updated to match.
- [x] Office hours (client instruction): Mon–Fri 10.00 am – 5.00 pm, weekends and public holidays closed.
- [ ] Languages. Published as Bahasa Malaysia and English.
- [ ] Enquiry response time. Published as "within one working day".
- [ ] LLM (Universiti Malaya) certificate available in case of query — the claim must be verifiable.

## Decisions taken in the build (change if the client says otherwise)

- **Syariah matters** — Option B was used: "We can provide general guidance and refer you to a Peguam
  Syarie for Syariah Court proceedings." Switch to Option A only if Mr. Amin Firdaus is admitted as a
  Peguam Syarie (`note` field on `family-law` in `src/data/services.ts`).
- **Insolvency status (Part 9.6)** — omitted. The content pack marks it optional and it goes stale annually.
- **Safekeeping of wills** and **resealing of foreign grants** — omitted from the Wills & Estates page,
  as the content pack flagged both as unconfirmed services. Add them back once confirmed.
- **Commissioner for Oaths / Notary Public** — not advertised anywhere, per Part 1.4.
- **Pupillage / chambering** — no such vacancy is listed. A pupil master needs seven years in active
  practice; Mr. Amin Firdaus was admitted in 2022.
- **Articles** — the 12 topics from Part 15.7 are listed as "In preparation". No article bodies were
  invented. Replace `ARTICLE_TOPICS` in `src/data/resources.ts` with real posts as they are written.
- **English only** — at the client's instruction the Bahasa Malaysia page (`/ms`), BM Notis Privasi and
  EN | BM switch were removed. Old BM URLs redirect to the English home and Privacy Notice.
  The Publicity Rules and PDPA do not require a BM website, but note that Part 1 of the content pack
  recommended publishing the Privacy Notice in both languages.
- **HQ** — the Skudai office is labelled "HQ" (Headquarters) instead of "Main Office".
- **Data Protection Officer** — named as Muhammad Amin Firdaus bin Mashudi (Sole Proprietor).

## Still to wire up (developer)

- **Enquiry form delivery.** The form currently opens the visitor's mail client with the enquiry
  pre-filled (`src/pages/ContactPage.tsx`). Replace with a real form endpoint, add
  Google reCAPTCHA alongside the existing honeypot field, and send the Part 13.3 auto-reply.
- **Cookie banner removed** at the client's request. The site currently sets no analytics cookies, so
  none is legally needed. If analytics (e.g. Google Analytics) is added later, a consent banner must
  be reinstated before those cookies are set.

## Annual task

The Practising Certificate, Sijil Annual, Bar subscription and professional indemnity insurance all
expire on **31 December 2026**. `CREDENTIAL_RECORDS` in `src/data/firm.ts` must be updated every
January or the Registration & Credentials page becomes misleading.
