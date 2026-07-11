# Quickstart: Luxury Nail Technician Landing Page

**Feature**: `001-nail-landing-page`  
**Purpose**: Validate the planned experience end-to-end after implementation

## Prerequisites

- Node.js 20+
- npm (or pnpm/yarn)
- Modern browser
- (Optional) Resend API key for real email delivery

## Setup

```bash
# From repository root after the Next.js app is scaffolded
npm install
cp .env.example .env.local
```

Suggested `.env.local` keys (see research R5):

```env
CONTACT_TO_EMAIL=you@example.com
RESEND_API_KEY=re_xxx          # optional in local dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Without `RESEND_API_KEY`, valid contact posts should still return success in development (logged only).

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Manual validation scenarios

### V1 — First impression (P1)

1. Load homepage on a phone-width viewport and desktop.
2. Confirm hero headline, subheadline, “View Portfolio” CTA, and four trust badges.
3. Scroll through About, Services, Why Choose, Pricing — content matches [data-model.md](./data-model.md) seed expectations.
4. **Pass**: Business type and appointment-only positioning are obvious within seconds.

### V2 — Portfolio & social proof (P2)

1. Go to `#portfolio`; click each filter; confirm gallery updates.
2. Choose a filter with no items (if seeded) → empty state + return to All.
3. Browse `#reviews` carousel; confirm 4.9/5 average and star display.
4. Confirm `#instagram` grid + Follow button opens Instagram (or placeholder URL).
5. **Pass**: Filters and testimonials usable without contacting.

### V3 — FAQ & contact (P3)

1. Expand all FAQ items; walk-ins answer says not accepted.
2. Submit contact form empty → accessible field errors ([contact-api.md](./contracts/contact-api.md)).
3. Submit invalid email → email error.
4. Submit valid payload → success message; check network `POST /api/contact` → `ok: true`.
5. Confirm address, phone, hours, map/fallback, social icons visible.
6. **Pass**: Inquiry path works with validation.

### V4 — Navigation, theme, a11y (P4)

1. Use sticky header links; smooth scroll to each [section id](./contracts/ui-sections.md).
2. Toggle dark mode; verify contrast/readability.
3. Keyboard-only: tab through nav, filters, accordion, carousel, form.
4. Enable OS “reduce motion”; confirm page remains usable with minimal animation.
5. **Pass**: No keyboard traps; focus visible; motion not required for meaning.

### V5 — SEO smoke (SC-008)

1. View page source or Next metadata: title, description present.
2. Confirm JSON-LD LocalBusiness/NailSalon block fields match studio content ([seo-metadata.md](./contracts/seo-metadata.md)).
3. Confirm favicon loads; OG tags present.
4. **Pass**: Preview/SEO reviewer can identify business category and contact path.

## Automated checks (once wired)

```bash
npm run test          # unit: filter helper + zod schema
npm run test:e2e      # Playwright journeys V1–V4 critical paths
npm run lint
npm run build
```

## Expected outcomes

| Check | Expected |
|-------|----------|
| `npm run build` | Succeeds with no type errors |
| Homepage Lighthouse-ish feel | Fast first content; lazy images below fold |
| Contact without API key (dev) | UI success path still completable |
| Privacy / Terms links | Resolve to simple pages |

## Related artifacts

- [plan.md](./plan.md)
- [research.md](./research.md)
- [data-model.md](./data-model.md)
- [contracts/](./contracts/)
