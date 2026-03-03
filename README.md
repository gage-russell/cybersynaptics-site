# cybersynaptics-site

Static marketing site for [cybersynaptics.ai](https://cybersynaptics.ai), built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Prerequisites

- [Node.js](https://nodejs.org) v18+
- npm (comes with Node)

## Local development

```bash
# Install dependencies
npm install

# Start the dev server with hot reload
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Preview a production build

```bash
# Build the site
npm run build

# Serve the built output locally
npm run preview
```

Then open [http://localhost:4321](http://localhost:4321).

## Project structure

```
src/
  components/      # Reusable Astro components (Header, Footer, Logo, etc.)
  content/blog/    # Blog posts (Markdown / MDX)
  layouts/         # BaseLayout with SEO tags
  pages/           # File-based routes
  styles/          # Global CSS and design tokens
public/
  favicon.svg      # Logo mark — single source of truth for favicon + header logo
  CNAME            # Custom domain config for GitHub Pages
```

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys it to GitHub Pages.

## TODOs before going live

- Remove `<meta name="robots" content="noindex, nofollow">` in `src/layouts/BaseLayout.astro`
- Add the custom domain to `public/CNAME` and update `site` in `astro.config.mjs`
- Update the sitemap URL in `public/robots.txt`
- Enable GitHub Pages in repo **Settings → Pages → Source: GitHub Actions**
- Replace placeholder team photos when available
