import { Fragment } from 'react';

/**
 * Slow marquee band under the hero: maroon (from the DevFest 2026 banner)
 * carrying DevFest branding and the day's tracks, separated by the
 * four-colour GDG "<>" mark. The set repeats so the -50% loop is seamless.
 *
 * kind: 'brand' (bold cream), 'track' (cream caps), 'hi' (Hindi, saffron),
 *       'meta' (mono, saffron), 'tag' (hashtag, saffron italic)
 */
const ITEMS = [
  { kind: 'brand', text: 'DevFest Prayagraj ’26' },
  { kind: 'meta', text: '19 · 12 · 2026' },
  { kind: 'track', text: 'Agentic AI' },
  { kind: 'track', text: 'Gemini' },
  { kind: 'track', text: 'Google Cloud' },
  { kind: 'track', text: 'Android' },
  { kind: 'track', text: 'Firebase' },
  { kind: 'track', text: 'Web' },
  { kind: 'brand', text: 'GDG Prayagraj' },
  { kind: 'hi', text: 'प्रयागराज' },
  { kind: 'meta', text: 'NCZCC · Civil Lines' },
  { kind: 'tag', text: '#DevFestPrayagraj' },
];

/** GDG mark: left chevron red/blue, right chevron green/yellow. */
function GdgMark() {
  return (
    <svg className="ribbon__gdg" viewBox="-12 -9 24 18" aria-hidden="true">
      <path d="M -3 -6 L -9 0" stroke="#EA4335" />
      <path d="M -9 0 L -3 6" stroke="#4285F4" />
      <path d="M 3 -6 L 9 0" stroke="#34A853" />
      <path d="M 9 0 L 3 6" stroke="#FBBC04" />
    </svg>
  );
}

function Set() {
  return (
    <div className="ribbon__set">
      {ITEMS.map((item) => (
        <Fragment key={item.text}>
          <span className={`ribbon__item ribbon__item--${item.kind}`}>{item.text}</span>
          <GdgMark />
        </Fragment>
      ))}
    </div>
  );
}

export default function RibbonMarquee() {
  return (
    <div className="ribbon" aria-label="DevFest Prayagraj 2026, 19 December 2026 at NCZCC Civil Lines. Tracks: Agentic AI, Gemini, Google Cloud, Android, Firebase and Web. #DevFestPrayagraj">
      <div className="ribbon__track" aria-hidden="true">
        {Array.from({ length: 4 }, (_, i) => <Set key={i} />)}
      </div>
    </div>
  );
}
