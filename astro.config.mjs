import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// TODO: remove noindex meta in BaseLayout.astro after DNS propagates and HTTPS is confirmed
export default defineConfig({
  site: 'https://cybersynaptics.ai',
  integrations: [
    sitemap(),
    mdx(),
  ],
  output: 'static',
});
