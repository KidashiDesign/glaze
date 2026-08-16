import { Link } from 'react-router-dom'
import { useLocale } from '../i18n/LocaleProvider'
import { usePageMeta } from '../hooks/usePageMeta'

export default function NotFound() {
  const { t } = useLocale()
  usePageMeta({ title: t.notFound.documentTitle })

  return (
    <section className="section not-found">
      <div className="container container-narrow stack">
        <h1 className="h1">{t.notFound.heading}</h1>
        <p className="lead text-muted">{t.notFound.body}</p>
        <Link to="/" className="btn btn-primary btn-lg">
          {t.notFound.cta}
        </Link>
      </div>
    </section>
  )
}
