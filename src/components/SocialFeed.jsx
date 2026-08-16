import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animation/gsapSetup'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { social } from '../content/siteContent'

export default function SocialFeed() {
  const trackRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const items = trackRef.current.querySelectorAll('.social-feed__item')
    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: reducedMotion ? 0 : 24,
        duration: reducedMotion ? 0.4 : 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: trackRef.current, start: 'top 85%' },
      })
    })
    return () => ctx.revert()
  }, [reducedMotion])

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  }

  return (
    <section id="social" className="section social-feed">
      <div className="container social-feed__header">
        <div>
          <span className="eyebrow">{social.eyebrow}</span>
          <h2 className="social-feed__heading">{social.heading}</h2>
        </div>
        <div className="social-feed__controls">
          <button aria-label="Scroll left" onClick={() => scrollBy(-1)}>‹</button>
          <button aria-label="Scroll right" onClick={() => scrollBy(1)}>›</button>
        </div>
      </div>

      <div ref={trackRef} className="social-feed__track">
        {social.images.map((src, i) => (
          <div key={src} className="social-feed__item">
            <img src={src} alt={`Glaze cafe photo ${i + 1}`} loading="lazy" />
            <div className="social-feed__overlay" aria-hidden="true">
              <span>♥</span>
              <span>💬</span>
            </div>
            <div className="social-feed__caption">@glaze.tbilisi</div>
          </div>
        ))}
      </div>

      <div className="container">
        <a
          href={social.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn social-feed__cta"
        >
          {social.cta.label}
        </a>
      </div>
    </section>
  )
}
