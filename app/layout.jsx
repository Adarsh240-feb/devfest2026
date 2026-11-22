import './globals.css';
import SiteScripts from '@/components/SiteScripts';
import MandalaBackdrop from '@/components/MandalaBackdrop';

const SITE_URL = 'https://devfest-prayagraj-2026.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'DevFest Prayagraj 2026',
  description: 'DevFest Prayagraj 2026, organised by GDG Prayagraj.',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/assets/favicon.svg', type: 'image/svg+xml' }],
    apple: '/assets/favicon.png',
  },
  openGraph: {
    type: 'website',
    images: [{ url: '/assets/img/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/img/og.png'],
  },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBF3E1' },
    { media: '(prefers-color-scheme: dark)', color: '#0E1729' },
  ],
};

// Runs before first paint so the saved / preferred theme never flashes.
const themeInit = `(function(){try{var s=localStorage.getItem('devfest-theme');var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preload" href="/assets/fonts/figtree-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/instrument-italic.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/tiro-dev.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/brand/devfest-2026-no-date.png" as="image" />
      </head>
      <body suppressHydrationWarning>
        <MandalaBackdrop />
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
