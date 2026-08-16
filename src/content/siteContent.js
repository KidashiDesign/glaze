// ---------------------------------------------------------------------------
// All copy & content lives here. Edit this file to update the site's text
// without touching any component, layout or animation (GSAP) code.
// Items still needing real client input are marked [PLACEHOLDER: ...].
// ---------------------------------------------------------------------------

export const nav = {
  brand: 'Glaze',
  links: [
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Craft', href: '#craft' },
    { label: 'Events', href: '#events' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Follow', href: '#social' },
  ],
  cta: { label: 'Visit Us', href: '#footer' },
}

export const hero = {
  eyebrow: '[PLACEHOLDER: Tbilisi, Georgia]',
  headline: 'Specialty Coffee & Handcrafted Gelato in Tbilisi',
  sub: 'Your daily spot for small-batch gelato and perfectly pulled espresso, right in the heart of the city.',
  cta: { label: 'See the Menu', href: '#menu' },
  image: '/images/main_chraracter.webp',
}

export const about = {
  eyebrow: 'The Cafe Experience',
  heading: 'More Than Just Gelato',
  text: "We created Glaze to be a space where you can slow down. Whether you're grabbing a morning flat white or an evening scoop of pistachio, everything we serve is made fresh, using local Georgian dairy and carefully sourced beans.",
  cta: { label: 'Visit Us', href: '#footer' },
  images: {
    background: '/images/inside_the_cafe.webp',
    foreground: '/images/Mood.webp',
  },
}

export const usps = {
  eyebrow: 'The Details',
  items: [
    {
      number: '01',
      title: 'Specialty Coffee',
      text: 'Expertly roasted beans, pulled to perfection.',
    },
    {
      number: '02',
      title: 'Small-Batch Gelato',
      text: 'Churned fresh in limited quantities, several times a week.',
    },
    {
      number: '03',
      title: 'The Vibe',
      text: 'A welcoming cafe space designed for catching up or winding down.',
    },
  ],
}

export const craft = {
  eyebrow: 'Our Craft',
  heading: 'Real Ingredients, Honest Flavors',
  cta: { label: 'Explore Flavors', href: '#menu' },
  image: '/images/Taste_Glaze.webp',
}

export const events = {
  eyebrow: 'Private Events',
  heading: 'Bring Glaze to Your Event',
  text: 'From gelato carts for weddings to customized menus for private parties.',
  cta: { label: 'Inquire Now', href: '#footer' },
  image: '/images/Happy_Hours.webp',
}

export const menu = {
  eyebrow: 'Menu',
  heading: 'Gelato, Coffee & More',
  categories: [
    {
      title: 'Gelato & Sorbets',
      items: [
        {
          name: 'Pistachio & Sea Salt',
          desc: 'Roasted pistachio, a touch of sea salt.',
          price: '[PLACEHOLDER GELATO PRICE]',
        },
        {
          name: 'Georgian Honey & Walnut',
          desc: 'Local honey, toasted walnuts.',
          price: '[PLACEHOLDER GELATO PRICE]',
        },
        {
          name: 'Tbilisi Sour Cherry Sorbet',
          desc: 'Tart, bright, dairy-free.',
          price: '[PLACEHOLDER GELATO PRICE]',
        },
      ],
    },
    {
      title: 'The Coffee Bar',
      items: [
        {
          name: 'Espresso / Double Espresso',
          desc: 'Our house blend.',
          price: '[PLACEHOLDER COFFEE PRICE]',
        },
        {
          name: 'Flat White',
          desc: 'Perfectly micro-foamed milk.',
          price: '[PLACEHOLDER COFFEE PRICE]',
        },
        {
          name: 'The Glaze Affogato',
          desc: 'A double shot of espresso poured over our signature vanilla bean gelato.',
          price: '[PLACEHOLDER COFFEE PRICE]',
        },
      ],
    },
  ],
}

export const testimonial = {
  rating: 5,
  quote: 'Good prices, sweet staff. Very good coffee and delicious ice cream.',
  author: 'Mariam K.',
  link: 'https://www.google.com/maps/place/Glaze+%E2%80%A2+Desserts+%26+Coffee/@41.6940419,44.7998449,17z/data=!4m8!3m7!1s0x40440d3b6539f44f:0xd27a24cbfd971247!8m2!3d41.6940379!4d44.8024198',
  linkLabel: 'Read more on Google',
}

export const social = {
  eyebrow: 'Follow the Vibe',
  heading: '@glaze.tbilisi',
  cta: { label: 'Follow @glaze.tbilisi', href: '[PLACEHOLDER: Instagram URL]' },
  images: [
    '/images/Belgian_Waffle.webp',
    '/images/Breakfast.webp',
    '/images/Bubble_Waffle.webp',
    '/images/Bubble_Waffle_and_strawberries.webp',
    '/images/Cinnamon_Roll.webp',
    '/images/Coffee.webp',
    '/images/Create_your_own_waffle.webp',
    '/images/Desert.webp',
    '/images/Sandwich.webp',
    '/images/Some_sweet.webp',
    '/images/Take_Away.webp',
    '/images/crepe.webp',
  ],
}

export const footer = {
  heading: 'Glaze',
  address: '[PLACEHOLDER: Street address, Tbilisi, Georgia]',
  hours: '[PLACEHOLDER: Opening hours]',
  phone: '[PLACEHOLDER: Phone number]',
  email: '[PLACEHOLDER: Email address]',
  social: [
    { label: 'Instagram', href: '[PLACEHOLDER: Instagram URL]' },
    { label: 'Google Maps', href: testimonial.link },
  ],
  copyright: `© ${new Date().getFullYear()} Glaze. All rights reserved.`,
}
