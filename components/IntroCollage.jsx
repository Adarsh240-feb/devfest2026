import { PHOTOS } from '@/lib/photos';

/**
 * Photo collage shown at the end of the home intro, after the ship has left.
 * Polaroids fade in one by one around the city's name, hold for a moment,
 * then scramble out (each flies off away from the centre) as the page fades in.
 * Timing is driven by lib/site.js (playCollage); styles live in globals.css.
 * Photos and their layout come from lib/photos.js.
 */
export default function IntroCollage() {
  return (
    <div className="intro-collage" id="introCollage" aria-hidden="true">
      <div className="intro-collage__title">
        <span className="intro-collage__deva">Prayagraj</span>
        <span className="intro-collage__sub">19 · 12 · 26</span>
      </div>

      {PHOTOS.map((p, i) => {
        // Scramble direction: straight out from the screen centre, far enough to leave the screen.
        const dx = (p.x - 50) * 2.6;
        const dy = (p.y - 50) * 2.6;
        const style = {
          '--i': i,
          '--x': `${p.x}%`,
          '--y': `${p.y}%`,
          '--w': `${p.w}vw`,
          '--r': `${p.r}deg`,
          '--dx': `${dx}vw`,
          '--dy': `${dy}vh`,
          '--spin': `${p.r + p.spin}deg`,
          // Random-looking but deterministic exit stagger (0–240ms)
          '--o': `${(i * 97) % 240}ms`,
          ...(p.mobile ? { '--mx': `${p.mobile.x}%`, '--my': `${p.mobile.y}%` } : {}),
        };
        return (
          <figure
            key={p.src}
            className={`collage-card${p.square ? ' collage-card--square' : ''}${p.accent ? ' collage-card--accent' : ''}${p.mobile ? '' : ' collage-card--desktop'}`}
            style={style}
          >
            <img src={`/assets/collage/${p.src}.webp`} alt="" width={p.square ? 640 : 600} height={p.square ? 640 : 800} decoding="async" />
            <figcaption>
              <span>{p.caption}</span>
              {p.credit && <span className="collage-card__credit">{p.credit}</span>}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
