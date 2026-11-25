import SkipLink from '@/components/SkipLink';
import ScrollProgress from '@/components/ScrollProgress';
import SvgSprite from '@/components/SvgSprite';
import SiteHeader from '@/components/SiteHeader';
import MobileMenu from '@/components/MobileMenu';
import SiteFooter from '@/components/SiteFooter';
import ToTop from '@/components/ToTop';
import './faq.css';

export const metadata = {
  title: {
    absolute: "FAQ — DevFest Prayagraj 2026"
  },
  description: "Frequently asked questions about DevFest Prayagraj 2026 — venue, registration, perks, networking, workshops, and volunteering.",
  alternates: {
    canonical: "/faq"
  },
  openGraph: {
    title: "FAQ — DevFest Prayagraj 2026",
    description: "Quick answers before you pack your laptop for DevFest Prayagraj 2026 on 19 December at NCZCC, Civil Lines.",
    type: "website",
    url: "/faq"
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — DevFest Prayagraj 2026",
    description: "Quick answers before you pack your laptop for DevFest Prayagraj 2026 on 19 December at NCZCC, Civil Lines."
  }
};

export default function FaqPage() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <SvgSprite />
      <SiteHeader current="faq" />
      <MobileMenu />
      <main id="main">
        {/* ================= HERO ================= */}
        <section className="faq-page-hero">
          <div className="container">
            <a className="back-btn" href="/">
              <svg className="ic" style={{ transform: "rotate(180deg)" }}>
                <use href="#i-arrow" />
              </svg>
              {" "}Back to Home
            </a>
            <div>
              <span className="faq-tag mono">SATURDAY · 19 DECEMBER 2026 · NCZCC</span>
            </div>
            <h1 className="section-title">
              Frequently asked{" "}
              <em>questions.</em>
            </h1>
            <p className="section-intro" style={{ maxWidth: "680px", margin: "0 auto" }}>
              Quick answers before you pack your laptop. Still stuck? Message us on Instagram.
            </p>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="section faq" id="faq">
          <div className="container">
            <div className="faq__grid">
              <div className="faq__head">
                <h2 className="section-title" data-reveal="" style={{ "--d": "80ms" }}>
                  Everything you
                  <br />
                  need to{" "}
                  <em>know.</em>
                </h2>
                <p data-reveal="" style={{ "--d": "140ms" }}>
                  From venue timings and workshops to swag and volunteering — here is the practical guide to the day.
                </p>
                <div className="faq__sticker" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-diya" />
                  </svg>
                  {" "}
                  <span>
                    ask
                    <br />
                    away
                  </span>
                </div>
              </div>
              <div className="accordion" id="faqAccordion" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="true" aria-controls="faq1" id="faqBtn1">
                    <span>What is DevFest?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq1" role="region" aria-labelledby="faqBtn1" style={{ gridTemplateRows: "1fr" }}>
                    <div className="acc-panel__inner">
                      <p>
                        DevFest is a tech conference that Google Developer Groups run in cities around the world. In Prayagraj, it is a full day of talks, hands-on workshops and meeting other builders, all around Google tools like Gemini, Android, Firebase, Google Cloud and the web.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="false" aria-controls="faq2" id="faqBtn2">
                    <span>What is Google Developer Groups (GDG)?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq2" role="region" aria-labelledby="faqBtn2">
                    <div className="acc-panel__inner">
                      <p>
                        Google Developer Groups (GDGs) are free, local communities for anyone who builds with Google technology. GDG Prayagraj runs meetups, study jams and workshops all year. DevFest is our biggest day of the year.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="false" aria-controls="faq3" id="faqBtn3">
                    <span>When and where is the event taking place?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq3" role="region" aria-labelledby="faqBtn3">
                    <div className="acc-panel__inner">
                      <p>
                        <strong>Date:</strong>
                        {" "}Saturday, 19th December 2026
                        <br />
                        <strong>Venue:</strong>
                        {" "}North Central Zone Cultural Centre (NCZCC) Auditorium, Civil Lines, Prayagraj
                        <br />
                        <strong>Time:</strong>
                        {" "}9:00 AM to 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="false" aria-controls="faq4" id="faqBtn4">
                    <span>Will the accommodation facility be provided to attendees?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq4" role="region" aria-labelledby="faqBtn4">
                    <div className="acc-panel__inner">
                      <p>
                        We can’t arrange a stay for attendees, so please book your own if you’re coming from outside Prayagraj. December is a busy month in the city, so book early.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="false" aria-controls="faq5" id="faqBtn5">
                    <span>Will I get perks for attending?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq5" role="region" aria-labelledby="faqBtn5">
                    <div className="acc-panel__inner">
                      <p>
                        Yes. Every attendee gets official DevFest swag and a badge, lunch and refreshments, and a participation certificate.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="false" aria-controls="faq6" id="faqBtn6">
                    <span>Will there be networking opportunities?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq6" role="region" aria-labelledby="faqBtn6">
                    <div className="acc-panel__inner">
                      <p>
                        Yes, and we plan for it. The lunch break, the closing high tea and the hallway between sessions are made for meeting speakers, partners and other developers. Bring your questions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="false" aria-controls="faq7" id="faqBtn7">
                    <span>Is there any age limit to register?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq7" role="region" aria-labelledby="faqBtn7">
                    <div className="acc-panel__inner">
                      <p>
                        No age limit. If you’re curious about tech, you’re welcome, whether you’re in school, in college or ten years into your career.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="false" aria-controls="faq8" id="faqBtn8">
                    <span>Do I need to bring a laptop?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq8" role="region" aria-labelledby="faqBtn8">
                    <div className="acc-panel__inner">
                      <p>For the talks, no. For the hands-on workshops, yes. Bring a charged laptop and a charger.</p>
                    </div>
                  </div>
                </div>
                <div className="acc-item">
                  <button className="acc-trigger" aria-expanded="false" aria-controls="faq9" id="faqBtn9">
                    <span>Can I volunteer or speak at DevFest?</span>
                    <span className="acc-icon">
                      <svg className="ic">
                        <use href="#i-plus" />
                      </svg>
                    </span>
                  </button>
                  <div className="acc-panel" id="faq9" role="region" aria-labelledby="faqBtn9">
                    <div className="acc-panel__inner">
                      <p>Yes. Follow GDG Prayagraj on Instagram or LinkedIn. We post calls for volunteers and speakers there first.</p>
                    </div>
                  </div>
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
