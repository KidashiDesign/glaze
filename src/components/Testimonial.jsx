import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animation/gsapSetup'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { testimonial } from '../content/siteContent'

export default function Testimonial() {
  const rootRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, {
        opacity: 0,
        y: reducedMotion ? 0 : 20,
        duration: reducedMotion ? 0.5 : 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 80%' },
      })
    })
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="reviews" className="section testimonial">
      <div ref={rootRef} className="container testimonial__inner">
        <div className="testimonial__stars" aria-label={`${testimonial.rating} out of 5 stars`}>
          {'★'.repeat(testimonial.rating)}
        </div>
        <blockquote className="testimonial__quote">&ldquo;{testimonial.quote}&rdquo;</blockquote>
        <p className="testimonial__author">{testimonial.author}</p>
        <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="testimonial__link">
          {testimonial.linkLabel}
        </a>
      </div>
    </section>
  )
}
