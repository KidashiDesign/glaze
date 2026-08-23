import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import NumberedList from '../components/NumberedList'
import FeatureBlock from '../components/FeatureBlock'
import Picture from '../components/Picture'
import ShapeReveal from '../animation/ShapeReveal'
import ParallaxDrift from '../animation/ParallaxDrift'
import Gallery from '../components/Gallery'
import PhotoMosaic from '../components/PhotoMosaic'
import { media, mosaicAbout } from '../content/media'
import { useLocale } from '../i18n/LocaleProvider'
import { usePageMeta } from '../hooks/usePageMeta'

export default function About() {
  const { t } = useLocale()
  const about = t.about

  usePageMeta({ title: about.documentTitle, description: about.documentDescription })

  return (
    <>
      <Hero
        kicker={about.hero.kicker}
        headline={about.hero.headline}
        lead={about.hero.lead}
        image={media.heroAbout}
        imageAlt="A freshly plated dessert being carried to a table at Woofles"
        size="compact"
      />

      <section className="section story">
        <div className="container grid grid-2 story__grid">
          <div className="story__body">
            <SectionHeading kicker={about.story.kicker} heading={about.story.heading} />
            <div className="prose">
              {about.story.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ParallaxDrift
            className="story__media"
            back={
              <Picture
                name={media.aboutTwinBack}
                alt="A toasted sandwich from the Woofles menu"
                sizes="(min-width: 860px) 42vw, 86vw"
                plate
              />
            }
            front={
              <Picture
                name={media.aboutTwinFront}
                alt="A freshly made crêpe"
                sizes="(min-width: 860px) 30vw, 62vw"
                plate
              />
            }
          />
        </div>
      </section>

      {/* Full-bleed shape reveal — the effect at its largest, with the image
          breaking all the way out to the viewport edges. */}
      <ShapeReveal
        className="bleed"
        from={{ top: 18, right: 12, bottom: 18, left: 12 }}
        radius={40}
        as="section"
      >
        <Picture
          name={media.aboutWide}
          alt="A bubble waffle with toppings"
          sizes="100vw"
          className="bleed__picture"
        />
      </ShapeReveal>

      <section className="section section-tight values">
        <div className="container">
          <SectionHeading kicker={about.values.kicker} heading={about.values.heading} />
          <NumberedList items={about.values.items} />
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <PhotoMosaic images={mosaicAbout} />
        </div>
      </section>

      <section className="section visit">
        <div className="container">
          <FeatureBlock
            kicker={about.visit.kicker}
            heading={about.visit.heading}
            body={about.visit.body}
            cta={{ to: '/contact', label: about.visit.cta }}
            image={media.craftDetail}
            imageAlt="Guests sitting together at a table in the café"
            flip
          />
        </div>
      </section>

      <Gallery />
    </>
  )
}
