import ParallaxDrift from '../animation/ParallaxDrift'
import { about } from '../content/siteContent'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__media">
          <ParallaxDrift
            background={about.images.background}
            foreground={about.images.foreground}
            altBg="Inside the Glaze cafe"
            altFg="Glaze cafe mood"
          />
        </div>
        <div className="about__copy">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="about__heading">{about.heading}</h2>
          <p className="about__text">{about.text}</p>
          <a href={about.cta.href} className="btn">{about.cta.label}</a>
        </div>
      </div>
    </section>
  )
}
