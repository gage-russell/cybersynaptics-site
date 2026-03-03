## Why

Cybersynaptics.ai needs a public-facing website to establish credibility and drive business for its software consulting services (Virtual CTO, Virtual CISO, and contract development). Currently there is no site — clients found through LinkedIn have nowhere to land that signals professionalism and expertise.

## What Changes

- New Astro static site built and deployed to GitHub Pages
- Four capability areas: site foundation, marketing pages, blog, and SEO
- Placeholder logo (inline SVG) until a real one is generated
- GitHub Pages deployment using `github.io` subdomain initially; custom domain (`cybersynaptics.ai`) wired in via CNAME when ready
- Tech-forward visual identity: dark background, electric accent colors, geometric/mono typography
- Simple blog powered by Astro Content Collections (no CMS)
- Contact page / form deferred to a future change

## Capabilities

### New Capabilities

- `site-foundation`: Astro project setup, GitHub Actions deploy to GitHub Pages, base layout, global navigation, branding/design tokens, and placeholder logo
- `marketing-pages`: Home page (hero + services overview + CTA), dedicated service pages (`/services/virtual-cto`, `/services/virtual-ciso`, `/services/software-development`), and About page for the team
- `blog`: Simple blog using Astro Content Collections; Markdown/MDX posts, blog index page, individual post pages
- `seo`: Site-wide SEO infrastructure — per-page meta tags, Open Graph, Twitter Card, XML sitemap, robots.txt, and canonical URLs

> **Future work**: `contact` — contact page with Formspree-backed form. Deferred from this change.

### Modified Capabilities

<!-- None — this is a greenfield site -->

## Impact

- **New repo content**: All site source code lives in this repository
- **Dependencies introduced**: Astro, `@astrojs/sitemap`, `@astrojs/mdx`
- **GitHub Pages**: Requires enabling Pages in repo settings and a GitHub Actions workflow; CNAME file in `public/` needs updating when custom domain is ready
- **No breaking changes**: Greenfield project
