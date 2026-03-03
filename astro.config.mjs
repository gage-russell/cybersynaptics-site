import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// TODO: update site to 'https://cybersynaptics.ai' when custom domain is configured
// TODO: if deploying to a GitHub Pages project subfolder (e.g. cybersynaptics.github.io/cybersynaptics-site)
//       before the custom domain is live, add: base: '/cybersynaptics-site'
export default defineConfig({
  site: 'https://cybersynaptics.ai',
  integrations: [
    sitemap(),
    mdx(),
  ],
  output: 'static',
});
