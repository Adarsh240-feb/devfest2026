import Ship from '@/components/Ship';

/**
 * Home-page preloader: the GDG Prayagraj ship enters from beyond the left edge,
 * weaves an S-curve across the screen for 4 seconds leaving a glowing blue
 * water trail, and leaves past the right edge; then the hero is revealed.
 *
 * lib/site.js (sailBoat) moves #boat, draws the trail into #riverWake and
 * drives #loaderPercent.
 */
export default function BoatPreloader() {
  return (
    <div className="preloader preloader--river" id="preloader" aria-hidden="true">
      <div className="preloader__inner preloader__inner--river">
        <div className="preloader__mark">
          <img src="/assets/brand/devfest-2026-no-date.png" alt="" width="1600" height="238" />
        </div>
        <div className="preloader__meta">
          <span>GDG Prayagraj</span>
          <span id="loaderPercent">00</span>
        </div>
        <p className="preloader__note">Where three rivers meet</p>
      </div>

      <div className="river-stage" id="riverStage">
        {/* Glowing water trail, drawn in screen pixels by lib/site.js */}
        <svg className="river-wake" id="riverWake" aria-hidden="true">
          <defs>
            {/* Fades in from the tail (left) to full strength at the ship */}
            <linearGradient id="trailFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#57CAFF" stopOpacity="0" />
              <stop offset=".55" stopColor="#57CAFF" stopOpacity=".55" />
              <stop offset="1" stopColor="#4285F4" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="trailCore" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#E4F5FB" stopOpacity="0" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
            <filter id="trailGlow" x="-10%" y="-200%" width="120%" height="500%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <filter id="trailSoft" x="-10%" y="-200%" width="120%" height="500%">
              <feGaussianBlur stdDeviation="3" />
            </filter>
          </defs>
          <path id="boatWakeGlow" className="trail trail--glow" d="" />
          <path id="boatWakeBody" className="trail trail--body" d="" />
          <path id="boatWake" className="trail trail--core" d="" />
        </svg>

        {/* The ship. Positioned every frame by lib/site.js; starts hidden off-screen left. */}
        <svg className="boat-sprite" id="boat" viewBox="-340 -330 690 440" aria-hidden="true">
          <defs>
            <filter id="foamGlow" x="-20%" y="-300%" width="140%" height="700%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>
          {/* Blue glow and foam where the hull meets the water */}
          <ellipse cx="10" cy="4" rx="320" ry="18" className="boat__glow" filter="url(#foamGlow)" />
          <ellipse cx="10" cy="2" rx="300" ry="7" className="boat__waterline" />
          <path d="M 288 2 q 26 -8 48 10 q -26 -5 -48 3 Z" className="boat__bowwave" />
          <path d="M -262 4 q -30 -10 -60 2 q 30 4 60 6 Z" className="boat__bowwave" />
          <Ship id="shipMain" />
        </svg>
      </div>
    </div>
  );
}
