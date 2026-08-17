import { useLayoutEffect, useRef } from 'react'
import { gsap, CONDITIONS, MOBILE_SCALE } from './motion'

/**
 * Vertical scroll parallax for an image sitting inside an overflow-hidden
 * frame. The image is oversized in CSS (see `.menu-cat__picture`) so the
 * translate never exposes an edge.
 */
export function useParallaxImage() {
  const frameRef = useRef(null)
  const imageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(CONDITIONS, (context) => {
        const { mobile, reduced } = context.conditions
        if (reduced) {
          gsap.set(imageRef.current, { yPercent: 0 })
          return
        }

        const amount = (mobile ? MOBILE_SCALE.drift : 1) * 8
        gsap.fromTo(
          imageRef.current,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: 'none',
            scrollTrigger: {
              trigger: frameRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        )
      })

      return () => mm.revert()
    }, frameRef)

    return () => ctx.revert()
  }, [])

  return { frameRef, imageRef }
}
