import { registerLinkProps } from '@/lib/registration';
import SkipLink from '@/components/SkipLink';
import BoatPreloader from '@/components/BoatPreloader';
import HeroMandala from '@/components/HeroMandala';
import RibbonMarquee from '@/components/RibbonMarquee';
import ScrollProgress from '@/components/ScrollProgress';
import SvgSprite from '@/components/SvgSprite';
import SiteHeader from '@/components/SiteHeader';
import MobileMenu from '@/components/MobileMenu';
import SiteFooter from '@/components/SiteFooter';
import ToTop from '@/components/ToTop';

export const metadata = {
  title: {
    absolute: "DevFest Prayagraj 2026 — Where Ideas Find Their Confluence"
  },
  description: "DevFest Prayagraj 2026. 19 December at NCZCC Prayagraj, Civil Lines. A day of agentic AI, Google Cloud, Android, web and community in the Sangam city. Organised by GDG Prayagraj.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "DevFest Prayagraj 2026 — Where Ideas Find Their Confluence",
    description: "One day. Three streams. Infinite ideas. DevFest returns to the Sangam city on 19 December 2026 at NCZCC Prayagraj, Civil Lines.",
    type: "website",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFest Prayagraj 2026 — Where Ideas Find Their Confluence",
    description: "19 December 2026 at NCZCC Prayagraj, Civil Lines. Agentic AI, Google Cloud, Android, web and community at the Sangam."
  }
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "DevFest Prayagraj 2026",
  description: "A one-day community-led developer conference by GDG Prayagraj on agentic AI, Google Cloud, Android and the web, held at the Sangam city.",
  startDate: "2026-12-19T09:00:00+05:30",
  endDate: "2026-12-19T18:00:00+05:30",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  image: "https://devfest-prayagraj-2026.vercel.app/assets/img/og.png",
  location: {
    "@type": "Place",
    name: "North Central Zone Cultural Centre (NCZCC)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14, CSP Singh Marg, Civil Lines",
      addressLocality: "Prayagraj",
      addressRegion: "Uttar Pradesh",
      postalCode: "211001",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.4639,
      longitude: 81.8239
    }
  },
  organizer: {
    "@type": "Organization",
    name: "GDG Prayagraj",
    url: "https://gdg.community.dev/gdg-prayagraj/"
  }
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <SkipLink />
      <BoatPreloader />
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <SvgSprite />
      <SiteHeader current="home" />
      <MobileMenu />
      <main id="main">
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <HeroMandala />
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__stickers" aria-hidden="true">
            {/* Left side icons & logos */}
            <div className="float-sticker float-sticker--boat" data-parallax="0.06" title="Sangam Boat">
              <svg className="ic">
                <use href="#i-boat" />
              </svg>
            </div>
            <div className="float-sticker float-sticker--android" data-parallax="0.07" title="Android">
              <svg className="ic">
                <use href="#i-android" />
              </svg>
            </div>
            <div className="float-sticker float-sticker--prompt" data-parallax="0.09" title="Terminal">
              <svg className="ic">
                <use href="#i-terminal" />
              </svg>
            </div>
            <div className="float-sticker float-sticker--gdg" data-parallax="0.05" title="GDG">
              <svg className="ic">
                <use href="#i-gdg-chevrons" />
              </svg>
            </div>
            {/* Right side icons & logos */}
            <div className="float-sticker float-sticker--dot" data-parallax="0.12">19.12.26</div>
            <div className="float-sticker float-sticker--diya" data-parallax="0.08" title="Diya">
              <svg className="ic">
                <use href="#i-diya" />
              </svg>
            </div>
            <div className="float-sticker float-sticker--lotus" data-parallax="0.06" title="Lotus">
              <svg className="ic">
                <use href="#i-lotus" />
              </svg>
            </div>
            <div className="float-sticker float-sticker--cloud" data-parallax="0.07" title="Google Cloud">
              <svg className="ic">
                <use href="#i-cloud" />
              </svg>
            </div>
            <div className="float-sticker float-sticker--code" data-parallax="0.09" title="Code">
              <svg className="ic">
                <use href="#i-code" />
              </svg>
            </div>
            <div className="float-sticker float-sticker--brace" data-parallax="0.04">{"{ }"}</div>
            <div className="float-sticker float-sticker--wave" data-parallax="0.06" title="Sangam Wave">
              <svg className="ic">
                <use href="#i-wave" />
              </svg>
            </div>
          </div>
          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="eyebrow" data-reveal="">
                <span className="eyebrow__dot" />
                {" "}
                <span>GDG Prayagraj presents</span>
                {" "}
                <span className="eyebrow__line" />
                {" "}
                <span className="mono">DevFest Prayagraj ’26</span>
              </div>
              <h1 className="hero__title">
                <span className="line">
                  <span className="word" style={{ "--i": "0" }}>
                    <span>Where</span>
                  </span>
                  {" "}
                  <span className="word" style={{ "--i": "1" }}>
                    <span>ideas</span>
                  </span>
                </span>
                {" "}
                <span className="line">
                  <span className="word" style={{ "--i": "2" }}>
                    <span>find</span>
                  </span>
                  {" "}
                  <span className="word" style={{ "--i": "3" }}>
                    <span>their</span>
                  </span>
                </span>
                {" "}
                <span className="line">
                  <span className="word word--serif" style={{ "--i": "4" }}>
                    <span>confluence.</span>
                  </span>
                </span>
              </h1>
              <p className="hero__lede" data-reveal="" style={{ "--d": "520ms" }}>
                <strong>Build. Secure. Scale. For the agentic era.</strong>
                {" "}DevFest is back in the Sangam city. Come for the big-room talks, stay for the hands-on labs, and leave with something you built yourself.
              </p>
              <div className="hero__meta" data-reveal="" style={{ "--d": "620ms" }}>
                <div className="meta-pill">
                  <svg className="ic">
                    <use href="#i-calendar" />
                  </svg>
                  {" "}
                  <span>
                    <b>Sat, 19 Dec 2026</b>
                    <small>9:00 AM onwards</small>
                  </span>
                </div>
                <div className="meta-pill">
                  <svg className="ic">
                    <use href="#i-pin" />
                  </svg>
                  {" "}
                  <span>
                    <b>NCZCC, Prayagraj</b>
                    <small>Civil Lines · Uttar Pradesh</small>
                  </span>
                </div>
              </div>
              <div className="hero__actions" data-reveal="" style={{ "--d": "700ms" }}>
                <a className="btn btn--primary magnetic" {...registerLinkProps('#register')}>
                  <span>Register now</span>
                  {" "}
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </a>
                {" "}
                <a className="btn btn--ghost magnetic" href="/agenda">
                  <span>{"Explore Agenda & Speakers"}</span>
                  {" "}
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </div>
              <div className="hero__stats" data-reveal="" style={{ "--d": "780ms" }}>
                <div>
                  <strong data-count="500">500</strong>
                  <span>+</span>
                  <small>minds in 2025</small>
                </div>
                <div>
                  <strong data-count="4">4</strong>
                  <span />
                  <small>tracks to pick from</small>
                </div>
                <div>
                  <strong data-count="1">1</strong>
                  <span />
                  <small>day at the Sangam</small>
                </div>
              </div>
            </div>
            <div className="hero__visual" data-reveal="" style={{ "--d": "300ms" }}>
              <div className="hero-poster" id="heroPoster">
                <div className="hero-poster__top">
                  <span className="mono">GDG · PRAYAGRAJ</span>
                  {" "}
                  <span className="mono">19 · 12 · 26</span>
                </div>
                <div className="hero-poster__art">
                  <img className="poster-photo" src="/assets/img/hero-sangam.webp" alt="Boats on the Sangam at Prayagraj under a blue sky" width="960" height="983" fetchPriority="high" />
                  <div className="hero-poster__logo">
                    <img src="/assets/brand/devfest-2026-no-date.png" alt="DevFest" width="1600" height="238" />
                  </div>
                  <span className="hero-poster__loc">Prayagraj</span>
                  {" "}
                  <span className="hero-poster__year">2026</span>
                </div>
                <div className="hero-poster__bottom">
                  <div className="hero-poster__venue">
                    <svg className="ic">
                      <use href="#i-pin" />
                    </svg>
                    {" "}
                    <span>NCZCC · Civil Lines</span>
                  </div>
                  <span className="hero-poster__badge">One current</span>
                </div>
                <div className="hero-poster__sticker">BUILD · BELONG · BEYOND</div>
                <div className="hero-poster__sunsticker" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-diya" />
                  </svg>
                </div>
              </div>
              <div className="hero__scribble" aria-hidden="true">
                <svg viewBox="0 0 180 70" fill="none">
                  <path d="M4 50c28-32 62-38 86-14 18 18-8 30-18 16-9-13 20-26 48-22 20 3 34 12 52 10" stroke="#1B2A45" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* ================= MARQUEE ================= */}
        <RibbonMarquee />
        {/* ================= COUNTDOWN ================= */}
        <section className="countdown-band" id="countdown" aria-labelledby="countdownTitle">
          <div className="container countdown-band__inner">
            <div className="countdown-band__copy" data-reveal="">
              <span className="mono mono--light">The current is rising</span>
              <h2 id="countdownTitle">
                How long till the{" "}
                <em>Sangam?</em>
              </h2>
            </div>
            <div className="countdown" id="countdownTimer" data-reveal="" style={{ "--d": "120ms" }} aria-live="polite" aria-label="Countdown to DevFest Prayagraj 2026">
              <div className="countdown__unit">
                <span id="cdDays">--</span>
                <small>days</small>
              </div>
              <div className="countdown__sep" aria-hidden="true">:</div>
              <div className="countdown__unit">
                <span id="cdHours">--</span>
                <small>hours</small>
              </div>
              <div className="countdown__sep" aria-hidden="true">:</div>
              <div className="countdown__unit">
                <span id="cdMins">--</span>
                <small>mins</small>
              </div>
              <div className="countdown__sep" aria-hidden="true">:</div>
              <div className="countdown__unit">
                <span id="cdSecs">--</span>
                <small>secs</small>
              </div>
            </div>
            <div className="countdown-band__actions" data-reveal="" style={{ "--d": "200ms" }}>
              <button className="btn btn--light btn--small magnetic js-calendar" type="button">
                <svg className="ic">
                  <use href="#i-calendar" />
                </svg>
                {" "}
                <span>Add to calendar</span>
              </button>
              {" "}
              <span className="countdown-band__note">19.12.26 · 9:00 AM IST</span>
            </div>
          </div>
          <div className="countdown-band__halftone" aria-hidden="true" />
        </section>
        {/* ================= ABOUT ================= */}
        <section className="section about" id="about">
          <div className="container">
            <div className="section-head">
              <div className="section-label" data-reveal="">
                <span>01</span>
                {" "}The idea
              </div>
              <h2 className="section-title" data-reveal="" style={{ "--d": "80ms" }}>
                A conference shaped like a{" "}
                <em>river.</em>
              </h2>
            </div>
            <div className="about__grid">
              <div className="about__lede" data-reveal="">
                <p className="lede">
                  DevFest is the world’s largest community-led developer conference. In Prayagraj, it becomes a meeting point — of students and staff engineers, first commits and bold bets, ancient ghats and new ideas.
                </p>
              </div>
              <div className="about__body" data-reveal="" style={{ "--d": "120ms" }}>
                <p>
                  This year’s DevFest lands in the agentic AI era. One day of talks, hands-on labs and honest conversations about building, securing and scaling what comes next. No gatekeeping. No jargon walls. Just the current — and everyone in it.
                </p>
                <p>
                  Whether you’re writing your first line of code or shipping to millions, there’s a stream here with your name on it.
                </p>
                <div className="about__signature">
                  <span className="mono">The DevFest Prayagraj creed</span>
                  <p>“Three rivers. One Sangam. That’s the whole idea.”</p>
                </div>
              </div>
            </div>
            <div className="streams">
              <article className="stream-card stream-card--blue" data-reveal="">
                <div className="stream-card__top">
                  <span className="mono">01 Ganga</span>
                </div>
                <h3>Build</h3>
                <p>The main current. Keynotes, deep dives and demos on agentic AI, Google Cloud, Android and the web.</p>
                <span className="stream-card__tag">Talks · Demos · Labs</span>
              </article>
              <article className="stream-card stream-card--green" data-reveal="" style={{ "--d": "90ms" }}>
                <div className="stream-card__top">
                  <span className="mono">02 Yamuna</span>
                </div>
                <h3>Belong</h3>
                <p>
                  The quieter stream. Community corners, design crits, mentorship and the people who make the room worth entering.
                </p>
                <span className="stream-card__tag">Community · Mentorship</span>
              </article>
              <article className="stream-card stream-card--yellow" data-reveal="" style={{ "--d": "180ms" }}>
                <div className="stream-card__top">
                  <span className="mono">03 Saraswati</span>
                </div>
                <h3>Beyond</h3>
                <p>The unseen river. The spark after the talk, the side project, the collaborator you haven’t met yet.</p>
                <span className="stream-card__tag">Ideas · Serendipity</span>
              </article>
            </div>
            <div className="stats-band" data-reveal="">
              <div className="stats-band__head">
                <span className="mono">Last year, at DevFest</span>
                {" "}
                <span className="stats-band__year">2025</span>
              </div>
              <div className="stats-band__grid">
                <div className="stat">
                  <strong data-count="500">500</strong>
                  <span>+</span>
                  <small>participants</small>
                </div>
                <div className="stat">
                  <strong data-count="10">10</strong>
                  <span>+</span>
                  <small>speakers</small>
                </div>
                <div className="stat">
                  <strong data-count="12">12</strong>
                  <span>+</span>
                  <small>sessions</small>
                </div>
                <div className="stat">
                  <strong data-count="10">10</strong>
                  <span>+</span>
                  <small>workshops</small>
                </div>
              </div>
              <p className="stats-band__note">The 2026 edition is being built bigger. Bring your people.</p>
              <div className="stats-band__sticker" aria-hidden="true">
                <svg className="ic">
                  <use href="#i-arrow" />
                </svg>
                {" "}
                <span>
                  bigger
                  <br />
                  in ’26
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* ================= TRACKS ================= */}
        <section className="section tracks" id="tracks">
          <div className="container">
            <div className="section-head section-head--split">
              <div>
                <div className="section-label" data-reveal="">
                  <span>02</span>
                  {" "}Tracks
                </div>
                <h2 className="section-title" data-reveal="" style={{ "--d": "80ms" }}>
                  Four streams.
                  <br />
                  One{" "}
                  <em>current.</em>
                </h2>
              </div>
              <p className="section-intro" data-reveal="" style={{ "--d": "140ms" }}>
                Pick a lane or wander between all four. Every track is built for people who ship: real code, real trade-offs, real questions.
              </p>
            </div>
            <div className="track-grid">
              <article className="track-card track-card--blue tilt" data-reveal="">
                <div className="track-card__art">
                  <img src="/assets/tracks/ai.png" alt="AI at DevFest" width="345" height="197" loading="lazy" />
                  {" "}
                  <span className="track-card__num">01</span>
                </div>
                <div className="track-card__body">
                  <h3>{"AI & Agentic Systems"}</h3>
                  <p>
                    Gemini, the Agent Development Kit and MCP. Build agents that finish the job, and learn how to tell when they don't.
                  </p>
                  <div className="track-card__tags">
                    <span>Gemini API</span>
                    <span>ADK</span>
                    <span>MCP</span>
                  </div>
                </div>
                <span className="track-card__arrow" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </article>
              <article className="track-card track-card--green tilt" data-reveal="" style={{ "--d": "80ms" }}>
                <div className="track-card__art">
                  <img src="/assets/tracks/cloud.png" alt="Cloud at DevFest" width="345" height="197" loading="lazy" />
                  {" "}
                  <span className="track-card__num">02</span>
                </div>
                <div className="track-card__body">
                  <h3>{"Cloud, Security & Scale"}</h3>
                  <p>
                    Google Cloud, Firebase and the security work nobody posts about. Keep your app standing when the traffic, and the attackers, show up.
                  </p>
                  <div className="track-card__tags">
                    <span>Cloud Run</span>
                    <span>Firebase</span>
                    <span>Security</span>
                  </div>
                </div>
                <span className="track-card__arrow" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </article>
              <article className="track-card track-card--yellow tilt" data-reveal="" style={{ "--d": "160ms" }}>
                <div className="track-card__art">
                  <img src="/assets/tracks/android.png" alt="Android at DevFest" width="345" height="197" loading="lazy" />
                  {" "}
                  <span className="track-card__num">03</span>
                </div>
                <div className="track-card__body">
                  <h3>{"Android & On-device AI"}</h3>
                  <p>Compose, Kotlin and Gemini Nano. AI that lives in your pocket and works even when the network doesn't.</p>
                  <div className="track-card__tags">
                    <span>Compose</span>
                    <span>Kotlin</span>
                    <span>On-device</span>
                  </div>
                </div>
                <span className="track-card__arrow" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </article>
              <article className="track-card track-card--red tilt" data-reveal="" style={{ "--d": "240ms" }}>
                <div className="track-card__art">
                  <img src="/assets/tracks/web.png" alt="Web at DevFest" width="345" height="197" loading="lazy" />
                  {" "}
                  <span className="track-card__num">04</span>
                </div>
                <div className="track-card__body">
                  <h3>{"Web & Experiences"}</h3>
                  <p>Built-in AI in Chrome, Angular and creative coding. Interfaces that feel like places, not pages.</p>
                  <div className="track-card__tags">
                    <span>Angular</span>
                    <span>Built-in AI</span>
                    <span>Creative web</span>
                  </div>
                </div>
                <span className="track-card__arrow" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </span>
              </article>
            </div>
            <div className="workshop-banner" data-reveal="">
              <div className="workshop-banner__art" aria-hidden="true">
                <svg viewBox="0 0 120 120" fill="none">
                  <circle cx="60" cy="60" r="46" stroke="#1B2A45" strokeWidth="2" strokeDasharray="4 7" />
                  <path d="M38 52h44v34H38z" fill="#FFE7A5" stroke="#1B2A45" strokeWidth="2.5" />
                  <path d="M46 52V42h28v10M52 62h16M52 70h12" stroke="#1B2A45" strokeWidth="2.5" />
                  <path d="M60 20v10M32 30l6 6M88 30l-6 6" stroke="#1B2A45" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="workshop-banner__copy">
                <span className="mono">Hands-on · limited seats</span>
                <h3>Build with AI. Leave with something real.</h3>
                <p>Bring a laptop. Our lab hosts will help you take a half-formed idea to a working prototype in one afternoon.</p>
              </div>
              <a className="btn btn--ink magnetic" href="/agenda#programme">
                <span>See the lab track</span>
                <svg className="ic">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        {/* ================= PARTNERS ================= */}
        <section className="section partners" id="partners">
          <div className="container">
            <div className="section-head section-head--split">
              <div>
                <div className="section-label" data-reveal="">
                  <span>03</span>
                  {" "}Partners
                </div>
                <h2 className="section-title" data-reveal="" style={{ "--d": "80ms" }}>
                  Made possible by
                  <br />
                  <em>many hands.</em>
                </h2>
              </div>
              <p className="section-intro" data-reveal="" style={{ "--d": "140ms" }}>
                DevFest stays open because partners believe in the room. If your team wants to back the next generation of builders in Uttar Pradesh, let’s talk.
              </p>
            </div>
            <div className="partner-grid">
              <article className="partner-card partner-card--wide" data-reveal="">
                <div className="partner-card__label mono">Presented by</div>
                <div className="partner-card__name">
                  Google
                  <br />
                  for Developers
                </div>
                <p>The global DevFest programme and the developer technologies the community builds with every day.</p>
                <span className="partner-card__mark" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-lotus" />
                  </svg>
                </span>
              </article>
              <article className="partner-card" data-reveal="" style={{ "--d": "80ms" }}>
                <div className="partner-card__label mono">Organised by</div>
                <div className="partner-card__name partner-card__name--small">
                  GDG
                  <br />
                  Prayagraj
                </div>
                <p>A volunteer-led community for developers, designers and innovators across Prayagraj.</p>
                <span className="partner-card__mark" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-wave" />
                  </svg>
                </span>
              </article>
              <article className="partner-card" data-reveal="" style={{ "--d": "120ms" }}>
                <div className="partner-card__label mono">Community Initiatives</div>
                <div className="partner-card__name partner-card__name--small">
                  {"WTM & TFUG"}
                  <br />
                  Prayagraj
                </div>
                <p>
                  Women Techmakers and TensorFlow User Group Prayagraj. Bringing more women into tech, and making machine learning easy to start.
                </p>
                <span className="partner-card__mark" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-lotus" />
                  </svg>
                </span>
              </article>
              <article className="partner-card" data-reveal="" style={{ "--d": "140ms" }}>
                <div className="partner-card__label mono">{"Cloud & Community"}</div>
                <div className="partner-card__name partner-card__name--small">
                  GDG Cloud
                  <br />
                  Prayagraj
                </div>
                <p>
                  The cloud crew of Prayagraj. Meetups and study jams on Google Cloud, Kubernetes and the plumbing behind every app.
                </p>
                <span className="partner-card__mark" aria-hidden="true">
                  <svg className="ic">
                    <use href="#i-wave" />
                  </svg>
                </span>
              </article>
              <article className="partner-card partner-card--cta" data-reveal="" style={{ "--d": "160ms" }}>
                <span className="mono">Title · Track · Community</span>
                <h3>
                  Partner with
                  <br />
                  DevFest 2026.
                </h3>
                <p>Partnerships for 2026 are open. Back the next generation of builders in Uttar Pradesh.</p>
                <a className="text-link" href="https://gdgprayagraj.com/" target="_blank" rel="noopener">
                  Start a conversation{" "}
                  <svg className="ic">
                    <use href="#i-arrow" />
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </section>
        {/* ================= VENUE ================= */}
        <section className="section venue" id="venue">
          <div className="container">
            <div className="section-head">
              <div className="section-label" data-reveal="">
                <span>04</span>
                {" "}Venue
              </div>
              <h2 className="section-title" data-reveal="" style={{ "--d": "80ms" }}>
                Find your way
                <br />
                to the{" "}
                <em>Sangam.</em>
              </h2>
            </div>
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
        {/* ================= FAQ ================= */}
        <section className="section faq" id="faq">
          <div className="container">
            <div className="faq__grid">
              <div className="faq__head">
                <div className="section-label" data-reveal="">
                  <span>05</span>
                  {" "}Questions
                </div>
                <h2 className="section-title" data-reveal="" style={{ "--d": "80ms" }}>
                  Frequently asked
                  <br />
                  <em>questions.</em>
                </h2>
                <p data-reveal="" style={{ "--d": "140ms" }}>Quick answers before you pack your laptop. Still stuck? Message us on Instagram.</p>
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
                        We can't arrange a stay for attendees, so please book your own if you're coming from outside Prayagraj. December is a busy month in the city, so book early.
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
                        No age limit. If you're curious about tech, you're welcome, whether you're in school, in college or ten years into your career.
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
        {/* ================= FINAL CTA ================= */}
        <section className="final-cta" id="register">
          <div className="final-cta__sun" aria-hidden="true" />
          <div className="final-cta__waves" aria-hidden="true">
            <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
              <path d="M0 120C180 60 300 170 480 120s300-80 480-20 300 70 480 10v110H0Z" fill="#F8EACA" opacity=".6" />
              <path d="M0 150C180 90 300 200 480 150s300-80 480-20 300 70 480 10v80H0Z" fill="#4A6FA8" opacity=".35" />
              <path d="M0 180C180 120 300 220 480 180s300-70 480-10 300 60 480 0v50H0Z" fill="#1B2A45" opacity=".92" />
            </svg>
          </div>
          <div className="container final-cta__inner">
            <div className="final-cta__eyebrow mono" data-reveal="">19.12.2026 · NCZCC, Prayagraj</div>
            <h2 className="final-cta__title" data-reveal="" style={{ "--d": "80ms" }}>
              See you at
              <br />
              the{" "}
              <em>Sangam.</em>
            </h2>
            <p className="final-cta__copy" data-reveal="" style={{ "--d": "140ms" }}>Registration is open. Grab your seat, tell a friend, and bring the idea you’ve been sitting on.</p>
            <div className="final-cta__actions" data-reveal="" style={{ "--d": "200ms" }}>
              <a className="btn btn--ink btn--large magnetic" {...registerLinkProps('https://gdg.community.dev/gdg-prayagraj/')}>
                <span>Register now</span>
                <svg className="ic">
                  <use href="#i-arrow" />
                </svg>
              </a>
              {" "}
              <button className="btn btn--light btn--large magnetic js-calendar" type="button">
                <svg className="ic">
                  <use href="#i-calendar" />
                </svg>
                <span>Add to calendar</span>
              </button>
            </div>
            <div className="final-cta__socials" data-reveal="" style={{ "--d": "260ms" }}>
              <a href="https://www.instagram.com/gdg_prayagraj/" target="_blank" rel="noopener" aria-label="GDG Prayagraj on Instagram">
                <svg className="ic">
                  <use href="#i-instagram" />
                </svg>
                <span>Instagram</span>
              </a>
              {" "}
              <a href="https://www.linkedin.com/company/gdg-prayagraj/" target="_blank" rel="noopener" aria-label="GDG Prayagraj on LinkedIn">
                <svg className="ic">
                  <use href="#i-linkedin" />
                </svg>
                <span>LinkedIn</span>
              </a>
              {" "}
              <a href="https://www.youtube.com/@gdgprayagraj" target="_blank" rel="noopener" aria-label="GDG Prayagraj on YouTube">
                <svg className="ic">
                  <use href="#i-youtube" />
                </svg>
                <span>YouTube</span>
              </a>
              {" "}
              <a href="https://gdg.community.dev/gdg-prayagraj/" target="_blank" rel="noopener" aria-label="GDG Prayagraj community page">
                <svg className="ic">
                  <use href="#i-code" />
                </svg>
                <span>GDG Community</span>
              </a>
            </div>
            <div className="final-cta__badge" aria-hidden="true">
              <svg className="ic">
                <use href="#i-lotus" />
              </svg>
              {" "}
              <span>
                built by the community
                <br />
                for the community
              </span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter home />
      <div className="cal-modal" id="calendarModal" role="dialog" aria-modal="true" aria-labelledby="calModalTitle" aria-hidden="true">
        <div className="cal-modal__backdrop" id="calBackdrop" tabIndex="-1" />
        <div className="cal-modal__dialog">
          <button className="cal-modal__close" id="calCloseBtn" type="button" aria-label="Close dialog">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <div className="cal-modal__eyebrow">
            <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: "#34A853" }} />
            {" "}Save the Date
          </div>
          <h3 className="cal-modal__title" id="calModalTitle">Add DevFest Prayagraj '26</h3>
          <div className="cal-modal__event-card">
            <div className="cal-modal__event-row">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {" "}
              <span>
                <b>Saturday, 19 December 2026</b>
                {" "}· 09:00 AM – 06:00 PM IST
              </span>
            </div>
            <div className="cal-modal__event-row">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {" "}
              <span>
                <b>NCZCC</b>
                {" "}· 14 CSP Singh Marg, Civil Lines, Prayagraj
              </span>
            </div>
          </div>
          <div className="cal-modal__providers">
            {/* Google Calendar */}
            <a className="cal-provider-btn cal-provider-btn--featured" id="calGcalLink" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=DevFest+Prayagraj+2026&dates=20261219T033000Z/20261219T123000Z&details=DevFest+Prayagraj+2026+by+GDG+Prayagraj+%E2%80%94+Where+Ideas+Find+Their+Confluence.+Website%3A+https%3A%2F%2Fdevfest-prayagraj-2026.vercel.app%2F&location=North+Central+Zone+Cultural+Centre+(NCZCC)%2C+14+CSP+Singh+Marg%2C+Civil+Lines%2C+Prayagraj%2C+Uttar+Pradesh+211001" target="_blank" rel="noopener noreferrer">
              <span className="cal-icon">
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path fill="#FFF" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
              </span>
              {" "}
              <span>Google Calendar</span>
            </a>
            {/* Apple Calendar (.ics) */}
            <button className="cal-provider-btn js-cal-ics" type="button">
              <span className="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.92 2.74 1 .08 2.01-.5 2.62-1.24z" />
                </svg>
              </span>
              {" "}
              <span>Apple Calendar</span>
            </button>
            {/* Outlook Web */}
            <a className="cal-provider-btn" href="https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=2026-12-19T03:30:00Z&enddt=2026-12-19T12:30:00Z&subject=DevFest+Prayagraj+2026&body=DevFest+Prayagraj+2026+by+GDG+Prayagraj.+Website%3A+https%3A%2F%2Fdevfest-prayagraj-2026.vercel.app%2F&location=NCZCC+Prayagraj" target="_blank" rel="noopener noreferrer">
              <span className="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#0078D4">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </span>
              {" "}
              <span>Outlook Web</span>
            </a>
            {/* Universal iCal (.ics) */}
            <button className="cal-provider-btn js-cal-ics" type="button">
              <span className="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              {" "}
              <span>Download .ics</span>
            </button>
            {/* Yahoo Calendar */}
            <a className="cal-provider-btn" href="https://calendar.yahoo.com/?v=60&view=d&type=20&title=DevFest+Prayagraj+2026&st=20261219T033000Z&et=20261219T123000Z&desc=DevFest+Prayagraj+2026+by+GDG+Prayagraj&in_loc=NCZCC+Prayagraj" target="_blank" rel="noopener noreferrer">
              <span className="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#6001D2">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              {" "}
              <span>Yahoo Calendar</span>
            </a>
            {/* Microsoft 365 */}
            <a className="cal-provider-btn" href="https://outlook.office.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent&startdt=2026-12-19T03:30:00Z&enddt=2026-12-19T12:30:00Z&subject=DevFest+Prayagraj+2026&body=DevFest+Prayagraj+2026+by+GDG+Prayagraj&location=NCZCC+Prayagraj" target="_blank" rel="noopener noreferrer">
              <span className="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#EA3E23">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </span>
              {" "}
              <span>Office 365</span>
            </a>
          </div>
          <div className="cal-modal__actions">
            <button className="cal-modal__copy-btn" id="calCopyBtn" type="button">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              {" "}
              <span id="calCopyLabel">Copy event details</span>
            </button>
            {" "}
            <span className="cal-modal__badge">RFC 5545 iCal · All Devices</span>
          </div>
        </div>
      </div>
      <ToTop />
      <noscript dangerouslySetInnerHTML={{ __html: "\n  <style>\n    .preloader{display:none!important}\n    body.is-preloading{overflow:auto!important}\n    [data-reveal]{opacity:1!important;transform:none!important}\n    .word>span{transform:none!important}\n  </style>\n" }} />
    </>
  );
}
