/* =========================================================
   DevFest Prayagraj 2026 — interactions
   Vanilla JS, no dependencies. Called once per page load from
   components/SiteScripts.jsx after React hydrates.
   ========================================================= */
export default function initSite() {
  'use strict';

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer  = window.matchMedia('(pointer: fine)').matches;
  const clamp = (n, min, max) => Math.min(Math.max(n, min), max);
  const body = document.body;

  /* ---------------------------------------------------------
     Intro (home page only, components/BoatPreloader.jsx)
     The GDG ship crosses the screen; three river trails merge
     behind it and the curtain is wiped away in its wake to
     reveal the hero. Plays on every visit; skippable.
     --------------------------------------------------------- */
  const preloader = $('#preloader');
  let loaded = false;
  let revealsStarted = false;

  const startPageReveals = () => {
    if (revealsStarted) return;
    revealsStarted = true;
    body.classList.add('is-loaded');
    initReveals();
    initCounters();
  };

  const finishPreloader = () => {
    if (loaded) return;
    loaded = true;
    preloader?.classList.add('is-done');
    body.classList.remove('is-preloading');
    startPageReveals();
    window.setTimeout(() => {
      if (preloader) preloader.style.display = 'none';
    }, preloader ? 520 : 0);
  };

  const sailBoat = (onArrive) => {
    const stage = $('#riverStage');
    const boat = $('#boat');
    const curtain = $('#preloaderCurtain');
    if (!stage || !boat) {
      onArrive();
      return;
    }
    if (reduceMotion) {
      boat.style.display = 'none';
      onArrive();
      return;
    }

    const wakeSvg = $('#riverWake');
    const glow = $('#boatWakeGlow');
    const core = $('#boatWake');
    const rivers = [
      { el: $('#riverGanga'), lane: -1 },    // Ganga flows in from above
      { el: $('#riverSaraswati'), lane: 0 }, // the hidden Saraswati, through the middle
      { el: $('#riverYamuna'), lane: 1 },    // Yamuna from below
    ].filter((r) => r.el);
    const gradients = ['#trailFade', '#trailCore', '#trailGanga', '#trailYamuna', '#trailSaraswati']
      .map((sel) => $(`linearGradient${sel}`)).filter(Boolean);

    const DURATION = 4000;
    // Ship SVG viewBox is "-340 -330 690 440"; (0, 0) is the waterline at mid-ship.
    const VB = { x: -340, y: -330, w: 690, h: 440 };
    const BOW_X = 340;    // furthest right point of the drawing (bow wave)
    const STERN_X = -330; // furthest left point (stern wash / flag lines)
    const WAKE_X = -262;  // where the trail leaves the hull

    let W = 0, H = 0, bw = 0;
    const measure = () => {
      W = stage.clientWidth;
      H = stage.clientHeight;
      bw = boat.clientWidth || parseFloat(getComputedStyle(boat).width) || 600;
      wakeSvg?.setAttribute('viewBox', `0 0 ${W} ${H}`);
    };
    measure();
    window.addEventListener('resize', measure);

    const unit = () => bw / VB.w;               // px per ship unit
    const anchorX = () => (0 - VB.x) * unit();  // waterline point inside the sprite
    const anchorY = () => (0 - VB.y) * unit();
    const stageTop = () => stage.getBoundingClientRect().top;

    // Path in stage pixels. t in [0, 1]. Up = farther away (smaller).
    const MAX_SCALE = 1.04;
    const pathAt = (t) => {
      const startX = -(BOW_X * unit() * MAX_SCALE) - 24;     // bow just off-screen left
      const endX = W + (-STERN_X) * unit() * MAX_SCALE + 24; // stern just off-screen right
      const baseY = H * 0.73;
      const amp = H * 0.09;
      return {
        x: startX + (endX - startX) * t,
        y: baseY - amp * Math.sin(2 * Math.PI * t),
        depth: Math.sin(2 * Math.PI * t), // +1 farthest, -1 nearest
      };
    };

    const wakePts = [];
    const easeInOut = (t) => 0.5 - Math.cos(Math.PI * t) / 2;
    const smooth = (v) => v * v * (3 - 2 * v);
    let start = null;
    let arrived = false;

    const frame = (now) => {
      if (loaded) return; // skipped
      if (start === null) start = now;
      const raw = clamp((now - start) / DURATION, 0, 1);
      const t = raw * 0.8 + easeInOut(raw) * 0.2; // near-constant speed, soft start/end
      const p = pathAt(t);
      const ahead = pathAt(Math.min(1, t + 0.004));
      const behind = pathAt(Math.max(0, t - 0.004));
      const angle = Math.atan2(ahead.y - behind.y, ahead.x - behind.x) * 180 / Math.PI;
      const scale = 1 - p.depth * 0.04;
      const bob = Math.sin(now / 240) * 3;
      const tilt = clamp(angle * 0.4, -5, 5) + Math.sin(now / 420) * 0.8;

      boat.style.transformOrigin = `${anchorX()}px ${anchorY()}px`;
      boat.style.transform =
        `translate(${(p.x - anchorX()).toFixed(1)}px, ${(p.y + bob - anchorY()).toFixed(1)}px) rotate(${tilt.toFixed(2)}deg) scale(${scale.toFixed(3)})`;

      // Record the trail from the stern along the route already travelled.
      const sternX = p.x + WAKE_X * unit() * scale;
      if (!wakePts.length || Math.abs(wakePts[wakePts.length - 1][0] - sternX) > 3) {
        const backT = clamp(t - (p.x - sternX) / (pathAt(1).x - pathAt(0).x), 0, 1);
        wakePts.push([sternX, pathAt(backT).y + 4]);
      }

      if (wakePts.length > 1) {
        const tailX = wakePts[0][0];
        gradients.forEach((g) => {
          g.setAttribute('x1', tailX.toFixed(1));
          g.setAttribute('x2', sternX.toFixed(1));
        });
        const line = (pts) => 'M ' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join(' L ');
        const merged = line(wakePts);
        glow?.setAttribute('d', merged);
        core?.setAttribute('d', merged);
        // The three rivers run apart at the tail and meet (the Sangam) just behind the ship.
        const spread = clamp(H * 0.05, 18, 36);
        const mergeLen = Math.max(260, W * 0.45);
        rivers.forEach(({ el, lane }) => {
          el.setAttribute('d', line(wakePts.map(([x, y]) => {
            const apart = smooth(clamp((sternX - x - 30) / mergeLen, 0, 1));
            return [x, y + lane * spread * apart];
          })));
        });
      }

      // Wipe the curtain away behind the ship, with a soft edge.
      if (curtain) curtain.style.setProperty('--wipe', `${Math.max(0, sternX).toFixed(0)}px`);
      if (sternX > 0) startPageReveals();

      if (raw >= 1 && !arrived) {
        arrived = true;
        window.removeEventListener('resize', measure);
        onArrive();
        return;
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  };

  if (!preloader) {
    // No intro on this page: show the page right away.
    // Deferred a tick: the reveal helpers below are defined later in this function.
    window.setTimeout(finishPreloader, 0);
  } else {
    const skip = () => finishPreloader();
    $('#preloaderSkip')?.addEventListener('click', skip);
    preloader.addEventListener('click', skip);
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !loaded) skip(); });
    window.setTimeout(skip, 9000); // safety net
    sailBoat(finishPreloader);
  }

  /* ---------------------------------------------------------
     Theme toggle (Light / Dark mode)
     --------------------------------------------------------- */
  const initTheme = () => {
    const root = document.documentElement;
    const STORAGE_KEY = 'devfest-theme';
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const getPreferredTheme = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'dark' || saved === 'light') return saved;
      } catch (err) {}
      return mediaQuery.matches ? 'dark' : 'light';
    };

    const updateButtons = (theme) => {
      const isDark = theme === 'dark';
      const label = isDark ? 'Switch to light mode (T)' : 'Switch to dark mode (T)';
      $$('#themeToggle, #mobileThemeToggle').forEach((btn) => {
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
        btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      });
    };

    const applyTheme = (theme, animate = false) => {
      if (animate && !reduceMotion) {
        root.classList.add('theme-transition');
        window.clearTimeout(root._themeTimer);
        root._themeTimer = window.setTimeout(() => {
          root.classList.remove('theme-transition');
        }, 360);
      }
      root.setAttribute('data-theme', theme);
      updateButtons(theme);
    };

    const toggleTheme = (animate = true) => {
      const current = root.getAttribute('data-theme') || getPreferredTheme();
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (err) {}
      applyTheme(next, animate);
    };

    // Initialize button state to match current attribute or preference
    const activeTheme = root.getAttribute('data-theme') || getPreferredTheme();
    applyTheme(activeTheme, false);

    // Click handler for desktop and mobile toggles
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('#themeToggle, #mobileThemeToggle');
      if (btn) {
        e.preventDefault();
        toggleTheme(true);
      }
    });

    // Keyboard shortcut: Press T or D to toggle theme
    window.addEventListener('keydown', (e) => {
      if (e.target.matches('input, textarea, select, [contenteditable]')) return;
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === 't' || e.key === 'T' || e.key === 'd' || e.key === 'D') {
        toggleTheme(true);
      }
    });

    // Listen for OS scheme change if user hasn't set an explicit preference
    mediaQuery.addEventListener('change', (e) => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? 'dark' : 'light', true);
        }
      } catch (err) {}
    });
  };

  initTheme();

  /* ---------------------------------------------------------
     Custom cursor
     --------------------------------------------------------- */
  if (finePointer && !reduceMotion) {
    const cursor = $('#cursor');
    const dot = $('.cursor__dot', cursor);
    const ring = $('.cursor__ring', cursor);
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let active = false;

    body.classList.add('has-cursor');

    window.addEventListener('pointermove', (e) => {
      mx = e.clientX; my = e.clientY;
      if (!active) { active = true; cursor.classList.add('is-active'); }
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    }, { passive: true });

    const animateRing = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateRing);
    };
    requestAnimationFrame(animateRing);

    const hoverables = 'a, button, input, .chip, .swatch, .tab, .heritage__scroller, .hero-poster, .stream-card';
    document.addEventListener('pointerover', (e) => {
      if (e.target.closest(hoverables)) cursor.classList.add('is-hover');
    });
    document.addEventListener('pointerout', (e) => {
      if (e.target.closest(hoverables)) cursor.classList.remove('is-hover');
    });
    document.addEventListener('pointerleave', () => cursor.classList.remove('is-active'));
    document.addEventListener('pointerenter', () => { if (active) cursor.classList.add('is-active'); });
    window.addEventListener('blur', () => cursor.classList.remove('is-active'));
  }

  /* ---------------------------------------------------------
     Scroll progress, sticky header, back-to-top
     --------------------------------------------------------- */
  const header = $('#siteHeader');
  const progressBar = $('#scrollProgress');
  const toTop = $('#toTop');
  let scrollQueued = false;

  const onScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
    header?.classList.toggle('is-scrolled', scrollTop > 12);
    toTop?.classList.toggle('is-visible', scrollTop > 700);
    scrollQueued = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollQueued) { scrollQueued = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  toTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  /* ---------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------- */
  let revealObserver = null;
  const initReveals = () => {
    if (revealObserver) return;
    const items = $$('[data-reveal]');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    items.forEach((el) => {
      // hero copy is above the fold: show it without waiting for a scroll
      if (el.closest('.hero__copy')) el.classList.add('is-visible');
      else revealObserver.observe(el);
    });
  };

  /* ---------------------------------------------------------
     Stat counters
     --------------------------------------------------------- */
  let countersStarted = false;
  const initCounters = () => {
    if (countersStarted) return;
    countersStarted = true;
    const counters = $$('[data-count]');
    if (!counters.length) return;

    const run = (el) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      if (reduceMotion) { el.textContent = String(target); return; }
      const start = performance.now();
      const duration = 1400;
      const tick = (now) => {
        const p = clamp((now - start) / duration, 0, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (!('IntersectionObserver' in window)) { counters.forEach(run); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => obs.observe(el));
  };

  /* ---------------------------------------------------------
     Mobile menu
     --------------------------------------------------------- */
  const menu = $('#mobileMenu');
  const menuToggle = $('#menuToggle');
  const menuClose = $('#menuClose');

  const setMenu = (open) => {
    if (!menu) return;
    body.classList.toggle('menu-open', open);
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    menuToggle?.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuToggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (open) window.setTimeout(() => menuClose?.focus(), 300);
    else menuToggle?.focus();
  };

  menuToggle?.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  menuClose?.addEventListener('click', () => setMenu(false));
  $$('.mobile-menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.classList.contains('is-open')) setMenu(false);
  });

  /* ---------------------------------------------------------
     Active nav link
     --------------------------------------------------------- */
  const navLinks = $$('.desktop-nav a');
  const navSections = navLinks
    .map((link) => {
      const href = link.getAttribute('href') || '';
      return href.startsWith('#') && href.length > 1 ? $(href) : null;
    })
    .filter(Boolean);

  if ('IntersectionObserver' in window && navSections.length) {
    const navObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = '#' + entry.target.id;
        navLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === id));
      });
    }, { rootMargin: '-42% 0px -52% 0px', threshold: 0 });
    navSections.forEach((s) => navObs.observe(s));
  }

  /* ---------------------------------------------------------
     Mouse parallax on hero stickers
     --------------------------------------------------------- */
  if (finePointer && !reduceMotion) {
    const stickers = $$('[data-parallax]');
    let pX = 0, pY = 0, targetX = 0, targetY = 0;
    window.addEventListener('pointermove', (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    const tick = () => {
      pX += (targetX - pX) * 0.06;
      pY += (targetY - pY) * 0.06;
      stickers.forEach((el) => {
        const depth = Number(el.dataset.parallax) || 0.05;
        el.style.translate = `${(-pX * depth * 160).toFixed(2)}px ${(-pY * depth * 120).toFixed(2)}px`;
      });
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------------------------------------------------------
     Magnetic buttons + card tilt
     --------------------------------------------------------- */
  if (finePointer && !reduceMotion) {
    $$('.magnetic').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.18;
        const y = (e.clientY - r.top - r.height / 2) * 0.3;
        el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
      });
      el.addEventListener('pointerleave', () => { el.style.translate = ''; });
    });

    const tiltCards = $$('.tilt, .hero-poster');
    tiltCards.forEach((card) => {
      const base = card.classList.contains('hero-poster') ? 2.2 : 0;
      let raf = 0;
      card.addEventListener('pointermove', (e) => {
        if (window.innerWidth < 900) return;
        if (raf) return;
        raf = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          const ry = px * 10;
          const rx = -py * 8;
          card.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) rotate(${base}deg) translateY(-4px)`;
          raf = 0;
        });
      });
      card.addEventListener('pointerleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ---------------------------------------------------------
     Countdown
     --------------------------------------------------------- */
  const targetDate = new Date('2026-12-19T09:00:00+05:30').getTime();
  const cd = {
    days: $('#cdDays'), hours: $('#cdHours'), mins: $('#cdMins'), secs: $('#cdSecs')
  };
  const pad = (n) => String(n).padStart(2, '0');

  const updateCountdown = () => {
    const diff = targetDate - Date.now();
    if (diff <= 0) {
      if (cd.days) cd.days.textContent = '00';
      if (cd.hours) cd.hours.textContent = '00';
      if (cd.mins) cd.mins.textContent = '00';
      if (cd.secs) cd.secs.textContent = '00';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    if (cd.days) cd.days.textContent = pad(days);
    if (cd.hours) cd.hours.textContent = pad(hours);
    if (cd.mins) cd.mins.textContent = pad(mins);
    if (cd.secs) cd.secs.textContent = pad(secs);
  };
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  /* ---------------------------------------------------------
     Add to calendar — Google, Apple (.ics), Outlook, Yahoo
     --------------------------------------------------------- */
  const GCAL_URL = (() => {
    const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    const params = new URLSearchParams({
      text:     'DevFest Prayagraj 2026',
      dates:    '20261219T033000Z/20261219T123000Z',   // 09:00–18:00 IST = 03:30–12:30 UTC
      details:  'DevFest Prayagraj 2026 by GDG Prayagraj — talks, workshops, hands-on labs and community. Register at https://gdg.community.dev/gdg-prayagraj/',
      location: 'North Central Zone Cultural Centre (NCZCC), 14 CSP Singh Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001',
      sprop:    'website:https://gdg.community.dev/gdg-prayagraj/',
      trp:      'false',
    });
    return `${base}&${params.toString()}`;
  })();

  const OUTLOOK_URL = (() => {
    const base = 'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent';
    const params = new URLSearchParams({
      startdt:  '2026-12-19T03:30:00Z',
      enddt:    '2026-12-19T12:30:00Z',
      subject:  'DevFest Prayagraj 2026',
      body:     'DevFest Prayagraj 2026 by GDG Prayagraj — Where Ideas Find Their Confluence. Register: https://gdg.community.dev/gdg-prayagraj/',
      location: 'NCZCC, 14 CSP Singh Marg, Civil Lines, Prayagraj, UP 211001',
    });
    return `${base}&${params.toString()}`;
  })();

  const OFFICE365_URL = (() => {
    const base = 'https://outlook.office.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent';
    const params = new URLSearchParams({
      startdt:  '2026-12-19T03:30:00Z',
      enddt:    '2026-12-19T12:30:00Z',
      subject:  'DevFest Prayagraj 2026',
      body:     'DevFest Prayagraj 2026 by GDG Prayagraj. Info: https://devfest-prayagraj-2026.vercel.app/',
      location: 'NCZCC, 14 CSP Singh Marg, Civil Lines, Prayagraj, UP 211001',
    });
    return `${base}&${params.toString()}`;
  })();

  const YAHOO_URL = (() => {
    const base = 'https://calendar.yahoo.com/?v=60&view=d&type=20';
    const params = new URLSearchParams({
      title:    'DevFest Prayagraj 2026',
      st:       '20261219T033000Z',
      et:       '20261219T123000Z',
      desc:     'DevFest Prayagraj 2026 by GDG Prayagraj. Info: https://devfest-prayagraj-2026.vercel.app/',
      in_loc:   'NCZCC, Civil Lines, Prayagraj',
    });
    return `${base}&${params.toString()}`;
  })();

  const ICS_CONTENT = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//GDG Prayagraj//DevFest 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:DevFest Prayagraj 2026',
    'X-WR-TIMEZONE:Asia/Kolkata',
    'BEGIN:VEVENT',
    'UID:devfest-prayagraj-2026@gdgprayagraj.com',
    'DTSTAMP:20261121T110000Z',
    'DTSTART:20261219T033000Z',
    'DTEND:20261219T123000Z',
    'SUMMARY:DevFest Prayagraj 2026',
    'DESCRIPTION:DevFest Prayagraj 2026 by GDG Prayagraj — Where Ideas Find Their Confluence.\\nWebsite: https://devfest-prayagraj-2026.vercel.app/\\nRegistration: https://gdg.community.dev/gdg-prayagraj/',
    'LOCATION:North Central Zone Cultural Centre (NCZCC), 14 CSP Singh Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001',
    'URL:https://devfest-prayagraj-2026.vercel.app/',
    'STATUS:CONFIRMED',
    'CATEGORIES:CONFERENCE,TECHNOLOGY,COMMUNITY',
    'BEGIN:VALARM',
    'TRIGGER:-PT24H',
    'ACTION:DISPLAY',
    'DESCRIPTION:DevFest Prayagraj 2026 starts tomorrow!',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const downloadIcsFile = () => {
    try {
      const blob = new Blob([ICS_CONTENT], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'devfest-prayagraj-2026.ics';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      toast('Calendar (.ics) downloaded. Open it to add to Apple or Outlook Calendar.');
    } catch (e) {
      window.location.href = '/assets/devfest-prayagraj-2026.ics';
    }
  };

  const ensureCalendarModal = () => {
    let modal = $('#calendarModal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'cal-modal';
      modal.id = 'calendarModal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'calModalTitle');
      modal.setAttribute('aria-hidden', 'true');
      modal.innerHTML = `
        <div class="cal-modal__backdrop" id="calBackdrop" tabindex="-1"></div>
        <div class="cal-modal__dialog">
          <button class="cal-modal__close" id="calCloseBtn" type="button" aria-label="Close dialog">
            <svg viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          <div class="cal-modal__eyebrow">
            <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#34A853;"></span>
            Save the Date
          </div>
          <h3 class="cal-modal__title" id="calModalTitle">Add DevFest Prayagraj '26</h3>

          <div class="cal-modal__event-card">
            <div class="cal-modal__event-row">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span><b>Saturday, 19 December 2026</b> · 09:00 AM – 06:00 PM IST</span>
            </div>
            <div class="cal-modal__event-row">
              <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span><b>NCZCC</b> · 14 CSP Singh Marg, Civil Lines, Prayagraj</span>
            </div>
          </div>

          <div class="cal-modal__providers">
            <!-- Google Calendar -->
            <a class="cal-provider-btn cal-provider-btn--featured" id="calGcalLink" href="${GCAL_URL}" target="_blank" rel="noopener noreferrer">
              <span class="cal-icon">
                <svg viewBox="0 0 24 24" width="22" height="22"><path fill="#FFF" d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
              </span>
              <span>Google Calendar</span>
            </a>

            <!-- Apple Calendar (.ics) -->
            <button class="cal-provider-btn js-cal-ics" type="button">
              <span class="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.92 2.74 1 .08 2.01-.5 2.62-1.24z"/></svg>
              </span>
              <span>Apple Calendar</span>
            </button>

            <!-- Outlook Web -->
            <a class="cal-provider-btn" href="${OUTLOOK_URL}" target="_blank" rel="noopener noreferrer">
              <span class="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#0078D4"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg>
              </span>
              <span>Outlook Web</span>
            </a>

            <!-- Universal iCal (.ics) -->
            <button class="cal-provider-btn js-cal-ics" type="button">
              <span class="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </span>
              <span>Download .ics</span>
            </button>

            <!-- Yahoo Calendar -->
            <a class="cal-provider-btn" href="${YAHOO_URL}" target="_blank" rel="noopener noreferrer">
              <span class="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#6001D2"><circle cx="12" cy="12" r="10"/></svg>
              </span>
              <span>Yahoo Calendar</span>
            </a>

            <!-- Microsoft 365 -->
            <a class="cal-provider-btn" href="${OFFICE365_URL}" target="_blank" rel="noopener noreferrer">
              <span class="cal-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#EA3E23"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
              </span>
              <span>Office 365</span>
            </a>
          </div>

          <div class="cal-modal__actions">
            <button class="cal-modal__copy-btn" id="calCopyBtn" type="button">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <span id="calCopyLabel">Copy event details</span>
            </button>
            <span class="cal-modal__badge">RFC 5545 iCal · All Devices</span>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    const closeBtn = $('#calCloseBtn', modal);
    const backdrop = $('#calBackdrop', modal);
    const copyBtn = $('#calCopyBtn', modal);
    const copyLabel = $('#calCopyLabel', modal);
    let previousActiveElement = null;

    const openModal = (e) => {
      if (e) e.preventDefault();
      previousActiveElement = document.activeElement;
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');
      body.classList.add('modal-open');
      closeBtn?.focus();
    };

    const closeModal = () => {
      modal.classList.remove('is-active');
      modal.setAttribute('aria-hidden', 'true');
      body.classList.remove('modal-open');
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };

    $$('.js-calendar').forEach((btn) => {
      btn.removeEventListener('click', openModal);
      btn.addEventListener('click', openModal);
    });

    closeBtn?.addEventListener('click', closeModal);
    backdrop?.addEventListener('click', closeModal);

    modal.querySelectorAll('.js-cal-ics').forEach((btn) => {
      btn.addEventListener('click', () => {
        downloadIcsFile();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('is-active')) {
        closeModal();
      }
    });

    copyBtn?.addEventListener('click', () => {
      const details = [
        'DevFest Prayagraj 2026',
        'Date: Saturday, 19 December 2026 (09:00 AM – 06:00 PM IST)',
        'Venue: North Central Zone Cultural Centre (NCZCC), 14 CSP Singh Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001',
        'Website: https://devfest-prayagraj-2026.vercel.app/',
        'Registration: https://gdg.community.dev/gdg-prayagraj/'
      ].join('\n');

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(details).then(() => {
          if (copyLabel) copyLabel.textContent = 'Copied to clipboard!';
          toast('Event details copied to clipboard');
          setTimeout(() => {
            if (copyLabel) copyLabel.textContent = 'Copy event details';
          }, 2400);
        }).catch(() => {
          toast('DevFest 19 Dec 2026 · NCZCC Prayagraj');
        });
      } else {
        toast('DevFest 19 Dec 2026 · NCZCC Prayagraj');
      }
    });
  };

  ensureCalendarModal();

  /* ---------------------------------------------------------
     Programme tabs
     --------------------------------------------------------- */
  const tabs = $$('.tab');
  const agendaItems = $$('.agenda-item');
  const setFilter = (filter) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.filter === filter;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    agendaItems.forEach((item) => {
      const show = filter === 'all' || item.dataset.room === filter;
      item.classList.toggle('is-filtered', !show);
      if (show) {
        item.classList.remove('is-entering');
        void item.offsetWidth;
        item.classList.add('is-entering');
      }
    });
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => setFilter(tab.dataset.filter));
    tab.addEventListener('keydown', (e) => {
      let next = null;
      if (e.key === 'ArrowRight') next = tabs[index + 1] || tabs[0];
      if (e.key === 'ArrowLeft') next = tabs[index - 1] || tabs[tabs.length - 1];
      if (next) { e.preventDefault(); next.focus(); next.click(); }
    });
  });

  /* ---------------------------------------------------------
     FAQ accordion
     --------------------------------------------------------- */
  const accItems = $$('.acc-item');
  accItems.forEach((item, i) => {
    const trigger = $('.acc-trigger', item);
    const panel = $('.acc-panel', item);
    if (!trigger || !panel) return;
    if (i === 0) {
      item.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
    } else {
      trigger.setAttribute('aria-expanded', 'false');
    }
    trigger.addEventListener('click', () => {
      const willOpen = !item.classList.contains('is-open');
      accItems.forEach((other) => {
        other.classList.remove('is-open');
        const t = $('.acc-trigger', other);
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (willOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------------------------------------------------------
     Heritage scroller
     --------------------------------------------------------- */
  const scroller = $('#heritageScroller');
  const heritageProgress = $('#heritageProgress');
  const prevBtn = $('#heritagePrev');
  const nextBtn = $('#heritageNext');

  if (scroller) {
    const step = () => {
      const card = $('.heritage-card', scroller);
      return card ? card.getBoundingClientRect().width + 18 : 380;
    };
    prevBtn?.addEventListener('click', () => scroller.scrollBy({ left: -step(), behavior: reduceMotion ? 'auto' : 'smooth' }));
    nextBtn?.addEventListener('click', () => scroller.scrollBy({ left: step(), behavior: reduceMotion ? 'auto' : 'smooth' }));

    const updateHeritageProgress = () => {
      const max = scroller.scrollWidth - scroller.clientWidth;
      const pct = max > 0 ? (scroller.scrollLeft / max) * 100 : 0;
      if (heritageProgress) heritageProgress.style.width = pct + '%';
    };
    scroller.addEventListener('scroll', updateHeritageProgress, { passive: true });
    window.addEventListener('resize', updateHeritageProgress);
    updateHeritageProgress();

    scroller.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); scroller.scrollBy({ left: step(), behavior: 'smooth' }); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); scroller.scrollBy({ left: -step(), behavior: 'smooth' }); }
    });

    if (finePointer) {
      let down = false, startX = 0, startLeft = 0, moved = false;
      scroller.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'touch') return;
        down = true; moved = false;
        startX = e.clientX; startLeft = scroller.scrollLeft;
        scroller.classList.add('is-dragging');
        scroller.setPointerCapture(e.pointerId);
      });
      scroller.addEventListener('pointermove', (e) => {
        if (!down) return;
        const dx = e.clientX - startX;
        if (Math.abs(dx) > 4) moved = true;
        scroller.scrollLeft = startLeft - dx;
      });
      const endDrag = () => {
        if (!down) return;
        down = false;
        scroller.classList.remove('is-dragging');
      };
      scroller.addEventListener('pointerup', endDrag);
      scroller.addEventListener('pointercancel', endDrag);
      scroller.addEventListener('click', (e) => {
        if (moved) { e.preventDefault(); moved = false; }
      }, true);
    }
  }

  /* ---------------------------------------------------------
     Badge generator
     --------------------------------------------------------- */
  const canvas = $('#badgeCanvas');
  const nameInput = $('#badgeName');
  const roleChips = $$('#roleChips .chip');
  const swatches = $$('#themeSwatches .swatch');
  const downloadBtn = $('#downloadBadge');
  const shareBtn = $('#shareBadge');

  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const PAPER = '#F4F1E9';
    const INK = '#1E1E1E';
    const YELLOW = '#FFD427';

    const themes = {
      blue:   { bg: '#C3ECF6', accent: '#4285F4', pop: '#57CAFF', label: 'SANGAM BLUE' },
      green:  { bg: '#CCF6C5', accent: '#34A853', pop: '#5CDB6D', label: 'YAMUNA GREEN' },
      yellow: { bg: '#FFE7A5', accent: '#F9AB00', pop: '#FFD427', label: 'KUMBH YELLOW' },
      red:    { bg: '#F8D8D8', accent: '#EA4335', pop: '#FF7DAF', label: 'FORT RED' }
    };

    const state = { name: 'Your Name', role: 'Attendee', theme: 'blue' };
    const logo = new Image();
    let logoReady = false;
    logo.onload = () => { logoReady = true; drawBadge(); };
    logo.src = '/assets/brand/devfest-2026-no-date.png';

    const roundRect = (x, y, w, h, r) => {
      const rr = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.arcTo(x + w, y, x + w, y + h, rr);
      ctx.arcTo(x + w, y + h, x, y + h, rr);
      ctx.arcTo(x, y + h, x, y, rr);
      ctx.arcTo(x, y, x + w, y, rr);
      ctx.closePath();
    };

    const measure = (text, font) => {
      ctx.font = font;
      return ctx.measureText(text).width;
    };

    const fitFont = (text, maxWidth, start, min, weight, family = 'Figtree') => {
      let size = start;
      while (size > min) {
        const font = `${weight} ${size}px ${family}`;
        if (measure(text, font) <= maxWidth) return size;
        size -= 4;
      }
      return min;
    };

    const wrapName = (name, maxWidth, size) => {
      const font = `800 ${size}px Figtree`;
      ctx.font = font;
      if (ctx.measureText(name).width <= maxWidth) return [name];
      const words = name.split(/\s+/).filter(Boolean);
      if (words.length === 1) return [name];
      const lines = [];
      let current = '';
      words.forEach((word) => {
        const test = current ? current + ' ' + word : word;
        if (ctx.measureText(test).width <= maxWidth || !current) {
          current = test;
        } else {
          lines.push(current);
          current = word;
        }
      });
      if (current) lines.push(current);
      if (lines.length <= 2) return lines;
      return [lines.slice(0, lines.length - 1).join(' '), lines[lines.length - 1]];
    };

    const drawWaveSticker = (cx, cy, r, color) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = INK;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.lineCap = 'round';
      ctx.lineWidth = 4;
      [-13, 0, 13].forEach((oy) => {
        ctx.beginPath();
        for (let x = -r * 0.56; x <= r * 0.56; x += 2) {
          const y = oy + Math.sin((x / r) * Math.PI * 2.4) * 4;
          if (x === -r * 0.56) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      ctx.restore();
    };

    const drawBadge = () => {
      const t = themes[state.theme] || themes.blue;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = PAPER;
      ctx.fillRect(0, 0, W, H);

      // paper speckle
      ctx.save();
      let seed = 7;
      const rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
      ctx.fillStyle = 'rgba(30,30,30,.045)';
      for (let i = 0; i < 500; i++) {
        ctx.fillRect(rand() * W, rand() * H, 1.6, 1.6);
      }
      ctx.restore();

      // halftone top-right
      ctx.save();
      ctx.fillStyle = 'rgba(30,30,30,.18)';
      for (let y = 70; y < 250; y += 17) {
        for (let x = 690; x < 950; x += 17) {
          ctx.beginPath();
          ctx.arc(x, y, 1.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // outer border
      ctx.lineWidth = 7;
      ctx.strokeStyle = INK;
      roundRect(26, 26, W - 52, H - 52, 44);
      ctx.stroke();

      // corner brackets
      ctx.lineWidth = 12;
      ctx.strokeStyle = t.accent;
      const pad = 58, len = 54;
      [[pad, pad, 1, 1], [W - pad, pad, -1, 1], [pad, H - pad, 1, -1], [W - pad, H - pad, -1, -1]].forEach(([x, y, sx, sy]) => {
        ctx.beginPath();
        ctx.moveTo(x + sx * len, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + sy * len);
        ctx.stroke();
      });

      // side current bar
      ctx.fillStyle = t.accent;
      roundRect(44, 210, 14, 820, 7);
      ctx.fill();

      // Watermark
      ctx.save();
      ctx.translate(838, 520);
      ctx.rotate(-0.16);
      ctx.font = '800 120px "Figtree"';
      ctx.fillStyle = 'rgba(30,30,30,.06)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('SANGAM', 0, 0);
      ctx.restore();

      // header
      ctx.fillStyle = INK;
      ctx.textBaseline = 'alphabetic';
      ctx.font = '400 22px "DM Mono"';
      ctx.textAlign = 'left';
      ctx.fillText('DEVFEST · PRAYAGRAJ', 92, 104);
      ctx.textAlign = 'right';
      ctx.fillText('19 / 12 / 26', W - 92, 104);

      ctx.strokeStyle = 'rgba(30,30,30,.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(92, 128);
      ctx.lineTo(W - 92, 128);
      ctx.stroke();

      // official wordmark
      if (logoReady) {
        const lw = 520;
        const lh = lw * (logo.height / logo.width || 0.148);
        ctx.drawImage(logo, (W - lw) / 2, 158, lw, lh);
      } else {
        ctx.font = '800 92px Figtree';
        ctx.textAlign = 'center';
        ctx.fillStyle = INK;
        ctx.fillText('DevFest', W / 2, 250);
      }

      // Prayagraj pill
      const pillText = 'PRAYAGRAJ';
      const pillFont = '800 30px Figtree';
      const pillW = measure(pillText, pillFont) + 72;
      const pillX = (W - pillW) / 2;
      ctx.fillStyle = YELLOW;
      roundRect(pillX, 278, pillW, 58, 29);
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = INK;
      ctx.stroke();
      ctx.fillStyle = INK;
      ctx.font = pillFont;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(pillText, W / 2, 308);

      // label
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = 'rgba(30,30,30,.56)';
      ctx.font = '400 20px "DM Mono"';
      ctx.fillText('THIS BADGE BELONGS TO', W / 2, 425);

      // name
      const rawName = (state.name || '').trim() || 'Your Name';
      let fontSize = rawName.length > 17 ? 88 : 112;
      fontSize = fitFont(rawName, 760, fontSize, 56, 800);
      const lines = wrapName(rawName, 760, fontSize);
      if (lines.length > 1) fontSize = Math.min(fontSize, 84);
      ctx.fillStyle = INK;
      ctx.font = `800 ${fontSize}px Figtree`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const lineHeight = fontSize * 1.02;
      const startY = lines.length === 1 ? 535 : 520 - lineHeight / 2 + lineHeight / 2;
      lines.forEach((line, i) => {
        ctx.fillText(line, W / 2, startY + i * lineHeight);
      });

      // role pill
      const roleFont = '500 23px "DM Mono"';
      const roleText = state.role.toUpperCase();
      const roleW = measure(roleText, roleFont) + 74;
      const roleY = 655;
      ctx.fillStyle = t.bg;
      roundRect((W - roleW) / 2, roleY, roleW, 62, 31);
      ctx.fill();
      ctx.strokeStyle = INK;
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = INK;
      ctx.font = roleFont;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(roleText, W / 2, roleY + 32);

      // current label
      ctx.fillStyle = 'rgba(30,30,30,.5)';
      ctx.font = '400 18px "DM Mono"';
      ctx.fillText(`CURRENT // ${t.label}`, W / 2, 760);

      // river lines
      const rivers = [
        { color: '#4285F4', y: 840, amp: 18, phase: 0 },
        { color: '#34A853', y: 890, amp: 22, phase: 1.2 },
        { color: '#F9AB00', y: 940, amp: 16, phase: 2.4 },
        { color: '#EA4335', y: 978, amp: 12, phase: 3.2 }
      ];
      ctx.save();
      ctx.lineWidth = 9;
      ctx.lineCap = 'round';
      rivers.forEach((river) => {
        ctx.strokeStyle = river.color;
        ctx.beginPath();
        for (let x = 46; x <= W - 46; x += 10) {
          const y = river.y + Math.sin((x / W) * Math.PI * 3.2 + river.phase) * river.amp;
          if (x === 46) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      ctx.restore();

      // river sticker
      drawWaveSticker(848, 770, 44, YELLOW);

      // bottom rule
      ctx.strokeStyle = 'rgba(30,30,30,.35)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(92, 1028);
      ctx.lineTo(W - 92, 1028);
      ctx.stroke();

      // venue / date
      ctx.fillStyle = INK;
      ctx.font = '500 20px "DM Mono"';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText('NCZCC · CIVIL LINES, PRAYAGRAJ', 92, 1072);
      ctx.textAlign = 'right';
      ctx.fillText('2026', W - 92, 1072);

      // barcode
      ctx.save();
      ctx.fillStyle = INK;
      const code = rawName + state.role;
      let bx = 92;
      for (let i = 0; i < 34; i++) {
        const width = 2 + ((code.charCodeAt(i % code.length) || 3) % 4);
        ctx.fillRect(bx, 1100, width, 46);
        bx += width + 5;
        if (bx > 430) break;
      }
      ctx.restore();

      // footer
      ctx.fillStyle = 'rgba(30,30,30,.55)';
      ctx.font = '400 16px "DM Mono"';
      ctx.textAlign = 'right';
      ctx.fillText('WHERE IDEAS FIND THEIR CONFLUENCE.', W - 92, 1132);

      // bottom accent line
      ctx.fillStyle = t.accent;
      roundRect(92, 1180, W - 184, 8, 4);
      ctx.fill();
    };

    const updateAria = () => {
      canvas.setAttribute('aria-label', `DevFest Prayagraj 2026 badge for ${state.name}, ${state.role}, ${state.theme} theme`);
    };

    nameInput?.addEventListener('input', () => {
      state.name = nameInput.value.slice(0, 26);
      drawBadge();
      updateAria();
    });

    roleChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        state.role = chip.dataset.role;
        roleChips.forEach((c) => {
          const active = c === chip;
          c.classList.toggle('is-active', active);
          c.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        drawBadge();
        updateAria();
      });
    });

    swatches.forEach((swatch) => {
      swatch.addEventListener('click', () => {
        state.theme = swatch.dataset.theme;
        swatches.forEach((s) => {
          const active = s === swatch;
          s.classList.toggle('is-active', active);
          s.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        drawBadge();
        updateAria();
      });
    });

    const fileSlug = () => (state.name || 'badge').trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'badge';

    const getBlob = () => new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));

    downloadBtn?.addEventListener('click', async () => {
      try {
        const blob = await getBlob();
        if (!blob) throw new Error('No blob');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `devfest-prayagraj-26-${fileSlug()}.png`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 2000);
        toast('Badge downloaded. Bring it on 19 December.');
      } catch (err) {
        toast('Could not build the badge. Try again in a moment.');
      }
    });

    shareBtn?.addEventListener('click', async () => {
      const text = `I'm going to DevFest Prayagraj 2026 — 19 December at NCZCC, Prayagraj. Where ideas find their confluence.`;
      try {
        const blob = await getBlob();
        if (blob && navigator.canShare) {
          const file = new File([blob], `devfest-prayagraj-26-${fileSlug()}.png`, { type: 'image/png' });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: 'DevFest Prayagraj 2026', text });
            return;
          }
        }
        if (navigator.share) {
          await navigator.share({ title: 'DevFest Prayagraj 2026', text, url: location.href });
          return;
        }
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `devfest-prayagraj-26-${fileSlug()}.png`;
          document.body.appendChild(a);
          a.click();
          a.remove();
          window.setTimeout(() => URL.revokeObjectURL(url), 2000);
        }
        let copied = false;
        try {
          await navigator.clipboard.writeText(`${text} ${location.href}`);
          copied = true;
        } catch (e) { /* clipboard is optional */ }
        toast(copied ? 'Badge saved & caption copied — attach it to your post.' : 'Badge saved. Add your own caption.');
      } catch (err) {
        if (err && err.name === 'AbortError') return;
        toast('Sharing is unavailable — download the badge instead.');
      }
    });

    const bootBadge = async () => {
      try { await document.fonts.ready; } catch (e) { /* fonts API optional */ }
      drawBadge();
      updateAria();
    };
    bootBadge();
    window.setTimeout(bootBadge, 600);
  }

  /* ---------------------------------------------------------
     Toast
     --------------------------------------------------------- */
  let toastEl = null;
  let toastTimer = 0;
  function toast(message) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = message;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toastEl.classList.remove('is-visible'), 3800);
  }

  /* ---------------------------------------------------------
     Hero confluence canvas
     --------------------------------------------------------- */
  const heroCanvas = $('#confluenceCanvas');
  if (heroCanvas && !reduceMotion) {
    const hero = $('.hero');
    const hctx = heroCanvas.getContext('2d');
    let dpr = 1, w = 0, h = 0;
    let running = true;
    let visible = true;
    let pointerX = 0.5, pointerY = 0.5;
    let smoothX = 0.5, smoothY = 0.5;
    let t = 0;

    const streams = [
      { color: '66,133,244', alpha: 0.2, base: 0.2, amp: 0.055, speed: 0.7, width: 1.3 },
      { color: '52,168,83', alpha: 0.18, base: 0.34, amp: 0.07, speed: -0.55, width: 1.2 },
      { color: '249,171,0', alpha: 0.18, base: 0.48, amp: 0.06, speed: 0.85, width: 1.1 },
      { color: '234,67,53', alpha: 0.1, base: 0.62, amp: 0.045, speed: -0.45, width: 1 }
    ];

    const dots = [];
    const dotColors = ['66,133,244', '52,168,83', '249,171,0', '234,67,53'];
    for (let i = 0; i < 64; i++) {
      dots.push({
        p: Math.random(),
        speed: 0.00002 + Math.random() * 0.00005,
        layer: i % 4,
        radius: 1 + Math.random() * 2.2,
        offset: Math.random() * Math.PI * 2
      });
    }

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      heroCanvas.width = Math.round(w * dpr);
      heroCanvas.height = Math.round(h * dpr);
      hctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      if (!running) return;
      if (!visible) { requestAnimationFrame(draw); return; }
      t += 1;
      smoothX += (pointerX - smoothX) * 0.04;
      smoothY += (pointerY - smoothY) * 0.04;
      hctx.clearRect(0, 0, w, h);

      streams.forEach((s, idx) => {
        const midY = h * (s.base + (smoothY - 0.5) * 0.05);
        const amp = h * s.amp * (1 + Math.abs(smoothX - 0.5) * 0.5);
        hctx.beginPath();
        for (let x = -30; x <= w + 30; x += 14) {
          const nx = x / w;
          const y = midY
            + Math.sin(nx * 5.4 + t * 0.0035 * s.speed + idx * 1.7) * amp
            + Math.sin(nx * 13.2 - t * 0.005 * s.speed + idx) * amp * 0.34
            + (smoothY - 0.5) * Math.sin(nx * Math.PI) * 26;
          if (x === -30) hctx.moveTo(x, y); else hctx.lineTo(x, y);
        }
        hctx.strokeStyle = `rgba(${s.color},${s.alpha})`;
        hctx.lineWidth = s.width;
        hctx.stroke();
      });

      // drifting points along the currents
      dots.forEach((dot) => {
        dot.p += dot.speed * (1 + Math.abs(smoothX - 0.5));
        if (dot.p > 1.05) dot.p = -0.05;
        const s = streams[dot.layer];
        const x = dot.p * w;
        const midY = h * (s.base + (smoothY - 0.5) * 0.05);
        const amp = h * s.amp;
        const y = midY
          + Math.sin((x / w) * 5.4 + t * 0.0035 * s.speed + dot.layer * 1.7) * amp
          + Math.sin((x / w) * 13.2 - t * 0.005 * s.speed + dot.layer) * amp * 0.34
          + Math.sin(t * 0.01 + dot.offset) * 5;
        hctx.beginPath();
        hctx.arc(x, y, dot.radius, 0, Math.PI * 2);
        hctx.fillStyle = `rgba(${dotColors[dot.layer]},.28)`;
        hctx.fill();
      });

      requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', () => {
      resize();
    });
    window.addEventListener('pointermove', (e) => {
      pointerX = e.clientX / window.innerWidth;
      pointerY = e.clientY / window.innerHeight;
    }, { passive: true });
    document.addEventListener('visibilitychange', () => { running = !document.hidden; if (running) requestAnimationFrame(draw); });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => { visible = entry.isIntersecting; });
      }, { threshold: 0 }).observe(hero);
    }
  }

  /* ---------------------------------------------------------
     Small niceties
     --------------------------------------------------------- */
  // Mark hero poster as interactive for keyboard users
  const poster = $('#heroPoster');
  if (poster) {
    poster.setAttribute('tabindex', '0');
    poster.setAttribute('role', 'img');
    poster.setAttribute('aria-label', 'DevFest Prayagraj 2026 poster: 19 December 2026 at NCZCC Civil Lines, Prayagraj');
  }

  // Prevent placeholder links from jumping
  $$('a[href="#"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));


  /* ---------------------------------------------------------
     Footer Hero Spotlight & Photo Reveal
     --------------------------------------------------------- */
  const initFooterSpotlight = () => {
    document.querySelectorAll('.footer-hero-reveal__hint').forEach((el) => el.remove());
    const stage = document.querySelector('.footer-hero-reveal__stage');
    const mask = document.getElementById('footerMask');
    const maskText = document.getElementById('footerMaskText');
    const glow = document.getElementById('footerGlow');
    const card = document.getElementById('footerCard');
    const cardImg = document.getElementById('footerCardImg');
    const cardTag = document.getElementById('footerCardTag');
    const cardCaption = document.getElementById('footerCardCaption');
    if (!stage || !mask || !maskText) return;

    const moments = {
      devfest: {
        img: '/assets/gallery/devfest2024-auditorium-crowd.jpg',
        tag: 'DevFest Main Stage',
        caption: 'DevFest Prayagraj · 500+ Builders, Talks & Hands-on Labs'
      },
      prayagraj: {
        img: '/assets/gallery/sangam_boats.jpg',
        tag: 'Triveni Sangam',
        caption: 'Where the Ganga, the Yamuna and the Saraswati meet · DevFest at the Sangam'
      },
      year: {
        img: '/assets/gallery/khusro_bagh.jpg',
        tag: 'Prayagraj ’26',
        caption: 'DevFest 2026 · Celebrating Tech, Code & Heritage in the Sangam City'
      }
    };

    let isHovered = false;
    let mouseX = 0, mouseY = 0;
    let currentZone = 'prayagraj';
    let animId = null;

    const setZone = (zoneKey) => {
      if (!moments[zoneKey] || currentZone === zoneKey) return;
      currentZone = zoneKey;
      const data = moments[zoneKey];
      maskText.style.setProperty('--bg-img', `url('${data.img}')`);
      if (cardImg) cardImg.src = data.img;
      if (cardTag) cardTag.textContent = data.tag;
      if (cardCaption) cardCaption.textContent = data.caption;
    };

    // Ambient sweep when not hovered
    const ambientSweep = () => {
      if (!isHovered) {
        const time = Date.now() * 0.0012;
        const xPercent = 50 + Math.sin(time) * 36;
        const yPercent = 50 + Math.cos(time * 1.3) * 25;
        mask.style.setProperty('--spot-x', `${xPercent}%`);
        mask.style.setProperty('--spot-y', `${yPercent}%`);
        mask.style.setProperty('--spot-r', '240px');
      }
      animId = requestAnimationFrame(ambientSweep);
    };
    animId = requestAnimationFrame(ambientSweep);

    stage.addEventListener('mouseenter', () => {
      isHovered = true;
      if (glow) glow.style.opacity = '1';
      if (card) {
        card.style.opacity = '1';
        card.style.transform = 'scale(1) translateY(0)';
      }
    });

    stage.addEventListener('mouseleave', () => {
      isHovered = false;
      if (glow) glow.style.opacity = '0';
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9) translateY(10px)';
      }
    });

    stage.addEventListener('mousemove', (e) => {
      const rect = stage.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      mask.style.setProperty('--spot-x', `${mouseX}px`);
      mask.style.setProperty('--spot-y', `${mouseY}px`);
      mask.style.setProperty('--spot-r', '280px');

      if (glow) {
        glow.style.left = `${mouseX}px`;
        glow.style.top = `${mouseY}px`;
      }

      // Check which word is hovered or closest
      const wordUnder = e.target.closest('.f-word[data-zone]');
      if (wordUnder && wordUnder.dataset.zone) {
        setZone(wordUnder.dataset.zone);
      } else {
        const ratio = mouseX / rect.width;
        if (ratio < 0.38) setZone('devfest');
        else if (ratio < 0.78) setZone('prayagraj');
        else setZone('year');
      }

      if (card) {
        const cardX = Math.min(Math.max(mouseX - 115, 10), rect.width - 240);
        const cardY = Math.max(10, mouseY - 160);
        card.style.left = `${cardX}px`;
        card.style.top = `${cardY}px`;
      }
    });
  };

  initFooterSpotlight();

  /* ---------------------------------------------------------
     Accessible Tabs Controller (Keyboard navigation & ARIA)
     --------------------------------------------------------- */
  const initAccessibleTabs = () => {
    $$('.tabs').forEach((tabList) => {
      tabList.setAttribute('role', 'tablist');
      const tabs = $$('.tab', tabList);
      tabs.forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        const isActive = tab.classList.contains('is-active');
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        tab.setAttribute('tabindex', isActive ? '0' : '-1');

        tab.addEventListener('click', () => {
          tabs.forEach((t) => {
            const active = t === tab;
            t.classList.toggle('is-active', active);
            t.setAttribute('aria-selected', active ? 'true' : 'false');
            t.setAttribute('tabindex', active ? '0' : '-1');
          });

          // Filter team roster
          const teamContainer = $('#teamContainer');
          if (teamContainer) {
            const filter = tab.getAttribute('data-filter') || 'all';
            $$('.person', teamContainer).forEach((card) => {
              if (filter === 'all' || card.getAttribute('data-dept') === filter) {
                card.removeAttribute('data-hidden');
              } else {
                card.setAttribute('data-hidden', 'true');
              }
            });
          }

          // Filter agenda schedule
          const scheduleGrid = $('.schedule-grid, .programme-grid');
          if (scheduleGrid) {
            const filter = tab.getAttribute('data-track') || 'all';
            $$('.session-row, .programme-row, .schedule-card', scheduleGrid).forEach((row) => {
              if (filter === 'all' || row.getAttribute('data-track') === filter) {
                row.style.display = '';
              } else {
                row.style.display = 'none';
              }
            });
          }
        });

        // Arrow navigation
        tab.addEventListener('keydown', (e) => {
          let nextIndex = null;
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            nextIndex = (index + 1) % tabs.length;
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            nextIndex = (index - 1 + tabs.length) % tabs.length;
          } else if (e.key === 'Home') {
            nextIndex = 0;
          } else if (e.key === 'End') {
            nextIndex = tabs.length - 1;
          }

          if (nextIndex !== null) {
            e.preventDefault();
            tabs[nextIndex].focus();
            tabs[nextIndex].click();
          }
        });
      });
    });
  };

  initAccessibleTabs();


}
