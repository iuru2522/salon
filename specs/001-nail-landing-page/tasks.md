# Tasks: Luxury Nail Technician Landing Page

**Input**: Design documents from `/specs/001-nail-landing-page/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Not included â€” feature specification did not explicitly request TDD/automated test tasks. Validate manually via `quickstart.md` in Polish phase.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Next.js App Router at repository root: `app/`, `src/`, `public/`, `tests/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Next.js project and tooling

- [x] T001 Scaffold Next.js App Router + TypeScript app at repository root with `app/` and `src/` directories per `plan.md`
- [x] T002 Install primary dependencies (Tailwind CSS, Framer Motion, Lucide React, next-themes, zod) and initialize shadcn/ui in `components.json` + `src/components/ui/`
- [x] T003 [P] Add `.env.example` with `CONTACT_TO_EMAIL`, `RESEND_API_KEY`, `NEXT_PUBLIC_SITE_URL` and create `public/images/` placeholder folders (hero, about, portfolio, reviews, instagram)
- [x] T004 [P] Configure ESLint/Prettier (or Next defaults) and ensure `pnpm lint` / `pnpm build` scripts work from `package.json`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared layout, design system, content types, and page shell that all stories use

**âš ï¸ CRITICAL**: No user story work can begin until this phase is complete

- [x] T005 Define luxury design tokens (cream/beige/blush neutrals, radii, typography) and base styles in `app/globals.css`
- [x] T006 [P] Create shared TypeScript content types matching `data-model.md` in `src/lib/content-types.ts`
- [x] T007 [P] Implement `cn`/utils helper in `src/lib/utils.ts` and reduced-motion helper in `src/hooks/usePrefersReducedMotion.ts`
- [x] T008 [P] Add shared UI helpers `src/components/ui/skeleton.tsx` (if missing) and `src/components/ui/section-heading.tsx`
- [x] T009 Create base studio profile seed content in `src/content/studio.ts` (business name, hero copy placeholders, contact fields, social links, booking policy)
- [x] T010 Implement theme provider wrapper using next-themes in `src/components/layout/theme-provider.tsx` and wire into `app/layout.tsx` with fonts and metadata shell
- [x] T011 Implement site chrome stubs: `src/components/layout/site-header.tsx`, `src/components/layout/mobile-nav.tsx`, `src/components/layout/theme-toggle.tsx`, `src/components/layout/site-footer.tsx` with nav anchors from `contracts/ui-sections.md`
- [x] T012 Compose landing page shell with ordered section placeholders and stable section `id`s in `app/page.tsx`

**Checkpoint**: Foundation ready â€” `pnpm dev` shows themed layout chrome and empty section anchors

---

## Phase 3: User Story 1 - Discover Services and Trust the Artist (Priority: P1) ðŸŽ¯ MVP

**Goal**: Prospective clients understand the premium appointment-only offer via hero, about, services, differentiators, and pricing.

**Independent Test**: On mobile and desktop, open homepage and confirm hero (headline, CTA, trust badges), About, Services cards, Why Choose Me, and Price List communicate professionalism without needing portfolio/contact.

### Implementation for User Story 1

- [x] T013 [P] [US1] Seed trust badges and about copy in `src/content/trust-badges.ts` and extend `src/content/studio.ts` about/portrait fields
- [x] T014 [P] [US1] Seed eight service offerings in `src/content/services.ts` per data-model required set
- [x] T015 [P] [US1] Seed seven differentiators in `src/content/differentiators.ts`
- [x] T016 [P] [US1] Add placeholder hero and portrait images under `public/images/hero/` and `public/images/about/` with meaningful filenames
- [x] T017 [US1] Implement Hero section (image, headline, subheadline, View Portfolio CTA â†’ `#portfolio`, trust badges) in `src/components/sections/hero.tsx`
- [x] T018 [P] [US1] Implement About section in `src/components/sections/about.tsx`
- [x] T019 [P] [US1] Implement Services card grid in `src/components/sections/services.tsx`
- [x] T020 [P] [US1] Implement Why Choose Me icon grid in `src/components/sections/why-choose.tsx`
- [x] T021 [P] [US1] Implement Price List table + complexity note in `src/components/sections/pricing.tsx`
- [x] T022 [US1] Wire US1 sections into `app/page.tsx` and add Framer Motion entrance animations gated by reduced-motion in those section components

