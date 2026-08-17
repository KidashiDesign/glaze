import { useEffect, useRef } from 'react'

/**
 * Staggered fade-up for a list of elements as it scrolls into view.
 *
 * Uses IntersectionObserver rather than ScrollTrigger: the effect fires once
 * and never needs to track scroll position, so an observer is both cheaper and
 * the tool the brief calls for. Children are revealed in DOM order with a fixed
 * delay between them.
 *
 * The animation is plain CSS — the hook only flips a class — which keeps the
 * reduced-motion fallback in the stylesheet next to the transition it replaces.
 * See `.reveal` in sections.css.
 *
 * @param {object}  options
 * @param {number}  options.threshold  Visible fraction that triggers the reveal.
 * @param {number}  options.stagger    Seconds between children.
 * @param {unknown} options.resetKey   Change to re-arm (e.g. on locale switch).
 */
export function useRevealOnView({ threshold = 0.3, stagger = 0.1, resetKey } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const items = Array.from(root.querySelectorAll('[data-reveal]'))
    const targets = items.length ? items : [root]

    targets.forEach((el, i) => {
      el.style.setProperty('--reveal-delay', `${i * stagger}s`)
      el.classList.remove('is-revealed')
    })

    // A high threshold never fires for an element taller than the viewport,
    // which is exactly the case on a phone — so it is clamped by how much of
    // the viewport the element can actually occupy.
    const viewport = window.innerHeight || 1
    const tallest = Math.max(...targets.map((el) => el.getBoundingClientRect().height), 1)
    const safeThreshold = Math.min(threshold, (viewport * 0.6) / tallest, 0.99)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      },
      { threshold: safeThreshold, rootMargin: '0px 0px -5% 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold, stagger, resetKey])

  return ref
}
