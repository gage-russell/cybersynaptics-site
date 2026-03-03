## Context

Cybersynaptics.ai is a greenfield software consulting company website. The site must:
- Establish credibility for a small (2+) person team offering Virtual CTO, Virtual CISO, and contract development services
- Serve as a credibility signal for LinkedIn-referred prospects initially, then evolve into an inbound SEO channel
- Be hosted on GitHub Pages (static files only — no server runtime)
- Use the `github.io` subdomain now; migrate to `cybersynaptics.ai` when DNS is ready
- Project a tech-forward aesthetic (dark, electric, geometric) consistent with the `.ai` brand

No existing codebase. No CMS. No design system. Starting from zero.

## Goals / Non-Goals

**Goals:**
- Ship a fast, SEO-optimized static site using Astro
- Individual service pages that can rank independently in search
- Simple blog backed by Markdown files in the repo (no CMS)
- GitHub Actions CI/CD: push to `main` → deploy to Pages automatically
- Placeholder logo/branding that doesn't embarrass — easy to swap later
- Clear `// TODO: custom domain` markers everywhere the `github.io` URL is hardcoded

**Non-Goals:**
- CMS or admin UI
- User accounts or authentication
- Dynamic server-side functionality
- i18n / multi-language support (for now)
- A/B testing or analytics beyond basic (can add later)
- Full custom logo/brand system (placeholder only)

## Decisions

### 1. Astro over Next.js / Gatsby / plain HTML

**Choice:** Astro with `output: 'static'`

**Rationale:**
- Zero JS by default → best Core Web Vitals baseline, which directly feeds SEO
- Islands architecture means we can sprinkle in interactivity (e.g., mobile nav, contact form UX) without bloating every page
- Content Collections give us type-safe Markdown/MDX blog posts without a CMS
- First-class `@astrojs/sitemap` integration — critical for SEO
- Builds to pure static files → GitHub Pages compatible with no adapter needed

**Alternatives considered:**
- Next.js (App Router): Overkill for a static site; SSR features wasted; heavier bundle
- Gatsby: Declining ecosystem; GraphQL data layer is unnecessary complexity here
- Plain HTML/CSS: No component reuse, no Content Collections, more maintenance burden

---

### 2. GitHub Pages + GitHub Actions for deployment

**Choice:** Deploy via `github.io` subdomain using the official `actions/deploy-pages` action

**Rationale:**
- Zero hosting cost
- Native HTTPS via GitHub's Let's Encrypt integration
- Custom domain migration is a two-step operation (CNAME file + DNS record) when ready
- CI/CD is a single workflow file — simple, auditable, no third-party services

**Custom domain migration path:**
```
# TODO: custom domain
1. Update public/CNAME → "cybersynaptics.ai"
2. Add A records at registrar pointing to GitHub Pages IPs:
   185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
3. Enable "Enforce HTTPS" in repo Settings → Pages
```

---

### 3. Contact page deferred to future change

A contact form (Formspree-backed) was considered for this change but deferred. When the contact capability is built, the leading option is Formspree free tier (HTML form POST, no JS required) — see the archived `contact` spec for details.

---

### 4. Design system: CSS custom properties + no UI framework

**Choice:** Hand-rolled design tokens via CSS custom properties; no Tailwind, no component library

**Rationale:**
- A consulting site has a small component surface — nav, hero, cards, form, blog post. Not worth a full CSS framework.
- Tailwind adds build complexity and the utility-class style fights the "designed" aesthetic we want
- Custom properties give full control over the dark/electric aesthetic and are trivially swappable when the real brand lands
- Less to rip out when a designer produces final specs

**Planned design tokens:**
```css
--color-bg:        #0a0a0f     /* near-black */
--color-surface:   #13131a     /* card surfaces */
--color-border:    #1e1e2e     /* subtle borders */
--color-accent:    #6e40c9     /* electric purple */
--color-accent-alt:#00d4ff     /* electric cyan */
--color-text:      #e2e8f0     /* primary text */
--color-text-muted:#94a3b8     /* secondary text */
--font-sans:       'Inter', system-ui, sans-serif
--font-mono:       'JetBrains Mono', monospace
```

---

### 5. Placeholder logo strategy

**Choice:** Inline SVG geometric mark (hexagon with "CS" letterform) + wordmark text

**Rationale:**
- Looks intentional, not like a missing asset
- Pure SVG — no external image request, no broken img tag if asset moves
- Trivially swapped: replace one component file when real logo arrives

---

### 6. Project structure

```
src/
  components/
    layout/       ← BaseLayout.astro, Header.astro, Footer.astro
    ui/           ← Button.astro, ServiceCard.astro, BlogCard.astro
    Logo.astro    ← Placeholder SVG logo component
  content/
    blog/         ← *.md / *.mdx posts (Astro Content Collections)
  pages/
    index.astro
    about.astro
    services/
      index.astro
      virtual-cto.astro
      virtual-ciso.astro
      software-development.astro
    blog/
      index.astro
      [slug].astro
  styles/
    global.css    ← CSS custom properties + resets
public/
  CNAME           ← TODO: set to cybersynaptics.ai (currently empty or gh-pages URL)
  robots.txt
  favicon.svg
.github/
  workflows/
    deploy.yml    ← GitHub Actions Pages deployment
astro.config.mjs
```

## Risks / Trade-offs

| Risk | Mitigation |
|------|-----------|
| GitHub Pages outage or rate limit | Low probability; acceptable for a marketing site. Can migrate to Cloudflare Pages (same static output) with minimal effort |
| Placeholder brand looks unpolished to high-value prospects | Keep the placeholder minimal and typographic — less embarrassing than a mismatched icon. Prioritize real logo early |
| `github.io` URL leaks into indexed pages before custom domain is ready | Add `<meta name="robots" content="noindex">` to all pages until custom domain is live. Remove before real launch. |
| Astro breaking changes in minor versions | Pin Astro version in `package.json`, update deliberately |

## Open Questions

1. **Analytics**: Do we want to add analytics (Plausible, Fathom, or GA4) from day one? If so, which — privacy-focused (Plausible/Fathom) or Google (free but feeds the algorithm)? For SEO on a new domain, Google Search Console (free, no tracking) is a must regardless.
2. **`noindex` while on `github.io`**: Confirm we want to suppress indexing until `cybersynaptics.ai` is live, to avoid duplicate content issues.
3. **Blog author metadata**: Single author (one team member) or per-post attribution?
