import SkipLink from '@/components/SkipLink';
import ScrollProgress from '@/components/ScrollProgress';
import SvgSprite from '@/components/SvgSprite';
import SiteHeader from '@/components/SiteHeader';
import MobileMenu from '@/components/MobileMenu';
import SiteFooter from '@/components/SiteFooter';
import ToTop from '@/components/ToTop';
import './badge.css';

export const metadata = {
  title: {
    absolute: "Badge Studio — DevFest Prayagraj 2026"
  },
  description: "Design and customize your personalized DevFest Prayagraj 2026 badge. Choose your role, stream colour, and take a piece of the Sangam with you.",
  alternates: {
    canonical: "/badge"
  },
  openGraph: {
    title: "Badge Studio — DevFest Prayagraj 2026",
    description: "Design, personalize, and download your official DevFest Prayagraj 2026 badge. Choose your role, stream colour, and share with the community.",
    type: "website",
    url: "/badge"
  },
  twitter: {
    card: "summary_large_image",
    title: "Badge Studio — DevFest Prayagraj 2026",
    description: "Design, personalize, and download your official DevFest Prayagraj 2026 badge. Choose your role, stream colour, and share with the community."
  }
};

export default function BadgePage() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <SvgSprite />
      <SiteHeader current="badge" />
      <MobileMenu />
      <main id="main">
        <section className="badge-page-hero">
          <div className="container">
            <a className="back-btn" href="/">
              <svg className="ic" style={{ transform: "rotate(180deg)" }}>
                <use href="#i-arrow" />
              </svg>
              {" "}Back to Home
            </a>
            <div>
              <span className="badge-tag mono">DEVFEST PRAYAGRAJ 2026 · BADGE STUDIO</span>
            </div>
            <h1 className="section-title">
              Put your name
              <br />
              in the{" "}
              <em>current.</em>
            </h1>
            <p className="section-intro" style={{ maxWidth: "650px", margin: "0 auto" }}>
              Make your DevFest Prayagraj badge in ten seconds. Pick your role and your colour, download it, and post it before the big day.
            </p>
          </div>
        </section>
        {/* ================= BADGE STUDIO CORE ================= */}
        <section className="section badge-section" id="badge" style={{ paddingTop: "10px" }}>
          <div className="container">
            <div className="badge-studio">
              <div className="badge-studio__preview" data-reveal="">
                <div className="badge-frame">
                  <canvas id="badgeCanvas" width="1000" height="1250" aria-label="Preview of your DevFest Prayagraj 2026 badge" />
                  <span className="badge-frame__clip badge-frame__clip--tl" aria-hidden="true" />
                  {" "}
                  <span className="badge-frame__clip badge-frame__clip--br" aria-hidden="true" />
                </div>
              </div>
              <div className="badge-controls" data-reveal="" style={{ "--d": "120ms" }}>
                <div className="badge-controls__intro">
                  <span className="mono">Open to everyone</span>
                  <p>
                    A DevFest badge tells the room who you are. Type your name, pick your role, choose your current color, and take a piece of the Sangam with you.
                  </p>
                </div>
                <div className="field">
                  <label htmlFor="badgeName">Your Name</label>
                  {" "}
                  <input id="badgeName" type="text" maxLength="26" placeholder="e.g. Gautam Kumar Maurya" autoComplete="name" spellCheck="false" />
                </div>
                <div className="field">
                  <span className="field__label">I’m attending as</span>
                  <div className="chip-row" id="roleChips" role="group" aria-label="Choose your role">
                    <button type="button" className="chip is-active" data-role="Attendee" aria-pressed="true">Attendee</button>
                    {" "}
                    <button type="button" className="chip" data-role="Student" aria-pressed="false">Student</button>
                    {" "}
                    <button type="button" className="chip" data-role="Builder" aria-pressed="false">Builder</button>
                    {" "}
                    <button type="button" className="chip" data-role="Speaker" aria-pressed="false">Speaker</button>
                    {" "}
                    <button type="button" className="chip" data-role="Volunteer" aria-pressed="false">Volunteer</button>
                    {" "}
                    <button type="button" className="chip" data-role="Organizer" aria-pressed="false">Organizer</button>
                  </div>
                </div>
                <div className="field">
                  <span className="field__label">Pick your current colour</span>
                  <div className="swatch-row" id="themeSwatches" role="group" aria-label="Choose badge colour">
                    <button type="button" className="swatch is-active" data-theme="blue" style={{ "--swatch": "#CFDAEC" }} aria-label="Sangam navy" aria-pressed="true">
                      <span />
                    </button>
                    {" "}
                    <button type="button" className="swatch" data-theme="green" style={{ "--swatch": "#D3EBD9" }} aria-label="Yamuna green" aria-pressed="false">
                      <span />
                    </button>
                    {" "}
                    <button type="button" className="swatch" data-theme="yellow" style={{ "--swatch": "#FBDDBE" }} aria-label="Kumbh saffron" aria-pressed="false">
                      <span />
                    </button>
                    {" "}
                    <button type="button" className="swatch" data-theme="red" style={{ "--swatch": "#F0D2CB" }} aria-label="Fort maroon" aria-pressed="false">
                      <span />
                    </button>
                  </div>
                </div>
                <div className="badge-controls__actions">
                  <button className="btn btn--primary magnetic" id="downloadBadge" type="button">
                    <svg className="ic">
                      <use href="#i-download" />
                    </svg>
                    {" "}
                    <span>Download badge</span>
                  </button>
                  {" "}
                  <button className="btn btn--ghost magnetic" id="shareBadge" type="button">
                    <svg className="ic">
                      <use href="#i-share" />
                    </svg>
                    {" "}
                    <span>Share badge</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ToTop />
    </>
  );
}
