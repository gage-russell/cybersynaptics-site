## ADDED Requirements

### Requirement: Contact page is accessible at /contact
The site SHALL include a contact page at `/contact` reachable from the global navigation and from CTA buttons throughout the site.

#### Scenario: Contact page is reachable from navigation
- **WHEN** any page is loaded
- **THEN** the global navigation includes a link to `/contact`

---

### Requirement: Contact form submits to Formspree
The contact page SHALL include an HTML form that submits to a Formspree endpoint. No server-side code is required.

#### Scenario: Visitor submits a valid contact request
- **WHEN** a visitor fills in all required fields and clicks "Send"
- **THEN** the form data is submitted to the Formspree endpoint via HTTP POST
- **THEN** the visitor is redirected to Formspree's thank-you page (or a custom thank-you URL if configured)

#### Scenario: Formspree endpoint placeholder is clearly marked
- **WHEN** a developer opens `src/pages/contact.astro`
- **THEN** they see a `<!-- TODO: replace FORMSPREE_ENDPOINT with real Formspree form ID -->` comment on the form `action` attribute

---

### Requirement: Contact form collects required information
The contact form SHALL collect enough information for the team to respond meaningfully to an inquiry.

Required fields:
- **Name** (text)
- **Email** (email)
- **Message** (textarea)

Optional fields:
- **Company** (text)
- **Service Interest** (select: Virtual CTO / Virtual CISO / Software Development / Other)

#### Scenario: Form enforces required fields
- **WHEN** a visitor attempts to submit the form without filling in Name, Email, or Message
- **THEN** the browser's native form validation prevents submission and highlights the missing field(s)

#### Scenario: Email field validates format
- **WHEN** a visitor enters a string that is not a valid email address in the Email field
- **THEN** the browser's native `type="email"` validation prevents submission
