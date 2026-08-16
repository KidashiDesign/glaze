import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Usps from './components/Usps'
import Craft from './components/Craft'
import Events from './components/Events'
import Menu from './components/Menu'
import Testimonial from './components/Testimonial'
import SocialFeed from './components/SocialFeed'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Usps />
        <Craft />
        <Events />
        <Menu />
        <Testimonial />
        <SocialFeed />
      </main>
      <Footer />
    </>
  )
}
