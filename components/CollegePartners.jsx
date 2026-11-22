import { COLLEGES } from '@/lib/colleges';

/**
 * "College Partners" block at the end of the Partners section: Prayagraj
 * colleges first, then partners from across the region. Each tile shows the
 * college's logo if set in lib/colleges.js, otherwise its short code.
 */
const ACCENTS = ['blue', 'red', 'yellow', 'green'];

function Tile({ college, i }) {
  const Tag = college.url ? 'a' : 'div';
  const linkProps = college.url ? { href: college.url, target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <Tag className={`college-tile college-tile--${ACCENTS[i % 4]}`} {...linkProps} data-reveal="" style={{ '--d': `${(i % 6) * 40}ms` }}>
      <span className="college-tile__badge" aria-hidden="true">
        {college.logo ? <img src={college.logo} alt="" loading="lazy" /> : college.short}
      </span>
      <span className="college-tile__text">
        <span className="college-tile__name">{college.name}</span>
        <span className="college-tile__meta mono">
          {college.short} · {college.region}
        </span>
      </span>
    </Tag>
  );
}

export default function CollegePartners() {
  const local = COLLEGES.filter((c) => c.region === 'Prayagraj');
  const regional = COLLEGES.filter((c) => c.region !== 'Prayagraj');
  return (
    <div className="college-partners" aria-labelledby="collegePartnersTitle">
      <div className="college-partners__head" data-reveal="">
        <h3 id="collegePartnersTitle" className="college-partners__title">
          College Partners <span className="college-partners__hi">कॉलेज साझेदार</span>
        </h3>
        <p className="college-partners__count mono">
          {COLLEGES.length} campuses · {new Set(COLLEGES.map((c) => c.region)).size} cities
        </p>
      </div>

      <p className="college-partners__group mono">Prayagraj</p>
      <div className="college-grid">
        {local.map((c, i) => <Tile key={c.short} college={c} i={i} />)}
      </div>

      <p className="college-partners__group mono">Across the region</p>
      <div className="college-grid">
        {regional.map((c, i) => <Tile key={c.short} college={c} i={i + local.length} />)}
      </div>
    </div>
  );
}
