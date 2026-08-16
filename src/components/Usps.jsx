import { useLayoutEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../animation/gsapSetup'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { usps } from '../content/siteContent'

export default function Usps() {
  const listRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const items = listRef.current.querySelectorAll('.usp')
    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: reducedMotion ? 0 : 24,
        duration: reducedMotion ? 0.5 : 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: listRef.current, start: 'top 75%' },
      })
    })
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section className="section usps">
      <div className="container">
        <span className="eyebrow">{usps.eyebrow}</span>
        <div ref={listRef} className="usps__list">
          {usps.items.map((item) => (
            <div key={item.number} className="usp">
              <span className="usp__number">{item.number}</span>
              <h3 className="usp__title">{item.title}</h3>
              <p className="usp__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
