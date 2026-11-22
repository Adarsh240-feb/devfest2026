'use client';

import { useEffect } from 'react';
import initSite from '@/lib/site';

/**
 * Boots the site's interactions (preloader, theme toggle, menu, reveals,
 * countdown, badge studio, etc.) once the page has hydrated.
 * Pages link with plain <a> tags, so every navigation is a full page load
 * and this runs exactly once per page.
 */
export default function SiteScripts() {
  useEffect(() => {
    if (window.__devfestInit) return; // guard against React Strict Mode double-run
    window.__devfestInit = true;
    initSite();
  }, []);
  return null;
}
