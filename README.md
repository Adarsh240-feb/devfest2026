# DevFest Prayagraj 2026

> **Where Ideas Find Their Confluence**  
> 19 December 2026 • North Central Zone Cultural Centre (NCZCC), Civil Lines, Prayagraj  
> Organised by **Google Developer Groups (GDG) Prayagraj**  
> 🌐 **Live Website**: [https://devfest-prayagraj-2026.vercel.app](https://devfest-prayagraj-2026.vercel.app)

---

## 🌟 About the Event

DevFest Prayagraj 2026 brings together developers, students, researchers, and tech leaders from across Northern India to the historic Sangam city. Building on the success of 500+ attendees in previous editions, this year's conference spotlights:

- **Agentic AI & Machine Learning**: Gemini 2.0, autonomous agents, and model evaluations
- **Google Cloud & Scalable Systems**: Cloud Run, modern architecture, and Firebase tooling
- **Android & Modern Client Tech**: Jetpack Compose, Kotlin, and on-device machine learning
- **Web & Open Ecosystem**: Progressive Web Apps, creative coding, and modern web standards

---

## 🧭 Page Architecture & Features

The website is a Next.js (App Router) app with focused, statically prerendered pages:

1. **Main Home (`/` · `app/page.jsx`)**
   - Hero fold with live canvas wave animation, countdown timer, and theme pillars (Build, Belong, Beyond).
   - Conference tracks overview, official partner lineup, schematic NCZCC venue map, and 7 grounded FAQs.

2. **Agenda & Speakers (`/agenda` · `app/agenda/page.jsx`)**
   - Detailed conference timeline from 09:00 to 17:30 IST.
   - Interactive track tabs (*All*, *Main stage*, *Workshops*, *Breakouts*) and confirmed Google Developer Expert (GDE) speaker profiles.

3. **The Crew (`/team` · `app/team/page.jsx`)**
   - Verified 42-member GDG Prayagraj organizing body and crew.
   - Instant department filter tabs (*Tech Team*, *Design & Media*, *Logistics & Management*, *Social Media & PR*, *Hosting*, *Photography*).
   - Optimized high-resolution portrait avatars with Google color borders and hover animations.

4. **Badge Studio (`/badge` · `app/badge/page.jsx`)**
   - Interactive HTML5 canvas badge generator.
   - Real-time attendee customization: name input, 6 role chips, 4 color current swatches, and high-res PNG download & Web Share API integration.

5. **Interactive Footer Spotlight**
   - Giant typographic reveal (`DevFest Prayagraj '26`) with dynamic mouse-tracked radial mask.
   - Background image clipping (`background-clip: text`) revealing authentic Sangam Ghat boats, Khusro Bagh heritage architecture, and conference keynote moments.
   - Floating interactive preview card providing context on word hover.

---

## 🚀 Repository Structure

```
.
├── app/                             # Next.js App Router
│   ├── layout.jsx                   # <html>/<head>, theme bootstrap, font preloads, shared metadata
│   ├── globals.css                  # Design tokens, layout grids, and animations (shared by all pages)
│   ├── page.jsx                     # Home page (with JSON-LD Event schema)
│   ├── agenda/                      # /agenda  — page.jsx + agenda.css
│   ├── team/                        # /team    — page.jsx + team.css
│   ├── badge/                       # /badge   — page.jsx + badge.css
│   └── not-found.jsx                # 404 page (+ not-found.css)
├── components/                      # Shared UI: SiteHeader, MobileMenu, SiteFooter, SvgSprite, ...
│   └── SiteScripts.jsx              # Client component that boots lib/site.js after hydration
├── lib/
│   └── site.js                      # Vanilla JS interactions (preloader, badge canvas, spotlight, tabs)
├── public/                          # Served as-is from the site root
│   ├── assets/                      # brand/, fonts/, gallery/, img/, team/, tracks/
│   ├── manifest.json, robots.txt, sitemap.xml
├── next.config.mjs                  # Redirects for old *.html URLs + security/cache headers
├── vibe_images/                     # Landmark artwork references
└── README.md
```

---

## 🛠️ Tech Stack & Engineering Standards

- **Next.js 16 + React 19**: App Router, every page statically prerendered; interactions are plain JavaScript in `lib/site.js`.
- **Modern CSS3 Architecture**: Responsive clamps, CSS Grid, Flexbox, custom design properties, and text masking.
- **Accessibility & SEO**: Semantic HTML5 elements, `aria-*` state management, JSON-LD Event metadata, and smooth keyboard navigation.
- **Asset Optimization**: Raw multi-megabyte imagery compressed to lightweight web-ready assets, reducing bundle weight by over 90%.

---

## 💻 Local Development

Requires Node.js 20.9+.

```bash
git clone https://github.com/Adarsh240-feb/devfest2026.git
cd devfest2026
npm install
npm run dev        # http://localhost:3000
```

Production build: `npm run build && npm start`. On Vercel, the framework is auto-detected as Next.js.

---

## 🎨 Official Brand Palette

- **Google Blue**: `#4285F4`
- **Google Red**: `#EA4335`
- **Google Yellow**: `#FBBC04`
- **Google Green**: `#34A853`
- **Deep Ink**: `#1E1E1E`
- **Warm Paper Base**: `#F4F1E9`

---

## 👥 Lead Organizers & Engineering

- **Ankit Kumar Verma** (Organizer, GDG Prayagraj)
- **Hridyesh Gupta** (Co-organizer, GDG Prayagraj)
- **Gautam Kumar Maurya** ([@gkm563](https://github.com/gkm563))
- **Adarsh Kesharwani** ([@Adarsh240-feb](https://github.com/Adarsh240-feb))
- Supported by the 40+ member volunteer crew of GDG & WTM Prayagraj.
