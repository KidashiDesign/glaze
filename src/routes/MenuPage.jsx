import Hero from '../components/Hero'
import MenuList from '../components/MenuList'
import Reviews from '../components/Reviews'
import PhotoMosaic from '../components/PhotoMosaic'
import { media, mosaicMenu } from '../content/media'
import { useLocale } from '../i18n/LocaleProvider'
import { usePageMeta } from '../hooks/usePageMeta'

export default function MenuPage() {
  const { t } = useLocale()

  usePageMeta({ title: t.menu.documentTitle, description: t.menu.documentDescription })

  return (
    <>
      <Hero
        kicker={t.menu.hero.kicker}
        headline={t.menu.hero.headline}
        lead={t.menu.hero.lead}
        image={media.heroMenu}
        imageAlt="Bubble waffle topped with strawberries"
        size="compact"
      />

      <section className="section">
        <div className="container container-narrow">
          <MenuList />
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <PhotoMosaic images={mosaicMenu} />
        </div>
      </section>

      <Reviews />
    </>
  )
}
