/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Camera } from 'lucide-react';

interface LawyerPortraitProps {
  /** Real photograph URL. Empty string renders the monogram placeholder. */
  photoUrl: string;
  name: string;
  initials: string;
  className?: string;
  showNote?: boolean;
}

/**
 * Renders the lawyer's photograph.
 *
 * Until a real photograph is supplied, a monogram placeholder is shown rather
 * than a stock photograph of another person — publishing someone else's
 * likeness as the firm's lawyer would be misleading publicity under the Legal
 * Profession (Publicity) Rules 2025.
 *
 * To publish the real photograph, set `photoUrl` on PRINCIPAL_LAWYER in
 * `src/data/firm.ts` (a formal headshot against a plain background).
 */
export default function LawyerPortrait({
  photoUrl,
  name,
  initials,
  className = '',
  showNote = false
}: LawyerPortraitProps) {
  if (photoUrl) {
    return (
      <img
        src={photoUrl}
        alt={`${name}, Advocate and Solicitor`}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#F8FAFC] via-[#FFFBEB] to-[#F1F5F9] ${className}`}
      role="img"
      aria-label={`Photograph of ${name} to be added`}
    >
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-amber-500 bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(245,158,11,0.25)]">
        <span className="font-serif text-3xl sm:text-4xl font-bold gold-text-gradient">
          {initials}
        </span>
      </div>

      {showNote && (
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-[#64748B] font-medium">
          <Camera className="w-3 h-3 text-[#EA580C]" />
          <span>Photograph to be added</span>
        </div>
      )}
    </div>
  );
}
