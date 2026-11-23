import SkipLink from '@/components/SkipLink';
import ScrollProgress from '@/components/ScrollProgress';
import SvgSprite from '@/components/SvgSprite';
import SiteHeader from '@/components/SiteHeader';
import MobileMenu from '@/components/MobileMenu';
import SiteFooter from '@/components/SiteFooter';
import ToTop from '@/components/ToTop';
import './agenda.css';
import { PREVIOUS_SPEAKERS } from '@/lib/previousSpeakers';

export const metadata = {
  title: {
    absolute: "Agenda & Speakers — DevFest Prayagraj 2026"
  },
  description: "Explore the full schedule, workshops, breakout sessions, and speaker line-up for DevFest Prayagraj 2026.",
  alternates: {
    canonical: "/agenda"
  },
  openGraph: {
    title: "Agenda & Speakers — DevFest Prayagraj 2026",
    description: "Explore the complete schedule, keynote sessions, hands-on workshops, and confirmed GDE speakers for DevFest Prayagraj 2026 at NCZCC.",
    type: "website",
    url: "/agenda"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agenda & Speakers — DevFest Prayagraj 2026",
    description: "Explore the complete schedule, keynote sessions, hands-on workshops, and confirmed GDE speakers for DevFest Prayagraj 2026 at NCZCC."
  }
};

