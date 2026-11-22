const NAV = [
  { key: 'home', href: '/', label: 'Home' },
  { key: 'agenda', href: '/agenda', label: 'Agenda' },
  { key: 'team', href: '/team', label: 'The Crew' },
  { key: 'badge', href: '/badge', label: 'Badge Studio' },
  { key: 'partners', href: '/#partners', label: 'Partners' },
  { key: 'faq', href: '/#faq', label: 'FAQ' },
];

/**
 * @param {{ current?: 'home' | 'agenda' | 'team' | 'badge' }} props
 *   `current` highlights the active nav link. On the home page, the brand and
 *   Register button jump to in-page anchors instead of reloading.
 */
export default function SiteHeader({ current }) {
  const onHome = current === 'home';
  return (
    <header className="site-header" id="siteHeader">
      <div className="nav-wrap container">
        <a aria-label="DevFest Prayagraj 2026 — home" className="brand" href={onHome ? '#home' : '/'}>
          <img alt="DevFest" height="238" src="/assets/brand/devfest-2026-no-date.png" width="1600" />{' '}
          <span className="brand__loc">
            Prayagraj <span>’26</span>
          </span>
        </a>
        <nav aria-label="Primary" className="desktop-nav">
          {NAV.map((item) => (
            <a key={item.key} href={item.href} className={item.key === current ? 'is-current' : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button aria-label="Toggle dark mode" className="theme-toggle" id="themeToggle" title="Toggle theme (T)" type="button">
            <span className="theme-toggle__track">
              <svg className="ic theme-toggle__icon theme-toggle__icon--sun">
                <use href="#i-sun" />
              </svg>
              <svg className="ic theme-toggle__icon theme-toggle__icon--moon">
                <use href="#i-moon" />
              </svg>
            </span>
          </button>{' '}
          <a className="btn btn--small magnetic" href={onHome ? '#register' : '/#register'}>
            <span>Register</span>{' '}
            <svg className="ic">
              <use href="#i-arrow" />
            </svg>
          </a>{' '}
          <button aria-controls="mobileMenu" aria-expanded="false" aria-label="Open menu" className="menu-toggle" id="menuToggle">
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
