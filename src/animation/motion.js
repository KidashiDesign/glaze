import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// One default per property, so a tween written in one component feels like a
// tween written in another. Mirrors the CSS custom properties in tokens.ext.css.
gsap.defaults({ ease: 'power3.out', duration: 0.78 })

export { gsap, ScrollTrigger }

/** Breakpoint where the layout goes from stacked to side-by-side. */
export const DESKTOP_QUERY = '(min-width: 860px)'
export const MOBILE_QUERY = '(max-width: 859px)'

/**
 * The condition set every scroll animation in this project matches against.
 *
 * `reduced` / `full` let GSAP handle prefers-reduced-motion natively: when the
 * preference flips, matchMedia reverts the tweens belonging to the old branch
 * and runs the new one, so the fallback is live rather than read once at mount.
 */
export const CONDITIONS = {
  desktop: DESKTOP_QUERY,
  mobile: MOBILE_QUERY,
  reduced: '(prefers-reduced-motion: reduce)',
  full: '(prefers-reduced-motion: no-preference)',
}

/**
 * Mobile keeps every animation concept desktop has — the brief is explicit
 * that nothing gets switched off — but the numbers are scaled: sections are
 * shorter, so a scrubbed effect has less scroll to play out in, and large
 * transforms cost more on weaker hardware.
 */
export const MOBILE_SCALE = {
  /** Parallax drift is halved: stacked images have no lateral context to
   *  play against, so the full desktop offset reads as a glitch. */
  drift: 0.5,
  /** Cap on how far a scroll-scrubbed element may scale. */
  maxScale: 1.06,
}

/** The plain fade every animation degrades to under reduced-motion. */
export function fadeIn(targets, { stagger = 0, delay = 0 } = {}) {
  return gsap.fromTo(
    targets,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.4, ease: 'none', stagger, delay, overwrite: 'auto' },
  )
}