**Checkpoint**: US1 MVP is demoable â€” trust + services + pricing readable end-to-end

---

## Phase 4: User Story 2 - Explore Portfolio and Social Proof (Priority: P2)

**Goal**: Visitors evaluate style via filterable portfolio, reviews carousel, and Instagram promo.

**Independent Test**: Use portfolio filters and reviews carousel alone; confirm work samples and 4.9/5 rating without needing services or contact.

### Implementation for User Story 2

- [x] T023 [P] [US2] Seed portfolio items with category tags in `src/content/portfolio.ts` and images under `public/images/portfolio/`
- [x] T024 [P] [US2] Seed reviews (photo, name, rating, body) and average rating display data in `src/content/reviews.ts` + `public/images/reviews/`
- [x] T025 [P] [US2] Seed Instagram grid posts and profile URL in `src/content/instagram.ts` + `public/images/instagram/`
- [x] T026 [P] [US2] Implement portfolio filter helper `filterPortfolioItems` in `src/lib/portfolio.ts`
- [x] T027 [US2] Implement Portfolio masonry gallery + filters + empty state + desktop hover in `src/components/sections/portfolio.tsx`
- [x] T028 [P] [US2] Implement Reviews carousel (shadcn/Embla) with â˜…â˜…â˜…â˜…â˜… 4.9/5 summary in `src/components/sections/reviews.tsx`
- [x] T029 [P] [US2] Implement Instagram grid + Follow on Instagram CTA in `src/components/sections/instagram.tsx`
- [x] T030 [US2] Wire Portfolio, Reviews, and Instagram sections into `app/page.tsx` and ensure Hero â€œView Portfolioâ€ scrolls to `#portfolio`

**Checkpoint**: US1 + US2 both work independently on the same page

---

## Phase 5: User Story 3 - Get Answers and Make Contact (Priority: P3)

**Goal**: Ready-to-book visitors use FAQ, studio details, map, and validated contact form (plus Privacy/Terms links).

**Independent Test**: Complete FAQ review and contact form validation/success without relying on portfolio or services content.

### Implementation for User Story 3

- [x] T031 [P] [US3] Seed five FAQ items (appointment-only walk-in answer) in `src/content/faq.ts`
- [x] T032 [P] [US3] Create zod `contactInquirySchema` in `src/lib/contact-schema.ts` per `contracts/contact-api.md` and `data-model.md`
- [x] T033 [US3] Implement `POST` handler with validation, honeypot, optional Resend send, and dev fallback in `app/api/contact/route.ts`
- [x] T034 [US3] Implement FAQ accordion section in `src/components/sections/faq.tsx`
- [x] T035 [US3] Implement Contact section (address, phone, hours, map iframe/fallback, social icons, accessible form + live region) in `src/components/sections/contact.tsx`
- [x] T036 [P] [US3] Add Privacy and Terms stub pages in `app/privacy/page.tsx` and `app/terms/page.tsx`; link from `src/components/layout/site-footer.tsx`
- [x] T037 [US3] Wire FAQ and Contact into `app/page.tsx` and verify footer Privacy/Terms + social links

**Checkpoint**: Inquiry path works with client+server validation; FAQ answers appointment-only policy

---

## Phase 6: User Story 4 - Navigate and Browse Comfortably (Priority: P4)

**Goal**: Sticky nav, smooth scrolling, dark/light toggle, lazy media/skeletons, and keyboard-friendly interactions across the page.

**Independent Test**: Use header links, sticky nav while scrolling, theme toggle, and keyboard/focus paths across interactive controls.

### Implementation for User Story 4

- [x] T038 [US4] Upgrade `src/components/layout/site-header.tsx` to sticky behavior, active-section awareness (optional), and smooth-scroll nav to all `contracts/ui-sections.md` ids
- [x] T039 [US4] Complete accessible mobile navigation (open/close, Esc, focus management) in `src/components/layout/mobile-nav.tsx`
- [x] T040 [P] [US4] Finalize theme toggle persistence and dark-token contrast in `src/components/layout/theme-toggle.tsx` + `app/globals.css`
- [x] T041 [US4] Apply `next/image` lazy loading and skeleton placeholders for below-fold media across section components under `src/components/sections/`
- [x] T042 [US4] Audit Framer Motion usage site-wide for `prefers-reduced-motion` and ensure keyboard access for filters, accordion, carousel, and form controls

