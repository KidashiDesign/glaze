import { useLayoutEffect, useRef } from 'react'
import { gsap, CONDITIONS } from './motion'

/**
 * Slow, looping Ken Burns push on a background image — scale 1 → 1.08 over
 * ~8s, reversing rather than snapping back so the loop has no visible seam.
 *
 * Skipped entirely under prefers-reduced-motion: a continuous, unstoppable
 * transform is precisely the kind of motion that setting exists to remove, so
 * there is no reduced variant of it — the image simply sits still.
 */
export function useKenBurns({ to = 1.08, duration = 8 } = {}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(CONDITIONS, (context) => {
        if (context.conditions.reduced) {
          gsap.set(ref.current, { scale: 1 })
          return
        }
        gsap.fromTo(
          ref.current,
          { scale: 1 },
          { scale: to, duration, ease: 'sine.inOut', repeat: -1, yoyo: true },
        )
      })

      return () => mm.revert()
    }, ref)

    return () => ctx.revert()
  }, [to, duration])

  return ref
}
