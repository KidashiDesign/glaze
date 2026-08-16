# Glaze — Demo Website

A trilingual (English / Georgian / Russian), responsive demo site for **Glaze —
Desserts & Coffee** in Tbilisi. React + Vite, GSAP/ScrollTrigger, no framework
beyond that.

Built for a client presentation. The full brief — including which requirements
were changed and why — is in [`docs/BRIEF.md`](docs/BRIEF.md).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run preview  # serve the build

npm run images   # regenerate crops in public/img from images/
npm run fonts    # re-download the self-hosted woff2 files
```

## Layout

```
images/                     Client's original photos — untouched masters
public/img/                 Generated crops (committed, so a clone just runs)
  wide/  16:9   gallery, section blocks, desktop heroes
  tall/  4:5    mobile heroes
  promo/        uncropped promo graphics with baked-in text
public/fonts/               Self-hosted woff2
scripts/
  prepare-images.mjs        Content-aware cropping pipeline
  fetch-fonts.mjs           Font pipeline
src/
  content/                  ALL copy and image mapping — edit only this
    en.js  ka.js  ru.js     Copy per locale, identical shapes
    media.js                Which photo goes where
    reviews.js              Cached Google reviews
  styles/
    classical.css           Client's design system, vendored verbatim
    tokens.ext.css          Additive landing-page tokens
    base.css sections.css   Layout and sections
  animation/                GSAP primitives, all reduced-motion aware
  components/  routes/  i18n/  hooks/
```

To change wording, prices, links or which photo appears where: edit
`src/content/`. Nothing in `components/`, `routes/`, `animation/` or `styles/`
needs to be opened.

## Design system

`src/styles/classical.css` is the client's *Zesty Color & Type Handoff*
stylesheet, vendored **verbatim** with one change: the render-blocking Google
Fonts `@import` is removed because the faces are self-hosted. To take a system
update, drop in the new file and re-apply that one edit.

Landing-page needs it does not cover — section rhythm, a fluid display scale,
layout containers — live in `tokens.ext.css` and are strictly additive.

> **The package contradicts itself on colour.** Its handoff sheet specifies a
> warm-nude ground with a forest-green accent (`#e8dfcf` / `#185b37` /
> `#d1a658`); the `styles.css` it names as the source of truth specifies a
> neutral grey ground with a gold accent (`#f3f2f2` / `#b68235`). None of the
> handoff's hexes appear in that file. **`styles.css` was chosen.** The brand's
> own takeaway cup is dark green and gold, so the handoff palette may be closer
> to the real brand — switching is a five-value edit in `classical.css`.

## What the photos told us

Several facts were read off the client's own promo images rather than supplied.
**All of these should be confirmed before anything goes public.**

| Fact | Source file |
| --- | --- |
| Address: 9 Alexandr Pushkin St, Tbilisi | `Glaze_is_now_open.webp` |
| Instagram: `@glaze.tbilisi` | `Happy_Hours.webp` |
| Happy Hours: 09:30–14:00 daily, 15% off | `Happy_Hours.webp` |
| Lunch Combo: 30 ₾ (any sandwich + dessert + espresso/americano) | `lunch_combo.webp` |
| Brand mark: "GLAZE — DESSERTS & COFFEE", gold on dark green | `main_chraracter.webp` |

Those three promo files carry typeset copy in the pixels, so the pipeline emits
them uncropped and no page uses them as a croppable photograph.

Note also that several file names do not match their contents: `Breakfast` is a
toasted sandwich, `Cinnamon_Roll` is a pistachio-glazed bun, `Desert` is a fruit
waffle, `Mood` is a hamster on a diving board at sea. Assignments in
`media.js` follow the pictures, not the names.

## Remaining placeholders

Everything below appears as `[PLACEHOLDER: ...]` in the source and in the
rendered page. Search `src/content/en.js` and `ka.js`.

**Content**

- Founding story — both paragraphs on `/about`
- Full opening hours (only the Happy Hours window is known)
- Phone number
- Email address
- Enquiry destination for the private-events CTA (email, form or WhatsApp)
- Alt text for every photograph, and the gallery captions
- Hero eyebrow / image descriptions

**Menu** — every dish name is an example drawn from the client's photography,
and every price is a placeholder **except the Lunch Combo (30 ₾)**. Replace the
whole card with the real one.

**Reviews** — only the Mariam K. review is sourced so far; the section shows
just that one rather than padding the wall with invented quotes. Add real
entries to `src/content/reviews.js` as they come in — below four reviews the
wall renders as a static centered stack instead of the two-column scroll, so
a short list still looks intentional.

**Georgian and Russian copy** — ⚠ both need a native-speaker pass. The
translations are careful, but marketing tone needs a native ear, and the menu
names should be checked against what the counter actually calls them in each
language.

## Accessibility

- `prefers-reduced-motion` is honoured by every animation, and honoured *live*:
  scroll effects run through `gsap.matchMedia`, so flipping the OS setting
  installs the fallback without a reload. Clip-path, scale, parallax and Ken
  Burns are dropped; elements fade in place.
- The review wall auto-scrolls, so it has a visible pause control and pauses on
  hover and on focus (WCAG 2.2.2).
- Skip link, focus-visible rings from the design system, `aria-expanded` on the
  menu toggle, Escape to close the overlay, `aria-pressed` on the language
  switch.
- `<html lang>` follows the language switch, so fonts, hyphenation and
  screen-reader pronunciation all track it.

## Known limitations

- **Image resolution.** The originals are ~900–1226px wide portraits; a 16:9 crop
  leaves at most that width. Full-bleed desktop heroes are soft on large
  displays. Only higher-resolution originals fix this.
- **Client-side meta tags.** Titles and descriptions are set after mount. Fine
  for browser tabs and JS-executing crawlers, but social link previews would
  need server-rendered tags.
- **No analytics, no cookie banner, no form backend.** None was in scope.
- **Two people are recognisable** in `inside_the_cafe.webp` and `Waffle_Man.webp`.
  Confirm permission before publishing.
- **The Google review quote and reviewer name** are reproduced from the public
  Google Business Profile. Confirm this use is approved before going live.

## Deployment

`vercel.json` configures the site for Vercel: Vite preset, `dist/` as output,
and a catch-all rewrite to `index.html`. **The rewrite is not optional** —
routing is client-side (`BrowserRouter`), so without it a direct hit or a
refresh on `/about`, `/menu` or `/contact` returns a 404 from the CDN. Vercel
checks the filesystem before applying rewrites, so real files under `/assets`,
`/img` and `/fonts` are still served directly.

Hashed build output and the self-hosted fonts are cached for a year; the
generated crops in `/img` get a day plus stale-while-revalidate, because their
filenames are stable and re-running `npm run images` would otherwise be
invisible to anyone who has already loaded the page.

To connect the repository, import it at
[vercel.com/new](https://vercel.com/new) and pick `KidashiDesign/glaze`. No
build settings need changing — `vercel.json` supplies them. Every branch then
gets a preview URL and `main` gets the production one.

## Verification

Production build is clean; all generated images and fonts land in `dist/`. Pages
were driven with Playwright at 1440×900 and 390×844, in both languages and with
`prefers-reduced-motion: reduce`, with no console errors and no failed requests.
