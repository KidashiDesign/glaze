import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

/**
 * Live `prefers-reduced-motion` state, for the handful of effects that are not
 * GSAP tweens (autoplaying marquees, drag inertia) and so cannot rely on
 * `gsap.matchMedia` to revert them. Scroll animations should use the
 * CONDITIONS map in motion.js instead.
 */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(QUERY)
    const onChange = (event) => setReduced(event.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return reduced
}
