import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from './gsapSetup'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * True Parallax Drift for the "Twin Image Blocks" (About section, 4.2).
 * Background image drifts ~0.5x scroll speed, foreground ~1x.
 * Mobile: drift amount halved since images stack instead of sitting side by side.
 */
export default function ParallaxDrift({ background, foreground, altBg = '', altFg = '' }) {
  const wrapRef = useRef(null)
  const bgRef = useRef(null)
  const fgRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    if (!wrap || reducedMotion) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const bgDrift = isMobile ? -20 : -40 // ~0.5x, halved on mobile
    const fgDrift = isMobile ? 40 : 80 // ~1x, halved on mobile

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: bgDrift,
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.to(fgRef.current, {
        yPercent: fgDrift,
        ease: 'none',
        scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, wrap)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div ref={wrapRef} className="parallax-drift">
      <div className="parallax-drift__bg-wrap">
        <img ref={bgRef} src={background} alt={altBg} className="parallax-drift__bg" loading="lazy" />
      </div>
      <div className="parallax-drift__fg-wrap">
        <img ref={fgRef} src={foreground} alt={altFg} className="parallax-drift__fg" loading="lazy" />
      </div>
    </div>
  )
}
