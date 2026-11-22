import { Fragment } from 'react';
import { PHOTOS } from '@/lib/photos';

/**
 * Footer gallery: the intro's Prayagraj photos as a scattered polaroid wall
 * above a clean "DevFest Prayagraj '26" wordmark. As the footer scrolls into
 * view, more photos land one by one (lib/site.js → initFooterGallery sets
 * .is-shown on the first N cards based on scroll progress).
 *
 * SLOTS: x / y = card centre in % of the stage, r = tilt, z = stacking.
 * The order is the order photos appear: it alternates sides so the wall
 * fills in evenly. Slots marked `wide` are hidden on phones.
 */
const SLOTS = [
  { x: 50, y: 30, r: -3, z: 3 },
  { x: 22, y: 36, r: 6, z: 2 },
  { x: 78, y: 34, r: -6, z: 2 },
  { x: 36, y: 22, r: -8, z: 1 },
  { x: 64, y: 20, r: 7, z: 1 },
  { x: 8, y: 30, r: -5, z: 1, wide: true },
  { x: 92, y: 30, r: 5, z: 1, wide: true },
  { x: 29, y: 58, r: -4, z: 4 },
  { x: 71, y: 57, r: 4, z: 4 },
  { x: 15, y: 62, r: 8, z: 3, wide: true },
  { x: 85, y: 61, r: -8, z: 3, wide: true },
  { x: 43, y: 50, r: 5, z: 5, wide: true },
  { x: 57, y: 52, r: -5, z: 5, wide: true },
];

const GOOGLE = ['#4285F4', '#EA4335', '#FBBC04', '#34A853'];

// Wordmark split into letters; `start` keeps one running index for the wave.
const WORDS = [
  { text: 'DevFest', start: 0 },
  { text: 'Prayagraj', start: 7, className: 'fg-word--city' },
  { text: '’26', start: 16, className: 'footer-gallery__year' },
];

export default function FooterGallery() {
  return (
    <div className="footer-gallery" id="footerGallery">
      <div className="footer-gallery__stage" aria-hidden="true">
        {PHOTOS.slice(0, SLOTS.length).map((p, i) => {
          const slot = SLOTS[i];
          return (
            <figure
              key={p.src}
              className={`fg-card${slot.wide ? ' fg-card--wide' : ''}`}
              style={{ '--x': `${slot.x}%`, '--y': `${slot.y}%`, '--r': `${slot.r}deg`, zIndex: slot.z }}
            >
              <img src={`/assets/collage/${p.src}.webp`} alt="" loading="lazy" decoding="async" width={p.square ? 640 : 600} height={p.square ? 640 : 800} />
              <figcaption>
                <span>{p.caption}</span>
                <span className="fg-card__deva">{p.deva}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Hover (or once all photos have landed): letters wave in Google colours,
          GDG chevrons slide in to frame the name, and a Google-colour glow follows the cursor. */}
      <div className="footer-gallery__glow" aria-hidden="true" />
      <div className="footer-gallery__title">
        <span className="fg-chevron fg-chevron--left" aria-hidden="true">
          <svg viewBox="0 0 40 64"><path d="M30 6 L8 32" className="fg-chev-a" /><path d="M8 32 L30 58" className="fg-chev-b" /></svg>
        </span>
        <p className="footer-gallery__wordmark" aria-label="DevFest Prayagraj ’26">
          {WORDS.map((word, w) => (
            <Fragment key={word.text}>
              <span className={`fg-word${word.className ? ` ${word.className}` : ''}`} aria-hidden="true">
                {[...word.text].map((ch, k) => {
                  const i = word.start + k;
                  return (
                    <span key={k} className="fg-l" style={{ '--i': i, '--g': GOOGLE[i % 4] }}>{ch}</span>
                  );
                })}
              </span>
              {w < WORDS.length - 1 ? ' ' : null}
            </Fragment>
          ))}
        </p>
        <span className="fg-chevron fg-chevron--right" aria-hidden="true">
          <svg viewBox="0 0 40 64"><path d="M10 6 L32 32" className="fg-chev-c" /><path d="M32 32 L10 58" className="fg-chev-d" /></svg>
        </span>
      </div>

      <div className="footer-gallery__meta">
        <span className="footer-gallery__tag">प्रयागराज • The Digital Sangam</span>
        <span className="footer-gallery__sub">19 December 2026 · NCZCC Prayagraj</span>
      </div>
    </div>
  );
}
