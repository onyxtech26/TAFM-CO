/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  italicAccent?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  italicAccent,
  subtitle,
  align = 'center',
  className = ''
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {/* Eyebrow */}
      <div className={`eyebrow-label mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#EA580C] to-[#F59E0B] rounded-full" />
        <span>{eyebrow}</span>
        {isCenter && <span className="w-6 h-[1.5px] bg-gradient-to-l from-[#EA580C] to-[#F59E0B] rounded-full" />}
      </div>

      {/* Serif Title */}
      <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] leading-[1.2] mb-4">
        {title}{' '}
        {italicAccent && (
          <span className="italic font-normal gold-text-gradient block sm:inline">
            {italicAccent}
          </span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
