import { Fragment } from 'react';

/**
 * Slow marquee band under the hero: maroon (from the DevFest 2026 banner),
 * cream words with their Hindi pair in saffron, lotus marks between them.
 * The set is repeated so the -50% marquee loop is seamless.
 */
const WORDS = [
  { en: 'Build', hi: 'निर्माण' },
  { en: 'Belong', hi: 'अपनापन' },
  { en: 'Beyond', hi: 'उड़ान' },
  { en: 'Sangam', hi: 'संगम' },
];

function Set() {
  return (
    <div className="ribbon__set">
      {WORDS.map((w) => (
        <Fragment key={w.en}>
          <span className="ribbon__word">{w.en}</span>
          <span className="ribbon__hi">{w.hi}</span>
          <svg className="ic ribbon__mark" aria-hidden="true"><use href="#i-lotus" /></svg>
        </Fragment>
      ))}
    </div>
  );
}

export default function RibbonMarquee() {
  return (
    <div className="ribbon" aria-label="DevFest themes: Build, Belong, Beyond, Sangam">
      <div className="ribbon__track" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => <Set key={i} />)}
      </div>
    </div>
  );
}
