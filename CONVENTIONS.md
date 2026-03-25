# IMH Vermarktung — Coding Conventions

## Philosophy: Reusable. Clean. Zero Waste.

Every line of code is considered. If something can be reused, it goes in a shared component. Nothing is duplicated.

---

## Component Structure

```
components/
  ui/           # Atomic, reusable UI primitives (Button, SectionTitle, Tag, etc.)
  layout/       # Layout wrappers (Navbar, Footer)
  sections/     # Page sections (HeroSection, AboutSection, etc.)
  property/     # Property-specific components (PropertyCard, PropertyGallery, etc.)

lib/
  data/         # Mock/static data and TypeScript types
```

## Rules

1. **Everything reusable goes in `components/ui/`** — if it appears in more than one place, it's a primitive.
2. **Section components are composable** — they accept only the data they need via props, nothing more.
3. **No inline styles** — use Tailwind utility classes only. Brand values live in CSS custom properties.
4. **CSS custom properties for all brand tokens** — colors, spacing rhythms, fonts go in `app/globals.css` under `@theme`. Never hardcode hex values in components.
5. **TypeScript everywhere** — every prop, every data shape gets a type. Types live close to where the data is used.
6. **Server components by default** — only add `"use client"` when needed (event handlers, hooks, browser APIs).
7. **No magic numbers** — sizes, durations, and values are named tokens or Tailwind scale values.
8. **Flat imports** — no barrel files that re-export everything. Import directly from the component file.

## Naming

- Components: `PascalCase.tsx`
- Utilities / data: `camelCase.ts`
- CSS classes: Tailwind only
- CSS variables: `--color-brand-*`, `--font-*`

## Brand Tokens (defined in `app/globals.css`)

| Token                    | Purpose                        |
| ------------------------ | ------------------------------ |
| `--color-brand-gold`     | Primary accent color           |
| `--color-brand-dark`     | Primary text / dark surfaces   |
| `--color-brand-light`    | Light background               |
| `--color-brand-muted`    | Secondary / muted text         |
| `--color-brand-border`   | Dividers and borders           |

### Logo Colors (rezervisano — ne koristi se obavezno)

| Token                    | Hex       | Opis                        |
| ------------------------ | --------- | --------------------------- |
| `--color-logo-blue`      | `#32648C` | Plava iz loga               |
| `--color-logo-teal`      | `#50937F` | Zeleno-plava (teal) iz loga |

In Tailwind classes these are available as:
`text-brand-gold`, `bg-brand-dark`, `border-brand-border`, etc.

## Project Context

- **Client**: IMH Vermarktung — Swiss real estate agency
- **Contact**: Isabelle Maud Haesler | isabelle.haesler@imh-vermarktung.ch | +41 78 618 04 01
- **Tagline**: VERLÄSSLICH – DISKRET – ERFOLGREICH
- **Language**: German
- **Stack**: Next.js 16 App Router, React 19, TypeScript 5, Tailwind CSS v4
