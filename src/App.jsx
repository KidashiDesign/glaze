import { useEffect, useLayoutEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './routes/Home'
import About from './routes/About'
import MenuPage from './routes/MenuPage'
import Contact from './routes/Contact'
import NotFound from './routes/NotFound'
import { LocaleProvider, useLocale } from './i18n/LocaleProvider'
import { gsap, ScrollTrigger, CONDITIONS } from './animation/motion'

/**
 * Route change housekeeping.
 *
 * Client-side navigation keeps the scroll position and swaps the DOM under it,
 * which leaves ScrollTrigger holding measurements for a page that no longer
 * exists. Resetting scroll first and refreshing after the new page has laid
 * out keeps every scrubbed animation aligned with what is on screen.
 */
function RouteChrome({ children }) {
  const { pathname } = useLocation()
  const { locale } = useLocale()
  const main = useRef(null)
  const lenis = useLenis()

  // Keeps GSAP ScrollTrigger updated on every Lenis scroll tick
  useLenis(() => {
    ScrollTrigger.update()
  })

  useLayoutEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, lenis])

  useEffect(() => {
    // Two frames: one for React to commit, one for the browser to lay out and
    // for any newly decoded image to take its final height.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => ScrollTrigger.refresh())
    })
    return () => cancelAnimationFrame(raf)
  }, [pathname, locale])

  // A short cross-fade between pages, so navigation does not snap.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add(CONDITIONS, (context) => {
        if (context.conditions.reduced) {
          gsap.set(main.current, { autoAlpha: 1 })
          return
        }
        gsap.fromTo(
          main.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.45, ease: 'power2.out' },
        )
      })
      return () => mm.revert()
    }, main)

    return () => ctx.revert()
  }, [pathname])

  return (
    <main id="main" ref={main} tabIndex={-1}>
      {children}
    </main>
  )
}

function Shell() {
  const { t } = useLocale()

  return (
    <>
      <a className="skip-link" href="#main">
        {t.common.skipToContent}
      </a>
      <Nav />
      <RouteChrome>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </RouteChrome>
      <Footer />
    </>
  )
}

export default function App() {
  // Prevent GSAP lag smoothing from fighting with Lenis scroll animation loops
  useLayoutEffect(() => {
    gsap.ticker.lagSmoothing(0)
  }, [])

  return (
    <LocaleProvider>
      <BrowserRouter>
        <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
          <Shell />
        </ReactLenis>
      </BrowserRouter>
    </LocaleProvider>
  )
}