import { useLayoutEffect, useRef, useState } from 'react'
import { reviews, placeUrl, fetchedAt, averageRating } from '../content/reviews'
import { useLocale } from '../i18n/LocaleProvider'
import { usePrefersReducedMotion } from '../animation/usePrefersReducedMotion'
import { gsap, ScrollTrigger } from '../animation/motion'
import SectionHeading from './SectionHeading'

/** Lucide's `star`, inlined — the design system specifies Lucide icons. */
function Star({ filled }) {
  return (
    <svg
      className={`star ${filled ? 'is-filled' : ''}`}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11.5 3.2a.6.6 0 0 1 1 0l2.3 4.7a.6.6 0 0 0 .5.3l5.1.8a.6.6 0 0 1 .3 1l-3.7 3.6a.6.6 0 0 0-.2.5l.9 5.1a.6.6 0 0 1-.9.6l-4.6-2.4a.6.6 0 0 0-.6 0l-4.6 2.4a.6.6 0 0 1-.9-.6l.9-5.1a.6.6 0 0 0-.2-.5L3.2 10a.6.6 0 0 1 .3-1l5.1-.8a.6.6 0 0 0 .5-.3Z" />
    </svg>
  )
}

function ReviewCard({ review, starsLabel }) {
  const isPlaceholder = !review.verified
  return (
    <figure className={`review ${isPlaceholder ? 'review--placeholder' : ''}`}>
      <div className="review__stars" role="img" aria-label={starsLabel(review.rating)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <Star key={n} filled={n <= review.rating} />
        ))}
      </div>
      <blockquote className="review__quote" lang={review.lang}>
        {review.quote}
      </blockquote>
      <figcaption className="review__author">{review.author}</figcaption>
    </figure>
  )
}

/**
 * The review wall: cached Google reviews in columns that scroll vertically and
 * loop, at a speed that responds to how fast the page itself is scrolling.
 *
 * Each column renders its reviews twice and travels exactly half its own
 * height, so the second copy lands where the first began and the loop has no
 * seam. Columns run in opposite directions.
 *
 * Motion is suppressed three ways: prefers-reduced-motion turns the wall into
 * a static grid, pointer/keyboard focus pauses it so a quote can be read, and
 * an explicit pause control is always available — continuous motion longer
 * than five seconds needs a way to stop it (WCAG 2.2.2).
 */
export default function Reviews() {
  const { t, locale } = useLocale()
  const reduced = usePrefersReducedMotion()
  const [paused, setPaused] = useState(false)
  const root = useRef(null)
  const tweens = useRef([])

  // Split into two columns; the second is offset so the pair never lines up.
  const columns = [
    reviews.filter((_, i) => i % 2 === 0),
    reviews.filter((_, i) => i % 2 === 1),
  ]

  useLayoutEffect(() => {
    if (reduced) return

    const ctx = gsap.context(() => {
      const tracks = root.current.querySelectorAll('[data-review-track]')

      tweens.current = Array.from(tracks).map((track, i) => {
        const direction = i % 2 === 0 ? -1 : 1
        // Speed from content length, so a longer column is not visibly faster.
        const duration = Math.max(28, track.scrollHeight / 22)

        // Odd columns start already displaced, so they travel toward 0 instead
        // of away from it — that is what reverses their direction.
        gsap.set(track, { yPercent: direction === -1 ? 0 : -50 })

        return gsap.to(track, {
          yPercent: direction === -1 ? -50 : 0,
          duration,
          ease: 'none',
          repeat: -1,
        })
      })

      // Page scroll leans on the wall: scrolling down speeds it up, scrolling
      // up slows and briefly reverses it. It settles back to 1 when the page
      // stops moving.
      const trigger = ScrollTrigger.create({
        trigger: root.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const boost = gsap.utils.clamp(-2, 4, 1 + self.getVelocity() / 400)
          tweens.current.forEach((tween) => {
            gsap.to(tween, { timeScale: boost, duration: 0.3, overwrite: true })
          })
        },
      })

      return () => trigger.kill()
    }, root)

    return () => ctx.revert()
  }, [reduced, locale])

  // Pausing is a state change rather than a re-created tween, so the wall
  // resumes exactly where it stopped.
  useLayoutEffect(() => {
    tweens.current.forEach((tween) => (paused ? tween.pause() : tween.resume()))
  }, [paused])

  const animated = !reduced

  return (
    <section id="reviews" className="section section-surface reviews">
      <div className="container">
        <SectionHeading
          kicker={t.reviews.kicker}
          heading={t.reviews.heading}
          lead={t.reviews.lead}
          align="center"
        />

        <p className="reviews__score">
          <span className="reviews__score-num tnum">{averageRating.toFixed(1)}</span>
          <span className="reviews__score-stars" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} filled={n <= Math.round(averageRating)} />
            ))}
          </span>
          <span className="text-muted">{t.reviews.ratingLabel}</span>
        </p>

        <div
          ref={root}
          className={`reviews__wall ${animated ? 'is-animated' : ''}`}
          onMouseEnter={() => animated && setPaused(true)}
          onMouseLeave={() => animated && setPaused(false)}
          onFocusCapture={() => animated && setPaused(true)}
          onBlurCapture={() => animated && setPaused(false)}
        >
          {columns.map((column, i) => (
            <div key={i} className="reviews__col">
              <div data-review-track className="reviews__track">
                {/* Rendered twice so the loop can wrap seamlessly. The copy is
                    hidden from assistive tech to avoid reading it all again. */}
                {column.map((review) => (
                  <ReviewCard key={review.id} review={review} starsLabel={t.reviews.starsLabel} />
                ))}
                <div aria-hidden="true" className="reviews__track-copy">
                  {column.map((review) => (
                    <ReviewCard
                      key={`${review.id}-copy`}
                      review={review}
                      starsLabel={t.reviews.starsLabel}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews__actions">
          {animated && (
            <button type="button" className="btn btn-secondary" onClick={() => setPaused((v) => !v)}>
              {paused ? t.reviews.playLabel : t.reviews.pauseLabel}
            </button>
          )}
          <a
            className="btn btn-primary"
            href={placeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.reviews.googleCta}
          </a>
        </div>

        <p className="reviews__cached text-muted">{t.reviews.cachedNote(fetchedAt)}</p>
      </div>
    </section>
  )
}
