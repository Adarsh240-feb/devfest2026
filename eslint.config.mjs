import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      'no-unused-vars': ['warn', { args: 'after-used', ignoreRestSiblings: true }],
      // Pages link with plain <a> on purpose: lib/site.js boots once per full
      // page load (components/SiteScripts.jsx), which client-side <Link>
      // navigation would skip.
      '@next/next/no-html-link-for-pages': 'off',
      // Images are small, pre-optimised WebP/PNG files served as-is. Moving to
      // next/image is a possible later optimisation, not a correctness issue.
      '@next/next/no-img-element': 'off',
    },
  },
  { ignores: ['.next/**', 'node_modules/**', 'public/**'] },
];

export default eslintConfig;
