import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Picture from './Picture'
import { useKenBurns } from '../animation/useKenBurns'
import { gsap, CONDITIONS } from '../animation/motion'
import { useLocale } from '../i18n/LocaleProvider'

/**
 * Loops a background video with a soft crossfade at the seam: as playback
 * nears the end it fades to the scrim, then fades back in once it has
 * looped, so the cut from last frame to first frame is never visible.
 */
function useLoopingFade(fadeSeconds = 0.6) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.pause()
      return
    }

    el.style.transition = 'none'

    let raf
    const tick = () => {
      if (el.duration) {
        const remaining = el.duration - el.currentTime
        const progressed = el.currentTime
        const edge = Math.min(remaining, progressed, fadeSeconds)
        el.style.opacity = String(Math.min(edge / fadeSeconds, 1))
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(raf)
  }, [fadeSeconds])

  return ref
}

/**
 * Page hero: full-bleed photograph under a dark scrim, with the headline
 * animating in on load.
 *
 * The headline is split into words so they can stagger — each word sits in its
 * own inline-block wrapper with an overflow mask, so the words rise out of the
 * line rather than fading in place. Splitting on whitespace works the same
 * way across every locale copy uses today, since all of them are
 * space-separated.
 */
export default function Hero({
  kicker,
  headline,
  lead,
  image,
  imageAlt,
  video,
  primaryCta,
  secondaryCta,
  size = 'full',
}) {
  const { locale, t } = useLocale()
  const root = useRef(null)
  const bg = useKenBurns()
  const videoRef = useLoopingFade()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add(CONDITIONS, (context) => {
        const words = root.current.querySelectorAll('[data-hero-word]')
        const rest = root.current.querySelectorAll('[data-hero-fade]')

        if (context.conditions.reduced) {
          gsap.fromTo(
            [...words, ...rest],
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.4, ease: 'none', stagger: 0.02 },
          )
          return
        }

        gsap
          .timeline({ defaults: { ease: 'power3.out' } })
          .fromTo(
            words,
            { yPercent: 108, autoAlpha: 0 },
            { yPercent: 0, autoAlpha: 1, duration: 0.9, stagger: 0.055 },
            0.1,
          )
          .fromTo(
            rest,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.09 },
            0.45,
          )
      })

      return () => mm.revert()
    }, root)

    return () => ctx.revert()
    // Re-runs on locale change: the headline is different text, so the split
    // wrappers are different elements and need animating again.
  }, [locale, headline])

  return (
    <section ref={root} className={`hero hero--${size}`}>
      <div className="hero__media" aria-hidden="true">
        <div ref={bg} className="hero__media-inner">
          {video ? (
            <video
              ref={videoRef}
              className="hero__video"
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          ) : (
            <Picture
              name={image}
              alt=""
              tallVariantBelow={859}
              sizes="100vw"
              priority
              className="hero__picture"
            />
          )}
        </div>
        <div className="hero__scrim" />
      </div>

      <div className="hero__body container">
        {kicker && (
          <span className="kicker hero__kicker" data-hero-fade>
            {kicker}
          </span>
        )}

        <h1 className={size === 'full' ? 'display' : 'h1'}>
          {headline.split(' ').map((word, i) => (
            <span className="hero__word" key={`${word}-${i}`}>
              <span data-hero-word>{word}</span>
            </span>
          ))}
        </h1>

        {lead && (
          <p className="lead hero__lead" data-hero-fade>
            {lead}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="hero__actions" data-hero-fade>
            {primaryCta && (
              <Link to={primaryCta.to} className="btn btn-primary btn-lg">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.to} className="btn btn-secondary btn-lg">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>



      {/* The photograph carries meaning for sighted users but is decorative
          relative to the headline, so its description lives here rather than in
          an alt attribute that would be read before the H1. */}
      {imageAlt && <span className="visually-hidden">{imageAlt}</span>}
    </section>
  )
}
