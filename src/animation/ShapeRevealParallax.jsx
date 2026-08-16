import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from './gsapSetup'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

/**
 * "Image breaks out of shape to fullscreen" — Section 4.1 of the brief.
 * A clipped, scaled-down image scrubs open to full coverage as its section
 * enters the viewport, and reverses on scroll-up. Mobile gets the same
 * mechanic with a shorter scroll distance and a capped scale delta so it
 * doesn't jank on weaker devices (Section 8).
 *
 * prefers-reduced-motion: falls back to a plain fade-in, no clip/scale.
 */
export default function ShapeRevealParallax({
  src,
  alt = '',
  shape = 'rounded', // 'rounded' | 'blob'
  className = '',
}) {
  const wrapRef = useRef(null)
  const imgRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(img, { clipPath: 'inset(0 0 0 0)', scale: 1 })
        gsap.from(img, {
          opacity: 0,
          duration: 0.6,
          scrollTrigger: { trigger: wrap, start: 'top 85%' },
        })
        return
      }

      const isMobile = window.matchMedia('(max-width: 767px)').matches
      const insetStart = shape === 'blob' ? '14% 10% 14% 10%' : '10% 8% 10% 8%'
      const startScale = isMobile ? 0.92 : 0.85 // capped drift on mobile

      gsap.set(img, { clipPath: `inset(${insetStart})`, scale: startScale })

      gsap.to(img, {
        clipPath: 'inset(0% 0% 0% 0%)',
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: isMobile ? 'top 40%' : 'top top',
          scrub: true,
        },
      })
    }, wrap)

    return () => ctx.revert()
  }, [reducedMotion, shape])

  return (
    <div ref={wrapRef} className={`shape-reveal ${className}`}>
      <img ref={imgRef} src={src} alt={alt} className="shape-reveal__img" loading="lazy" />
    </div>
  )
}
