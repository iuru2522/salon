# Implementation Plan: Luxury Nail Technician Landing Page

**Branch**: `001-nail-landing-page` | **Date**: 2026-07-10 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-nail-landing-page/spec.md`

## Summary

Build a high-converting, mobile-first marketing site for an appointment-only independent nail technician. The experience is a single-page landing flow (plus lightweight Privacy/Terms pages) with premium minimalist-luxury visuals, filterable portfolio, reviews carousel, pricing, FAQ, Instagram promo, validated contact form, SEO/share metadata, LocalBusiness structured data, accessibility, and dark mode.

**Technical approach**: Next.js App Router + React + TypeScript, Tailwind CSS + shadcn/ui, Framer Motion (respecting `prefers-reduced-motion`), Lucide icons, static typed content modules for services/portfolio/reviews/FAQ, `next/image` + skeletons for media, `next-themes` for dark mode, and a Route Handler for contact inquiries (email delivery via provider when configured; graceful success UX with validation always client+server).

## Technical Context

**Language/Version**: TypeScript 5.x, React 19, Node.js 20+

**Primary Dependencies**: Next.js 15 (App Router), Tailwind CSS 4 / v3-compatible setup as scaffolded, shadcn/ui, Framer Motion, Lucide React, next-themes, zod (form validation)

**Storage**: Static content modules (TypeScript/JSON under `src/content/`); no database in v1. Contact inquiries are validated and forwarded (email provider) or logged in development—not persisted long-term.

**Testing**: Playwright for critical user journeys; Vitest + Testing Library for form validation and portfolio filter logic; axe-core (or Playwright axe) for accessibility smoke checks

**Target Platform**: Modern browsers (last two major versions of Chrome, Safari, Firefox, Edge); mobile-first responsive web; deployable to Vercel or any Node-compatible host

**Project Type**: Web application (marketing frontend + lightweight contact API route)

**Performance Goals**: LCP under ~2.5s on mid-range mobile; above-the-fold headline/CTA readable within 3s (SC-002); lazy-load below-fold images; minimize unused JS on first paint

**Constraints**: WCAG 2.2 AA for interactive controls and contrast; appointment-only (no booking calendar); reduced-motion safe animations; placeholder business assets replaceable without code rewrites; no walk-in booking UX

**Scale/Scope**: One primary landing page, ~12 sections, ~8 service cards, filterable portfolio (~12–24 sample images), reviews carousel, FAQ accordion, contact form, Privacy + Terms stubs, dark mode

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Project constitution at `.specify/memory/constitution.md` is still a placeholder template (unratified principles). **Gate status: PASS (no enforceable constraints).**

Design principles applied from the feature brief instead:

- Prefer simple static content over CMS/database until needed
- Keep conversion path lean (contact/phone/social only)
- Accessibility and performance are non-negotiable for launch quality
- Reusable section/components; avoid over-engineering

**Post-Phase 1 re-check**: PASS — design remains a single Next.js app with static content + one contact endpoint; no unjustified complexity.

## Project Structure

### Documentation (this feature)

```text
specs/001-nail-landing-page/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── contact-api.md
│   ├── seo-metadata.md
│   └── ui-sections.md
└── tasks.md             # Created by /speckit-tasks (not this command)
```

### Source Code (repository root)

```text
app/
├── layout.tsx                 # Root layout, fonts, theme provider, JSON-LD
├── page.tsx                   # Landing page composition
├── globals.css                # Design tokens, Tailwind layers
├── privacy/page.tsx
├── terms/page.tsx
├── api/contact/route.ts       # Contact inquiry endpoint
├── opengraph-image.tsx        # Optional OG image
└── favicon.ico / icon files

src/
├── components/
│   ├── layout/                # Header, Footer, ThemeToggle, MobileNav
│   ├── sections/              # Hero, About, Services, WhyChoose, Portfolio,
│   │                          # Reviews, Pricing, FAQ, Instagram, Contact
│   └── ui/                    # shadcn primitives + shared Skeleton, SectionHeading
├── content/                   # Typed static data (services, portfolio, reviews, faq, studio)
├── lib/                       # utils, schema (zod), seo helpers, constants
└── hooks/                     # useReducedMotion helpers if needed

public/
├── images/                    # Hero, portrait, portfolio, reviews, instagram placeholders
└── ...

tests/
├── e2e/                       # Playwright journeys
└── unit/                      # Filter + validation unit tests
```

**Structure Decision**: Single Next.js App Router project at repository root. Marketing UI lives in `app/` + `src/components/`; domain content is data-driven via `src/content/` so copy/prices/images can change without restructuring sections. One API route handles contact submissions.

## Complexity Tracking

> No constitution violations requiring justification.
