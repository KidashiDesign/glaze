import { useLayoutEffect, useRef } from 'react'
import { gsap, CONDITIONS, MOBILE_SCALE } from './motion'

/**
 * TRUE PARALLAX DRIFT — twin image blocks moving at different rates.
 *
 * The back image travels at roughly half the scroll rate and the front image
 * at the scroll rate, so the pair separates in depth as the section passes.
 * Both are scrubbed, so scrolling back up closes the gap again.
 *
 * On mobile the images stack instead of sitting side by side, which removes
 * the lateral reference that sells the effect and makes a full-strength offset
 * read as a rendering glitch — so the drift is halved there.
 */
export default function ParallaxDrift({ back, front, className = '' }) {
  const root = useRef(null)
  const backRef = useRef(null)
  const frontRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(CONDITIONS, (context) => {
        const { mobile, reduced } = context.conditions

        if (reduced) {
          gsap.set([backRef.current, frontRef.current], { yPercent: 0 })
          gsap.fromTo(
            [backRef.current, frontRef.current],
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              duration: 0.4,
              ease: 'none',
              stagger: 0.08,
              scrollTrigger: { trigger: root.current, start: 'top 85%' },
            },
          )
          return
        }

        const amount = mobile ? MOBILE_SCALE.drift : 1
        const scrollTrigger = {
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }

        // Negative yPercent = travels up faster than the page scrolls down.
        gsap.fromTo(
          backRef.current,
          { yPercent: 7 * amount },
          { yPercent: -7 * amount, ease: 'none', scrollTrigger },
        )
        gsap.fromTo(
          frontRef.current,
          { yPercent: 14 * amount },
          { yPercent: -14 * amount, ease: 'none', scrollTrigger },
        )
      })

      return () => mm.revert()
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={root} className={`drift ${className}`.trim()}>
      <div ref={backRef} className="drift__back">
        {back}
      </div>
      <div ref={frontRef} className="drift__front">
        {front}
      </div>
    </div>
  )
}
