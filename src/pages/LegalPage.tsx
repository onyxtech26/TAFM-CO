/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link, Navigate, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { LEGAL_DOCUMENTS_MAP } from '../data/legal';

interface LegalPageProps {
  slug?: string;
}

export default function LegalPage({ slug: slugProp }: LegalPageProps) {
  const params = useParams<{ slug: string }>();
  const slug = slugProp || params.slug;

  if (!slug || !LEGAL_DOCUMENTS_MAP[slug]) {
    return <Navigate to="/" replace />;
  }

  const doc = LEGAL_DOCUMENTS_MAP[slug];

  return (
    <div className="space-y-0">
      <PageHero
        eyebrow={doc.eyebrow}
        title={doc.title}
        intro={doc.intro || ''}
        breadcrumbs={[{ label: doc.title }]}
      />

      <section className="bg-transparent pt-10 pb-16 sm:pt-12 sm:pb-24 border-b border-[#CBD5E1]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#CBD5E1]">
            {doc.lastUpdated ? (
              <p className="text-xs text-[#64748B] italic">Last updated: {doc.lastUpdated}</p>
            ) : (
              <span />
            )}
          </div>

          <div className="space-y-10">
            {doc.blocks.map((block, idx) => (
              <div key={block.heading || idx} className="space-y-3">
                {block.heading && (
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A]">
                    {block.heading}
                  </h2>
                )}

                {block.paragraphs?.map((paragraph, pi) => (
                  <p key={pi} className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}

                {block.items && (
                  <ul className="space-y-2 pl-1">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm sm:text-base text-[#475569] leading-relaxed font-light"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {block.table && (
                  <div className="overflow-x-auto rounded-xl border border-[#CBD5E1] bg-white/70 backdrop-blur-xl shadow-sm">
                    <table className="w-full text-left text-sm min-w-[520px]">
                      <thead>
                        <tr className="border-b border-[#CBD5E1] bg-white/60">
                          {block.table.columns.map((col) => (
                            <th
                              key={col}
                              className="px-5 py-3 text-xs uppercase tracking-wider text-[#C2410C] font-semibold"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.table.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className={ri !== 0 ? 'border-t border-[#CBD5E1]/70' : undefined}
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className={`px-5 py-4 align-top leading-relaxed ${
                                  ci === 0 ? 'text-[#0F172A] font-semibold' : 'text-[#475569]'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#CBD5E1] flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#64748B]">
            <Link to="/disclaimer" className="hover:text-[#EA580C] transition-colors">
              Disclaimer
            </Link>
            <Link to="/privacy" className="hover:text-[#EA580C] transition-colors">
              Privacy Notice
            </Link>
            <Link to="/terms" className="hover:text-[#EA580C] transition-colors">
              Terms of Use
            </Link>
            <Link to="/cookies" className="hover:text-[#EA580C] transition-colors">
              Cookie Notice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
