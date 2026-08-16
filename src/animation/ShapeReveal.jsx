import { useLayoutEffect, useRef } from 'react'
import { gsap, CONDITIONS, MOBILE_SCALE } from './motion'

/**
 * SHAPE-REVEAL-PARALLAX — the signature effect.
 *
 * The image starts clipped into a rounded shape smaller than its container and
 * slightly scaled down. As the section scrolls past, the clip opens to full
 * coverage and the scale resolves to 1, so the picture appears to break out of
 * its frame and fill the space.
 *
 * The whole thing is scrubbed: it tracks scroll position exactly rather than
 * playing on a timer, which means it also runs backwards when the user scrolls
 * up. `start`/`end` place the effect across roughly one viewport of travel.
 *
 * Under prefers-reduced-motion there is no clip, no scale and no scrub — the
 * image is laid out at its final size and fades in once.
 */
export default function ShapeReveal({
  children,
  className = '',
  /** Inset of the starting shape, in % of the container. */
  from = { top: 14, right: 8, bottom: 14, left: 8 },
  /** Corner radius of the starting shape, in px. */
  radius = 32,
  /** Scale the image starts at. */
  scale = 0.85,
  /** Where the scrub ends. 'top top' is a full viewport of travel. */
  end = 'top top',
  as: Tag = 'div',
}) {
  const root = useRef(null)
  const clip = useRef(null)
  const inner = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(CONDITIONS, (context) => {
        const { mobile, reduced } = context.conditions

        if (reduced) {
          // No clip, no scale, no scrub — the shape is skipped entirely and the
          // image simply appears. Set the resting state explicitly so nothing
          // is left over if the preference is toggled at runtime.
          gsap.set(clip.current, { clipPath: 'inset(0% 0% 0% 0% round 0px)' })
          gsap.set(inner.current, { scale: 1 })
          gsap.fromTo(
            root.current,
            { autoAlpha: 0 },
            {
              autoAlpha: 1,
              duration: 0.4,
              ease: 'none',
              scrollTrigger: { trigger: root.current, start: 'top 85%' },
            },
          )
          return
        }

        // Mobile sections are shorter, so the effect gets less scroll to play
        // out in and a smaller scale delta to keep it cheap to composite.
        const startScale = mobile ? Math.max(scale, 1 / MOBILE_SCALE.maxScale) : scale
        const scrubEnd = mobile ? 'top 20%' : end

        gsap
          .timeline({
            scrollTrigger: {
              trigger: root.current,
              start: 'top bottom',
              end: scrubEnd,
              scrub: true,
            },
            defaults: { ease: 'none' },
          })
          .fromTo(
            clip.current,
            {
              clipPath: `inset(${from.top}% ${from.right}% ${from.bottom}% ${from.left}% round ${radius}px)`,
            },
            { clipPath: 'inset(0% 0% 0% 0% round 0px)' },
            0,
          )
          .fromTo(inner.current, { scale: startScale }, { scale: 1 }, 0)
      })

      return () => mm.revert()
    }, root)

    return () => ctx.revert()
  }, [from.top, from.right, from.bottom, from.left, radius, scale, end])

  return (
    <Tag ref={root} className={`shape-reveal ${className}`.trim()}>
      <div ref={clip} className="shape-reveal__clip">
        <div ref={inner} className="shape-reveal__inner">
          {children}
        </div>
      </div>
    </Tag>
  )
}
