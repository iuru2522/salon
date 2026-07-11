# Data Model: Luxury Nail Technician Landing Page

**Feature**: `001-nail-landing-page`  
**Date**: 2026-07-10

Static, typed content entities (no database). Contact inquiries are transient request payloads.

## Entity Relationship Overview

```text
StudioProfile
  ├── ServiceOffering[]
  ├── Differentiator[]
  ├── PortfolioItem[] ── tags: PortfolioCategory[]
  ├── Review[]
  ├── FaqItem[]
  ├── InstagramPost[]
  ├── TrustBadge[]
  └── SocialLink[]

ContactInquiry (request-only, not stored)
```

## Entities

### StudioProfile

| Field | Type | Rules |
|-------|------|--------|
| businessName | string | Required, display in header/footer |
| tagline | string | Optional short brand line |
| headline | string | Hero headline |
| subheadline | string | Hero supporting copy |
| aboutHeadline | string | About section title |
| aboutBody | string | Multi-paragraph or markdown-lite text |
| portraitImage | ImageRef | Required |
| heroImage | ImageRef | Required |
| addressLines | string[] | Required for contact + SEO |
| phone | string | E.164 or display format; required |
| email | string | Valid email; used as inquiry destination |
| hours | HoursBlock[] | At least one entry |
| mapEmbedUrl | string | HTTPS iframe src or empty → fallback UI |
| averageRating | number | Display value; default 4.9 |
| ratingScale | number | Default 5 |
| bookingPolicy | string | Must communicate appointment-only |

### HoursBlock

| Field | Type | Rules |
|-------|------|--------|
| label | string | e.g. "Mon–Fri" |
| value | string | e.g. "10:00–18:00" or "By appointment" |

### ImageRef

| Field | Type | Rules |
|-------|------|--------|
| src | string | Path under `/public` or remote URL allowed by Next config |
| alt | string | Required, meaningful alt text |
| width | number | Optional hint for layout |
| height | number | Optional hint for layout |

### ServiceOffering

| Field | Type | Rules |
|-------|------|--------|
| id | string | Stable slug, unique |
| name | string | Required |
| description | string | Short, 1–2 sentences |
| startingPrice | string | Display currency string, e.g. "From $45" |
| durationMinutes | number | Positive integer; UI may format as "45 min" |
| icon | string | Lucide icon name key |
| sortOrder | number | Ascending display order |

**Required seed set**: Classic Manicure, Gel Manicure, BIAB Overlay, Gel Extensions, Nail Art, Nail Repair, Pedicure, Removal.

### Differentiator

| Field | Type | Rules |
|-------|------|--------|
| id | string | Unique |
| title | string | Required |
| description | string | Optional short supporting line |
| icon | string | Lucide icon name key |

**Required seed set**: Premium Products, Sterilized Equipment, Private Studio, Personal Attention, Long-lasting Results, Flexible Scheduling, Friendly Service.

### PortfolioCategory

Enum / union: `all` | `french` | `gel` | `nail-art` | `short` | `long`

### PortfolioItem

| Field | Type | Rules |
|-------|------|--------|
| id | string | Unique |
| title | string | Optional accessible label |
| image | ImageRef | Required |
| categories | PortfolioCategory[] | Exclude `all`; at least one |
| sortOrder | number | Optional |

**Filter rule**: `all` shows every item; otherwise item included if `categories` intersects selected filter. Empty intersection → empty state.

### Review

| Field | Type | Rules |
|-------|------|--------|
| id | string | Unique |
| customerName | string | Required |
| photo | ImageRef | Required (may use placeholder avatar) |
| rating | number | Integer 1–5; UI shows five stars |
| body | string | Required testimonial text |
| sortOrder | number | Optional |

### FaqItem

| Field | Type | Rules |
|-------|------|--------|
| id | string | Unique |
| question | string | Required |
| answer | string | Required; appointment-only consistent |
| sortOrder | number | Optional |

**Required questions**:
1. How long does a manicure last?
2. Do you accept walk-ins?
3. What payment methods are accepted?
4. Can I bring inspiration photos?
5. What is your cancellation policy?

### InstagramPost

| Field | Type | Rules |
|-------|------|--------|
| id | string | Unique |
| image | ImageRef | Required |
| href | string | Optional deep link; default profile URL |

### TrustBadge

| Field | Type | Rules |
|-------|------|--------|
| id | string | Unique |
| label | string | e.g. "5-Star Rated" |
| icon | string | Optional |

**Required**: 5-Star Rated, Licensed Nail Technician, Clean & Sanitized Tools, Appointment Only.

### SocialLink

| Field | Type | Rules |
|-------|------|--------|
| network | `instagram` \| `facebook` | Required |
| url | string | HTTPS URL |
| label | string | Accessible name |

### ContactInquiry (transient)

| Field | Type | Validation |
|-------|------|------------|
| name | string | Required, 2–80 chars |
| email | string | Required, valid email |
| phone | string | Optional, 7–20 chars if present |
| message | string | Required, 10–2000 chars |
| preferredService | string | Optional service id/name |
| website | string | Honeypot; must be empty if present |

**States**: `idle` → `validating` → `submitting` → `success` | `error` (client UI). Server returns structured success/error; no long-term entity persistence in v1.

## Content Integrity Rules

- Prices and durations are display content, not transactional quotes.
- Portfolio and review media must include non-empty `alt` text.
- Walk-in FAQ answer must state walk-ins are not accepted.
- Privacy/Terms routes exist as separate pages linked from footer (simple static copy acceptable).
