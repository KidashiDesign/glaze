import ShapeRevealParallax from '../animation/ShapeRevealParallax'
import { craft } from '../content/siteContent'

export default function Craft() {
  return (
    <section id="craft" className="section craft">
      <div className="container craft__grid">
        <ShapeRevealParallax src={craft.image} alt="Glaze gelato craft" className="craft__media" shape="blob" />
        <div className="craft__copy">
          <span className="eyebrow">{craft.eyebrow}</span>
          <h2 className="craft__heading">{craft.heading}</h2>
          <a href={craft.cta.href} className="btn">{craft.cta.label}</a>
        </div>
      </div>
    </section>
  )
}
