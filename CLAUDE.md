# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 14 marketing website for Nader Distilleries using the App Router with Sanity CMS as the content backend.

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **UI**: Chakra UI + Tailwind CSS (hybrid approach)
- **CMS**: Sanity (project: swzx1bkk, dataset: production)
- **Animations**: Framer Motion, GSAP, React Three Fiber (3D)
- **Styling**: Custom Chakra theme in `app/theme.ts`, button variants in `app/defineStyle.ts`

### Key Patterns

**Sanity Integration**
- `app/sanity/client.ts` - Server-only Sanity client with `sanityFetch()` helper for cached queries
- `app/sanity/urlFor.js` - Image URL builder for Sanity assets
- GROQ queries are defined inline in page components

**Component Structure**
- `app/components/` - Organized by feature (landing/, brands/, contact/, navigation/, ui/, etc.)
- UI primitives in `app/components/ui/` (Btn, CustomBox, Logo)
- `app/providers.tsx` - ChakraProvider wrapper (client component)

**Pages**
- Dynamic brand pages: `app/brands/[slug]/page.tsx`
- Service pages: `app/services/{ethanol,gift,label-drinks}/`
- Age restriction flow: `app/restriction-age/` with `ClientRedirect` component protecting content

**API Routes**
- `app/api/contact/route.js` - Contact form email handler using nodemailer

### Environment Variables

Required for contact form:
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_SECURE`
- `CONTACT_EMAIL`

### Fonts

Custom fonts loaded via `@next/font`:
- EB Garamond (primary/headings)
- Varta (body text in some components)
