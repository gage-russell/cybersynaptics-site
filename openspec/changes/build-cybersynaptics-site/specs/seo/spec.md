## ADDED Requirements

### Requirement: Every page has a unique title and meta description
Each page SHALL set a unique, descriptive `<title>` tag and `<meta name="description">` tag passed through `BaseLayout.astro` props.

#### Scenario: Page title follows the standard pattern
- **WHEN** any page is loaded
- **THEN** the `<title>` tag follows the pattern: `<Page Name> | Cybersynaptics.ai`
- **THEN** the home page uses the pattern: `Cybersynaptics.ai | Virtual CTO, CISO & Software Consulting`

#### Scenario: Meta description is under 160 characters
- **WHEN** any page is built
- **THEN** the `<meta name="description">` content is between 50 and 160 characters

---

### Requirement: Open Graph and Twitter Card tags are present on all pages
Every page SHALL include Open Graph (`og:*`) and Twitter Card meta tags so that links shared on LinkedIn, Twitter/X, and other social platforms render a rich preview.

#### Scenario: Open Graph tags are present
- **WHEN** any page is loaded
- **THEN** the `<head>` includes `og:title`, `og:description`, `og:url`, and `og:type`

#### Scenario: Blog post pages include article-specific OG tags
- **WHEN** a blog post page is loaded
- **THEN** `og:type` is `article` and `og:title` / `og:description` reflect the post's frontmatter

---

### Requirement: XML sitemap is generated automatically
The site SHALL generate a `sitemap.xml` at the root of the deployed site using `@astrojs/sitemap`.

#### Scenario: Sitemap is present after build
- **WHEN** the site is built
- **THEN** `/sitemap-index.xml` (or `/sitemap.xml`) is present in the output and includes all public, non-draft pages

#### Scenario: Draft blog posts are excluded from sitemap
- **WHEN** a blog post has `draft: true`
- **THEN** its URL does NOT appear in the sitemap

---

### Requirement: robots.txt is present
The site SHALL include a `public/robots.txt` file.

#### Scenario: robots.txt allows all crawlers
- **WHEN** a crawler requests `/robots.txt`
- **THEN** the file contains `User-agent: *` with `Allow: /` and a reference to the sitemap URL

#### Scenario: Sitemap URL in robots.txt uses the correct domain
- **WHEN** a developer opens `public/robots.txt`
- **THEN** the `Sitemap:` line contains a `# TODO: update to https://cybersynaptics.ai/sitemap-index.xml when custom domain is live` comment

---

### Requirement: Canonical URLs prevent duplicate content
Every page SHALL include a `<link rel="canonical">` tag pointing to the page's canonical URL.

#### Scenario: Canonical tag is present on all pages
- **WHEN** any page is loaded
- **THEN** the `<head>` includes `<link rel="canonical" href="<full URL of this page>">`

#### Scenario: Canonical URL uses the correct base domain
- **WHEN** the site is on the `github.io` subdomain
- **THEN** canonical URLs reflect the `github.io` domain
- **THEN** a `// TODO: update site URL to https://cybersynaptics.ai in astro.config.mjs` comment is present

---

### Requirement: noindex is set while on github.io subdomain
To avoid indexing the `github.io` version before the custom domain is live, all pages SHALL include a `<meta name="robots" content="noindex">` tag until the domain migration TODO is resolved.

#### Scenario: noindex prevents premature indexing
- **WHEN** the site is deployed to `github.io`
- **THEN** all pages include `<meta name="robots" content="noindex, nofollow">`
- **THEN** a `// TODO: remove noindex meta tag after migrating to cybersynaptics.ai` comment is in `BaseLayout.astro`
