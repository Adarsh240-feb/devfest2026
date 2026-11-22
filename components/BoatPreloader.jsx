import Ship from '@/components/Ship';
import IntroCollage from '@/components/IntroCollage';

/**
 * Home-page intro: the GDG Prayagraj ship enters from beyond the left edge and
 * weaves an S-curve across the screen in 4 seconds. Behind it three river
 * trails (Ganga, Yamuna, Saraswati) merge into one glowing stream. Once the
 * ship has left past the right edge, a photo collage of the city fades in and
 * scrambles out, and the page fades in.
 *
 * - Plays every time the home page is opened.
 * - Click, tap, Esc or the "Skip intro" button ends it early.
 * - lib/site.js (sailBoat) drives the ship, trails and curtain wipe.
 */

// Runs before paint: lock page scrolling while the intro plays.
const introGate = `document.body.classList.add('is-preloading');`;

const RIVERS = [
  { id: 'Ganga', from: '#57CAFF', to: '#4285F4' },
  { id: 'Yamuna', from: '#5CDB6D', to: '#34A853' },
  { id: 'Saraswati', from: '#FFD427', to: '#FFF4D6' },
];

export default function BoatPreloader() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: introGate }} />
      <div className="preloader preloader--river" id="preloader">
        {/* The curtain covers the page until the ship has left */}
        <div className="preloader__curtain" id="preloaderCurtain" aria-hidden="true">
          <div className="preloader__inner preloader__inner--river">
            <div className="preloader__mark">
              <img src="/assets/brand/devfest-2026-no-date.png" alt="" width="1600" height="238" />
            </div>
            <div className="preloader__meta">
              <span>
                GDG Prayagraj <span className="preloader__deva">· जीडीजी प्रयागराज</span>
              </span>
              <span>19 · 12 · 26</span>
            </div>
            <p className="preloader__note">Where three rivers meet</p>
          </div>
        </div>

        <div className="river-stage" id="riverStage" aria-hidden="true">
          {/* Three river trails merging into one, drawn in screen pixels by lib/site.js */}
          <svg className="river-wake" id="riverWake">
            <defs>
              {/* userSpaceOnUse gradients: lib/site.js stretches them from the tail to the ship each frame */}
              <linearGradient id="trailFade" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#57CAFF" stopOpacity="0" />
                <stop offset=".6" stopColor="#57CAFF" stopOpacity=".5" />
                <stop offset="1" stopColor="#4285F4" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="trailCore" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#E4F5FB" stopOpacity="0" />
                <stop offset=".7" stopColor="#FFFFFF" stopOpacity=".15" />
                <stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
              </linearGradient>
              {RIVERS.map((r) => (
                <linearGradient key={r.id} id={`trail${r.id}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor={r.from} stopOpacity="0" />
                  <stop offset=".45" stopColor={r.from} stopOpacity=".85" />
                  <stop offset="1" stopColor={r.to} stopOpacity="1" />
                </linearGradient>
              ))}
              <filter id="trailGlow" x="-10%" y="-200%" width="120%" height="500%">
                <feGaussianBlur stdDeviation="14" />
              </filter>
              <filter id="trailSoft" x="-10%" y="-200%" width="120%" height="500%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>
            <path id="boatWakeGlow" className="trail trail--glow" d="" />
            <path id="riverGanga" className="trail trail--river trail--ganga" d="" />
            <path id="riverYamuna" className="trail trail--river trail--yamuna" d="" />
            <path id="riverSaraswati" className="trail trail--saraswati" d="" />
            <path id="boatWake" className="trail trail--core" d="" />
          </svg>

          {/* The ship. Positioned every frame by lib/site.js; starts hidden off-screen left. */}
          <svg className="boat-sprite" id="boat" viewBox="-340 -330 690 440">
            <defs>
              <filter id="foamGlow" x="-20%" y="-300%" width="140%" height="700%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <filter id="hazeBlur" x="-30%" y="-400%" width="160%" height="900%">
                <feGaussianBlur stdDeviation="16" />
              </filter>
            </defs>
            {/* Soft light-blue haze that grounds the hull without drawing water */}
            <ellipse cx="0" cy="10" rx="440" ry="26" className="boat__haze" filter="url(#hazeBlur)" />
            <ellipse cx="10" cy="4" rx="320" ry="18" className="boat__glow" filter="url(#foamGlow)" />
            <ellipse cx="10" cy="2" rx="300" ry="7" className="boat__waterline" />
            <path d="M 288 2 q 26 -8 48 10 q -26 -5 -48 3 Z" className="boat__bowwave" />
            <path d="M -262 4 q -30 -10 -60 2 q 30 4 60 6 Z" className="boat__bowwave" />
            <Ship id="shipMain" />
          </svg>
        </div>

        <IntroCollage />

        <button className="preloader__skip" id="preloaderSkip" type="button">
          Skip intro <span aria-hidden="true">›</span>
        </button>
      </div>
    </>
  );
}
