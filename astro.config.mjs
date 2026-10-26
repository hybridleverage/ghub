import { defineConfig } from 'astro/config';

// Plain static site: Vercel serves dist/ directly, no adapter needed.
export default defineConfig({
  site: 'https://www.brightviewagency.com',
  output: 'static',
});
