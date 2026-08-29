# Woofles — Demo Website Brief (v2)

This replaces the original prompt. Every contradiction in that version has been
resolved against a decision, and every requirement that turned out to be
impossible with the supplied assets has been rewritten to something achievable.
Decisions are marked **[DECIDED]**; the reasoning is kept so nobody re-opens a
settled question.

---

## 1. What is being built

A responsive, multi-page demo website for **Woofles — Desserts & Coffee**, a cafe
at 9 Alexandr Pushkin St, Tbilisi, Georgia.

Purpose: a client presentation. The structure and code must be clean and
modular, and content must be swappable without touching layout or animation
code. Anything not supplied by the client is marked `[PLACEHOLDER: ...]` in both
the source and the rendered UI.

**Audience:** international and German-speaking. The site ships **bilingual,
English and German**, switchable in the nav and remembered across visits.

## 2. Scope — [DECIDED] full multi-page site

Four routes, client-side (React Router, no Next.js):

| Route      | Contains                                                              |
| ---------- | --------------------------------------------------------------------- |
| `/`        | Hero · intro · USPs · craft · menu teaser · reviews · events · gallery |
| `/about`   | Hero · story · full-bleed shape reveal · values · visit · gallery      |
| `/menu`    | Hero · full menu card · reviews                                       |
| `/contact` | Hero · address & hours · private events                               |

> Supersedes the original brief's conflict between its section-by-section map
> (six sections) and its closing paragraph ("only the menu and Google reviews").
> The full site won.

## 3. Visual language — [DECIDED] the Classical `styles.css` palette

Source of truth: `styles.css` from the *Zesty Color & Type Handoff* package,
vendored verbatim at `src/styles/classical.css`.

- Ground `#f3f2f2` · surface `#eae9e9` · text `#201f1d` · accent `#b68235` (gold)
- Nunito headings over Nunito body; semibold ceiling, display sizes
  set in the normal cut
- Colour applied as stroke, rule and underline — never as a solid fill
- Photographs wrapped in `.plate` for the archival grade

> The package is internally inconsistent: its handoff sheet describes a
> warm-nude ground with a forest-green accent (`#e8dfcf` / `#185b37` /
> `#d1a658`), and none of those hexes appear in the `styles.css` it names as the
> source of truth. **`styles.css` wins.** Worth knowing: the brand's own cup is
> dark green and gold, so the handoff palette is probably the "real" brand — it
> is a five-value swap in `classical.css` if that is ever preferred.

Two additive layers sit on top and never redefine a system token:
`tokens.ext.css` (section rhythm, fluid display scale, layout) and `base.css`.
Classical is sized for interface work — its spacing scale stops at 36.8px and
`h1` is a fixed 42px — so a marketing page needs the extension.

## 4. Imagery — [DECIDED] crop the originals to landscape

All 23 supplied photos are portrait or square; **none is landscape**. They are
cropped by `scripts/prepare-images.mjs` (`npm run images`), which picks the crop
window by content — scoring every candidate band on edge energy and saturation,
which on food photography lands on the dish rather than on an empty wall.

- `wide/` — 16:9, used everywhere: gallery, section blocks, desktop heroes
- `tall/` — 4:5, mobile heroes only, where a 16:9 band leaves too little subject
- `promo/` — uncropped; see below

Three rules the pipeline encodes:

1. **Promo graphics are never cropped.** `Woofles_is_now_open`, `Happy_Hours` and
   `lunch_combo` have typeset copy baked into the pixels. Cropping cuts words in
   half.
2. **Portrait-only subjects are excluded from the landscape set.** `cup` crops
   to bare corrugated cardboard, `Mood` to empty sea.
3. **Never upscale.** The ladder is capped at the source width.

**Resolution caveat:** a 900px-wide portrait yields at most a 900×506 landscape.
Full-bleed desktop heroes are therefore soft on large displays. Higher-resolution
originals would fix this and nothing else will.

**File names are unreliable** — `Breakfast` is a toasted sandwich,
`Cinnamon_Roll` is a pistachio-glazed bun, `Desert` is a fruit waffle, and
`Mood` is a hamster on a diving board at sea. Assignments in
`src/content/media.js` follow what the photographs actually show.

