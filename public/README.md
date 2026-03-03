# public/

Static assets served at the site root.

## Logo files

| File | Description |
|------|-------------|
| `favicon.svg` | Icon mark (36×36). Source of truth — inlined by `LogoMark.astro` for both the browser favicon and the header logo. |
| `cybersynaptics-linkedin.png` | 800×800 PNG of the icon mark. For LinkedIn profile picture and other square placements. |
| `logo-banner.svg` | Horizontal lockup: icon mark + `cybersynaptics.ai` wordmark (1200×300). For banners, cover images, email headers, etc. |
| `logo-banner.png` | 2400×600 PNG of the banner (rendered at 2× density for retina). |

## Regenerating the PNGs

Both PNGs are rendered from their same-named SVGs using [sharp](https://sharp.pixelplumbing.com/):

```js
const sharp = require('sharp');
const fs    = require('fs');

// Icon mark — 800×800
sharp(fs.readFileSync('public/favicon.svg'))
  .resize(800, 800)
  .png()
  .toFile('public/cybersynaptics-linkedin.png');

// Banner — 2× density for retina (produces 2400×600)
sharp(fs.readFileSync('public/logo-banner.svg'), { density: 144 })
  .png()
  .toFile('public/logo-banner.png');
```

> **Note:** The LinkedIn PNG is rendered from `favicon.svg` at 800×800.  
> The banner PNG uses `density: 144` (2× the default 72 dpi) so the output is 2400×600.
