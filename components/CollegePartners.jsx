'use client';

import { useState } from 'react';
import { COLLEGES } from '@/lib/colleges';

const ACCENTS = ['blue', 'red', 'yellow', 'green'];

export default function CollegePartners() {
  const [filter, setFilter] = useState('all');

  const local = COLLEGES.filter((c) => c.region === 'Prayagraj');
  const regional = COLLEGES.filter((c) => c.region !== 'Prayagraj');

  const filteredColleges =
    filter === 'local' ? local :
    filter === 'regional' ? regional :
    COLLEGES;

  return (
    <div className="college-partners" id="colleges" aria-labelledby="collegePartnersTitle">
      <div className="college-partners__head" data-reveal="">
        <div>
          <span className="mono college-partners__eyebrow">Academic Network</span>
          <h3 id="collegePartnersTitle" className="college-partners__title">
            College Partners
          </h3>
        </div>

        <div className="college-partners__filters">
          <button
            type="button"
            className={`college-filter-btn mono ${filter === 'all' ? 'is-active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All <span>({COLLEGES.length})</span>
          </button>
          <button
            type="button"
            className={`college-filter-btn mono ${filter === 'local' ? 'is-active' : ''}`}
            onClick={() => setFilter('local')}
          >
            Prayagraj <span>({local.length})</span>
          </button>
          <button
            type="button"
            className={`college-filter-btn mono ${filter === 'regional' ? 'is-active' : ''}`}
            onClick={() => setFilter('regional')}
          >
            Across Region <span>({regional.length})</span>
          </button>
        </div>
      </div>

      <div className="college-grid">
        {filteredColleges.map((c, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          const Tag = c.url ? 'a' : 'div';
          const linkProps = c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {};

          return (
            <Tag
              key={c.name}
              className={`college-card college-card--${accent}`}
              {...linkProps}
              data-reveal=""
              style={{ '--d': `${(i % 8) * 40}ms` }}
            >
              <div className="college-card__top">
                <span className="college-card__city mono">
                  <svg className="ic" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor"/>
                  </svg>
                  {c.region}
                </span>
                <span className="college-card__tag mono">Partner Campus</span>
              </div>

              <div className="college-card__body">
                <h4 className="college-card__name">{c.name}</h4>
              </div>

              <div className="college-card__indicator" aria-hidden="true" />
            </Tag>
          );
        })}
      </div>
    </div>
  );
}
