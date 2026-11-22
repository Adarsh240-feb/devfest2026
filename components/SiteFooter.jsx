/**
 * @param {{ home?: boolean }} props
 *   On the home page, section links are in-page anchors (#venue) rather than /#venue.
 */
export default function SiteFooter({ home = false }) {
  const section = (id) => (home ? `#${id}` : `/#${id}`);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <img alt="DevFest 2026" height="210" loading="lazy" src="/assets/brand/devfest-2026-with-date.png" width="1800" />
            </div>
            <p className="footer__place">
              Prayagraj <br />
              <span>Where ideas find their confluence.</span>
            </p>
            <div className="footer__socials">
              <a aria-label="Instagram" href="https://www.instagram.com/gdg_prayagraj/" rel="noopener" target="_blank">
                <svg className="ic"><use href="#i-instagram" /></svg>
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/gdg-prayagraj/" rel="noopener" target="_blank">
                <svg className="ic"><use href="#i-linkedin" /></svg>
              </a>
              <a aria-label="YouTube" href="https://www.youtube.com/@gdgprayagraj" rel="noopener" target="_blank">
                <svg className="ic"><use href="#i-youtube" /></svg>
              </a>
            </div>
          </div>
          <div className="footer__cols">
            <div className="footer__col">
              <span className="mono">Explore</span>
              <a href="/">Home</a>
              <a href="/agenda">Agenda &amp; Speakers</a>
              <a href="/team">The Crew</a>
              <a href="/badge">Badge Studio</a>
            </div>
            <div className="footer__col">
              <span className="mono">Practical</span>
              <a href={section('venue')}>Venue</a>
              <a href={section('faq')}>FAQ</a>
              <a href="/agenda">Agenda</a>
              <a href={section('register')}>Registration</a>
            </div>
            <div className="footer__col">
              <span className="mono">Community</span>
              <a href="https://gdg.community.dev/gdg-prayagraj/" rel="noopener" target="_blank">GDG Prayagraj</a>
              <a href="https://developers.google.com/community-guidelines" rel="noopener" target="_blank">Code of conduct</a>
              <a href="https://www.instagram.com/gdg_prayagraj/" rel="noopener" target="_blank">Volunteer with us</a>
              <a href={section('partners')}>Partner with us</a>
            </div>
          </div>
        </div>

        {/* Footer spotlight: cursor-driven photo reveal through the wordmark (see lib/site.js) */}
        <div aria-label="DevFest Prayagraj 2026 interactive reveal" className="footer-hero-reveal" id="footerSpotlight">
          <div className="footer-hero-reveal__stage">
            <div className="footer-hero-reveal__text footer-hero-reveal__text--base">
              <span className="f-word" data-zone="devfest">DevFest</span>{' '}
              <span className="f-word" data-zone="prayagraj">
                <span className="f-letter-pop">P</span>rayagraj
              </span>{' '}
              <span className="f-word" data-zone="year">’26</span>
            </div>
            <div className="footer-hero-reveal__mask" id="footerMask">
              <div className="footer-hero-reveal__text footer-hero-reveal__text--img" id="footerMaskText">
                <span className="f-word">DevFest</span>{' '}
                <span className="f-word">
                  <span className="f-letter-pop">P</span>rayagraj
                </span>{' '}
                <span className="f-word">’26</span>
              </div>
            </div>
            <div aria-hidden="true" className="footer-hero-reveal__glow" id="footerGlow" />
            <div aria-hidden="true" className="footer-hero-reveal__card" id="footerCard">
              <div className="footer-card__img-wrap">
                <img alt="Prayagraj Moment" id="footerCardImg" src="/assets/gallery/sangam_boats.jpg" />
                <span className="footer-card__badge" id="footerCardTag">Triveni Sangam</span>
              </div>
              <p className="footer-card__caption" id="footerCardCaption">Where the Ganga, the Yamuna and the Saraswati meet</p>
            </div>
          </div>
          <div className="footer-hero-reveal__meta">
            <span className="footer-hero-reveal__tag">प्रयागराज • The Digital Sangam</span>{' '}
            <span className="footer-hero-reveal__sub">19 December 2026 · NCZCC Prayagraj</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 GDG Prayagraj. All rights reserved.</p>
          <p className="footer__credit">
            Made with ❤️ in Prayagraj by the GDG Prayagraj crew &nbsp;·&nbsp;{' '}
            <a href={home ? '#home' : '#main'}>Back to top</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
