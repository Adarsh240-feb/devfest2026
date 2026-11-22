'use client';

import { useState } from 'react';
import { COLLEGES } from '@/lib/colleges';

const ACCENTS = ['blue', 'red', 'yellow', 'green'];

/**
 * Bento-mosaic sizing pattern — cycles through a set of span combos
 * so the grid looks like the reference photo collage.
 * col: 1 or 2 (grid-column span), row: 1 or 2 (grid-row span)
 */
const SPANS = [
  { col: 2, row: 2 }, // big featured
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 2 }, // tall
  { col: 1, row: 1 },
  { col: 2, row: 1 }, // wide
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 2 }, // tall
  { col: 2, row: 1 }, // wide
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 2 }, // big featured
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
];

export default function CollegePartners() {
  const [filter, setFilter] = useState('all');

  const local    = COLLEGES.filter((c) => c.region === 'Prayagraj');
  const regional = COLLEGES.filter((c) => c.region !== 'Prayagraj');

  const list =
    filter === 'local'    ? local    :
    filter === 'regional' ? regional :
    COLLEGES;

  return (
    <div className="college-partners" id="colleges" aria-labelledby="collegePartnersTitle">

      {/* ── Header ── */}
      <div className="college-partners__head" data-reveal="">
        <div>
          <span className="mono college-partners__eyebrow">Academic Network</span>
          <h3 id="collegePartnersTitle" className="college-partners__title">
            College Partners
          </h3>
        </div>

        <div className="college-partners__filters">
          {[
            { key: 'all',      label: 'All',           count: COLLEGES.length },
            { key: 'local',    label: 'Prayagraj',     count: local.length    },
            { key: 'regional', label: 'Across Region', count: regional.length },
          ].map(({ key, label, count }) => (
            <button
              key={key}
              type="button"
              className={`college-filter-btn mono${filter === key ? ' is-active' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label} <span>({count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Mosaic grid ── */}
      <div className="college-mosaic">
        {list.map((c, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          const span   = SPANS[i % SPANS.length];
          const Tag    = c.url ? 'a' : 'div';
          const lp     = c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {};
          const isBig  = span.col === 2 && span.row === 2;
          const isWide = span.col === 2 && span.row === 1;
          const isTall = span.col === 1 && span.row === 2;

          return (
            <Tag
              key={c.name}
              className={`cm-tile cm-tile--${accent}${isBig ? ' cm-tile--big' : ''}${isWide ? ' cm-tile--wide' : ''}${isTall ? ' cm-tile--tall' : ''}`}
              style={{ '--d': `${(i % 9) * 50}ms` }}
              data-reveal=""
              {...lp}
            >
              {/* Google-colour accent stripe */}
              <span className="cm-tile__stripe" aria-hidden="true" />

              {/* Top meta row */}
              <div className="cm-tile__top">
                <span className="cm-tile__region mono">
                  <svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor" />
                  </svg>
                  {c.region}
                </span>
                <span className="cm-tile__dot cm-tile__dot--accent" aria-hidden="true" />
              </div>

              {/* Name — scales up for big / wide tiles */}
              <div className="cm-tile__body">
                <h4 className="cm-tile__name">{c.name}</h4>
                {(isBig || isWide) && (
                  <p className="cm-tile__sub mono">Partner Campus · DevFest Prayagraj '26</p>
                )}
              </div>

              {/* Short-code badge at bottom-left */}
              <div className="cm-tile__foot">
                <span className="cm-tile__code mono">#{c.short.replace(/\s+/g, '')}</span>
              </div>
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
