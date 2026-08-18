import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleProvider'
import { locales, localeCodes } from '../content'
import { gsap, CONDITIONS } from '../animation/motion'

/** Where the nav flips from transparent to solid — just past the hero's lede. */
const SOLID_AT = 80

export default function Nav() {
  const { t, locale, setLocale } = useLocale()
  const { pathname } = useLocation()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const overlay = useRef(null)
  const toggleRef = useRef(null)

  const links = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about },
    { to: '/menu', label: t.nav.menu },
    { to: '/contact', label: t.nav.contact },
  ]

  // Background transparent → solid, driven by scroll position.
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        setSolid(window.scrollY > SOLID_AT)
        frame = 0
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  // Navigating closes the overlay; otherwise it would cover the new page.
  useEffect(() => setOpen(false), [pathname])

  // Hold the page still behind the overlay, and let Escape dismiss it.
  useEffect(() => {
    if (!open) return

    const { style } = document.body
    const previous = style.overflow
    style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // Staggered fade-up for the overlay's links, 0.05s apart.
  useLayoutEffect(() => {
    if (!open || !overlay.current) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add(CONDITIONS, (context) => {
        const items = overlay.current.querySelectorAll('[data-overlay-item]')
        if (context.conditions.reduced) {
          gsap.fromTo(items, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.25, ease: 'none' })
          return
        }
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 22 },
          { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out' },
        )
      })
      return () => mm.revert()
    }, overlay)

    return () => ctx.revert()
  }, [open])

  return (
    <>
      <header className={`nav-bar ${solid || open ? 'is-solid' : ''}`}>
        <div className="nav-bar__inner container">
          <NavLink to="/" className="nav-bar__brand" aria-label={t.brand.name}>
            <span className="nav-bar__brand-name">{t.brand.name}</span>
            <span className="nav-bar__brand-tagline">{t.brand.tagline}</span>
          </NavLink>

          <nav className="nav-bar__links" aria-label={t.nav.menu}>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className="nav-bar__link">
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-bar__actions">
            <LanguageSwitch locale={locale} setLocale={setLocale} label={t.nav.languageLabel} />

            <button
              ref={toggleRef}
              type="button"
              className={`nav-bar__toggle ${open ? 'is-open' : ''}`}
              aria-expanded={open}
              aria-controls="nav-overlay"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="nav-bar__burger" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div id="nav-overlay" ref={overlay} className="nav-overlay">
          <nav className="nav-overlay__links container" aria-label={t.nav.menu}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                data-overlay-item
                className="nav-overlay__link"
              >
                {link.label}
              </NavLink>
            ))}
            <p data-overlay-item className="nav-overlay__meta text-muted">
              {t.brand.city}
            </p>
          </nav>
        </div>
      )}
    </>
  )
}

function LanguageSwitch({ locale, setLocale, label }) {
  return (
    <div className="lang" role="group" aria-label={label}>
      {localeCodes.map((code) => (
        <button
          key={code}
          type="button"
          className="lang__opt"
          aria-pressed={locale === code}
          lang={locales[code].meta.htmlLang}
          onClick={() => setLocale(code)}
        >
          <span aria-hidden="true">{locales[code].meta.localeShort}</span>
          <span className="visually-hidden">{locales[code].meta.localeName}</span>
        </button>
      ))}
    </div>
  )
}
