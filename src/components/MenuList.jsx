import { useRevealOnView } from '../animation/useRevealOnView'
import { useLocale } from '../i18n/LocaleProvider'

/**
 * The menu card. Items are drawn as a list with a hairline leader between the
 * name and the price, which is how the design system asks for tabular data —
 * rules carrying the structure rather than fills.
 *
 * Prices are intentionally absent: there is no price data yet, so every row
 * shows the placeholder dash and the page carries a standing notice saying so.
 * When real prices arrive, add a `price` to the item in en.js / ka.js and it
 * renders in place of the dash with no change here.
 */
function MenuCategory({ category, dietary, priceNote, priceTbc }) {
  const { locale } = useLocale()
  const ref = useRevealOnView({ threshold: 0.15, stagger: 0.06, resetKey: locale })

  return (
    <section ref={ref} className="menu-cat" aria-labelledby={`cat-${category.id}`}>
      <header className="menu-cat__head reveal" data-reveal>
        <h2 id={`cat-${category.id}`} className="h2 menu-cat__title">
          {category.title}
        </h2>
        {category.note && <p className="menu-cat__note text-muted">{category.note}</p>}
      </header>

      <ul className="menu-cat__list">
        {category.items.map((item) => (
          <li key={item.name} className="menu-item reveal" data-reveal>
            <div className="menu-item__head">
              <h3 className="h3 menu-item__name">{item.name}</h3>
              <span className="menu-item__leader" aria-hidden="true" />
              <span className={`menu-item__price tnum ${item.price ? '' : 'is-tbc'}`}>
                {item.price ?? priceTbc}
                {!item.price && <span className="visually-hidden">{priceNote}</span>}
              </span>
            </div>
            <p className="menu-item__desc text-muted">{item.description}</p>
            {item.tags?.length > 0 && (
              <ul className="menu-item__tags">
                {item.tags.map((tag) => (
                  <li key={tag} className="tag tag-outline">
                    {dietary[tag]}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function MenuList() {
  const { t } = useLocale()

  return (
    <div className="menu-list">
      <aside className="menu-notice" role="note">
        <strong className="menu-notice__title">{t.menu.notice.title}</strong>
        <p className="menu-notice__body">{t.menu.notice.body}</p>
      </aside>

      <p className="menu-list__price-note text-muted">{t.menu.priceNote}</p>

      {t.menu.categories.map((category) => (
        <MenuCategory
          key={category.id}
          category={category}
          dietary={t.menu.dietary}
          priceNote={t.menu.priceNote}
          priceTbc={t.common.priceTbc}
        />
      ))}
    </div>
  )
}
