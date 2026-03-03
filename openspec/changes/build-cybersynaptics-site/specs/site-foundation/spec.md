## ADDED Requirements

### Requirement: Astro project is configured for static output
The site SHALL be built with Astro configured to produce a fully static output (`output: 'static'`), suitable for GitHub Pages hosting with no server runtime.

#### Scenario: Build produces static files
- **WHEN** `npm run build` is executed
- **THEN** a `dist/` directory is produced containing only static HTML, CSS, JS, and asset files with no server-side runtime dependencies

#### Scenario: Base path is set for GitHub Pages subdomain
- **WHEN** the site is built
- **THEN** all internal links and asset paths are correct for the `github.io` subdomain deployment
- **THEN** a `// TODO: remove base path when custom domain cybersynaptics.ai is configured` comment exists in `astro.config.mjs`

---

### Requirement: GitHub Actions deploys on push to main
The repository SHALL include a GitHub Actions workflow that automatically builds and deploys the site to GitHub Pages on every push to `main`.

#### Scenario: Successful deploy on merge
- **WHEN** a commit is pushed to the `main` branch
- **THEN** the GitHub Actions workflow triggers, builds the Astro site, and deploys the output to GitHub Pages
- **THEN** the deployed site is accessible at the `github.io` URL within 2 minutes

#### Scenario: Failed build blocks deploy
- **WHEN** `npm run build` fails during the workflow
- **THEN** no deployment occurs and the workflow reports a failure status

---

### Requirement: Base layout wraps all pages
Every page SHALL use a shared `BaseLayout.astro` component that renders the `<head>`, global navigation, page content slot, and footer.

#### Scenario: Consistent chrome across pages
- **WHEN** any page on the site is loaded
- **THEN** the page displays the global navigation header and footer
- **THEN** the page `<title>` and meta description are set per-page via props

---

### Requirement: Global navigation is responsive
The site header SHALL include the logo and navigation links, and SHALL be usable on both desktop and mobile screen sizes.

#### Scenario: Desktop navigation is visible
- **WHEN** the viewport width is 768px or greater
- **THEN** all navigation links (Home, Services, About, Blog, Contact) are visible in the header

#### Scenario: Mobile navigation uses a toggle
- **WHEN** the viewport width is less than 768px
- **THEN** a hamburger/menu toggle button is visible
- **WHEN** the user taps the toggle
- **THEN** the navigation links expand into view

---

### Requirement: Placeholder logo renders without a real logo file
The site SHALL display a placeholder SVG logo (`Logo.astro` component) until a real brand asset is available.

#### Scenario: Logo appears in the header
- **WHEN** any page is loaded
- **THEN** the placeholder logo SVG is rendered in the header alongside the wordmark "cybersynaptics.ai"

#### Scenario: Logo is swappable
- **WHEN** a real logo SVG file is provided
- **THEN** replacing the contents of `Logo.astro` is sufficient to update the logo site-wide with no other code changes

---

### Requirement: CNAME file is present with a TODO comment
The `public/CNAME` file SHALL exist in the repository so GitHub Pages can be configured. It SHALL contain a comment indicating the TODO for the custom domain.

#### Scenario: CNAME file exists in build output
- **WHEN** the site is built
- **THEN** a `CNAME` file is present in the `dist/` directory

#### Scenario: TODO is clearly marked
- **WHEN** a developer opens `public/CNAME`
- **THEN** they see a comment: `# TODO: set this to cybersynaptics.ai when DNS is configured`

---

### Requirement: Global CSS design tokens are defined
The site SHALL define its visual design tokens (colors, typography, spacing) as CSS custom properties in a global stylesheet.

#### Scenario: Dark theme is applied globally
- **WHEN** any page is loaded
- **THEN** the page background uses the near-black token (`--color-bg: #0a0a0f`) and primary text uses the light token (`--color-text: #e2e8f0`)

#### Scenario: Accent colors are available site-wide
- **WHEN** any component references `--color-accent` or `--color-accent-alt`
- **THEN** the computed values resolve to the electric purple and electric cyan tokens respectively
