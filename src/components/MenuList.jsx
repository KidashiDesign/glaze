import Picture from './Picture'
import { useRevealOnView } from '../animation/useRevealOnView'
import { useParallaxImage } from '../animation/useParallaxImage'
import { useLocale } from '../i18n/LocaleProvider'

/**
 * The menu card. Items are drawn as a list with a hairline leader between the
 * name and the price, which is how the design system asks for tabular data —
 * rules carrying the structure rather than fills.
 *
 * A few rows (the topping lists) are informational and carry no price; those
 * fall back to the placeholder dash, with `priceNote` as hidden a11y text.
 *
 * Each category opens with a photo in a shallow, rounded frame that drifts
 * with a scroll parallax. The category title sits below the photo as a
 * left-aligned heading rather than overlaying the image.
 */
function MenuCategory({ category, dietary, priceNote, priceTbc }) {
  const { locale } = useLocale()
  const ref = useRevealOnView({ threshold: 0.15, stagger: 0.06, resetKey: locale })
  const { frameRef, imageRef } = useParallaxImage()

  return (
    <section ref={ref} className="menu-cat" aria-labelledby={`cat-${category.id}`}>
      <div ref={frameRef} className="menu-cat__media reveal" data-reveal>
        <Picture
          ref={imageRef}
          name={category.image}
          alt=""
          sizes="(min-width: 900px) 780px, 100vw"
          className="menu-cat__picture"
        />
  

      <h2 id={`cat-${category.id}`} className="h3 menu-cat__title reveal" data-reveal>
        {category.title}
      </h2>
    </div>
      {category.note && (
        <p className="menu-cat__note text-muted reveal" data-reveal>
          {category.note}
        </p>
      )}

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
            {item.description && <p className="menu-item__desc text-muted">{item.description}</p>}
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
