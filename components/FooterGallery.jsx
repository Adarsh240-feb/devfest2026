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

      <p className="footer-gallery__wordmark">
        DevFest <span className="footer-gallery__p">P</span>rayagraj <span className="footer-gallery__year">’26</span>
      </p>

      <div className="footer-gallery__meta">
        <span className="footer-gallery__tag">प्रयागराज • The Digital Sangam</span>
        <span className="footer-gallery__sub">19 December 2026 · NCZCC Prayagraj</span>
        <span className="footer-gallery__count mono" id="footerGalleryCount" aria-hidden="true">
          00 / {String(SLOTS.length).padStart(2, '0')} moments
        </span>
      </div>
    </div>
  );
}
