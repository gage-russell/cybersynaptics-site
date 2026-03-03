## ADDED Requirements

### Requirement: Blog posts are authored as Markdown files in the repository
The blog SHALL use Astro Content Collections backed by `.md` or `.mdx` files in `src/content/blog/`. No CMS or external service is required to publish a post.

#### Scenario: New post is published by adding a file
- **WHEN** a `.md` file with valid frontmatter is added to `src/content/blog/` and pushed to `main`
- **THEN** the post appears on the blog index page and is accessible at `/blog/<slug>`

#### Scenario: Post with missing required frontmatter fails the build
- **WHEN** a `.md` file is added to `src/content/blog/` without a required frontmatter field (e.g., `title` or `pubDate`)
- **THEN** the Astro build fails with a descriptive validation error (Content Collections schema enforcement)

---

### Requirement: Blog post frontmatter schema is defined
Each blog post SHALL define a Content Collections schema that validates the following frontmatter fields:

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | Yes | Used in `<title>` and `<h1>` |
| `pubDate` | date | Yes | Used for sorting and display |
| `description` | string | Yes | Used in meta description and cards |
| `author` | string | No | Defaults to "Cybersynaptics" |
| `tags` | string[] | No | Optional topic tags |
| `draft` | boolean | No | If `true`, post is excluded from builds |

#### Scenario: Valid post renders correctly
- **WHEN** a post with all required fields is pushed
- **THEN** the post page renders with the title as `<h1>`, the `pubDate` formatted as a human-readable date, and the description in the `<meta name="description">` tag

#### Scenario: Draft posts are excluded from production
- **WHEN** a post has `draft: true` in its frontmatter
- **THEN** the post does NOT appear on the blog index or in the sitemap in a production build

---

### Requirement: Blog index page lists all published posts
The blog index page (`/blog`) SHALL display all published posts in reverse chronological order.

#### Scenario: Posts are sorted newest-first
- **WHEN** `/blog` is loaded
- **THEN** posts are displayed with the most recently published post first

#### Scenario: Each listing includes key metadata
- **WHEN** a post is shown on the blog index
- **THEN** the listing displays the post title, publication date, and description

---

### Requirement: Individual blog post pages are generated for each post
The site SHALL generate a static page at `/blog/<slug>` for each published post.

#### Scenario: Post page is accessible at its slug URL
- **WHEN** a visitor navigates to `/blog/<slug>`
- **THEN** the full post content is rendered with the post title as `<h1>`

#### Scenario: Post page links back to the blog index
- **WHEN** a visitor is on a post page
- **THEN** a "← Back to Blog" or equivalent link is present and navigates to `/blog`
