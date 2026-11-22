/**
 * Event registration link. Paste the registration URL here and every
 * "Register" button on the site (header, mobile menu, hero, final call-to-action)
 * will open it in a new tab. While it's empty, buttons scroll to the
 * #register section on the home page.
 */
export const REGISTRATION_URL = 'https://konfhub.com/devfest-prayagraj';

/** Props for a registration <a>: external link if set, otherwise the in-page section. */
export function registerLinkProps(fallbackHref = '/#register') {
  return REGISTRATION_URL
    ? { href: REGISTRATION_URL, target: '_blank', rel: 'noopener noreferrer' }
    : { href: fallbackHref };
}
