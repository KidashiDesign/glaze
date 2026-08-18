import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import NumberedList from '../components/NumberedList'
import FeatureBlock from '../components/FeatureBlock'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import ParallaxDrift from '../animation/ParallaxDrift'
import Picture from '../components/Picture'
import { media } from '../content/media'
import { useLocale } from '../i18n/LocaleProvider'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  const { t } = useLocale()
  const home = t.home

  usePageMeta({ title: home.documentTitle, description: home.documentDescription })

  return (
    <>
      <Hero
        kicker={home.hero.kicker}
        headline={home.hero.headline}
        lead={home.hero.lead}
        image={media.heroHome}
        imageAlt="[PLACEHOLDER: Hero image description]"
        primaryCta={{ to: '/menu', label: home.hero.cta }}
        secondaryCta={{ to: '/contact', label: home.hero.ctaSecondary }}
      />

      <Reviews />

      {/* Intro — twin images drifting at different rates beside the copy. */}
      <section className="section intro">
        <div className="container grid grid-2 intro__grid">
          <ParallaxDrift
            className="intro__media"
            back={
              <Picture
                name={media.introBackground}
                alt="[PLACEHOLDER: Image description]"
                sizes="(min-width: 860px) 42vw, 86vw"
                plate
              />
            }
            front={
              <Picture
                name={media.introForeground}
                alt="[PLACEHOLDER: Image description]"
                sizes="(min-width: 860px) 30vw, 62vw"
                plate
              />
            }
          />

          <div className="intro__body">
            <SectionHeading kicker={home.intro.kicker} heading={home.intro.heading} />
            <div className="prose intro__prose">
              {home.intro.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <Link className="btn btn-primary btn-lg" to="/about">
              {home.intro.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-tight usps">
        <div className="container">
          <SectionHeading kicker={home.usps.kicker} heading={home.usps.heading} />
          <NumberedList items={home.usps.items} />
        </div>
      </section>

      <section className="section section-tight craft">
        <div className="container">
          <FeatureBlock
            kicker={home.craft.kicker}
            heading={home.craft.heading}
            body={home.craft.body}
            cta={{ to: '/menu', label: home.craft.cta }}
            image={media.craft}
            imageAlt="[PLACEHOLDER: Image description]"
          />
        </div>
      </section>

      <section className="section section-tight menu-teaser">
        <div className="container">
          <FeatureBlock
            kicker={home.menuTeaser.kicker}
            heading={home.menuTeaser.heading}
            body={home.menuTeaser.body}
            bullets={home.menuTeaser.highlights}
            cta={{ to: '/menu', label: home.menuTeaser.cta }}
            image={media.menuTeaser}
            imageAlt="[PLACEHOLDER: Image description]"
            flip
          />
        </div>
      </section>

      <section className="section events section-ink">
        <div className="container">
          <FeatureBlock
            kicker={home.events.kicker}
            heading={home.events.heading}
            body={home.events.body}
            cta={{ to: '/contact', label: home.events.cta }}
            image={media.events}
            imageAlt="[PLACEHOLDER: Image description]"
            tone="ink"
          />
        </div>
      </section>

      <Gallery />
    </>
  )
}
