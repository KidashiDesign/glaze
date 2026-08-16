import ShapeRevealParallax from '../animation/ShapeRevealParallax'
import { events } from '../content/siteContent'

export default function Events() {
  return (
    <section id="events" className="section events">
      <div className="container events__grid">
        <div className="events__copy">
          <span className="eyebrow">{events.eyebrow}</span>
          <h2 className="events__heading">{events.heading}</h2>
          <p className="events__text">{events.text}</p>
          <a href={events.cta.href} className="btn">{events.cta.label}</a>
        </div>
        <ShapeRevealParallax src={events.image} alt="Glaze private events" className="events__media" shape="rounded" />
      </div>
    </section>
  )
}
