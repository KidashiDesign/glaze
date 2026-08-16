import { useEffect, useRef, useState } from 'react'
import { nav } from '../content/siteContent'

export default function Nav() {
  const navRef = useRef(null)
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header ref={navRef} className={`nav ${solid ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <a href="#top" className="nav__brand">{nav.brand}</a>
          <nav className="nav__links" aria-label="Primary">
            {nav.links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>
          <a href={nav.cta.href} className="btn nav__cta">{nav.cta.label}</a>
          <button
            className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mobile-menu__links" aria-label="Mobile">
          {nav.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{ transitionDelay: menuOpen ? `${i * 0.05}s` : '0s' }}
            >
              {l.label}
            </a>
          ))}
          <a href={nav.cta.href} className="btn mobile-menu__cta" onClick={closeMenu}
             style={{ transitionDelay: menuOpen ? `${nav.links.length * 0.05}s` : '0s' }}>
            {nav.cta.label}
          </a>
        </nav>
      </div>
    </>
  )
}
