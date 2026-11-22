/**
 * Slow-turning mandala behind the home hero, in the style of the DevFest 2026
 * banner (lotus petals, cusped arches, beads). Each ring rotates on its own,
 * alternating direction, over minutes. Pure SVG + CSS (see .hero-mandala in
 * globals.css); colours follow the theme.
 */

const C = 300; // centre of the 600×600 viewBox
const rad = (deg) => (deg * Math.PI) / 180;
const at = (r, deg) => [C + r * Math.cos(rad(deg)), C + r * Math.sin(rad(deg))];
const f = (n) => n.toFixed(1);

/** n pointed petals between radius r1 (base) and r2 (tip), base half-width w (deg). */
function petals(n, r1, r2, w, offset = 0) {
  let d = '';
  for (let i = 0; i < n; i += 1) {
    const a = offset + (360 / n) * i;
    const [bx1, by1] = at(r1, a - w);
    const [bx2, by2] = at(r1, a + w);
    const [tx, ty] = at(r2, a);
    const [c1x, c1y] = at(r1 + (r2 - r1) * 0.62, a - w * 1.15);
    const [c2x, c2y] = at(r1 + (r2 - r1) * 0.62, a + w * 1.15);
    d += `M ${f(bx1)} ${f(by1)} Q ${f(c1x)} ${f(c1y)} ${f(tx)} ${f(ty)} Q ${f(c2x)} ${f(c2y)} ${f(bx2)} ${f(by2)} `;
  }
  return d;
}

/** Cusped (scalloped) ring: n arcs bulging outward at radius r. */
function cusps(n, r) {
  let d = '';
  for (let i = 0; i <= n; i += 1) {
    const [x, y] = at(r, (360 / n) * i);
    const chord = 2 * r * Math.sin(Math.PI / n);
    d += i === 0 ? `M ${f(x)} ${f(y)} ` : `A ${f(chord / 2)} ${f(chord / 2)} 0 0 1 ${f(x)} ${f(y)} `;
  }
  return d;
}

function beads(n, r, size, offset = 0) {
  return Array.from({ length: n }, (_, i) => {
    const [x, y] = at(r, offset + (360 / n) * i);
    return <circle key={i} cx={f(x)} cy={f(y)} r={size} />;
  });
}

/** Small spirals (like the banner's vine curls) between petals. */
function curls(n, r, offset) {
  let d = '';
  for (let i = 0; i < n; i += 1) {
    const a = offset + (360 / n) * i;
    const [x, y] = at(r, a);
    const [x2, y2] = at(r + 14, a + 3);
    d += `M ${f(x)} ${f(y)} Q ${f(x2)} ${f(y2)} ${f(x2 - 4)} ${f(y2 + 4)} `;
  }
  return d;
}

export default function HeroMandala() {
  return (
    <div className="hero-mandala" aria-hidden="true">
      <svg viewBox="0 0 600 600" className="hero-mandala__svg">
        <g className="hm-ring hm-ring--a">
          <path d={petals(8, 6, 46, 20)} />
          <circle cx={C} cy={C} r="10" />
          <circle cx={C} cy={C} r="52" />
        </g>
        <g className="hm-ring hm-ring--b">
          <path d={petals(16, 54, 98, 9, 11.25)} />
          <path d={petals(16, 54, 82, 5, 11.25)} />
          <circle cx={C} cy={C} r="104" />
        </g>
        <g className="hm-ring hm-ring--c">
          {beads(32, 114, 2.4)}
          <path d={cusps(24, 132)} />
          <circle cx={C} cy={C} r="140" />
        </g>
        <g className="hm-ring hm-ring--d">
          <path d={petals(12, 144, 204, 13)} />
          <path d={petals(12, 144, 186, 7)} />
          <path d={curls(12, 170, 15)} />
          {beads(12, 196, 3, 15)}
        </g>
        <g className="hm-ring hm-ring--e">
          <circle cx={C} cy={C} r="212" />
          <circle cx={C} cy={C} r="220" />
          {beads(60, 216, 1.6)}
          <path d={cusps(36, 236)} />
        </g>
        <g className="hm-ring hm-ring--f">
          <path d={petals(24, 244, 292, 6.5)} />
          <path d={petals(24, 250, 276, 3, 7.5)} />
          {beads(24, 296, 2.6)}
        </g>
      </svg>
    </div>
  );
}
