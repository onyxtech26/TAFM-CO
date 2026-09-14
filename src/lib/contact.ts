/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FIRM_DETAILS } from '../data/firm';

/**
 * Builds the firm's WhatsApp deep link (Part 3.3 of the content pack).
 * Defaults to the approved opening message.
 */
export function whatsappUrl(message: string = FIRM_DETAILS.contact.whatsappDefaultMessage): string {
  return `https://wa.me/${FIRM_DETAILS.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoUrl(subject: string): string {
  return `mailto:${FIRM_DETAILS.contact.generalEmail}?subject=${encodeURIComponent(subject)}`;
}
