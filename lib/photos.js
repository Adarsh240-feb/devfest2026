/**
 * Prayagraj photo set, shared by the home intro collage (components/IntroCollage.jsx)
 * and the footer gallery (components/FooterGallery.jsx). Files live in
 * public/assets/collage/<src>.webp (600x800, or 640x640 when square).
 *
 * Intro layout fields:
 * x / y: card centre in % of the screen. w: card width in vw (capped by height).
 * r: resting tilt. spin: extra rotation while scrambling out.
 * mobile: position on phones, or null to hide the card there.
 * credit: photographer credit shown on the card (used with permission).
 * accent: smaller card layered on top of the rows, beside the title.
 */
export const PHOTOS = [
  // Top row (6)
  { src: 'sangam-sunset', caption: 'Sangam at sunset', deva: 'संगम', x: 8.5, y: 24, w: 18, r: -7, spin: -40, mobile: { x: 26, y: 21 } },
  { src: 'khusro-bagh', caption: 'Khusro Bagh', deva: 'ख़ुसरो बाग़', x: 25, y: 21, w: 17.5, r: 4, spin: 25, mobile: null },
  { src: 'new-yamuna-bridge', caption: 'New Yamuna Bridge', deva: 'नया यमुना पुल', x: 41.5, y: 19, w: 17, r: -3, spin: -18, mobile: { x: 74, y: 23 } },
  { src: 'all-saints-cathedral', caption: 'All Saints Cathedral', deva: 'पत्थर गिरजा', x: 58.5, y: 20, w: 17.5, r: 5, spin: 30, mobile: null },
  { src: 'devfest-venue', caption: 'DevFest venue', deva: 'देवफेस्ट', x: 75, y: 21, w: 17, r: -4, spin: -26, mobile: null },
  { src: 'shankar-viman-mandapam', caption: 'Shankar Viman Mandapam', deva: 'शंकर विमान मंडपम', x: 91.5, y: 25, w: 20, r: 6, spin: 45, square: true, mobile: null },
  // Bottom row (5)
  { src: 'university-tower', caption: 'Muir College', deva: 'म्योर कॉलेज', x: 10, y: 76, w: 19.5, r: 6, spin: -35, mobile: null },
  { src: 'hanuman-niketan', caption: 'Hanumat Niketan', deva: 'हनुमत निकेतन', x: 30, y: 78, w: 21, r: -5, spin: 28, square: true, mobile: { x: 26, y: 74 } },
  { src: 'devfest-community', caption: 'DevFest community', deva: 'हमारा समुदाय', x: 50, y: 78.5, w: 19, r: 3, spin: -22, mobile: { x: 74, y: 75 } },
  { src: 'riverside-chhatri', caption: 'Riverside chhatri', deva: 'घाट की छतरी', x: 70, y: 77, w: 19, r: -6, spin: 38, mobile: null },
  { src: 'anand-bhawan', caption: 'Anand Bhawan', deva: 'आनंद भवन', credit: '© Amit Pasricha', x: 90, y: 75, w: 21, r: 6, spin: -30, square: true, mobile: null },
  // Middle accents, layered on top beside the title (2)
  { src: 'google-office', caption: 'Google office', deva: 'गूगल दफ़्तर', x: 19, y: 57, w: 12, r: -10, spin: -50, accent: true, mobile: null },
  { src: 'gdg-on-stage', caption: 'GDG on stage', deva: 'जीडीजी मंच', x: 81, y: 57, w: 12, r: 9, spin: 50, accent: true, mobile: null },
];
