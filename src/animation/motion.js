import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// One default per property, so a tween written in one component feels like a
// tween written in another. Mirrors the CSS custom properties in tokens.ext.css.
gsap.defaults({ ease: 'power3.out', duration: 0.78 })

export { gsap, ScrollTrigger, useGSAP }

/** Breakpoint where the layout goes from stacked to side-by-side. */
export const DESKTOP_QUERY = '(min-width: 860px)'
export const MOBILE_QUERY = '(max-width: 859px)'

export const CONDITIONS = {
  desktop: DESKTOP_QUERY,
  mobile: MOBILE_QUERY,
  reduced: '(prefers-reduced-motion: reduce)',
  full: '(prefers-reduced-motion: no-preference)',
}

export const MOBILE_SCALE = {
  drift: 0.5,
  maxScale: 1.06,
}

export function fadeIn(targets, { stagger = 0, delay = 0 } = {}) {
  return gsap.fromTo(
    targets,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 0.4, ease: 'none', stagger, delay, overwrite: 'auto' },
  )
}