import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// TODO: update site to 'https://cybersynaptics.ai' and remove base when custom domain is configured
export default defineConfig({
  site: 'https://gage-russell.github.io',
  base: '/cybersynaptics-site',
  integrations: [
    sitemap(),
    mdx(),
  ],
  output: 'static',
});
