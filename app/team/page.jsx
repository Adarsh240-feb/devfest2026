import SkipLink from '@/components/SkipLink';
import ScrollProgress from '@/components/ScrollProgress';
import SvgSprite from '@/components/SvgSprite';
import SiteHeader from '@/components/SiteHeader';
import MobileMenu from '@/components/MobileMenu';
import SiteFooter from '@/components/SiteFooter';
import ToTop from '@/components/ToTop';
import './team.css';

export const metadata = {
  title: {
    absolute: "The Crew — DevFest Prayagraj 2026"
  },
  description: "Meet the passionate organizers, developers, designers, and managers behind DevFest Prayagraj 2026.",
  alternates: {
    canonical: "/team"
  },
  openGraph: {
    title: "The Crew — DevFest Prayagraj 2026",
    description: "Meet the passionate organizers, developers, designers, and managers behind DevFest Prayagraj 2026.",
    type: "website",
    url: "/team"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Crew — DevFest Prayagraj 2026",
    description: "Meet the passionate organizers, developers, designers, and managers behind DevFest Prayagraj 2026."
  }
};

export default function TeamPage() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <SvgSprite />
      <SiteHeader current="team" />
      <MobileMenu />
      <main id="main">
        <section className="team-page-hero">
          <div className="container">
            <a className="back-btn" href="/">
              <svg className="ic" style={{ transform: "rotate(180deg)" }}>
                <use href="#i-arrow" />
              </svg>
              {" "}Back to Home
            </a>
            <div>
              <span className="team-count-badge mono">GDG PRAYAGRAJ · DEVFEST 2026 CREW</span>
            </div>
            <h1 className="section-title">
              The People Behind
              <br />
              the{" "}
              <em>Current.</em>
            </h1>
            <p className="section-intro" style={{ maxWidth: "680px", margin: "0 auto 16px" }}>
              Every person here is a volunteer. They book the halls, design the badges, chase the speakers and make sure the chai never runs out.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "24px" }}>
              <button className="btn btn--light btn--small js-calendar" type="button" aria-haspopup="dialog" style={{ padding: "7px 16px", fontSize: "13px" }}>
                <svg className="ic">
                  <use href="#i-calendar" />
                </svg>
                {" "}
                <span>19 Dec 2026 · Add to calendar</span>
              </button>
            </div>
            <div className="team-filters-wrap">
              <div aria-label="Filter team by department" className="tabs" role="tablist">
                <button className="tab is-active" data-filter="all">All (42)</button>
                {" "}
                <button className="tab" data-filter="tech-team">Tech Team (6)</button>
                {" "}
                <button className="tab" data-filter="design-and-media">{"Design & Media (5)"}</button>
                {" "}
                <button className="tab" data-filter="logistics-and-management">{"Logistics & Management (17)"}</button>
                {" "}
                <button className="tab" data-filter="social-media-and-pr">{"Social Media & PR (3)"}</button>
                {" "}
                <button className="tab" data-filter="hosting">Hosting (5)</button>
                {" "}
                <button className="tab" data-filter="photography">Photography (4)</button>
              </div>
            </div>
          </div>
        </section>
        <section className="section team" style={{ paddingTop: "10px" }}>
          <div className="container">
            <div className="team-grid" id="teamContainer">
              <article className="person person--blue tilt" data-dept="leadership" data-hi="Welcome!" data-reveal="" style={{ "--d": "0ms" }}>
                <div className="person__avatar">
                  <img alt="Ankit Kumar Verma" className="person__img" height="104" loading="lazy" src="/assets/team/ankit_kumar_verma.jpeg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Ankit Kumar Verma</h3>
                <p className="person__role">Organizer</p>
              </article>
              <article className="person person--green tilt" data-dept="leadership" data-hi="Hello!" data-reveal="" style={{ "--d": "50ms" }}>
                <div className="person__avatar">
                  <img alt="Hridyesh Gupta" className="person__img" height="104" loading="lazy" src="/assets/team/hridyesh_gupta.png" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Hridyesh Gupta</h3>
                <p className="person__role">Co-organizer</p>
              </article>
              <article className="person person--yellow tilt" data-dept="tech-team" data-hi="Code & Build!" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="person__avatar">
                  <img alt="Gautam Kumar Maurya" className="person__img" height="104" loading="lazy" src="/assets/team/gautam_kumar_maurya.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Gautam Kumar Maurya</h3>
                <p className="person__role">Tech Team</p>
              </article>
              <article className="person person--red tilt" data-dept="tech-team" data-hi="Open Source!" data-reveal="" style={{ "--d": "150ms" }}>
                <div className="person__avatar">
                  <img alt="Adarsh Kesharwani" className="person__img" height="104" loading="lazy" src="/assets/team/adarsh_kesharwani.jpeg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Adarsh Kesharwani</h3>
                <p className="person__role">Tech Team</p>
              </article>
              <article className="person person--yellow tilt" data-dept="tech-team" data-hi="Building!" data-reveal="" style={{ "--d": "0ms" }}>
                <div className="person__avatar">
                  <img alt="Aryan Dubey" className="person__img" height="104" loading="lazy" src="/assets/team/aryan_dubey.jpeg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Aryan Dubey</h3>
                <p className="person__role">Tech Team</p>
              </article>
              <article className="person person--red tilt" data-dept="tech-team" data-hi="Scalability!" data-reveal="" style={{ "--d": "50ms" }}>
                <div className="person__avatar">
                  <img alt="Harsh Srivastava" className="person__img" height="104" loading="lazy" src="/assets/team/harsh_srivastava.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Harsh Srivastava</h3>
                <p className="person__role">Tech Team</p>
              </article>
              <article className="person person--blue tilt" data-dept="tech-team" data-hi="Full Stack!" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="person__avatar">
                  <img alt="Kavaljeet Singh" className="person__img" height="104" loading="lazy" src="/assets/team/kavaljeet_singh.png" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Kavaljeet Singh</h3>
                <p className="person__role">Tech Team</p>
              </article>
              <article className="person person--green tilt" data-dept="tech-team" data-hi="Dev World!" data-reveal="" style={{ "--d": "150ms" }}>
                <div className="person__avatar">
                  <img alt="Vaishnavi Mishra" className="person__img" height="104" loading="lazy" src="/assets/team/vaishnavi_mishra.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Vaishnavi Mishra</h3>
                <p className="person__role">Tech Team</p>
              </article>
              <article className="person person--yellow tilt" data-dept="design-and-media" data-hi="Motion & Art!" data-reveal="" style={{ "--d": "200ms" }}>
                <div className="person__avatar">
                  <img alt="Harsh Kushwaha" className="person__img" height="104" loading="lazy" src="/assets/team/harsh_kushwaha.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Harsh Kushwaha</h3>
                <p className="person__role">{"Design & Media Lead"}</p>
              </article>
              <article className="person person--red tilt" data-dept="design-and-media" data-hi="Visuals!" data-reveal="" style={{ "--d": "250ms" }}>
                <div className="person__avatar">
                  <img alt="Syed Sohrab Haider Rizvi" className="person__img" height="104" loading="lazy" src="/assets/team/syed_sohrab_haider_rizvi.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Syed Sohrab Haider Rizvi</h3>
                <p className="person__role">{"Design & Media"}</p>
              </article>
              <article className="person person--blue tilt" data-dept="design-and-media" data-hi="Creative!" data-reveal="" style={{ "--d": "0ms" }}>
                <div className="person__avatar">
                  <img alt="Afreen Hashmi" className="person__img" height="104" loading="lazy" src="/assets/team/afreen_hashmi.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Afreen Hashmi</h3>
                <p className="person__role">{"Design & Media"}</p>
              </article>
              <article className="person person--green tilt" data-dept="design-and-media" data-hi="Design Lab!" data-reveal="" style={{ "--d": "50ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h2" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Ayushi Keshari</h3>
                <p className="person__role">{"Design & Media"}</p>
              </article>
              <article className="person person--yellow tilt" data-dept="design-and-media" data-hi="Media Vibes!" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h3" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Vanshika Sharma</h3>
                <p className="person__role">{"Design & Media"}</p>
              </article>
              <article className="person person--red tilt" data-dept="social-media-and-pr" data-hi="Trending!" data-reveal="" style={{ "--d": "150ms" }}>
                <div className="person__avatar">
                  <img alt="Amit Yadav" className="person__img" height="104" loading="lazy" src="/assets/team/amit_yadav.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Amit Yadav</h3>
                <p className="person__role">{"Social Media & PR"}</p>
              </article>
              <article className="person person--blue tilt" data-dept="social-media-and-pr" data-hi="Outreach!" data-reveal="" style={{ "--d": "200ms" }}>
                <div className="person__avatar">
                  <img alt="Anshuman Rai" className="person__img" height="104" loading="lazy" src="/assets/team/anshuman_rai.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Anshuman Rai</h3>
                <p className="person__role">{"Social Media & PR"}</p>
              </article>
              <article className="person person--green tilt" data-dept="social-media-and-pr" data-hi="Partners!" data-reveal="" style={{ "--d": "250ms" }}>
                <div className="person__avatar">
                  <img alt="Komal Pandey" className="person__img" height="104" loading="lazy" src="/assets/team/komal_pandey.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Komal Pandey</h3>
                <p className="person__role">{"Sponsor & Promotion"}</p>
              </article>
              <article className="person person--yellow tilt" data-dept="logistics-and-management" data-hi="Operations!" data-reveal="" style={{ "--d": "0ms" }}>
                <div className="person__avatar">
                  <img alt="Animesh Pathak" className="person__img" height="104" loading="lazy" src="/assets/team/animesh_pathak.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Animesh Pathak</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--red tilt" data-dept="logistics-and-management" data-hi="On Ground!" data-reveal="" style={{ "--d": "50ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h4" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Atul Singh</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--blue tilt" data-dept="logistics-and-management" data-hi="Execution!" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="person__avatar">
                  <img alt="Mohd Shadab" className="person__img" height="104" loading="lazy" src="/assets/team/mohd_shadab.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Mohd Shadab</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--green tilt" data-dept="logistics-and-management" data-hi="Coordination!" data-reveal="" style={{ "--d": "150ms" }}>
                <div className="person__avatar">
                  <img alt="Priyankar Shukla" className="person__img" height="104" loading="lazy" src="/assets/team/priyankar_shukla.jpeg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Priyankar Shukla</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--yellow tilt" data-dept="logistics-and-management" data-hi="Leadership!" data-reveal="" style={{ "--d": "200ms" }}>
                <div className="person__avatar">
                  <img alt="Reeti Singh" className="person__img" height="104" loading="lazy" src="/assets/team/reeti_singh.png" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Reeti Singh</h3>
                <p className="person__role">{"Logistics & Leadership"}</p>
              </article>
              <article className="person person--red tilt" data-dept="logistics-and-management" data-hi="Impact!" data-reveal="" style={{ "--d": "250ms" }}>
                <div className="person__avatar">
                  <img alt="SARTHAK SINGH" className="person__img" height="104" loading="lazy" src="/assets/team/sarthak_singh.jpeg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>SARTHAK SINGH</h3>
                <p className="person__role">{"Logistics & Operations"}</p>
              </article>
              <article className="person person--blue tilt" data-dept="logistics-and-management" data-hi="Management!" data-reveal="" style={{ "--d": "0ms" }}>
                <div className="person__avatar">
                  <img alt="Shweta Mishra" className="person__img" height="104" loading="lazy" src="/assets/team/shweta_mishra.jpeg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Shweta Mishra</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--green tilt" data-dept="logistics-and-management" data-hi="Logistics!" data-reveal="" style={{ "--d": "50ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h2" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Suryansh Tripathi</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--yellow tilt" data-dept="logistics-and-management" data-hi="Strategy!" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="person__avatar">
                  <img alt="T Ebenezer Rao" className="person__img" height="104" loading="lazy" src="/assets/team/t_ebenezer_rao.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>T Ebenezer Rao</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--red tilt" data-dept="logistics-and-management" data-hi="Operations!" data-reveal="" style={{ "--d": "150ms" }}>
                <div className="person__avatar">
                  <img alt="Abhinisht Singh" className="person__img" height="104" loading="lazy" src="/assets/team/abhinisht_singh.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Abhinisht Singh</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--blue tilt" data-dept="logistics-and-management" data-hi="Execution!" data-reveal="" style={{ "--d": "200ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h1" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Avi Dubey</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--green tilt" data-dept="logistics-and-management" data-hi="Support!" data-reveal="" style={{ "--d": "250ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h2" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Deepesh Mani Shukla</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--yellow tilt" data-dept="logistics-and-management" data-hi="Coordination!" data-reveal="" style={{ "--d": "0ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h3" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Harshit Bind</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--red tilt" data-dept="logistics-and-management" data-hi="Logistics!" data-reveal="" style={{ "--d": "50ms" }}>
                <div className="person__avatar">
                  <img alt="Sakshi Rai" className="person__img" height="104" loading="lazy" src="/assets/team/sakshi_rai.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Sakshi Rai</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--blue tilt" data-dept="logistics-and-management" data-hi="Operations!" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h1" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Sankalp Bansal</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--green tilt" data-dept="logistics-and-management" data-hi="Management!" data-reveal="" style={{ "--d": "150ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h2" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Siddhi Srivastava</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--yellow tilt" data-dept="logistics-and-management" data-hi="Support!" data-reveal="" style={{ "--d": "200ms" }}>
                <div className="person__avatar">
                  <img alt="Sweety Gupta" className="person__img" height="104" loading="lazy" src="/assets/team/sweety_gupta.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Sweety Gupta</h3>
                <p className="person__role">{"Logistics & Management"}</p>
              </article>
              <article className="person person--green tilt" data-dept="hosting" data-hi="Stage Host!" data-reveal="" style={{ "--d": "50ms" }}>
                <div className="person__avatar">
                  <img alt="Shivaansh Singh" className="person__img" height="104" loading="lazy" src="/assets/team/shivaansh_singh.jpeg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Shivaansh Singh</h3>
                <p className="person__role">{"Hosting & Emcee"}</p>
              </article>
              <article className="person person--yellow tilt" data-dept="hosting" data-hi="Emcee!" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="person__avatar">
                  <img alt="Mahin Farooqui" className="person__img" height="104" loading="lazy" src="/assets/team/mahin_farooqui.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Mahin Farooqui</h3>
                <p className="person__role">{"Hosting & Emcee"}</p>
              </article>
              <article className="person person--red tilt" data-dept="hosting" data-hi="Anchor!" data-reveal="" style={{ "--d": "150ms" }}>
                <div className="person__avatar">
                  <img alt="Sakshi Pandey" className="person__img" height="104" loading="lazy" src="/assets/team/sakshi_pandey.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Sakshi Pandey</h3>
                <p className="person__role">{"Hosting & Emcee"}</p>
              </article>
              <article className="person person--blue tilt" data-dept="hosting" data-hi="Welcome All!" data-reveal="" style={{ "--d": "200ms" }}>
                <div className="person__avatar">
                  <img alt="Shubhangi Shukla" className="person__img" height="104" loading="lazy" src="/assets/team/shubhangi_shukla.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Shubhangi Shukla</h3>
                <p className="person__role">{"Hosting & Emcee"}</p>
              </article>
              <article className="person person--green tilt" data-dept="hosting" data-hi="Stage Energy!" data-reveal="" style={{ "--d": "250ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h2" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Vedanshi Singh</h3>
                <p className="person__role">{"Hosting & Emcee"}</p>
              </article>
              <article className="person person--yellow tilt" data-dept="photography" data-hi="Lens Focus!" data-reveal="" style={{ "--d": "0ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h3" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Prakhar Rai</h3>
                <p className="person__role">Photography</p>
              </article>
              <article className="person person--red tilt" data-dept="photography" data-hi="Capturing!" data-reveal="" style={{ "--d": "50ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h4" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Shatakshi Yadav</h3>
                <p className="person__role">Photography</p>
              </article>
              <article className="person person--blue tilt" data-dept="photography" data-hi="Frame It!" data-reveal="" style={{ "--d": "100ms" }}>
                <div className="person__avatar">
                  <svg aria-hidden="true" className="av" viewBox="0 0 100 100">
                    <use href="#av-base" />
                    <use href="#av-h1" />
                  </svg>
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Shivansh Dubey</h3>
                <p className="person__role">Photography</p>
              </article>
              <article className="person person--green tilt" data-dept="photography" data-hi="Memories!" data-reveal="" style={{ "--d": "150ms" }}>
                <div className="person__avatar">
                  <img alt="Atul Dwivedi" className="person__img" height="104" loading="lazy" src="/assets/team/atul_dwivedi.jpg" width="104" />
                  <div aria-hidden="true" className="person__ring" />
                  <span aria-hidden="true" className="person__check">
                    <svg className="ic">
                      <use href="#i-check" />
                    </svg>
                  </span>
                </div>
                <h3>Atul Dwivedi</h3>
                <p className="person__role">Photography</p>
              </article>
            </div>
            <div style={{ textAlign: "center", marginTop: "60px" }}>
              <a className="btn btn--ink magnetic" href="/">
                <span>Back to the festival</span>
                {" "}
                <svg className="ic">
                  <use href="#i-arrow" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <ToTop />
    </>
  );
}