**Checkpoint**: Navigation/theme/a11y comfort goals met without regressing US1â€“US3

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: SEO, icons, performance, and quickstart validation across stories

- [x] T043 [P] Implement Metadata API title/description/canonical/OG/Twitter and favicon/icons per `contracts/seo-metadata.md` in `app/layout.tsx` (and `app/icon.tsx` / `app/favicon.ico` as needed)
- [x] T044 [P] Emit JSON-LD `NailSalon`/`LocalBusiness` script from studio content in `app/layout.tsx` or `src/components/seo/json-ld.tsx`
- [x] T045 [P] Add Open Graph image route or static asset via `app/opengraph-image.tsx` (or `public/og.png`)
- [x] T046 Optimize hero LCP (priority image, font loading) in `src/components/sections/hero.tsx` and `app/layout.tsx`
- [x] T047 Run `specs/001-nail-landing-page/quickstart.md` manual scenarios V1â€“V5 and fix any gaps; confirm `pnpm lint` and `pnpm build` succeed

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies â€” start immediately
- **Foundational (Phase 2)**: Depends on Setup â€” **BLOCKS** all user stories
- **User Stories (Phases 3â€“6)**: Depend on Foundational; can proceed sequentially P1â†’P4 or in parallel after Phase 2 if staffed
- **Polish (Phase 7)**: Depends on stories intended for release (MVP = through US1 minimum; full launch = through US4)

### User Story Dependencies

- **US1 (P1)**: After Foundational only â€” MVP
- **US2 (P2)**: After Foundational; integrates with Hero CTA `#portfolio` but independently testable
- **US3 (P3)**: After Foundational; footer links independent of portfolio
- **US4 (P4)**: After Foundational; ideally after sections exist so a11y/lazy-load work has targets (can start header polish earlier)

### Within Each User Story

- Content seeds before section components that consume them
- Section components before wiring into `app/page.tsx`
- API schema before route before contact form submit wiring

### Parallel Opportunities

- Phase 1: T003 and T004 after T001/T002
- Phase 2: T006, T007, T008 in parallel after T005 starts; T009 parallel with early layout work
- US1: T013â€“T016 content/images in parallel; T018â€“T021 sections in parallel after seeds
- US2: T023â€“T026 in parallel; T028â€“T029 parallel after seeds
- US3: T031â€“T032 in parallel; T036 parallel with FAQ/Contact UI
- Polish: T043â€“T045 in parallel

---

## Parallel Example: User Story 1

```bash
# Content seeds in parallel:
Task: "Seed trust badges in src/content/trust-badges.ts"
Task: "Seed services in src/content/services.ts"
Task: "Seed differentiators in src/content/differentiators.ts"
Task: "Add placeholder images under public/images/hero/ and public/images/about/"

# Section components in parallel after seeds:
Task: "Implement About in src/components/sections/about.tsx"
Task: "Implement Services in src/components/sections/services.tsx"
Task: "Implement Why Choose in src/components/sections/why-choose.tsx"
Task: "Implement Pricing in src/components/sections/pricing.tsx"
```

## Parallel Example: User Story 2

```bash
Task: "Seed portfolio in src/content/portfolio.ts"
Task: "Seed reviews in src/content/reviews.ts"
Task: "Seed instagram in src/content/instagram.ts"
Task: "Implement filter helper in src/lib/portfolio.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE** using quickstart V1
5. Demo premium trust + services + pricing experience

### Incremental Delivery

1. Setup + Foundational â†’ chrome ready
2. US1 â†’ MVP demo
3. US2 â†’ portfolio/social proof
4. US3 â†’ contact conversion
5. US4 â†’ navigation/a11y comfort
6. Polish â†’ SEO + quickstart V1â€“V5 sign-off

### Parallel Team Strategy

1. Team completes Setup + Foundational together
2. Then split: A â†’ US1, B â†’ US2, C â†’ US3 (US4 after sections land or owned by A)

---

## Notes

- [P] tasks = different files, no dependencies on incomplete sibling tasks
- [USn] label maps to spec user stories for traceability
- Each story is independently completable and testable at its checkpoint
- Commit after each task or logical group
- Avoid cross-story file thrash on `app/page.tsx` â€” integrate one story at a time or coordinate wiring tasks (T022, T030, T037)
