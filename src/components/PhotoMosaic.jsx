import Picture from './Picture'
import { useLocale } from '../i18n/LocaleProvider'
import { useRevealOnView } from '../animation/useRevealOnView'

/**
 * A static grid of photographs — the counterpart to Gallery's scrolling strip,
 * for pages/sections that want a handful of images without the carousel
 * chrome. Each image fades up in place as the grid scrolls into view.
 */
export default function PhotoMosaic({ images, className = '' }) {
  const { locale } = useLocale()
  const ref = useRevealOnView({ threshold: 0.15, stagger: 0.07, resetKey: locale })

  return (
    <ul ref={ref} className={`mosaic ${className}`.trim()}>
      {images.map((name) => (
        <li key={name} className="mosaic__item reveal" data-reveal>
          <Picture
            name={name}
            alt={name.replace(/[_-]+/g, ' ')}
            sizes="(min-width: 1100px) 24vw, (min-width: 700px) 32vw, 46vw"
            className="mosaic__picture"
            plate
          />
        </li>
      ))}
    </ul>
  )
}
