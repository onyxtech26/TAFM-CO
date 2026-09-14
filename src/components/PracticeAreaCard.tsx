/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  ShieldAlert,
  Home,
  Briefcase,
  Users,
  UserCheck,
  FileText,
  Car,
  ChevronsRight
} from 'lucide-react';
import { PracticeArea } from '../data/services';

const ICONS: Record<string, typeof Scale> = {
  Scale,
  ShieldAlert,
  Home,
  Briefcase,
  Users,
  UserCheck,
  FileText,
  Car
};

interface PracticeAreaCardProps {
  area: PracticeArea;
  className?: string;
  key?: React.Key;
}

export default function PracticeAreaCard({ area, className = '' }: PracticeAreaCardProps) {
  const Icon = ICONS[area.icon] || Scale;

  return (
    <Link
      to={`/practice-areas/${area.slug}`}
      className={`group card-luxury p-7 sm:p-8 flex flex-col justify-between focus-visible:outline-none ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl border border-amber-500/40 bg-gradient-to-br from-white via-amber-50/40 to-white flex items-center justify-center text-[#EA580C] transition-all duration-300 group-hover:border-[#FACC15] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] group-hover:scale-105 shadow-sm">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[11px] font-mono text-[#64748B] tracking-widest uppercase font-medium">
            Practice Area
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#EA580C] transition-colors leading-snug mb-3">
          {area.navTitle}
        </h3>

        <p className="text-sm text-[#475569] leading-relaxed mb-6 font-light">{area.cardLine}</p>
      </div>

      <div className="pt-4 border-t border-[#CBD5E1]/70 flex items-center justify-between min-h-[48px]">
        <span className="text-[11px] font-mono text-[#64748B] uppercase tracking-wider">
          Learn more
        </span>

        <div className="opacity-0 -translate-x-3 scale-90 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#EA580C] via-[#F97316] to-[#F59E0B] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(234,88,12,0.45)] group-hover:shadow-[0_6px_20px_rgba(245,158,11,0.6)]">
            <ChevronsRight className="w-5 h-5 text-white stroke-[2.6]" />
          </div>
        </div>
      </div>
    </Link>
  );
}
