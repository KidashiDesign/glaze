import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../animation/gsapSetup'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { menu } from '../content/siteContent'

export default function Menu() {
  const rootRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  useLayoutEffect(() => {
    const groups = rootRef.current.querySelectorAll('.menu__category')
    const ctx = gsap.context(() => {
      groups.forEach((group) => {
        const rows = group.querySelectorAll('.menu__item')
        gsap.from(rows, {
          opacity: 0,
          y: reducedMotion ? 0 : 16,
          duration: reducedMotion ? 0.4 : 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: group, start: 'top 80%' },
        })
      })
    })
    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section id="menu" ref={rootRef} className="section menu">
      <div className="container">
        <span className="eyebrow">{menu.eyebrow}</span>
        <h2 className="menu__heading">{menu.heading}</h2>
        <div className="menu__categories">
          {menu.categories.map((cat) => (
            <div key={cat.title} className="menu__category">
              <h3 className="menu__category-title">{cat.title}</h3>
              <ul className="menu__items">
                {cat.items.map((item) => (
                  <li key={item.name} className="menu__item">
                    <div className="menu__item-row">
                      <span className="menu__item-name">{item.name}</span>
                      <span className="menu__item-price">{item.price}</span>
                    </div>
                    <p className="menu__item-desc">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
