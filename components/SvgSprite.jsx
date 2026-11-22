/** Shared SVG symbol sprite. Reference icons with <use href="#i-name" />. */
export default function SvgSprite() {
  return (
    <svg className="svg-sprite" aria-hidden="true" focusable="false">
      <symbol id="i-arrow" viewBox="0 0 24 24">
        <path d="M7 17 17 7M8 7h9v9" />
      </symbol>
      <symbol id="i-arrow-left" viewBox="0 0 24 24">
        <path d="M19 12H5m6-7-7 7 7 7" />
      </symbol>
      <symbol id="i-arrow-right" viewBox="0 0 24 24">
        <path d="M5 12h14m-6-7 7 7-7 7" />
      </symbol>
      <symbol id="i-wave" viewBox="0 0 24 24">
        <path d="M2 7q2.5-3 5 0t5 0 5 0 5 0M2 12q2.5-3 5 0t5 0 5 0 5 0M2 17q2.5-3 5 0t5 0 5 0 5 0" />
      </symbol>
      <symbol id="i-lotus" viewBox="0 0 24 24">
        <path d="M12 4c2.6 3.2 2.6 8.4 0 12-2.6-3.6-2.6-8.8 0-12Z" />
        <path d="M12 16c-4.2 0-7.6-2.6-8.6-7 3.2.2 5.6 1.6 6.9 4M12 16c4.2 0 7.6-2.6 8.6-7-3.2.2-5.6 1.6-6.9 4M5 20h14" />
      </symbol>
      <symbol id="i-mic" viewBox="0 0 24 24">
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" />
      </symbol>
      <symbol id="av-base" viewBox="0 0 100 100">
        <path d="M12 102c0-20 15-31 38-31s38 11 38 31Z" style={{ fill: "var(--av-shirt,#4285F4)" }} stroke="#1E1E1E" strokeWidth="2.5" />
        <path d="M41 60h18v13a9 9 0 0 1-18 0Z" fill="#E8B88A" stroke="#1E1E1E" strokeWidth="2.5" />
        <path d="M40 73 50 90l10-17" fill="none" stroke="#1E1E1E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="44.5" y="88" width="11" height="9" rx="2" fill="#FFFDF6" stroke="#1E1E1E" strokeWidth="2" />
        <circle cx="30.5" cy="46" r="4.5" fill="#E8B88A" stroke="#1E1E1E" strokeWidth="2.5" />
        <circle cx="69.5" cy="46" r="4.5" fill="#E8B88A" stroke="#1E1E1E" strokeWidth="2.5" />
        <ellipse cx="50" cy="44" rx="19.5" ry="22" fill="#E8B88A" stroke="#1E1E1E" strokeWidth="2.5" />
        <ellipse cx="42.5" cy="45" rx="2.2" ry="2.8" fill="#1E1E1E" />
        <ellipse cx="57.5" cy="45" rx="2.2" ry="2.8" fill="#1E1E1E" />
        <path d="M43 54.5c4 4 10 4 14 0" fill="none" stroke="#1E1E1E" strokeWidth="2.4" strokeLinecap="round" />
      </symbol>
      <symbol id="av-h1" viewBox="0 0 100 100">
        <path d="M30 41c-3-17 7-25 21-25s23 8 19 25c-2-8-7-12-15-13-8 3-18 4-25 13Z" fill="#1E1E1E" />
      </symbol>
      <symbol id="av-h2" viewBox="0 0 100 100">
        <path d="M30 42c-5-6-4-15 2-18 1-7 9-10 14-7 5-4 13-2 15 3 7 1 11 9 7 15 2 3 2 5 2 7-3-6-7-9-11-10-6 3-13 3-19 0-4 1-8 4-10 10Z" fill="#1E1E1E" />
      </symbol>
      <symbol id="av-h3" viewBox="0 0 100 100">
        <path d="M30 41c-2-16 7-24 20-24s22 8 20 24c-4-7-9-11-14-12-9 1-19 3-26 12Z" fill="#1E1E1E" />
        <g fill="none" stroke="#1E1E1E" strokeWidth="2.4">
          <circle cx="42" cy="45.5" r="6.5" />
          <circle cx="58" cy="45.5" r="6.5" />
          <path d="M48.5 45.5h3M35.5 45l-5-1.5M64.5 45l5-1.5" />
        </g>
      </symbol>
      <symbol id="av-h4" viewBox="0 0 100 100">
        <path d="M29 38c0-15 9-23 21-23s21 8 21 23Z" style={{ fill: "var(--av-shirt,#4285F4)" }} stroke="#1E1E1E" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M27 38h46" stroke="#1E1E1E" strokeWidth="5" strokeLinecap="round" />
        <circle cx="50" cy="13.5" r="3.5" fill="#1E1E1E" />
      </symbol>
      <symbol id="i-plus" viewBox="0 0 24 24">
        <path d="M12 5v14M5 12h14" />
      </symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.6" />
      </symbol>
      <symbol id="i-calendar" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 10h18" />
      </symbol>
      <symbol id="i-download" viewBox="0 0 24 24">
        <path d="M12 3v12m-5-5 5 5 5-5M5 21h14" />
      </symbol>
      <symbol id="i-share" viewBox="0 0 24 24">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 10.6 6.8-4.2M8.6 13.4l6.8 4.2" />
      </symbol>
      <symbol id="i-chevron" viewBox="0 0 24 24">
        <path d="m6 9 6 6 6-6" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24">
        <path d="m4 12 5 5L20 6" />
      </symbol>
      <symbol id="i-boat" viewBox="0 0 24 24">
        <path d="M3 16h18l-3 4H6l-3-4Z" />
        <path d="M6 16V9h9l3 7M9 9V5h3v4" />
      </symbol>
      <symbol id="i-diya" viewBox="0 0 24 24">
        <path d="M4 13h16c0 4-3.6 7-8 7s-8-3-8-7Z" />
        <path d="M12 13c-2.8-1.6-3.2-4.6-1-6 .4 1.6 1.7 2.3 2.6 3.2.9.9.7 2.2-1.6 2.8Z" />
      </symbol>
      <symbol id="i-instagram" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </symbol>
      <symbol id="i-linkedin" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7.5 10v6M7.5 7.6v.1M11.5 16v-6m0 2.4c.6-1.5 1.6-2.4 3-2.4 1.8 0 2.8 1.2 2.8 3.3V16" />
      </symbol>
      <symbol id="i-youtube" viewBox="0 0 24 24">
        <rect x="2.5" y="6" width="19" height="12" rx="4" />
        <path d="m10 9 5 3-5 3V9Z" />
      </symbol>
      <symbol id="i-code" viewBox="0 0 24 24">
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />
      </symbol>
      <symbol id="i-android" viewBox="0 0 24 24">
        <path d="M7 3.5l1.6 2.4M17 3.5l-1.6 2.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 11.5c0-3.87 3.13-7 7-7s7 3.13 7 7H5z" fill="currentColor" />
        <circle cx="8.5" cy="8.5" r="1.1" fill="#fff" />
        <circle cx="15.5" cy="8.5" r="1.1" fill="#fff" />
      </symbol>
      <symbol id="i-cloud" viewBox="0 0 24 24">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </symbol>
      <symbol id="i-terminal" viewBox="0 0 24 24">
        <path d="M4 17l6-5-6-5M12 19h8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </symbol>
      <symbol id="i-gdg-chevrons" viewBox="0 0 28 20">
        <path d="M8 3L2 10l6 7" stroke="#EA4335" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M20 3l6 7-6 7" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </symbol>
      <symbol id="i-sun" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </symbol>
      <symbol id="i-moon" viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </symbol>
    </svg>
  );
}
