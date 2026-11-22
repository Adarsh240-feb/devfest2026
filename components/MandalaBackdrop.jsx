/**
 * Site-wide decorative backdrop inspired by the DevFest Prayagraj 2026 banner:
 * a Mughal jaali lattice (strongest at the screen edges), cusped-arch frame
 * corners and lotus vines on both sides. Fixed behind all content, low opacity,
 * purely decorative. Colours/opacity live in globals.css (.mandala*).
 */

// Cusped (multi-foil) arch corner: small arcs strung along a quarter curve,
// each bulging inward like the banner's scalloped frame.
function cuspedCurve(cx, cy, r, steps) {
  const pts = [];
  for (let i = 0; i <= steps; i += 1) {
    const a = (-90 - (90 * i) / steps) * (Math.PI / 180);
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  const chord = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1]);
  const arc = (chord / 2) * 1.08;
  let d = `M ${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let i = 1; i < pts.length; i += 1) {
    d += ` A ${arc.toFixed(1)} ${arc.toFixed(1)} 0 0 0 ${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)}`;
  }
  return d;
}

const OUTER = cuspedCurve(330, 330, 300, 9);
const INNER = cuspedCurve(330, 330, 284, 9);

function Corner({ className }) {
  return (
    <svg className={`mandala__corner ${className}`} viewBox="0 0 330 330" aria-hidden="true">
      {/* Edges of the frame band plus the cusped arch */}
      <path d={`${OUTER} M 30 330 V 0 M 330 30 H 0`} className="mandala__line mandala__line--bold" />
      <path d={INNER} className="mandala__line" />
      {/* Bud finial where the arch meets each edge */}
      <path d="M 330 30 m -8 0 q 8 -16 16 0 M 30 330 m 0 -8 q -16 8 0 16" className="mandala__line" />
    </svg>
  );
}

function Lotus({ x, y, s = 1, rot = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M 0 0 C -6 -14 -6 -28 0 -40 C 6 -28 6 -14 0 0 Z" />
      <path d="M 0 0 C -14 -8 -24 -22 -24 -34 C -12 -30 -4 -18 0 0" />
      <path d="M 0 0 C 14 -8 24 -22 24 -34 C 12 -30 4 -18 0 0" />
      <path d="M 0 0 C -18 -2 -34 -10 -40 -20 C -26 -20 -12 -12 0 0" />
      <path d="M 0 0 C 18 -2 34 -10 40 -20 C 26 -20 12 -12 0 0" />
      <path d="M -16 2 Q 0 8 16 2" />
    </g>
  );
}

const spiral = (x, y, dir = 1) =>
  `M ${x} ${y} c ${12 * dir} -2 ${18 * dir} 8 ${12 * dir} 14 c ${-5 * dir} 5 ${-12 * dir} 1 ${-9 * dir} -5 c ${2 * dir} -3 ${6 * dir} -2 ${6 * dir} 1`;

/** Lotus vine flourish (left side; the right side is a mirrored copy). */
function Vine({ className }) {
  return (
    <svg className={`mandala__vine ${className}`} viewBox="0 0 220 640" aria-hidden="true">
      <g className="mandala__line">
        {/* Main stem: S-curve top to bottom, bulging out to the big lotus */}
        <path d="M 120 20 C 70 90 60 170 110 230 C 150 280 150 300 40 320 C 150 340 150 360 110 410 C 60 470 70 550 120 620" />
        {/* Side tendrils with spirals */}
        <path d="M 96 120 C 130 110 160 120 168 150" />
        <path d={spiral(168, 150, -1)} />
        <path d="M 96 520 C 130 530 160 520 168 490" />
        <path d={spiral(168, 490, -1)} />
        <path d="M 84 190 C 50 200 32 228 40 256" />
        <path d={spiral(40, 256, 1)} />
        <path d="M 84 450 C 50 440 32 412 40 384" />
        <path d={spiral(40, 384, 1)} />
        <path d="M 132 270 C 170 250 196 262 200 290" />
        <path d="M 132 370 C 170 390 196 378 200 350" />
        {/* Lotuses: big one pointing outward, buds along the vine */}
        <Lotus x={36} y={320} s={1.25} rot={-90} />
        <Lotus x={120} y={20} s={0.75} rot={180} />
        <Lotus x={120} y={620} s={0.75} rot={0} />
        <Lotus x={200} y={290} s={0.55} rot={60} />
        <Lotus x={200} y={350} s={0.55} rot={120} />
        <circle cx="168" cy="150" r="2.5" />
        <circle cx="168" cy="490" r="2.5" />
      </g>
    </svg>
  );
}

export default function MandalaBackdrop() {
  return (
    <div className="mandala" aria-hidden="true">
      <div className="mandala__jaali" />
      <Corner className="mandala__corner--tl" />
      <Corner className="mandala__corner--tr" />
      <Corner className="mandala__corner--bl" />
      <Corner className="mandala__corner--br" />
      <Vine className="mandala__vine--left" />
      <Vine className="mandala__vine--right" />
    </div>
  );
}
