# CLAUDE.md — Magic Enterprises Website

## Project Overview

**Client:** Magic Enterprises
**Domain:** [magicprintsmedia.com](https://magicprintsmedia.com)
**Location:** Shaniwar Peth, Pune-411030, India
**Contact:** +91 7040332527 | +91 7744087354 | magicenterprises16@gmail.com
**Project Type:** Business website — SEO-first, high engagement, customer-facing

### What Magic Enterprises Does

A full-spectrum print, design, and gifting powerhouse based in Pune. Their services span:

- **Graphic Design** — Branding, creatives, marketing material
- **Printing Solutions** — All types of printing (offset, digital, large format, etc.)
- **Corporate Gifting** — Customized and printed merchandise
- **Perfume Manufacturing** — Creating their own fragrance line
- **Hospital Essentials** — Print solutions, stationery, and material supply for hospitals

The site's ultimate goal: let Magic Enterprises speak for themselves online, draw organic traffic through SEO, and build a space where customers feel engaged and connected to the brand.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.1.1 (App Router — `app/`) |
| Language | TypeScript 5 |
| UI Library | React 19.2.3 |
| Styling | Tailwind CSS v4 + CSS Variables (`globals.css`) |
| Icons | `@remixicon/react` v4.8.0 |
| Animations | Framer Motion v12 |
| Carousels | Swiper v12 |
| Email | Resend v6 (via `app/api/contact/route.tsx`) |

---

## Site Structure

```
app/
├── layout.tsx                    → Root layout (Navbar + Footer, Google Fonts)
├── page.tsx                      → / (Home)
├── globals.css                   → CSS variables + Tailwind import
├── not-found.tsx                 → 404 page
├── manifest.ts                   → PWA manifest
├── sitemap.ts                    → XML sitemap (SEO)
├── robots.ts                     → robots.txt (SEO)
│
├── about-us/page.tsx             → /about-us
├── contact-us/page.tsx           → /contact-us
├── our-work/page.tsx             → /our-work
│
├── service/
│   ├── graphic-design/page.tsx         → /service/graphic-design
│   ├── printing/page.tsx               → /service/printing
│   ├── corporate-gifting/page.tsx      → /service/corporate-gifting
│   ├── perfume-manufacturing/page.tsx  → /service/perfume-manufacturing
│   └── hospital-essentials/page.tsx    → /service/hospital-essentials
│
├── api/
│   ├── contact/route.tsx         → POST — sends email via Resend
│   └── status/route.ts           → GET — health check
│
├── components/
│   ├── common/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── animated-button.tsx
│   │   ├── animated-heading.tsx
│   │   ├── connect-with-us-section.tsx
│   │   └── page-title-section.tsx
│   ├── home/
│   │   ├── hero-section.tsx
│   │   ├── our-services-section.tsx
│   │   ├── service-overview-card.tsx
│   │   └── testimonials.tsx
│   ├── about-us/
│   │   └── team-card.tsx
│   ├── contact-us/
│   │   └── contact-form.tsx
│   ├── our-work/
│   │   ├── our-work-gallery.tsx
│   │   └── image-lightbox.tsx
│   └── service/
│       ├── service-card-component.tsx
│       └── service-image-block.tsx
│
└── data/
    ├── our-services.ts           → Service definitions and metadata
    ├── our-team.ts               → Team member information
    ├── our-work-data.ts          → Portfolio items by category
    └── testimonial-data.ts       → Customer testimonials
```

---

## Design System

### Brand Colors

```css
:root {
  /* Core Brand */
  --primary: #0f2854;         /* Deep Navy Blue — dominant brand color */
  --accent: #D62828;          /* Bold Orange-Red — CTA, highlights, energy */

  /* Backgrounds */
  --background: #0f2854;      /* Default dark background */
  --background-alt: #0a1e3d;  /* Slightly deeper navy for section contrast */
  --background-light: #f5f7fa;/* Light sections / cards on light pages */

  /* Foreground / Text */
  --foreground: #ffffff;       /* Primary text on dark backgrounds */
  --foreground-muted: #a0aec0; /* Subtext, captions, secondary labels */
  --foreground-dark: #0f2854;  /* Text on light backgrounds */

  /* Accent Variants */
  --accent-hover: #b91f1f;    /* Darker red for hover states */
  --accent-light: #ff4444;    /* Brighter red for glows or highlights */

  /* Borders & Dividers */
  --border: rgba(255, 255, 255, 0.1);
  --border-accent: rgba(214, 40, 40, 0.4);

  /* Utility */
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  --radius: 0.75rem;
}
```

### Fonts

Configured in `app/layout.tsx` via `next/font/google`:

- `--font-geist-sans` — Geist (primary body font)
- `--font-geist-mono` — Geist Mono (code/mono)
- `--font-pacifico` — Pacifico (decorative display)

### Design Principles

- **Navy is the foundation** — most backgrounds, headers, and sections live in navy tones
- **Red/orange accent is action** — use `--accent` for CTAs, hover effects, underlines, and highlights only; don't overuse it
- **White is clarity** — foreground text, clean card surfaces, breathing room
- **Never use generic gradients** — if gradient is needed, use navy-to-deeper-navy or navy-to-black; red gradients only for dramatic hero moments
- **Elevation through opacity** — use `rgba` overlays on `--primary` for card backgrounds rather than flat grays

---

## Component Conventions

### General Rules

- All components live in `app/components/` — explore the existing structure before creating new files
- Use **TypeScript** for all components and pages — define proper `interface` or `type` for all props
- Use **Tailwind utility classes** as the primary styling method; use CSS variables via `var(--token)` inside `style={{}}` or custom CSS only when Tailwind can't express it
- Prefer **Framer Motion** for any enter/exit animations, scroll reveals, and hover transitions
- Use **Remix Icons** (`@remixicon/react`) for all iconography — check existing icon usage in the codebase before picking new ones
- Static content data goes in `app/data/` — don't hardcode arrays directly inside page files

### Framer Motion Patterns

```tsx
// Standard fade-up reveal (use for sections, cards)
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Stagger children (use for grids of cards)
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}
```

### Swiper Carousels

- Always lazy-load Swiper modules — import only what's needed
- Use `autoplay`, `pagination`, and `navigation` modules only when the UI calls for it
- Import Swiper styles inside the component itself (there is no `_app.tsx` in App Router)

---

## SEO Guidelines

This project uses **Next.js App Router**. Use `generateMetadata` or the `metadata` export — **never** use `next/head` or a `<Head>` block.

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '{Page Title} | Magic Enterprises — Pune',
  description: '...',
  keywords: ['...'],
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://magicprintsmedia.com/...',
    images: [{ url: '/og-image.jpg' }],
  },
  alternates: {
    canonical: 'https://magicprintsmedia.com/...',
  },
  robots: { index: true, follow: true },
}
```

For dynamic metadata (e.g. if a page ever becomes dynamic):

```tsx
export async function generateMetadata(): Promise<Metadata> { ... }
```

**SEO Copy Rules:**
- Primary keyword in `<h1>` — every page has exactly one `<h1>`
- Location keyword "Pune" should appear naturally in page copy and meta descriptions
- Service pages should target long-tail: e.g. *"corporate gifting solutions in Pune"*, *"hospital stationery suppliers Pune"*
- Use semantic HTML — `<section>`, `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`
- All images must have descriptive `alt` text
- `app/sitemap.ts` and `app/robots.ts` are already configured — update `sitemap.ts` when adding new routes

---

## Coding Standards

- **No `any` types** — always type properly; use `unknown` and narrow if needed
- **No inline styles** unless using CSS variables that Tailwind can't access
- **No hardcoded color hex values in JSX** — always use CSS variables or Tailwind tokens
- **Imports order:** React/Next → Third-party → Internal components → Data → Styles
- Keep components **single-responsibility** — break large page sections into smaller named components
- Prefer `const` arrow functions for components: `const Hero = () => { ... }`
- All components are Client Components if they use hooks or browser APIs — add `'use client'` at the top; otherwise leave as Server Components

---

## Environment Variables

Stored in `.env.local` (not committed). Required for the contact form:

```
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=...
CONTACT_RECEIVER_EMAIL=...
```

The contact API route is at `app/api/contact/route.tsx`.

---

## Key Business Context for Content & Copy

When writing or suggesting copy, keep this brand voice in mind:

- **Tone:** Professional, confident, warm — not corporate-stiff
- **Audience:** Businesses in Pune looking for print, design, gifting, or supply partners; hospital procurement teams; startups wanting branded merchandise
- **USP messaging:** One-stop solution, Pune-based and reliable, quality across every category
- **Always mention Pune** — local SEO is critical
- **Hospital essentials** is a niche differentiator — highlight trust, compliance, and reliability for that vertical
- **Perfume manufacturing** is unique — position it as premium, bespoke, and brand-building for corporates

---

## Do's and Don'ts for Claude

### ✅ Do
- Explore `app/components/` before creating new files
- Reuse existing layout wrappers, section containers, and typography patterns found in the codebase
- Suggest SEO improvements whenever touching a page file
- Use `--accent` (`#D62828`) for primary CTAs, hover states, and decorative accents
- Keep animations subtle and purposeful — this is a B2B/B2C brand site, not a portfolio
- Ask if unsure about an existing component or pattern before creating a duplicate
- Add `'use client'` only when the component actually needs it (hooks, browser APIs)

### ❌ Don't
- Don't install new packages without flagging it — the stack is intentionally lean
- Don't use purple, teal, or generic gradient color schemes — the brand is navy + red
- Don't write placeholder lorem ipsum copy — use real, contextual Magic Enterprises content
- Don't skip TypeScript types to save time
- Don't create a new icon library import — Remix Icons is the standard here
- Don't add `position: fixed` navbars or UI patterns without checking if one already exists
- Don't use `next/head` or `<Head>` — this is App Router; use `metadata` exports
- Don't reference `_app.tsx` or `pages/` — the project uses the `app/` directory
