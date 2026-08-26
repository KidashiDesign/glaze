import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import FeatureBlock from '../components/FeatureBlock'
import PhotoMosaic from '../components/PhotoMosaic'
import { media, mosaicContact } from '../content/media'
import { placeUrl, mapEmbedUrl } from '../content/reviews'
import { useLocale } from '../i18n/LocaleProvider'
import { usePageMeta } from '../hooks/usePageMeta'
import { useRevealOnView } from '../animation/useRevealOnView'

export default function Contact() {
  const { t, locale } = useLocale()
  const details = t.contact.details
  const ref = useRevealOnView({ threshold: 0.2, stagger: 0.08, resetKey: locale })

  usePageMeta({ title: t.contact.documentTitle, description: t.contact.documentDescription })

  const rows = [
    { label: details.addressLabel, value: details.address },
    { label: details.hoursLabel, value: details.hours },
    { label: details.phoneLabel, value: details.phone },

  ]

  return (
    <>
      <Hero
        kicker={t.contact.hero.kicker}
        headline={t.contact.hero.headline}
        lead={t.contact.hero.lead}
        image={media.heroContact}
        imageAlt="Interior view of the Woofles café seating area"
        size="compact"
      />

      <section className="section contact">
        <div className="container container-narrow">
          <img className="contact__logo" src="/img/Waffle-Logo-Vector.svg" alt="" width="72" height="72" />
          <SectionHeading kicker={details.kicker} heading={details.heading} />

          <dl ref={ref} className="contact__details">
            {rows.map((row) => (
              <div key={row.label} className="contact__row reveal" data-reveal>
                <dt className="contact__label">{row.label}</dt>
                <dd className="contact__value">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="contact__map">
            <iframe
              src={mapEmbedUrl}
              title={details.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <a className="btn btn-primary btn-lg" href={placeUrl} target="_blank" rel="noopener noreferrer">
            {details.mapCta}
          </a>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <PhotoMosaic images={mosaicContact} />
        </div>
      </section>

      <section className="section section-ink events">
        <div className="container">
          <FeatureBlock
            kicker={t.contact.events.kicker}
            heading={t.contact.events.heading}
            body={t.contact.events.body}
            image={media.events}
            imageAlt="A person holding an oversized ice cream cone, styled for a catering or events setting"
            tone="ink"
            flip
          />
          <p className="contact__cta-note text-muted">{t.contact.events.ctaNote}</p>
        </div>
      </section>
    </>
  )
}
