import { useCallback, useEffect, useRef, useState } from 'react'
import Picture from './Picture'
import SectionHeading from './SectionHeading'
import { galleryImages } from '../content/media'
import { useLocale } from '../i18n/LocaleProvider'
import { useRevealOnView } from '../animation/useRevealOnView'

/** Lucide `arrow-left` / `arrow-right`. */
function Arrow({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={direction === 'left' ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

/** Lucide `heart` and `message-circle`, for the desktop hover overlay. */
function OverlayIcons() {
  return (
    <span className="gallery__icons" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 20.3 4.6 13a4.6 4.6 0 0 1 6.5-6.5l.9.9.9-.9A4.6 4.6 0 0 1 19.4 13Z" />
      </svg>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 3c5 0 9 3.4 9 7.6 0 4.2-4 7.6-9 7.6a10 10 0 0 1-2.6-.3L4 21l1.4-3.7A7.3 7.3 0 0 1 3 10.6C3 6.4 7 3 12 3Z" />
      </svg>
    </span>
  )
}

/**
 * Horizontal photo strip — scroll-snap, swipeable on touch, drag- or
 * button-driven with a pointer.
 *
 * Every frame is one of the generated 16:9 crops; nothing portrait enters here.
 * Scrolling is the browser's own (`scroll-snap-type: x mandatory`), so touch
 * momentum, trackpad gestures and keyboard arrows all behave natively — the
 * drag handler only adds pointer-dragging, which the platform does not give us.
 */
export default function Gallery() {
  const { t, locale } = useLocale()
  const scroller = useRef(null)
  const revealRef = useRevealOnView({ threshold: 0.15, stagger: 0.1, resetKey: locale })
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateEdges = useCallback(() => {
    const el = scroller.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2)
  }, [])

  /** Whichever card sits nearest the strip's visual centre becomes "active"
   *  — scaled up, in focus, while the rest blur and dim outward from it. */
  const updateActive = useCallback(() => {
    const el = scroller.current
    if (!el) return
    const items = el.querySelectorAll('[data-gallery-item]')
    const containerCenter = el.getBoundingClientRect().left + el.clientWidth / 2
    let closest = 0
    let minDist = Infinity
    items.forEach((item, i) => {
      const rect = item.getBoundingClientRect()
      const dist = Math.abs(rect.left + rect.width / 2 - containerCenter)
      if (dist < minDist) {
        minDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }, [])

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    updateEdges()
    updateActive()

    let frame = null
    const onScroll = () => {
      updateEdges()
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = null
        updateActive()
      })
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [updateEdges, updateActive])

  /** One card plus its gap — the distance a button press should travel. */
  const step = () => {
    const el = scroller.current
    const card = el?.querySelector('[data-gallery-item]')
    if (!card) return 320
    const gap = parseFloat(getComputedStyle(el).columnGap || '0')
    return card.getBoundingClientRect().width + gap
  }

  const scrollBy = (direction) => {
    scroller.current?.scrollBy({ left: direction * step(), behavior: 'smooth' })
  }

  // Pointer dragging. Touch is left alone — native scrolling already handles
  // it, and intercepting it would break momentum and snap.
  useEffect(() => {
    const el = scroller.current
    if (!el) return

    let dragging = false
    let startX = 0
    let startScroll = 0
    let moved = 0

    const onPointerDown = (event) => {
      if (event.pointerType === 'touch') return
      dragging = true
      moved = 0
      startX = event.clientX
      startScroll = el.scrollLeft
      el.classList.add('is-dragging')
    }

    const onPointerMove = (event) => {
      if (!dragging) return
      const delta = event.clientX - startX
      moved = Math.abs(delta)
      if (moved > 3) el.setPointerCapture?.(event.pointerId)
      el.scrollLeft = startScroll - delta
    }

    const onPointerUp = (event) => {
      if (!dragging) return
      dragging = false
      el.classList.remove('is-dragging')
      el.releasePointerCapture?.(event.pointerId)
      // Suppress the click that follows a real drag, so dragging across a
      // frame does not also activate whatever is under the cursor.
      if (moved > 5) {
        const swallow = (e) => e.preventDefault()
        el.addEventListener('click', swallow, { capture: true, once: true })
        setTimeout(() => el.removeEventListener('click', swallow, { capture: true }), 0)
      }
    }

    el.addEventListener('pointerdown', onPointerDown)
    el.addEventListener('pointermove', onPointerMove)
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('pointercancel', onPointerUp)
    return () => {
      el.removeEventListener('pointerdown', onPointerDown)
      el.removeEventListener('pointermove', onPointerMove)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('pointercancel', onPointerUp)
    }
  }, [])

  return (
    <section id="gallery" className="section gallery">
      <div className="container gallery__head">
        <SectionHeading kicker={t.gallery.kicker} heading={t.gallery.heading} lead={t.gallery.lead} />
        <div className="gallery__nav">
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label={t.gallery.prev}
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            className="btn btn-secondary btn-icon"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label={t.gallery.next}
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>

      <ul
        ref={(node) => {
          scroller.current = node
          revealRef.current = node
        }}
        className="gallery__strip"
        tabIndex={0}
        aria-label={t.gallery.heading}
      >
        {galleryImages.map((name, i) => (
          <li
            key={name}
            data-gallery-item
            data-reveal
            className={`gallery__item reveal${i === activeIndex ? ' is-active' : ''}`}
            style={{ '--gallery-delay': `${Math.min(Math.abs(i - activeIndex), 4) * 45}ms` }}
          >
            <figure className="gallery__figure">
              <Picture
                name={name}
                alt={`[PLACEHOLDER: caption for ${name.replace(/_/g, ' ')}]`}
                sizes="(min-width: 1100px) 32vw, (min-width: 700px) 46vw, 82vw"
                className="gallery__picture"
                plate
                priority={i === 0}
              />
              {/* Desktop reveals the icons on hover; on touch the caption bar
                  is always visible instead, since there is no hover state. */}
              <div className="gallery__overlay">
                <OverlayIcons />
              </div>
              <figcaption className="gallery__caption">
                [PLACEHOLDER: {name.replace(/_/g, ' ')}]
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="container gallery__foot">
        <span className="gallery__hint text-muted" aria-hidden="true">
          {t.gallery.hint}
        </span>
        <a
          className="btn btn-primary btn-lg"
          href={t.gallery.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.gallery.cta}
        </a>
      </div>
    </section>
  )
}
