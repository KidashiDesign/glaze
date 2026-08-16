import { footer, nav } from '../content/siteContent'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer__grid">
        <div>
          <h2 className="footer__brand">{footer.heading}</h2>
          <p className="footer__address">{footer.address}</p>
        </div>
        <div>
          <p>{footer.hours}</p>
          <p>{footer.phone}</p>
          <p>{footer.email}</p>
        </div>
        <div className="footer__social">
          {footer.social.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
      </div>
      <div className="container footer__bottom">
        <span>{footer.copyright}</span>
        <a href="#top">{nav.brand} ↑</a>
      </div>
    </footer>
  )
}
