# Research: Luxury Nail Technician Landing Page

**Feature**: `001-nail-landing-page`  
**Date**: 2026-07-10

## R1 — Application framework

**Decision**: Next.js 15 App Router with React and TypeScript

**Rationale**: Matches the product brief; excellent SEO (metadata API, OG images, JSON-LD in layout), image optimization, Route Handlers for contact, and strong Vercel/static-friendly deployment for a marketing site.

**Alternatives considered**:
- Vite + React SPA — weaker default SEO/SSR story for LocalBusiness landing pages
- Astro — excellent for content sites, but brief explicitly targets React/Next/shadcn/Framer Motion stack

## R2 — Styling and UI primitives

**Decision**: Tailwind CSS + shadcn/ui + CSS design tokens for soft neutrals (cream, beige, blush) and dark-mode variants

**Rationale**: Rapid, consistent component scaffolding (Accordion, Carousel, Button, Input, Form) while allowing a custom luxury palette instead of generic purple/template looks. Rounded corners and spacing scale map cleanly to Tailwind utilities.

**Alternatives considered**:
- Fully custom CSS modules — more control, slower delivery for accordion/carousel/form a11y patterns
- Heavy UI kit (MUI, Chakra) — harder to achieve boutique aesthetic without fighting defaults

## R3 — Motion

**Decision**: Framer Motion for section entrance, portfolio hover, and carousel transitions; gate with `useReducedMotion` / `prefers-reduced-motion`

**Rationale**: Spec requires smooth, intentional motion without flashiness; Framer Motion is in the brief and pairs well with React. Reduced-motion support is required by FR-017 and edge cases.

**Alternatives considered**:
- CSS-only transitions — sufficient for simple fades, weaker for coordinated section choreography
- GSAP — powerful but heavier and outside the stated stack

## R4 — Content storage

**Decision**: Typed TypeScript modules under `src/content/` (services, portfolio items, reviews, FAQ, studio contact, Instagram grid)

**Rationale**: No CMS/admin needed for v1; content is version-controlled, type-safe, and easy to swap for real assets. Aligns with “placeholder then replace” assumption.

**Alternatives considered**:
- MDX/CMS (Contentful, Sanity) — overkill for a one-person studio launch
- Database — unnecessary persistence for static marketing copy

## R5 — Contact form delivery

**Decision**: `POST /api/contact` Route Handler with zod validation; send email via Resend (or compatible provider) when `CONTACT_TO_EMAIL` + API key env vars exist; in local/dev without keys, accept valid payloads and return success after logging (documented in quickstart)

**Rationale**: Spec requires validated accessible form and confirmation UX; appointment booking calendar is out of scope. Email is the practical handoff for a solo technician.

**Alternatives considered**:
- `mailto:` only — poor mobile UX and no server validation
- Third-party form embeds (Formspree-only UI) — less control over a11y and brand styling
- Full CRM/booking (Calendly embed as primary CTA) — conflicts with scoped “contact form” conversion path (may link optionally later)

## R6 — Portfolio gallery

**Decision**: Client-side category filter over static portfolio items; CSS columns or grid masonry approximation; `next/image` with blur/skeleton placeholders; empty-state when filter yields zero

**Rationale**: Meets FR-007 without a gallery SaaS. True Pinterest masonry libraries add weight; CSS masonry/grid is enough for curated nail photos.

**Alternatives considered**:
- Instagram API live feed for portfolio — auth/rate-limit complexity; Instagram section remains curated static grid + follow link
- Third-party gallery widgets — branding and a11y risk

## R7 — Reviews carousel

**Decision**: shadcn Carousel (Embla) or equivalent accessible carousel with keyboard controls; static review content; display fixed average 4.9/5 as specified

**Rationale**: Matches FR-008; keeps testimonials on-brand without Google Reviews API integration for v1.

**Alternatives considered**:
- Live Google/Yelp embeds — inconsistent styling and privacy/script weight

## R8 — Dark mode

**Decision**: `next-themes` with class-based dark mode; manual toggle in header; respect system preference as default

**Rationale**: FR-015; shadcn/Tailwind dark variants are standard with `next-themes`.

**Alternatives considered**:
- CSS-only `prefers-color-scheme` without toggle — fails explicit toggle acceptance scenario

## R9 — SEO and structured data

**Decision**: Next.js Metadata API for title/description/Open Graph/Twitter; JSON-LD `LocalBusiness` (or `NailSalon`/`BeautySalon` typed as LocalBusiness subtype fields) in root layout; semantic landmarks and heading hierarchy; keyword-aware copy without stuffing

**Rationale**: FR-018/FR-019 and SC-008; App Router metadata is the idiomatic approach.

**Alternatives considered**:
- `react-helmet` / manual tags — obsolete patterns in App Router
- Skipping JSON-LD — fails local discovery goal

## R10 — Testing strategy

**Decision**: Playwright e2e for nav scroll, portfolio filter, FAQ accordion, contact validation success/failure; unit tests for zod schema and portfolio filter helper; axe smoke on homepage

**Rationale**: Maps directly to user stories and success criteria without requiring a full visual regression suite in v1.

**Alternatives considered**:
- Cypress — fine alternative; Playwright chosen for modern Next defaults and a11y tooling ecosystem
- No automated tests — higher regression risk across interactive sections

## R11 — Maps and Instagram

**Decision**: Google Maps iframe embed from studio address config; Instagram section uses static curated images + outbound “Follow on Instagram” link (no live Graph API)

**Rationale**: Spec asks for embed + grid + follow CTA; live Instagram API adds OAuth and breakage risk. Graceful fallbacks documented for iframe/image failures.

**Alternatives considered**:
- Mapbox — extra account/setup for little benefit on a single pin
- Live Instagram feed — deferred

## R12 — Icons and imagery

**Decision**: Lucide React for service/why-choose icons; optimized WebP/AVIF-capable assets via `next/image`; placeholder stock/curated images under `public/images/` until real studio photos arrive

**Rationale**: Matches brief; keeps iconography consistent and lightweight.

**Alternatives considered**:
- Custom SVG set only — higher design cost for v1
- Icon fonts — worse tree-shaking and a11y defaults
