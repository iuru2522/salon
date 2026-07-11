# Contract: UI Sections & Navigation

**Feature**: `001-nail-landing-page`  
**Type**: Front-end section and interaction contract

## Global chrome

| Element | Behavior |
|---------|----------|
| Sticky header | Remains visible while scrolling; contains logo, nav, theme toggle |
| Nav links | Home, Services, Portfolio, Reviews, FAQ, Contact → smooth-scroll to section ids |
| Mobile nav | Collapsible menu; focus trap or standard disclosure pattern; Esc closes |
| Theme toggle | Switches light/dark; persists preference; readable in both themes |
| Footer | Business name, nav links, Instagram, Facebook, Privacy, Terms, copyright |

## Section ids (stable anchors)

| Section | `id` |
|---------|------|
| Home / Hero | `home` |
| About | `about` |
| Services | `services` |
| Why Choose Me | `why-choose` |
| Portfolio | `portfolio` |
| Reviews | `reviews` |
| Price List | `pricing` |
| FAQ | `faq` |
| Instagram | `instagram` |
| Contact | `contact` |

## Section content contracts

### Hero (`#home`)

- Full-bleed or dominant professional nail image
- Headline: “Luxury Nail Care Designed Just For You”
- Subheadline per spec
- Primary CTA: “View Portfolio” → scrolls to `#portfolio`
- Trust badges row (4 items)

### About (`#about`)

- Portrait + “Meet Your Nail Artist” + required themes in body copy

### Services (`#services`)

- Card grid; each card: icon, name, description, starting price, duration

### Why Choose Me (`#why-choose`)

- Icon grid of seven differentiators

### Portfolio (`#portfolio`)

- Filter control: All, French, Gel, Nail Art, Short Nails, Long Nails
- Masonry-style gallery; desktop hover affordance
- Empty state when no matches

### Reviews (`#reviews`)

- Average rating display ★★★★★ 4.9/5
- Carousel of reviews (photo, name, stars, text)
- Keyboard-operable next/prev

### Pricing (`#pricing`)

- Table columns: Service, Duration, Starting Price
- Note: final pricing depends on design complexity

### FAQ (`#faq`)

- Accordion; one panel open at a time preferred; all five required Q&As

### Instagram (`#instagram`)

- Photo grid + “Follow on Instagram” button (external, `rel` appropriate)

### Contact (`#contact`)

- Address, phone, hours, map embed (or fallback), social icons
- Form fields aligned with [contact-api.md](./contact-api.md)
- Accessible labels, errors, success confirmation

## Accessibility interaction rules

- All interactive controls have visible focus
- Accordion/carousel/filter/form meet keyboard use without mouse
- Images have meaningful `alt` (decorative images empty alt only when truly decorative)
- Honor reduced motion: no essential information only in animation
- Color contrast meets WCAG 2.2 AA for text and UI components in light and dark themes

## Loading states

- Primary media regions show skeleton/placeholder until image load
- Below-fold images use lazy loading
