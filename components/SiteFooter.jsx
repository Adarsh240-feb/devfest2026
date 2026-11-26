import FooterGallery from '@/components/FooterGallery';

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
              <a href="/venue">Venue</a>
              <a href="/faq">FAQ</a>
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

        {/* Scroll-driven polaroid wall of Prayagraj photos above the wordmark */}
        <FooterGallery />

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
