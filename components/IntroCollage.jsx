/**
 * Photo collage shown at the end of the home intro, after the ship has left.
 * Polaroids fade in one by one around the city's name, hold for a moment,
 * then scramble out (each flies off away from the centre) as the page fades in.
 * Timing is driven by lib/site.js (playCollage); styles live in globals.css.
 *
 * x / y: card centre in % of the screen. w: card width in vw (capped by height).
 * r: resting tilt. spin: extra rotation while scrambling out.
 * mobile: position on phones, or null to hide the card there.
 * credit: photographer credit shown on the card (used with permission).
 */
const PHOTOS = [
  { src: 'sangam-sunset', caption: 'Sangam at sunset', deva: 'संगम', x: 10, y: 23, w: 19.5, r: -7, spin: -40, mobile: { x: 26, y: 21 } },
  { src: 'khusro-bagh', caption: 'Khusro Bagh', deva: 'ख़ुसरो बाग़', x: 30, y: 20, w: 19, r: 4, spin: 25, mobile: null },
  { src: 'new-yamuna-bridge', caption: 'New Yamuna Bridge', deva: 'नया यमुना पुल', x: 50, y: 19, w: 18.5, r: -2, spin: -18, mobile: { x: 74, y: 23 } },
  { src: 'all-saints-cathedral', caption: 'All Saints Cathedral', deva: 'पत्थर गिरजा', x: 70, y: 20, w: 19, r: 5, spin: 30, mobile: null },
  { src: 'shankar-viman-mandapam', caption: 'Shankar Viman Mandapam', deva: 'शंकर विमान मंडपम', x: 90, y: 25, w: 21, r: -4, spin: 45, square: true, mobile: null },
  { src: 'university-tower', caption: 'Muir College', deva: 'म्योर कॉलेज', x: 10, y: 76, w: 19.5, r: 6, spin: -35, mobile: null },
  { src: 'hanuman-niketan', caption: 'Hanumat Niketan', deva: 'हनुमत निकेतन', x: 30, y: 78, w: 21, r: -5, spin: 28, square: true, mobile: { x: 26, y: 74 } },
  { src: 'devfest-community', caption: 'DevFest community', deva: 'हमारा समुदाय', x: 50, y: 78.5, w: 19, r: 3, spin: -22, mobile: { x: 74, y: 75 } },
  { src: 'riverside-chhatri', caption: 'Riverside chhatri', deva: 'घाट की छतरी', x: 70, y: 77, w: 19, r: -6, spin: 38, mobile: null },
  { src: 'anand-bhawan', caption: 'Anand Bhawan', deva: 'आनंद भवन', credit: '© Amit Pasricha', x: 90, y: 75, w: 21, r: 6, spin: -30, square: true, mobile: null },
];

export default function IntroCollage() {
  return (
    <div className="intro-collage" id="introCollage" aria-hidden="true">
      <div className="intro-collage__title">
        <span className="intro-collage__deva">प्रयागराज</span>
        <span className="intro-collage__sub">Prayagraj · 19 · 12 · 26</span>
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
            className={`collage-card${p.square ? ' collage-card--square' : ''}${p.mobile ? '' : ' collage-card--desktop'}`}
            style={style}
          >
            <img src={`/assets/collage/${p.src}.webp`} alt="" width={p.square ? 640 : 600} height={p.square ? 640 : 800} decoding="async" />
            <figcaption>
              <span>{p.caption}</span>
              <span className="collage-card__deva">{p.deva}</span>
              {p.credit && <span className="collage-card__credit">{p.credit}</span>}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
