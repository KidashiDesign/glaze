import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animation/gsapSetup'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { hero } from '../content/siteContent'

export default function Hero() {
  const headlineRef = useRef(null)
  const subRef = useRef(null)
  const ctaRef = useRef(null)
  const imgRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (reducedMotion) {
        tl.from([headlineRef.current, subRef.current, ctaRef.current], {
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
        })
      } else {
        const words = headlineRef.current.querySelectorAll('.hero__word')
        tl.from(words, { opacity: 0, y: 20, duration: 0.7, stagger: 0.05 })
          .from(subRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.35')
          .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.35')

        gsap.to(imgRef.current, {
          scale: 1.08,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
    return () => ctx.revert()
  }, [reducedMotion])

  const words = hero.headline.split(' ')

  return (
    <section id="top" className="hero">
      <div className="hero__media">
        <img ref={imgRef} src={hero.image} alt="" className="hero__img" />
        <div className="hero__scrim" />
      </div>
      <div className="hero__content">
        {hero.eyebrow && <span className="eyebrow eyebrow--light">{hero.eyebrow}</span>}
        <h1 ref={headlineRef} className="hero__headline">
          {words.map((w, i) => (
            <span key={i} className="hero__word">{w}{i < words.length - 1 ? ' ' : ''}</span>
          ))}
        </h1>
        <p ref={subRef} className="hero__sub">{hero.sub}</p>
        <a ref={ctaRef} href={hero.cta.href} className="btn btn--light hero__cta">{hero.cta.label}</a>
      </div>
    </section>
  )
}
