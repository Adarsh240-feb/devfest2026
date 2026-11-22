/**
 * GDG Prayagraj river ship, side view, sailing to the right.
 * Coordinates: (0, 0) is the waterline at mid-ship. Bow at x ≈ +306,
 * stern at x ≈ -294, flag top at y ≈ -304. No crew or passengers.
 */

export const GOOGLE = { blue: '#4285F4', red: '#EA4335', yellow: '#F9AB00', green: '#34A853' };
const INK = '#1E1E1E';
const HULL = '#1A5FD0';
const WHITE = '#FFFDF6';
const GLASS = '#BFE6F5';

/** The GDG "<>" mark: left chevron red/blue, right chevron green/yellow. */
export function GdgMark({ x = 0, y = 0, size = 1, width = 3.2 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${size})`} strokeWidth={width} strokeLinecap="round" fill="none">
      <path d="M -3 -6 L -9 0" stroke={GOOGLE.red} />
      <path d="M -9 0 L -3 6" stroke={GOOGLE.blue} />
      <path d="M 3 -6 L 9 0" stroke={GOOGLE.green} />
      <path d="M 9 0 L 3 6" stroke={GOOGLE.yellow} />
    </g>
  );
}

const range = (from, to, step) => {
  const out = [];
  for (let v = from; v <= to; v += step) out.push(v);
  return out;
};

/** Small signal pennants hanging along a line from (x1,y1) to (x2,y2). */
function Pennants({ x1, y1, x2, y2, count }) {
  const colors = [GOOGLE.blue, GOOGLE.red, GOOGLE.yellow, GOOGLE.green];
  return (
    <g className="ship__pennants">
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="1.4" />
      {Array.from({ length: count }, (_, i) => {
        const t = (i + 0.5) / count;
        const x = x1 + (x2 - x1) * t;
        const y = y1 + (y2 - y1) * t;
        return <path key={i} d={`M ${x - 5} ${y} L ${x + 5} ${y} L ${x} ${y + 12} Z`} fill={colors[i % 4]} stroke={INK} strokeWidth="1" strokeLinejoin="round" />;
      })}
    </g>
  );
}

/** Bow-ward rounded block (a deck of the superstructure). */
const deck = (x1, x2, top, bottom, r = 20) =>
  `M ${x1} ${bottom} V ${top} H ${x2 - r} Q ${x2} ${top} ${x2 + 4} ${top + r} L ${x2 + 8} ${bottom} Z`;

export default function Ship({ id }) {
  const hull = 'M -294 -74 L 236 -74 Q 278 -80 306 -100 L 288 -42 Q 272 -6 238 0 L -262 0 Q -286 -6 -294 -34 Z';
  const funnel = 'M -116 -168 L -106 -244 H -54 L -46 -168 Z';

  return (
    <g className="ship" id={id}>
      <defs>
        <clipPath id={`${id}-hull`}><path d={hull} /></clipPath>
        <clipPath id={`${id}-funnel`}><path d={funnel} /></clipPath>
      </defs>

      {/* ---------- Mast, flag lines and the GDG flag ---------- */}
      <Pennants x1={62} y1={-292} x2={304} y2={-102} count={14} />
      <Pennants x1={62} y1={-292} x2={-288} y2={-126} count={18} />
      <line x1="-288" y1="-74" x2="-288" y2="-128" stroke={INK} strokeWidth="2.6" strokeLinecap="round" />

      <line x1="62" y1="-198" x2="62" y2="-306" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <line x1="44" y1="-262" x2="80" y2="-262" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <circle cx="62" cy="-309" r="4.5" fill={GOOGLE.yellow} stroke={INK} strokeWidth="1.8" />
      {/* Flag streams back toward the stern, as it would on a moving ship */}
      <g className="ship__flag">
        <path
          d="M 60 -304 C 36 -312 12 -296 -26 -304 L -26 -250 C 12 -242 36 -258 60 -250 Z"
          fill="#FFFFFF"
          stroke={INK}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <GdgMark x={17} y={-277} size={2.4} width={3.6} />
      </g>

      {/* ---------- Superstructure ---------- */}
      {/* Main deck railing */}
      <g stroke={INK} strokeWidth="1.6">
        <line x1="-284" y1="-88" x2="-238" y2="-88" />
        <line x1="182" y1="-88" x2="250" y2="-88" />
        {range(-280, -240, 10).concat(range(186, 246, 10)).map((x) => (
          <line key={x} x1={x} y1="-74" x2={x} y2="-88" />
        ))}
      </g>

      {/* Deck 1 */}
      <path d={deck(-234, 172, -126, -74)} fill={WHITE} stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
      <g fill={GLASS} stroke={INK} strokeWidth="1.8">
        {range(-218, 132, 27).map((x) => (
          <rect key={x} x={x} y="-114" width="18" height="22" rx="4" />
        ))}
      </g>
      <rect x="-234" y="-84" width="414" height="5" fill={GOOGLE.blue} />
      {/* Lifebuoys */}
      {[-226, 160].map((x) => (
        <g key={x}>
          <circle cx={x} cy="-102" r="8" fill="none" stroke={WHITE} strokeWidth="5.5" />
          <circle cx={x} cy="-102" r="8" fill="none" stroke={GOOGLE.red} strokeWidth="5.5" strokeDasharray="6.3 6.3" />
          <circle cx={x} cy="-102" r="11" fill="none" stroke={INK} strokeWidth="1.4" />
          <circle cx={x} cy="-102" r="5" fill="none" stroke={INK} strokeWidth="1.2" />
        </g>
      ))}
      {/* Deck 1 roof railing */}
      <g stroke={INK} strokeWidth="1.5">
        <line x1="-234" y1="-138" x2="-186" y2="-138" />
        <line x1="128" y1="-138" x2="166" y2="-138" />
        {range(-232, -188, 8).concat(range(130, 164, 8)).map((x) => (
          <line key={x} x1={x} y1="-126" x2={x} y2="-138" />
        ))}
      </g>

      {/* Deck 2 */}
      <path d={deck(-184, 118, -168, -126)} fill={WHITE} stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
      <g fill={GLASS} stroke={INK} strokeWidth="1.6">
        {range(-168, 84, 24).map((x) => (
          <circle key={x} cx={x + 6} cy="-147" r="7" />
        ))}
      </g>
      <rect x="-184" y="-134" width="306" height="4" fill={GOOGLE.green} />

      {/* Wheelhouse (bridge) */}
      <path d={deck(14, 110, -202, -168, 16)} fill={WHITE} stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M 26 -194 H 100 Q 112 -194 114 -184 L 116 -178 H 26 Z" fill="#2B4E7E" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
      <g stroke="#FFFFFF" strokeOpacity=".7" strokeWidth="2">
        <line x1="46" y1="-192" x2="40" y2="-180" />
        <line x1="78" y1="-192" x2="72" y2="-180" />
      </g>
      <rect x="10" y="-208" width="108" height="7" rx="3" fill={GOOGLE.yellow} stroke={INK} strokeWidth="2" />
      {/* Radar, horn and searchlight on the bridge roof */}
      <g stroke={INK} strokeWidth="2" strokeLinejoin="round">
        <rect x="86" y="-220" width="16" height="12" rx="3" fill="#D9D9D9" />
        <path d="M 30 -208 v -10 h 22" fill="none" />
        <path d="M 52 -222 h 8 l 4 -4 v 16 l -4 -4 h -8 Z" fill={GOOGLE.red} />
      </g>

      {/* Funnel in the four Google colours, with the GDG mark */}
      <g clipPath={`url(#${id}-funnel)`}>
        <rect x="-120" y="-250" width="80" height="90" fill={WHITE} />
        <rect x="-120" y="-250" width="80" height="12" fill={INK} />
        <rect x="-120" y="-238" width="80" height="9" fill={GOOGLE.blue} />
        <rect x="-120" y="-229" width="80" height="9" fill={GOOGLE.red} />
        <rect x="-120" y="-182" width="80" height="7" fill={GOOGLE.yellow} />
        <rect x="-120" y="-175" width="80" height="7" fill={GOOGLE.green} />
      </g>
      <path d={funnel} fill="none" stroke={INK} strokeWidth="2.6" strokeLinejoin="round" />
      <GdgMark x={-80} y={-200} size={1.35} width={3.4} />

      {/* Smoke puffs, drifting back as the ship moves */}
      <g className="ship__smoke">
        <circle cx="-80" cy="-262" r="13" />
        <circle cx="-80" cy="-262" r="13" />
        <circle cx="-80" cy="-262" r="13" />
      </g>

      {/* ---------- Hull, painted GDG style ---------- */}
      <g clipPath={`url(#${id}-hull)`}>
        <rect x="-310" y="-110" width="630" height="120" fill={HULL} />
        <rect x="-310" y="-74" width="630" height="9" fill={WHITE} />
        <rect x="-310" y="-14" width="630" height="4" fill={GOOGLE.red} />
        <rect x="-310" y="-10" width="630" height="4" fill={GOOGLE.yellow} />
        <rect x="-310" y="-6" width="630" height="4" fill={GOOGLE.green} />
        <rect x="-310" y="-2" width="630" height="4" fill="#8E2A22" />
        {/* Portholes */}
        <g fill={GLASS} stroke={INK} strokeWidth="1.4">
          {range(-250, -170, 20).map((x) => (
            <circle key={x} cx={x} cy="-50" r="4.5" />
          ))}
        </g>
        <text x="10" y="-22" className="ship__name">जीडीजी प्रयागराज</text>
        <text x="-214" y="-22" className="ship__deva">संगम</text>
      </g>
      <path d={hull} fill="none" stroke={INK} strokeWidth="3" strokeLinejoin="round" />

      {/* GDG badge and anchor on the bow */}
      <circle cx="214" cy="-36" r="15" fill="#FFFFFF" stroke={INK} strokeWidth="2" />
      <GdgMark x={214} y={-36} size={1.1} width={3.2} />
      <g transform="translate(264 -52)" fill="none" stroke={WHITE} strokeWidth="2.6" strokeLinecap="round">
        <circle cx="0" cy="-10" r="3" />
        <path d="M 0 -7 V 10 M -6 -2 H 6 M -9 4 Q -8 12 0 12 Q 8 12 9 4" />
      </g>
    </g>
  );
}
