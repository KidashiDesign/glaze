import { useRef } from 'react'
import { gsap, useGSAP, CONDITIONS, fadeIn } from '../animation/motion'

export function RevealOnScroll({ children, delay = 0 }) {
  const container = useRef(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add(CONDITIONS, (context) => {
      const { reduced, mobile } = context.conditions

      // 1. Reduced motion fallback
      if (reduced) {
        fadeIn(container.current, { delay })
        return
      }

      // 2. Full motion (Scaled Y offset for mobile vs desktop)
      const yOffset = mobile ? 24 : 40

      gsap.fromTo(
        container.current,
        { autoAlpha: 0, y: yOffset },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          scrollTrigger: {
            trigger: container.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    return () => mm.revert()
  }, { scope: container })

  return <div ref={container}>{children}</div>
}