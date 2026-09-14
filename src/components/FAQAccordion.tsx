/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ faqs, className = '' }: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={index}
            className="border border-[#CBD5E1]/70 rounded-2xl overflow-hidden bg-white/75 backdrop-blur-xl transition-all hover:border-amber-500/60 shadow-sm"
          >
            <button
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left focus-visible:outline-none cursor-pointer"
            >
              <span className="font-serif text-base sm:text-lg font-semibold text-[#0F172A] pr-4 leading-snug">
                {faq.question}
              </span>
              <div
                className={`w-7 h-7 rounded-full border border-[#EA580C]/30 flex items-center justify-center text-[#EA580C] shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#EA580C]/10 border-[#EA580C]' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#CBD5E1] font-light">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
