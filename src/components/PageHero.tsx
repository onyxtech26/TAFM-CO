/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  italicAccent?: string;
  intro: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHero({
  eyebrow,
  title,
  italicAccent,
  intro,
  breadcrumbs
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-transparent border-b border-[#CBD5E1]/70 pt-6 pb-10 sm:pt-8 sm:pb-14">
      {/* Soft radial orange-and-yellow glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(circle,rgba(250,204,21,0.12)_0%,rgba(234,88,12,0.07)_40%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb row */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center flex-wrap gap-2 text-xs text-[#475569]">
            <li>
              <Link to="/" className="hover:text-[#EA580C] transition-colors">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3 text-amber-500 shrink-0" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-[#EA580C] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#0F172A] font-semibold" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow-label mb-3"
          >
            <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#EA580C] to-[#F59E0B] rounded-full" />
            <span>{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.15] mb-5"
          >
            {title}{' '}
            {italicAccent && (
              <span className="italic font-normal gold-text-gradient block sm:inline">
                {italicAccent}
              </span>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-light"
          >
            {intro}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
