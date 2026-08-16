import { Link } from 'react-router-dom'
import Picture from './Picture'
import ShapeReveal from '../animation/ShapeReveal'
import { useRevealOnView } from '../animation/useRevealOnView'
import { useLocale } from '../i18n/LocaleProvider'

/**
 * Image-and-text block. The photograph runs through ShapeReveal, so it breaks
 * out of its rounded frame as the block scrolls past; the copy fades up
 * alongside it.
 *
 * `flip` puts the image on the right at desktop widths. On mobile the two
 * always stack image-first, which keeps the reading order the same in both
 * directions.
 */
export default function FeatureBlock({
  kicker,
  heading,
  body,
  bullets,
  cta,
  image,
  imageAlt,
  flip = false,
  tone = 'default',
}) {
  const { locale } = useLocale()
  const ref = useRevealOnView({ stagger: 0.09, resetKey: locale })
  const paragraphs = Array.isArray(body) ? body : body ? [body] : []

  return (
    <div className={`feature ${flip ? 'feature--flip' : ''} feature--${tone}`}>
      <ShapeReveal className="feature__media" from={{ top: 12, right: 10, bottom: 12, left: 10 }}>
        <Picture
          name={image}
          alt={imageAlt}
          sizes="(min-width: 860px) 50vw, 100vw"
          className="feature__picture"
        />
      </ShapeReveal>

      <div ref={ref} className="feature__body">
        {kicker && (
          <span className="kicker reveal" data-reveal>
            {kicker}
          </span>
        )}
        <h2 className="h2 reveal" data-reveal>
          {heading}
        </h2>

        {paragraphs.length > 0 && (
          <div className="prose reveal" data-reveal>
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        )}

        {bullets?.length > 0 && (
          <ul className="feature__bullets reveal" data-reveal>
            {bullets.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}

        {cta && (
          <div className="reveal" data-reveal>
            <Link to={cta.to} className="btn btn-primary btn-lg">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
