import { useRevealOnView } from '../animation/useRevealOnView'
import { useLocale } from '../i18n/LocaleProvider'

/** Kicker + heading + optional lead, revealed as a group when scrolled to. */
export default function SectionHeading({ kicker, heading, lead, align = 'left', as: Tag = 'h2' }) {
  const { locale } = useLocale()
  const ref = useRevealOnView({ stagger: 0.08, resetKey: locale })

  return (
    <div ref={ref} className={`section-heading section-heading--${align}`}>
      {kicker && (
        <span className="kicker reveal" data-reveal>
          {kicker}
        </span>
      )}
      <Tag className="h2 reveal" data-reveal>
        {heading}
      </Tag>
      {lead && (
        <p className="lead text-muted reveal" data-reveal>
          {lead}
        </p>
      )}
    </div>
  )
}
