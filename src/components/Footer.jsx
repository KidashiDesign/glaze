import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleProvider'
import { placeUrl } from '../content/reviews'

export default function Footer() {
  const { t } = useLocale()
  const year = new Date().getFullYear()

  return (
    <footer className="footer section-ink">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{t.brand.name}</span>
          <p className="footer__tagline text-muted">{t.footer.tagline}</p>
        </div>

        <nav className="footer__col" aria-labelledby="footer-nav">
          <h2 id="footer-nav" className="footer__heading">
            {t.footer.navHeading}
          </h2>
          <Link to="/" className="link">
            {t.nav.home}
          </Link>
          <Link to="/about" className="link">
            {t.nav.about}
          </Link>
          <Link to="/menu" className="link">
            {t.nav.menu}
          </Link>
          <Link to="/contact" className="link">
            {t.nav.contact}
          </Link>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">{t.footer.visitHeading}</h2>
          <p className="footer__line">{t.contact.details.address}</p>
          <p className="footer__line">{t.contact.details.hours}</p>
          <p className="footer__line">{t.contact.details.phone}</p>
        </div>

        <div className="footer__col">
          <h2 className="footer__heading">{t.footer.followHeading}</h2>
          <a
            className="link"
            href={t.footer.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.instagram}
          </a>
          <a className="link" href={placeUrl} target="_blank" rel="noopener noreferrer">
            {t.footer.googleMaps}
          </a>
        </div>
      </div>

      <div className="container footer__legal">
        <span className="text-muted">{t.footer.rights(year)}</span>
        <span className="text-muted">{t.footer.credit}</span>
      </div>
    </footer>
  )
}
