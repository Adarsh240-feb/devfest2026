/** @type {import('next').NextConfig} */
const nextConfig = {
  // A stray package-lock.json in the home folder confuses root detection
  turbopack: { root: import.meta.dirname },

  // Keep old static-site URLs working (e.g. shared links to /agenda.html)
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/agenda.html', destination: '/agenda', permanent: true },
      { source: '/team.html', destination: '/team', permanent: true },
      { source: '/badge.html', destination: '/badge', permanent: true },
    ];
  },

  // Carried over from the old vercel.json
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
