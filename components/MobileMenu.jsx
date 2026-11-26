import { registerLinkProps } from '@/lib/registration';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/agenda', label: 'Agenda & Speakers' },
  { href: '/team', label: 'The Crew' },
  { href: '/badge', label: 'Badge Studio' },
  { href: '/venue', label: 'Venue' },
  { href: '/faq', label: 'FAQ' },
];

export default function MobileMenu() {
  return (
    <div aria-hidden="true" className="mobile-menu" id="mobileMenu">
      <div className="mobile-menu__head container">
        <span className="mono">DevFest Prayagraj ’26</span>
        <div className="mobile-menu__actions">
          <button aria-label="Toggle dark mode" className="theme-toggle theme-toggle--mobile" id="mobileThemeToggle" type="button">
            <svg className="ic theme-toggle__icon theme-toggle__icon--sun">
              <use href="#i-sun" />
            </svg>{' '}
            <svg className="ic theme-toggle__icon theme-toggle__icon--moon">
              <use href="#i-moon" />
            </svg>{' '}
            <span className="theme-toggle__text">Theme</span>
          </button>{' '}
          <button aria-label="Close menu" className="mobile-menu__close" id="menuClose">Close</button>
        </div>
      </div>
      <nav aria-label="Mobile" className="mobile-menu__nav container">
        {LINKS.map((link, i) => (
          <a key={link.href} href={link.href}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="mobile-menu__foot container">
        <a className="btn" {...registerLinkProps()}>
          <span>Register now</span>
          <svg className="ic">
            <use href="#i-arrow" />
          </svg>
        </a>
        <div className="mobile-menu__meta">
          <span>19.12.26</span>
          <span>NCZCC · Civil Lines</span>
          <span>Prayagraj</span>
        </div>
      </div>
      <div aria-hidden="true" className="mobile-menu__river" />
    </div>
  );
}
