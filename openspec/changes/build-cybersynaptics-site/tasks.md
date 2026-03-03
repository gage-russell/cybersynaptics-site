## 1. Project Initialization

- [x] 1.1 Initialize Astro project with `npm create astro@latest` (strict TypeScript, empty template)
- [x] 1.2 Install dependencies: `@astrojs/sitemap`, `@astrojs/mdx`
- [x] 1.3 Configure `astro.config.mjs`: set `output: 'static'`, `site` URL (with TODO comment for cybersynaptics.ai), add sitemap and mdx integrations
- [x] 1.4 Create `public/CNAME` with TODO comment for custom domain
- [x] 1.5 Create `public/robots.txt` with `Allow: /` and sitemap reference (with TODO comment for custom domain URL)
- [x] 1.6 Create `.github/workflows/deploy.yml` GitHub Actions workflow targeting `actions/deploy-pages`

## 2. Design System

- [x] 2.1 Create `src/styles/global.css` with CSS custom property design tokens (colors, typography, spacing)
- [x] 2.2 Import global CSS in `BaseLayout.astro`
- [x] 2.3 Define base resets and typography styles (body, headings, links, code blocks)

## 3. Core Layout & Components

- [x] 3.1 Create `src/components/Logo.astro` — placeholder SVG geometric mark + "cybersynaptics.ai" wordmark
- [x] 3.2 Create `src/components/layout/Header.astro` — logo + desktop nav links + mobile hamburger toggle
- [x] 3.3 Create `src/components/layout/Footer.astro` — copyright, nav links, social links placeholder
- [x] 3.4 Create `src/layouts/BaseLayout.astro` — accepts `title`, `description`, `canonicalURL` props; renders `<head>` SEO tags, Header, slot, Footer
- [x] 3.5 Add `noindex` meta tag to `BaseLayout.astro` with TODO comment for removal after domain migration
- [x] 3.6 Create `src/components/ui/Button.astro` — primary and secondary button variants
- [x] 3.7 Create `src/components/ui/ServiceCard.astro` — card component for service summaries on the home page

## 4. Marketing Pages

- [x] 4.1 Create `src/pages/index.astro` — hero section (headline, sub-headline, CTA), services overview (3 cards), closing CTA block
- [x] 4.2 Create `src/pages/services/index.astro` — services listing page with links to each service
- [x] 4.3 Create `src/pages/services/virtual-cto.astro` — dedicated Virtual CTO service page with unique content and CTA (e.g., link to LinkedIn or a mailto)
- [x] 4.4 Create `src/pages/services/virtual-ciso.astro` — dedicated Virtual CISO service page with unique content and CTA
- [x] 4.5 Create `src/pages/services/software-development.astro` — dedicated Software Development page with unique content and CTA
- [x] 4.6 Create `src/pages/about.astro` — company mission statement and team member profiles (2+ members)

## 5. Blog

- [x] 5.1 Define Content Collections schema in `src/content/config.ts` with required fields: `title`, `pubDate`, `description`; optional: `author`, `tags`, `draft`
- [x] 5.2 Create `src/pages/blog/index.astro` — fetches all non-draft posts sorted newest-first, renders `BlogCard` for each
- [x] 5.3 Create `src/components/ui/BlogCard.astro` — displays post title, date, and description for the blog index
- [x] 5.4 Create `src/pages/blog/[slug].astro` — dynamic route rendering individual post content with back-link to `/blog`
- [x] 5.5 Add a sample/placeholder blog post in `src/content/blog/` to verify the pipeline works end-to-end

## 6. SEO

- [x] 6.1 Wire `@astrojs/sitemap` in `astro.config.mjs` so `sitemap-index.xml` is generated on build
- [x] 6.2 Add per-page `<title>` in `<Page Name> | Cybersynaptics.ai` format via `BaseLayout.astro` `title` prop
- [x] 6.3 Add `<meta name="description">` via `BaseLayout.astro` `description` prop (validate all pages have unique descriptions ≤160 chars)
- [x] 6.4 Add Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`) to `BaseLayout.astro`
- [x] 6.5 Add Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`) to `BaseLayout.astro`
- [x] 6.6 Add `<link rel="canonical">` to `BaseLayout.astro` using the `canonicalURL` prop
- [x] 6.7 Ensure blog post pages set `og:type = article` and pass post frontmatter to layout

## 7. Verification & Polish

- [x] 7.1 Run `npm run build` and confirm `dist/` is clean with no broken links or missing assets
- [ ] 7.2 Manually verify the site renders correctly on mobile (320px) and desktop (1280px) viewport widths
- [ ] 7.3 Run a Lighthouse audit on the built site and confirm Performance ≥ 90, SEO = 100
- [x] 7.4 Confirm all `// TODO: custom domain` and `// TODO: cybersynaptics.ai` markers are present and searchable
- [x] 7.5 Confirm `noindex` meta tag is present in the deployed page `<head>`
- [ ] 7.6 Enable GitHub Pages in repo settings (Settings → Pages → Source: GitHub Actions)