## 5. Menu — [DECIDED] demo card, example dishes, placeholder prices

The menu is built from what the client's own photography shows them serving:
waffles and crêpes, desserts and ice cream, a coffee bar, and breakfast/lunch.
A standing notice at the top of the page says so.

Every price is a placeholder **except the Lunch Combo (30 ₾)**, which is printed
in the client's own promo image.

> Supersedes the original brief's gelato menu (Pistachio & Sea Salt, Georgian
> Honey & Walnut, Tbilisi Sour Cherry Sorbet). Woofles is a dessert-and-coffee
> shop, not a gelateria — ice cream appears as a topping on waffles. Its own
> Google listing reads "Woofles • Desserts & Coffee".

## 6. Reviews — [DECIDED] cached, not live

Reviews live in `src/content/reviews.js` and render instantly from the bundle.

> Live Google reviews were requested but are not buildable here: the Places API
> needs a key with billing, its web endpoint is CORS-restricted, the JS SDK caps
> at five reviews and exposes the key client-side, and Google's terms limit
> caching. All of that on the critical path of a page that must load fast. A
> cached file has the same appearance, loads instantly and ships no credentials.
> Refreshing it is a file edit; a Places response maps onto the shape one-to-one.

Presentation: two columns scrolling vertically in opposite directions, looping
seamlessly, with speed responding to page-scroll velocity. Pausable on hover,
on focus, and by an explicit button.

Only the **Mariam K.** review is real. The rest are clearly marked placeholders
and render with a dashed border. Quotes are never translated — they stay in the
language the reviewer wrote them in.

## 7. Gallery

Horizontal `scroll-snap-type: x mandatory` strip, 12 landscape frames. Native
touch scrolling on mobile; pointer-drag and arrow buttons on desktop. Staggered
fade-up on entry. Desktop gets a hover overlay; touch gets a permanent caption
bar, since there is no hover state to reveal it.

## 8. Animation

| Element              | Effect                                                    | Trigger                       |
| -------------------- | --------------------------------------------------------- | ----------------------------- |
| Shape-Reveal-Parallax | `clip-path` inset → full, with scale 0.85 → 1              | Scrubbed, `top bottom`→`top top` |
| Twin image blocks    | True parallax drift, back ~0.5×, front ~1×                 | Scrubbed                      |
| Hero headline        | Word-by-word rise out of the line, 0.055s apart            | On load                       |
| Hero background      | Ken Burns, scale 1 → 1.08 over 8s, yoyo                    | On load, looping              |
| Numbered USPs        | Fade-up, 0.1s apart                                        | IntersectionObserver, ~0.3    |
| Sticky nav           | Transparent → solid                                        | Scroll position               |
| Mobile menu          | Fullscreen overlay, links stagger 0.05s                    | Burger tap                    |
| Buttons              | Tint sweep from the left                                   | Hover / focus                 |
| Review wall          | Looping vertical scroll, velocity-coupled                  | Continuous + scroll           |
| Route change         | Cross-fade                                                 | Navigation                    |

**Reduced motion is mandatory and complete.** Every scroll animation runs
through `gsap.matchMedia`, so `prefers-reduced-motion` is live — flipping the OS
setting reverts the tweens and installs the fallback without a reload. Clip-path,
scale, parallax and Ken Burns are dropped entirely; elements fade in place.

**Mobile keeps every animation concept** — nothing is switched off. Only the
numbers change: shorter scrub distances, drift halved, scale capped.

## 9. Non-negotiables

- React + Vite, client-side only. No Next.js.
- GSAP + ScrollTrigger for scroll-linked work; IntersectionObserver for one-shot
  reveals.
- Copy and images live in `src/content/`. No component or GSAP file is touched to
  change wording, prices, links or photographs.
- Fonts self-hosted — no third-party request on the critical path.
- No text anywhere on the site indicating how it was built.

## 10. Known open items

See the README's placeholder list. The substantive ones: full opening hours,
phone, email, the founding story, an enquiry destination for the events CTA,
real prices, real reviews, and a native-speaker pass over the German copy.
