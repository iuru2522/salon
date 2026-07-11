# Contract: SEO & Share Metadata

**Feature**: `001-nail-landing-page`  
**Surfaces**: Document head + JSON-LD on primary landing route

## Page metadata (required)

| Key | Requirement |
|-----|-------------|
| title | Include brand + primary service intent (e.g. luxury nails / nail technician); keep ~50–60 chars when practical |
| description | 140–160 chars summarizing appointment-only luxury nail care + CTA to inquire |
| canonical | Absolute site URL for homepage |
| robots | `index, follow` for marketing pages |
| theme-color | Align with brand cream/blush light token |
| icons | Favicon + apple touch icon present |

## Open Graph / Twitter

| Key | Requirement |
|-----|-------------|
| og:type | `website` |
| og:title | Matches or closely mirrors document title |
| og:description | Matches meta description intent |
| og:url | Canonical homepage URL |
| og:image | Branded preview image (≥1200×630 recommended) |
| twitter:card | `summary_large_image` |

## Keyword intent (copy + metadata, not stuffing)

Must be naturally representable in title/description/body:

- nail salon
- nail technician
- gel nails
- manicure
- pedicure
- nail art
- BIAB nails
- luxury nails

## JSON-LD LocalBusiness

Emit a single `<script type="application/ld+json">` block on the homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "NailSalon",
  "name": "{businessName}",
  "description": "{short description}",
  "url": "{canonical}",
  "telephone": "{phone}",
  "email": "{email}",
  "image": "{hero or logo absolute URL}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{street}",
    "addressLocality": "{city}",
    "addressRegion": "{region}",
    "postalCode": "{postal}",
    "addressCountry": "{country}"
  },
  "openingHoursSpecification": [],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "{n}"
  }
}
```

Notes:

- `@type` may be `NailSalon` or `BeautySalon`; both are acceptable LocalBusiness subtypes.
- `openingHoursSpecification` derived from `StudioProfile.hours` when parseable; otherwise omit or use textual `openingHours`.
- `aggregateRating` only if review count is honest for published testimonials (use curated count matching displayed reviews).

## Semantic HTML contract

- One `h1` (hero headline)
- Sections use `section` + accessible headings (`h2`)
- Header `banner`, nav `navigation`, footer `contentinfo`
- Main landmark wraps primary content
