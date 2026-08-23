import { useCallback, useEffect, useRef, useState } from 'react'
import Picture from './Picture'
import SectionHeading from './SectionHeading'
import { galleryImages } from '../content/media'
import { useLocale } from '../i18n/LocaleProvider'

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
  const { t } = useLocale()
  const scroller = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const itemRefs = useRef([])

  const updateEdges = useCallback(() => {
    const el = scroller.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 2)
  }, [])

  /** Reserves just enough extra scroll room, via the leading/trailing
   *  spacers, for the first card to reach the strip's exact center at
   *  minimum scroll — without it, scrolling runs out before an edge card
   *  ever gets centered, so it could never become the sharp, active card
   *  the way interior cards can. By the strip's own left-right symmetry,
   *  the same amount also centers the last card at maximum scroll. The
   *  amount needed is measured directly (rather than derived from card
   *  width/gutter/gap) so it stays correct at every breakpoint, from the
   *  single-card mobile strip to the 3-up desktop one, without
   *  hard-coding the layout's numbers here. */
  const updateEdgePadding = useCallback(() => {
    const el = scroller.current
    const first = itemRefs.current[0]
    if (!el || !first) return
    el.style.setProperty('--gallery-edge-pad', '0px')
    const viewportCenter = el.getBoundingClientRect().left + el.clientWidth / 2
    const firstRect = first.getBoundingClientRect()
    const firstCenter = firstRect.left + firstRect.width / 2
    const pad = Math.max(0, viewportCenter - firstCenter - el.scrollLeft)
    el.style.setProperty('--gallery-edge-pad', `${pad}px`)
  }, [])

  /** Whichever card sits closest to the strip's horizontal center is "active" —
   *  it gets scaled up while its neighbors shrink and blur back out. */
  const updateActiveIndex = useCallback(() => {
    const el = scroller.current
    if (!el) return
    const center = el.getBoundingClientRect().left + el.clientWidth / 2
    let closest = 0
    let closestDist = Infinity
    itemRefs.current.forEach((node, i) => {
      if (!node) return
      const rect = node.getBoundingClientRect()
      const dist = Math.abs(rect.left + rect.width / 2 - center)
      if (dist < closestDist) {
        closestDist = dist
        closest = i
      }
    })
    setActiveIndex(closest)
  }, [])

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    let ticking = false
    const onScrollOrResize = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updateEdges()
        updateActiveIndex()
        ticking = false
      })
    }
    const onResize = () => {
      updateEdgePadding()
      onScrollOrResize()
    }
    updateEdgePadding()
    updateEdges()
    updateActiveIndex()
    el.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onResize)
    }
  }, [updateEdges, updateActiveIndex, updateEdgePadding])

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
        ref={scroller}
        className="gallery__strip"
        tabIndex={0}
        aria-label={t.gallery.heading}
      >
        <li aria-hidden="true" className="gallery__spacer" />
        {galleryImages.map((name, i) => (
          <li
            key={name}
            ref={(node) => {
              itemRefs.current[i] = node
            }}
            data-gallery-item
            className={`gallery__item${i === activeIndex ? ' is-active' : ''}`}
            style={{ '--dist': Math.abs(i - activeIndex) }}
          >
            <figure className="gallery__figure">
              <Picture
                name={name}
                alt={name.replace(/[_-]+/g, ' ')}
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
            </figure>
          </li>
        ))}
        <li aria-hidden="true" className="gallery__spacer" />
      </ul>

      <div className="container gallery__foot">
        <span className="gallery__hint text-muted" aria-hidden="true">
          {t.gallery.hint}
        </span>
      </div>
    </section>
  )
}
