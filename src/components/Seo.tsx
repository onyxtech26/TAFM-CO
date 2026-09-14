/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_META, PAGE_META, PageMeta } from '../data/seo';
import { getPracticeArea } from '../data/services';
import { LEGAL_DOCUMENTS_MAP } from '../data/legal';

function setMeta(selector: string, attr: string, key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function resolveMeta(pathname: string): PageMeta {
  if (PAGE_META[pathname]) return PAGE_META[pathname];

  if (pathname.startsWith('/practice-areas/')) {
    const slug = pathname.replace('/practice-areas/', '');
    const area = getPracticeArea(slug);
    if (area) {
      return { title: area.metaTitle, description: area.metaDescription };
    }
  }

  const legalSlug = pathname.replace(/^\//, '');
  if (LEGAL_DOCUMENTS_MAP[legalSlug]) {
    const doc = LEGAL_DOCUMENTS_MAP[legalSlug];
    return {
      title: `${doc.title} | Amin Firdaus Mashudi & Co.`,
      description: doc.intro || DEFAULT_META.description
    };
  }

  return DEFAULT_META;
}

/**
 * Keeps the document title and social/meta description in step with the
 * current route. Values come from the approved SEO pack in `data/seo.ts`.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = resolveMeta(pathname);
    document.title = meta.title;
    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
  }, [pathname]);

  return null;
}