export default function AgendaPage() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <SvgSprite />
      <SiteHeader current="agenda" />
      <MobileMenu />
      <main id="main">
        {/* ================= HERO ================= */}
        <section className="agenda-page-hero">
          <div className="container">
            <a className="back-btn" href="/">
              <svg className="ic" style={{ transform: "rotate(180deg)" }}>
                <use href="#i-arrow" />
              </svg>
              {" "}Back to Home
            </a>
            <div>
              <span className="agenda-tag mono">SATURDAY · 19 DECEMBER 2026 · NCZCC</span>
            </div>
            <h1 className="section-title">{"Schedule & Speakers"}</h1>
            <p className="section-intro" style={{ maxWidth: "680px", margin: "0 auto" }}>
              One stage, two labs and a demo carnival. Here is how the day runs, from the first chai to the last group photo.
            </p>
          </div>
        </section>

        {/* ================= PROGRAMME ================= */}
        <section className="section programme" id="programme">
          <div className="container">
            <div className="section-head section-head--split">
              <div>
                <div className="section-label" data-reveal="">
                  <span>03</span>
                  {" "}Programme
                </div>
                <h2 className="section-title" data-reveal="" style={{ "--d": "80ms" }}>
                  One day.
                  <br />
                  Every{" "}
                  <em>current.</em>
                </h2>
              </div>
              <div className="section-intro" data-reveal="" style={{ "--d": "140ms" }}>
                <p>
                  A single day, shaped around you: big-room ideas in the morning, hands-on labs in the afternoon, and the hallway track all day long.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", marginTop: "12px" }}>
                  <p className="small-note" style={{ margin: "0" }}>
                    <svg className="ic">
                      <use href="#i-calendar" />
                    </svg>
                    {" "}Indicative running order. Final agenda drops 30 Nov 2026.
                  </p>
                  <button className="btn btn--light btn--small js-calendar" type="button" aria-haspopup="dialog" style={{ padding: "6px 14px", fontSize: "13px" }}>
                    <svg className="ic">
                      <use href="#i-calendar" />
                    </svg>
                    {" "}
                    <span>Add to calendar</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="programme__controls" data-reveal="">
              <div className="tabs" role="tablist" aria-label="Filter programme">
                <button className="tab is-active" role="tab" aria-selected="true" data-filter="all">All</button>
                {" "}
                <button className="tab" role="tab" aria-selected="false" data-filter="main">Main stage</button>
                {" "}
                <button className="tab" role="tab" aria-selected="false" data-filter="workshop">Workshops</button>
                {" "}
                <button className="tab" role="tab" aria-selected="false" data-filter="breakout">Breakouts</button>
              </div>
              <span className="programme__date mono">SAT · 19.12.2026 · NCZCC</span>
            </div>
            <div className="agenda" id="agenda">
              <article className="agenda-item" data-room="all">
                <div className="agenda-item__time">09:00</div>
                <div className="agenda-item__dot agenda-item__dot--ink" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Entry</span>
                  <h3>{"Entry & Welcome Ceremony"}</h3>
                  <p>Participant registration, badge collection, welcome address, and community networking.</p>
                </div>
                <div className="agenda-item__room">Atrium</div>
              </article>
              <article className="agenda-item" data-room="all">
                <div className="agenda-item__time">09:30</div>
                <div className="agenda-item__dot agenda-item__dot--yellow" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Celebration</span>
                  <h3>Cake Cutting Ceremony</h3>
                  <p>Official kickoff celebrating the spirit of DevFest with community members and leaders.</p>
                </div>
                <div className="agenda-item__room">Main stage</div>
              </article>
              <article className="agenda-item" data-room="main">
                <div className="agenda-item__time">10:00</div>
                <div className="agenda-item__dot agenda-item__dot--blue" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Keynote</span>
                  <h3>{"Opening Keynote & Community Vision"}</h3>
                  <p>Welcome address by Ankit Kumar Verma and GDG Prayagraj leads on the technology confluence in the Sangam city.</p>
                </div>
                <div className="agenda-item__room">Main stage</div>
              </article>
              <article className="agenda-item" data-room="main">
                <div className="agenda-item__time">10:30</div>
                <div className="agenda-item__dot agenda-item__dot--green" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Session 1</span>
                  <h3>Speaker reveal soon.</h3>
                  <p>{"A Web & Open Source talk. The speaker and title drop with the final agenda."}</p>
                </div>
                <div className="agenda-item__room">Main stage</div>
              </article>
              <article className="agenda-item" data-room="main">
                <div className="agenda-item__time">11:10</div>
                <div className="agenda-item__dot agenda-item__dot--blue" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Session 2</span>
                  <h3>Speaker reveal soon.</h3>
                  <p>{"An AI & Cloud talk. The speaker and title drop with the final agenda."}</p>
                </div>
                <div className="agenda-item__room">Main stage</div>
              </article>
              <article className="agenda-item" data-room="main">
                <div className="agenda-item__time">11:40</div>
                <div className="agenda-item__dot agenda-item__dot--yellow" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Session 3</span>
                  <h3>Speaker reveal soon.</h3>
                  <p>{"An Android & Mobile talk. The speaker and title drop with the final agenda."}</p>
                </div>
                <div className="agenda-item__room">Main stage</div>
              </article>
              <article className="agenda-item" data-room="main">
                <div className="agenda-item__time">12:20</div>
                <div className="agenda-item__dot agenda-item__dot--red" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Session 4</span>
                  <h3>Speaker reveal soon.</h3>
                  <p>A Machine Learning talk. The speaker and title drop with the final agenda.</p>
                </div>
                <div className="agenda-item__room">Main stage</div>
              </article>
              <article className="agenda-item agenda-item--break" data-room="all">
                <div className="agenda-item__time">13:00</div>
                <div className="agenda-item__dot agenda-item__dot--ink" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Break</span>
                  <h3>{"Lunch & Networking Break"}</h3>
                  <p>Relax, recharge, and connect with fellow developers, speakers, community partners and mentors.</p>
                </div>
                <div className="agenda-item__room">Lawn</div>
              </article>
              <article className="agenda-item" data-room="workshop">
                <div className="agenda-item__time">14:00</div>
                <div className="agenda-item__dot agenda-item__dot--yellow" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Hands-on Lab</span>
                  <h3>{"Parallel Workshop: Gemini CLI & MCP Integration"}</h3>
                  <p>Hands-on deep dive guided by industry experts — build and deploy functional tools connected to Gemini models.</p>
                </div>
                <div className="agenda-item__room">AI Lab</div>
              </article>
              <article className="agenda-item" data-room="workshop">
                <div className="agenda-item__time">14:00</div>
                <div className="agenda-item__dot agenda-item__dot--green" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Hands-on Lab</span>
                  <h3>{"Parallel Workshop: Firebase & Android Modern Tooling"}</h3>
                  <p>Guided sprint setting up Firebase backend services and Jetpack Compose state architecture.</p>
                </div>
                <div className="agenda-item__room">Build Studio</div>
              </article>
              <article className="agenda-item" data-room="breakout">
                <div className="agenda-item__time">15:30</div>
                <div className="agenda-item__dot agenda-item__dot--blue" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Breakout</span>
                  <h3>Speaker reveal soon.</h3>
                  <p>{"An AI & Cloud fireside talk. The speaker and title drop with the final agenda."}</p>
                </div>
                <div className="agenda-item__room">Cloud Room</div>
              </article>
              <article className="agenda-item" data-room="all">
                <div className="agenda-item__time">16:30</div>
                <div className="agenda-item__dot agenda-item__dot--ink" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Showcase</span>
                  <h3>{"Demo Carnival & Community Recognition"}</h3>
                  <p>Showcase of standout hackathon builds, community awards, and mentor felicitations.</p>
                </div>
                <div className="agenda-item__room">Main stage</div>
              </article>
              <article className="agenda-item" data-room="all">
                <div className="agenda-item__time">17:30</div>
                <div className="agenda-item__dot agenda-item__dot--ink" />
                <div className="agenda-item__main">
                  <span className="agenda-item__kind">Close</span>
                  <h3>{"Closing Ceremony, Community Photo & High Tea"}</h3>
                  <p>Group photograph of the GDG Prayagraj cohort, swag distribution, and one last chai at the confluence.</p>
                </div>
                <div className="agenda-item__room">Atrium</div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= SPEAKERS ================= */}
        <section className="section speakers" id="speakers">
          <div className="speakers__marquee" aria-hidden="true">
            <div className="speakers__marquee-track">
              <span>Voices of DevFest ’26</span>
              <svg className="ic">
                <use href="#i-mic" />
              </svg>
              {" "}
              <svg className="ic">
                <use href="#i-mic" />
              </svg>
              {" "}
              <span>Voices of DevFest ’26</span>
              <svg className="ic">
                <use href="#i-mic" />
              </svg>
              {" "}
              <svg className="ic">
                <use href="#i-mic" />
              </svg>
              {" "}
              <span>Voices of DevFest ’26</span>
              <svg className="ic">
                <use href="#i-mic" />
              </svg>
              {" "}
              <svg className="ic">
                <use href="#i-mic" />
              </svg>
            </div>
          </div>
          <div className="container">
            <div className="section-label" data-reveal="">
              <span>04</span>
              {" "}The stage
            </div>
            <div className="speakers__grid">
              <div className="speakers__copy">
                <h2 className="section-title" data-reveal="" style={{ "--d": "60ms" }}>
                  Voices on the{" "}
                  <em>Stage.</em>
                </h2>
                <p className="lede" data-reveal="" style={{ "--d": "120ms" }}>
                  Leading Google Developer Experts (GDEs), open-source architects and community builders delivering practical, production-tested insights.
                </p>
                <div className="speakers__actions" data-reveal="" style={{ "--d": "180ms" }}>
                  <a className="btn btn--ink magnetic" href="#speakers">
                    <span>View all speakers</span>
                    <svg className="ic">
                      <use href="#i-arrow" />
                    </svg>
                  </a>
                  {" "}
                  <a className="btn btn--ghost magnetic" href="https://gdg.community.dev/gdg-prayagraj/" target="_blank" rel="noopener">
                    <span>Join community</span>
                    <svg className="ic">
                      <use href="#i-arrow" />
                    </svg>
                  </a>
                </div>
                <div className="past-stages" data-reveal="" style={{ "--d": "240ms" }}>
                  <span className="mono">{"Featured organizations & communities"}</span>
                  <div>
                    <strong>Google Developer Experts</strong>
                    <span>·</span>
                    <strong>Wikimedia Foundation</strong>
                    <span>·</span>
                    <strong>TFUG</strong>
                  </div>
                </div>
              </div>
              <div className="speaker-slots" data-reveal="" style={{ "--d": "120ms" }}>
                <article className="slot-card">
                  <span className="slot-card__plus">
                    <svg className="ic">
                      <use href="#i-plus" />
                    </svg>
                  </span>
                  {" "}
                  <span className="mono">{"GDE · AI & Cloud"}</span>
                  <h3>Anubhav Singh</h3>
                  <p>Gemini CLI, Model Context Protocol (MCP) servers, and scalable cloud architectures.</p>
                  <span className="slot-card__foot">{"Session 2 & Workshop"}</span>
                </article>
                <article className="slot-card slot-card--offset">
                  <span className="slot-card__plus">
                    <svg className="ic">
                      <use href="#i-plus" />
                    </svg>
                  </span>
                  {" "}
                  <span className="mono">GDE · Machine Learning</span>
                  <h3>Nitin Tiwari</h3>
                  <p>Generative AI, multimodal pipelines with Gemini 2.0 Flash, and Veo 3 visual generation.</p>
                  <span className="slot-card__foot">Session 4</span>
                </article>
                <article className="slot-card">
                  <span className="slot-card__plus">
                    <svg className="ic">
                      <use href="#i-plus" />
                    </svg>
                  </span>
                  {" "}
                  <span className="mono">Open Source</span>
                  <h3>Praveen Das</h3>
                  <p>Lead Partnership Manager South Asia at Wikimedia Foundation — empowering open source developers.</p>
                  <span className="slot-card__foot">Session 1</span>
                </article>
              </div>
            </div>
            <div className="speaker-wall">
              <div className="speaker-wall__head" data-reveal="">
                <h3>
                  Featured{" "}
                  <em>Speakers.</em>
                </h3>
                <span className="speaker-wall__badge">Line-up dropping soon</span>
              </div>
              <div className="speaker-wall__grid">
                <article className="speaker-card speaker-card--blue tilt" data-reveal="">
                  <div className="speaker-card__top">
                    <svg className="av" viewBox="0 0 100 100" aria-hidden="true">
                      <use href="#av-base" />
                      <use href="#av-h1" />
                    </svg>
                    {" "}
                    <span className="speaker-card__track">{"AI & Cloud"}</span>
                  </div>
                  <h4>Anubhav Singh</h4>
                  <p className="speaker-card__role">{"GDE AI & Cloud · Tech Lead"}</p>
                  <p className="speaker-card__talk">“Exploring the Power of Gemini CLI with MCP Server”</p>
                  <span className="speaker-card__foot">Talk + Hands-on Lab</span>
                </article>
                <article className="speaker-card speaker-card--green tilt" data-reveal="" style={{ "--d": "70ms" }}>
                  <div className="speaker-card__top">
                    <svg className="av" viewBox="0 0 100 100" aria-hidden="true">
                      <use href="#av-base" />
                      <use href="#av-h3" />
                    </svg>
                    {" "}
                    <span className="speaker-card__track">ML / GenAI</span>
                  </div>
                  <h4>Nitin Tiwari</h4>
                  <p className="speaker-card__role">GDE Machine Learning</p>
                  <p className="speaker-card__talk">{"“Sketch to Runway With Gemini 2.0 Flash & Veo 3”"}</p>
                  <span className="speaker-card__foot">Keynote Talk · 30 min</span>
                </article>
                <article className="speaker-card speaker-card--yellow tilt" data-reveal="" style={{ "--d": "140ms" }}>
                  <div className="speaker-card__top">
                    <svg className="av" viewBox="0 0 100 100" aria-hidden="true">
                      <use href="#av-base" />
                      <use href="#av-h2" />
                    </svg>
                    {" "}
                    <span className="speaker-card__track">Android</span>
                  </div>
                  <h4>Pankaj Rai</h4>
                  <p className="speaker-card__role">{"GDE for Android & Firebase"}</p>
                  <p className="speaker-card__talk">{"“ADK & Developer Productivity with Firebase Tools”"}</p>
                  <span className="speaker-card__foot">Talk + Workshop</span>
                </article>
                <article className="speaker-card speaker-card--red tilt" data-reveal="" style={{ "--d": "210ms" }}>
                  <div className="speaker-card__top">
                    <svg className="av" viewBox="0 0 100 100" aria-hidden="true">
                      <use href="#av-base" />
                      <use href="#av-h4" />
                    </svg>
                    {" "}
                    <span className="speaker-card__track">Open Source</span>
                  </div>
                  <h4>Praveen Das</h4>
                  <p className="speaker-card__role">Lead Partnership Mgr · Wikimedia</p>
                  <p className="speaker-card__talk">“Empowering Developers through Open Source Contributions”</p>
                  <span className="speaker-card__foot">Keynote Session</span>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PREVIOUS SPEAKERS ================= */}
        <section className="section previous-speakers" id="previous-speakers">
          <div className="container">
            <div className="speaker-wall__head" data-reveal="">
              <div>
                <div className="section-label" style={{ marginBottom: "8px" }}>
                  <span>05</span> Past editions
                </div>
                <h3>
                  Previous{" "}
                  <em>Speakers.</em>
                </h3>
              </div>
              <span className="speaker-wall__badge">DevFest Alumni</span>
            </div>
            <div className="speaker-wall__grid">
              {PREVIOUS_SPEAKERS.map((sp, idx) => (
                <article
                  key={sp.name}
                  className={`speaker-card speaker-card--${sp.color || 'blue'} tilt`}
                  data-reveal=""
                  style={{ "--d": `${idx * 70}ms` }}
                >
                  <div className="speaker-card__top">
                    <div className="speaker-card__avatar">
                      <img src={sp.photo} alt={sp.name} className="speaker-card__img" width="78" height="78" loading="lazy" />
                    </div>
                    <span className="speaker-card__track">{sp.organization}</span>
                  </div>
                  <h4>{sp.name}</h4>
                  <p className="speaker-card__role">{sp.title}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ToTop />
    </>
  );
}