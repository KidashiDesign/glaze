import { useRef } from 'react'
import { gsap, useGSAP, CONDITIONS, MOBILE_SCALE } from '../animation/motion'

export function ParallaxImage({ src, alt, className = '' }) {
  const container = useRef(null)
  const image = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(CONDITIONS, (context) => {
      const { reduced, mobile } = context.conditions

      if (reduced) return

      // Halve the movement distance on mobile using your motion tokens
      const yMovement = mobile ? 15 * MOBILE_SCALE.drift : 20

      gsap.to(image.current, {
        yPercent: yMovement,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => mm.revert()
  }, { scope: container })

  return (
    

      {alt}
    

  )
}