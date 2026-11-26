import SkipLink from '@/components/SkipLink';
import ScrollProgress from '@/components/ScrollProgress';
import SvgSprite from '@/components/SvgSprite';
import SiteHeader from '@/components/SiteHeader';
import MobileMenu from '@/components/MobileMenu';
import SiteFooter from '@/components/SiteFooter';
import ToTop from '@/components/ToTop';
import './venue.css';

export const metadata = {
  title: {
    absolute: "Venue — DevFest Prayagraj 2026"
  },
  description: "Directions, travel info, accessibility details, and schematic map for North Central Zone Cultural Centre (NCZCC), Civil Lines, Prayagraj.",
  alternates: {
    canonical: "/venue"
  },
  openGraph: {
    title: "Venue — DevFest Prayagraj 2026",
    description: "Find your way to North Central Zone Cultural Centre (NCZCC), Civil Lines, Prayagraj on 19 December 2026.",
    type: "website",
    url: "/venue"
  },
  twitter: {
    card: "summary_large_image",
    title: "Venue — DevFest Prayagraj 2026",
    description: "Find your way to North Central Zone Cultural Centre (NCZCC), Civil Lines, Prayagraj on 19 December 2026."
  }
};

export default function VenuePage() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <SvgSprite />
      <SiteHeader current="venue" />
      <MobileMenu />
      <main id="main">
        {/* ================= HERO ================= */}
        <section className="venue-page-hero">
          <div className="container">
            <a className="back-btn" href="/">
              <svg className="ic" style={{ transform: "rotate(180deg)" }}>
                <use href="#i-arrow" />
              </svg>
              {" "}Back to Home
            </a>
            <div>
              <span className="venue-tag mono">SATURDAY · 19 DECEMBER 2026 · NCZCC</span>
            </div>
            <h1 className="section-title">
              Find your way to the{" "}
              <em>Sangam.</em>
            </h1>
            <p className="section-intro" style={{ maxWidth: "680px", margin: "0 auto" }}>
              North Central Zone Cultural Centre (NCZCC), CSP Singh Marg, Civil Lines, Prayagraj — about 3 km from Prayagraj Junction.
            </p>
          </div>
        </section>

        {/* ================= VENUE ================= */}
        <section className="section venue" id="venue">
          <div className="container">
            <div className="venue__grid">
              <div className="venue__info" data-reveal="">
                <div className="venue-card">
                  <span className="mono">The address</span>
                  <h3>NCZCC Prayagraj</h3>
                  <p>
                    North Central Zone Cultural Centre,
                    <br />
                    CSP Singh Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001
                  </p>
                  <div className="venue-card__rows">
                    <div>
                      <svg className="ic">
                        <use href="#i-calendar" />
                      </svg>
                      <span>
                        <b>Saturday, 19 December 2026</b>
                        <small>Doors 8:00 AM · Sessions 9:00 AM</small>
                      </span>
                    </div>
                    <div>
                      <svg className="ic">
                        <use href="#i-pin" />
                      </svg>
                      <span>
                        <b>NCZCC, Civil Lines</b>
                        <small>Civil Lines, Prayagraj</small>
                      </span>
                    </div>
                  </div>
                  <a className="btn btn--primary magnetic" href="https://www.google.com/maps/search/?api=1&query=North+Central+Zone+Cultural+Centre+CSP+Singh+Marg+Prayagraj" target="_blank" rel="noopener">
                    <span>Open in Maps</span>
                    <svg className="ic">
                      <use href="#i-arrow" />
                    </svg>
                  </a>
                </div>
                <div className="travel-grid">
                  <article className="travel-card" data-reveal="">
                    <span className="travel-card__icon">
                      <svg className="ic">
                        <use href="#i-pin" />
                      </svg>
                    </span>
                    <h4>By train</h4>
                    <p>Prayagraj Junction ≈ 3 km. Autos, buses and taxis run regularly to Civil Lines.</p>
                  </article>
                  <article className="travel-card" data-reveal="" style={{ "--d": "80ms" }}>
                    <span className="travel-card__icon">
                      <svg className="ic">
                        <use href="#i-arrow" />
                      </svg>
                    </span>
                    <h4>By air</h4>
                    <p>Prayagraj Airport (Bamrauli) is ≈ 15 km away. Taxis and app cabs are available.</p>
                  </article>
                  <article className="travel-card" data-reveal="" style={{ "--d": "160ms" }}>
                    <span className="travel-card__icon">
                      <svg className="ic">
                        <use href="#i-boat" />
                      </svg>
                    </span>
                    <h4>By road</h4>
                    <p>In Civil Lines on CSP Singh Marg, well-connected to city centre. Street and campus parking available.</p>
                  </article>
                  <article className="travel-card travel-card--accent" data-reveal="" style={{ "--d": "240ms" }}>
                    <span className="travel-card__icon">
                      <svg className="ic">
                        <use href="#i-check" />
                      </svg>
                    </span>
                    <h4>Accessibility</h4>
                    <p>Ground-floor halls and accessible routes. Need specific support? Message the team on Instagram.</p>
                  </article>
                </div>
              </div>
              <div className="venue__map" data-reveal="" style={{ "--d": "120ms" }}>
                <div className="map-frame">
                  <svg className="map-svg" viewBox="0 0 640 600" preserveAspectRatio="xMidYMid meet" role="img" aria-labelledby="mapTitle mapDesc">
                    <title id="mapTitle">Schematic map of NCZCC Prayagraj, Civil Lines</title>
                    <desc id="mapDesc">
                      North Central Zone Cultural Centre (NCZCC) is located at 14, CSP Singh Marg, Civil Lines, Prayagraj — about 3 km from Prayagraj Junction.
                    </desc>
                    <rect width="640" height="600" fill="#F3F1E9" />
                    {/* river (decorative top) */}
                    <path d="M0 0H640V80C578 112 532 68 468 88C404 108 372 76 304 92C236 108 196 80 128 96C78 107 38 88 0 110Z" fill="#C3ECF6" />
                    <path d="M0 110C38 88 78 107 128 96C196 80 236 108 304 92C372 76 404 108 468 88C532 68 578 112 640 80" fill="none" stroke="#1B2A45" strokeWidth="1.6" />
                    <g className="mp-river-label">
                      <text x="356" y="48" textAnchor="middle">YAMUNA RIVER</text>
                      <text x="356" y="62" textAnchor="middle" fontSize="8">NEAR CIVIL LINES</text>
                    </g>
                    {/* boat */}
                    <g transform="translate(498 32)" stroke="#1B2A45" strokeWidth="2" strokeLinejoin="round">
                      <path d="M0 18L44 18Q38 30 22 30Q8 30 0 18Z" fill="#1B2A45" />
                      <path d="M22 18V2L38 18Z" fill="#FFD427" />
                      <path d="M22 18V2" fill="none" />
                    </g>
                    {/* city blocks (Civil Lines area) */}
                    <g fill="#EBE8DB" stroke="#D7D3C2" strokeWidth="1.4">
                      <rect x="34" y="310" width="60" height="40" rx="4" />
                      <rect x="104" y="310" width="80" height="40" rx="4" />
                      <rect x="34" y="362" width="80" height="44" rx="4" />
                      <rect x="124" y="362" width="60" height="44" rx="4" />
                      <rect x="192" y="326" width="62" height="38" rx="4" />
                      <rect x="556" y="308" width="60" height="44" rx="4" />
                      <rect x="556" y="362" width="60" height="42" rx="4" />
                    </g>
                    <text x="34" y="430" className="mp-small" opacity=".7">CIVIL LINES</text>
                    {/* main road: CSP Singh Marg */}
                    <path d="M-10 270C70 256 140 278 220 272C300 266 340 244 416 250C492 256 548 278 650 266" fill="none" stroke="#1B2A45" strokeWidth="30" strokeLinecap="round" />
                    <path d="M-10 270C70 256 140 278 220 272C300 266 340 244 416 250C492 256 548 278 650 266" fill="none" stroke="#FFFDF6" strokeWidth="24" strokeLinecap="round" />
                    {/* entry road to campus */}
                    <path d="M408 250V298" fill="none" stroke="#1B2A45" strokeWidth="18" />
                    <path d="M408 250V298" fill="none" stroke="#FFFDF6" strokeWidth="12" />
                    <text x="40" y="234" transform="rotate(-2 40 234)" className="mp-road-label">CSP SINGH MARG (NYAYA MARG)</text>
                    {/* campus: NCZCC */}
                    <rect x="308" y="292" width="230" height="148" rx="16" fill="#CCF6C5" stroke="#1B2A45" strokeWidth="2.4" />
                    <rect x="318" y="302" width="210" height="128" rx="11" fill="none" stroke="#1B2A45" strokeOpacity=".28" strokeDasharray="4 5" />
                    <text x="324" y="322" className="mp-campus">NCZCC PRAYAGRAJ</text>
                    <text x="324" y="338" className="mp-small">CIVIL LINES · 211001</text>
                    {/* campus building blocks */}
                    <g fill="#FFFDF6" stroke="#1B2A45" strokeWidth="1.5">
                      <rect x="324" y="350" width="54" height="28" rx="3" />
                      <rect x="324" y="388" width="54" height="28" rx="3" />
                      <rect x="388" y="350" width="44" height="66" rx="3" />
                    </g>
                    {/* pin */}
                    <path d="M490 342c-13 0-23 10-23 22 0 16 23 36 23 36s23-20 23-36c0-12-10-22-23-22z" fill="#FFD427" stroke="#1B2A45" strokeWidth="2.4" />
                    <circle cx="490" cy="366" r="8" fill="#1B2A45" />
                    <text x="490" y="420" textAnchor="middle" className="mp-small">MAIN GATE</text>
                    {/* Circuit House label (landmark) */}
                    <rect x="30" y="224" width="136" height="18" rx="9" fill="#F3F1E9" stroke="#D7D3C2" strokeWidth="1" />
                    <text x="40" y="236" className="mp-small" opacity=".85">ADJ. CIRCUIT HOUSE</text>
                    {/* Alka Puri Colony label */}
                    <text x="34" y="468" className="mp-small" opacity=".7">ALKA PURI COLONY</text>
                    {/* dashed route from Prayagraj Jn */}
                    <path d="M118 500C165 480 218 462 278 448C316 440 344 436 368 432" fill="none" stroke="#1B2A45" strokeWidth="2.2" strokeDasharray="7 7" />
                    <path d="M368 432l-12-2 7-9" fill="none" stroke="#1B2A45" strokeWidth="2.2" />
                    <rect x="144" y="460" width="136" height="17" rx="8.5" fill="#F3F1E9" />
                    <text x="154" y="472" className="mp-small">TAXI / AUTO · ≈ 3 KM</text>
                    {/* railway line */}
                    <path d="M-10 518C120 510 260 526 360 518C460 510 540 526 650 516" fill="none" stroke="#1B2A45" strokeWidth="5" />
                    <path d="M-10 518C120 510 260 526 360 518C460 510 540 526 650 516" fill="none" stroke="#F3F1E9" strokeWidth="3" strokeDasharray="10 10" />
                    <text x="134" y="538" className="mp-small">PRAYAGRAJ JN · ≈ 3 KM</text>
                    <circle cx="118" cy="514" r="7" fill="#F3F1E9" stroke="#1B2A45" strokeWidth="2.4" />
                    <circle cx="118" cy="514" r="2.4" fill="#1B2A45" />
                    {/* sangam */}
                    <g transform="translate(444 548)">
                      <rect width="182" height="28" rx="14" fill="#FFD427" stroke="#1B2A45" strokeWidth="2" />
                      <text x="14" y="18" fontSize="10">SANGAM ↘ · ≈ 7 KM</text>
                    </g>
                    {/* trees / greenery */}
                    <g stroke="#1B2A45" strokeWidth="1.5">
                      <circle cx="284" cy="308" r="9" fill="#5CDB6D" />
                      <circle cx="554" cy="308" r="7" fill="#5CDB6D" />
                      <circle cx="578" cy="440" r="9" fill="#5CDB6D" />
                    </g>
                    {/* compass */}
                    <g transform="translate(596 172)">
                      <circle r="20" fill="#FFFDF6" stroke="#1B2A45" strokeWidth="2" />
                      <path d="M0 8V-8M-7-1L0-9L7-1" fill="none" stroke="#1B2A45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <text x="0" y="-25" textAnchor="middle" className="mp-small">N</text>
                    </g>
                    {/* scale bar */}
                    <g stroke="#1B2A45" strokeWidth="2">
                      <path d="M18 168H118" />
                      <path d="M18 163V173M68 163V173M118 163V173" />
                    </g>
                    <text x="18" y="156" className="mp-small" opacity=".7">SCHEMATIC</text>
                    <text x="128" y="172" className="mp-small" opacity=".7">1 KM</text>
                  </svg>
                  <div className="map-frame__badge">
                    <svg className="ic">
                      <use href="#i-pin" />
                    </svg>
                    {" "}
                    <span>NCZCC · 25.4639° N, 81.8239° E</span>
                  </div>
                </div>
                <p className="map-credit">
                  Schematic map, not to scale ·{" "}
                  <a href="https://www.google.com/maps/dir//North+Central+Zone+Cultural+Centre,+14,+CSP+Singh+Marg,+Civil+Lines,+Prayagraj,+Uttar+Pradesh+211001" target="_blank" rel="noopener">Open in Google Maps</a>
                </p>
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
