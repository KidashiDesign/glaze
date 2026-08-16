# Glaze — Demo Website

A responsive React (Vite) demo site for Glaze, a gelato & specialty coffee cafe
in Tbilisi, Georgia. Layout, section order and scroll/hover/reveal animations
are modeled on the Webflow template ["Zesty"](https://zesty-template.webflow.io/),
rebuilt natively with React + GSAP/ScrollTrigger (no Webflow IX2 code was
copied — only DOM/CSS structure and animation timing were used as reference).

This is a **client-presentation demo**. Content is separated from structure so
copy can be swapped without touching any component or animation code.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
```

## Project structure

```
src/
  content/siteContent.js   # ALL copy & content — edit this to update text
  components/               # Section components (Hero, About, Menu, ...)
  animation/                 # GSAP building blocks (ShapeRevealParallax, ParallaxDrift)
  hooks/usePrefersReducedMotion.js
  styles/                     # tokens.css (design tokens) + sections.css + global.css
images/                       # Local cafe/gelato photo assets
```

To change copy, prices, images, or links: edit `src/content/siteContent.js`
only. No GSAP or CSS files need to be touched.

## Design tokens

Colors and type come from the client-provided CI (`Color_and_type_pairings`
export): warm near-white background, deep espresso-brown text, gold accent;
Cormorant Garamond for headings, Lora for body copy. Tokens live in
`src/styles/tokens.css`.

## Accessibility

Every scroll/hover/load animation checks `prefers-reduced-motion` via the
`usePrefersReducedMotion` hook and falls back to a simple fade-in (no
clip-path/scale/parallax) when the user has that preference set.

## Mobile

The site is built mobile-first — most traffic is expected on smartphones.
Animations are not disabled on mobile; they use the same mechanics as desktop
with shorter scroll distances and a capped scale/drift amount (see
`ShapeRevealParallax` and `ParallaxDrift` in `src/animation/`).

## Remaining placeholders

Search `src/content/siteContent.js` for `[PLACEHOLDER: ...]` to find every
item below in context.

- **Hero eyebrow** — location tag copy
- **Gelato & coffee menu prices** (6 items across both menu categories)
- **Private events section** — no placeholders in copy, but image is a stand-in stock shot; confirm with client
- **Social feed CTA link** — Instagram profile URL
- **Footer** — street address, opening hours, phone number, email address
- **Footer / social feed** — Instagram URL (used in two places)

Everything else (headlines, section copy, USP text, the Google review quote
and link) is final, client-ready copy as provided in the brief.

## Notes

- No AI-authorship labeling appears anywhere on the site itself (per brief).
- The Google Maps review in the Testimonial section links to Glaze's real
  Google Business Profile — verify this is approved for use before the demo
  goes live to the client or public.
- Google Fonts are loaded via a CDN `<link>` in `index.html`; if the
  deployment environment blocks that domain, self-host the two font files
  instead.
