import { useRevealOnView } from '../animation/useRevealOnView'
import { useLocale } from '../i18n/LocaleProvider'

/**
 * The numbered USP / values list. Items fade up 0.1s apart once ~30% of the
 * list is in view, per the brief. The numerals are set tabular so the column
 * of figures aligns, as the design system asks.
 */
export default function NumberedList({ items }) {
  const { locale } = useLocale()
  const ref = useRevealOnView({ threshold: 0.3, stagger: 0.1, resetKey: locale })

  return (
    <ol ref={ref} className="numbered">
      {items.map((item) => (
        <li key={item.number} className="numbered__item reveal" data-reveal>
          <span className="numbered__num tnum" aria-hidden="true">
            {item.number}
          </span>
          <h3 className="h3 numbered__title">{item.title}</h3>
          <p className="numbered__text text-muted">{item.text}</p>
        </li>
      ))}
    </ol>
  )
}
