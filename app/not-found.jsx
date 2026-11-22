import SkipLink from '@/components/SkipLink';
import ScrollProgress from '@/components/ScrollProgress';
import SvgSprite from '@/components/SvgSprite';
import SiteHeader from '@/components/SiteHeader';
import './not-found.css';

export const metadata = {
  title: {
    absolute: "404 — Page Not Found | DevFest Prayagraj 2026"
  },
  description: "The page you are looking for does not exist. Explore the schedule, crew, or badge studio for DevFest Prayagraj 2026."
};

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <SvgSprite />
      <SiteHeader />
      <main id="main">
        <section className="error-hero">
          <div className="container">
            <div className="error-code">
              4
              <span>0</span>
              4
            </div>
            <h1 className="error-title">You've drifted into uncharted waters.</h1>
            <p className="error-desc">
              The stream you followed doesn't lead anywhere. Don't worry — find your way back to the Sangam with one of the links below.
            </p>
            <div className="error-actions">
              <a className="btn btn--primary magnetic" href="/">
                <span>Back to Home</span>
                {" "}
                <svg className="ic">
                  <use href="#i-arrow" />
                </svg>
              </a>
              {" "}
              <a className="btn btn--ghost magnetic" href="/agenda">
                <span>Explore Agenda</span>
              </a>
              {" "}
              <a className="btn btn--ghost magnetic" href="/team">
                <span>The Crew</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer__bottom">
            <p>© 2026 GDG Prayagraj. All rights reserved.</p>
            <p className="footer__credit">
              {"Made with ❤️ in Prayagraj by the GDG Prayagraj crew  · "}{" "}
              <a href="/">Back to home</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
