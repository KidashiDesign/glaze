// ─────────────────────────────────────────────────────────────────────────────
// ENGLISH COPY — every string the site renders.
//
// Edit this file to change wording. No component, layout or GSAP file needs to
// be touched. src/content/ka.js mirrors this shape exactly; if you add a key
// here, add it there too (a dev-time check in src/content/index.js will warn
// when the two drift apart).
//
// Items still needing real client input are marked [PLACEHOLDER: ...] and
// surface as such in the UI so nothing invented gets mistaken for approved
// copy during the presentation.
// ─────────────────────────────────────────────────────────────────────────────

export default {
  meta: {
    localeName: 'English',
    localeShort: 'EN',
    htmlLang: 'en',
  },

  brand: {
    name: 'Glaze',
    tagline: 'Desserts & Coffee',
    city: 'Tbilisi, Georgia',
  },

  nav: {
    home: 'Home',
    about: 'About',
    menu: 'Menu',
    contact: 'Contact',
    cta: 'Visit Us',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language',
  },

  common: {
    skipToContent: 'Skip to content',
    scrollHint: 'Scroll',
    priceTbc: '—',
    placeholderBadge: 'Placeholder',
    loading: 'Loading',
  },

  home: {
    documentTitle: 'Glaze — Desserts & Coffee in Tbilisi',
    documentDescription:
      'Waffles, crêpes and specialty coffee in the heart of Tbilisi. Made fresh, served all day.',

    hero: {
      kicker: 'Tbilisi, Georgia',
      headline: 'Desserts & Coffee, Made Fresh All Day',
      lead: 'Belgian waffles, bubble waffles and specialty coffee — a warm corner of the city to slow down in, from the first espresso to the last scoop.',
      cta: 'See the Menu',
      ctaSecondary: 'Find Us',
    },

    intro: {
      kicker: 'The Glaze Experience',
      heading: 'More Than a Coffee Stop',
      body: [
        'We built Glaze to be a place where you can take your time. Whether it is a morning flat white on the way to work or a bubble waffle shared late in the afternoon, everything leaves our kitchen made to order.',
        'The room is small and warm, the counter is open, and the coffee is pulled in front of you. Nothing sits under a lamp waiting.',
      ],
      cta: 'Our Story',
    },

    usps: {
      kicker: 'The Details',
      heading: 'What We Get Right',
      items: [
        {
          number: '01',
          title: 'Specialty Coffee',
          text: 'Carefully sourced beans, dialled in daily and pulled to order at the bar.',
        },
        {
          number: '02',
          title: 'Made to Order',
          text: 'Waffles and crêpes go on the iron when you ask for them — never before.',
        },
        {
          number: '03',
          title: 'The Room',
          text: 'A calm, welcoming space built for catching up or quietly getting on with things.',
        },
      ],
    },

    craft: {
      kicker: 'Our Craft',
      heading: 'Real Ingredients, Honest Flavors',
      body: 'Local dairy, fruit from the market, and a short list of things we make well rather than a long one we do not. The menu changes when the season does.',
      cta: 'Explore the Menu',
    },

    menuTeaser: {
      kicker: 'The Menu',
      heading: 'From the Iron and the Bar',
      body: 'Sweet and savoury, morning to evening. A few of the things people come back for:',
      highlights: [
        'Belgian Waffle with strawberries and banana',
        'Bubble Waffle with ice cream and fruit',
        'The Glaze Affogato',
      ],
      cta: 'See the Full Menu',
    },

    events: {
      kicker: 'Private Events',
      heading: 'Bring Glaze to Your Event',
      body: 'From a waffle bar at a wedding to a custom dessert and coffee menu for a private party — tell us the date and the headcount and we will put together a proposal.',
      cta: 'Inquire Now',
    },
  },

  about: {
    documentTitle: 'About — Glaze Tbilisi',
    documentDescription:
      'How Glaze came to be, and what goes into the waffles, desserts and coffee we serve in Tbilisi.',

    hero: {
      kicker: 'About Us',
      headline: 'A Small Room With a Long Counter',
      lead: 'Glaze opened as a dessert bar with a serious coffee programme — and stayed that way.',
    },

    story: {
      kicker: 'Our Story',
      heading: 'Built Around the Counter',
      body: [
        '[PLACEHOLDER: Founding story — when Glaze opened, who started it, and what the idea was. Two or three paragraphs of real detail belong here; this text is standing in so the layout can be reviewed at the right length.]',
        '[PLACEHOLDER: A second paragraph about the room itself, the neighbourhood, and how the menu came together.]',
      ],
    },

    values: {
      kicker: 'How We Work',
      heading: 'Three Things We Do Not Compromise On',
      items: [
        {
          number: '01',
          title: 'Fresh, Not Fast',
          text: 'Batters are mixed daily and nothing goes on the iron until it is ordered. It takes a few minutes longer and it is worth it.',
        },
        {
          number: '02',
          title: 'Local First',
          text: 'Georgian dairy, fruit from the market down the road, and suppliers we can call by name.',
        },
        {
          number: '03',
          title: 'A Room, Not a Queue',
          text: 'Somewhere to sit down. Tables you are welcome to keep for as long as your cup lasts.',
        },
      ],
    },

    visit: {
      kicker: 'Come By',
      heading: 'We Are Open Most of the Day',
      body: 'Find us in the centre of Tbilisi — for the exact address and today’s hours, see the contact page.',
      cta: 'Plan Your Visit',
    },
  },

  menu: {
    documentTitle: 'Menu — Glaze Tbilisi',
    documentDescription:
      'Waffles, crêpes, desserts, breakfast and specialty coffee at Glaze in Tbilisi.',

    hero: {
      kicker: 'The Menu',
      headline: 'Sweet, Savoury, All Day',
      lead: 'Served from open to close. Ask the counter about the dessert of the day.',
    },

    // Shown as a standing notice at the top of the menu page. This demo menu is
    // built from what the client's own photos show them serving; it is not the
    // real card. The one exception is the Lunch Combo, whose price is legible
    // in lunch_combo.webp.
    notice: {
      title: '[PLACEHOLDER: Demo menu]',
      body: 'Dish names below are examples drawn from the client’s own photography, and prices are not set — except the Lunch Combo, which is priced in their promo image. Replace this whole section with the real menu card before use.',
    },

    priceNote: 'Prices to be confirmed',
    dietary: {
      v: 'Vegetarian',
      vg: 'Vegan',
      gf: 'Gluten-free option',
    },

    categories: [
      {
        id: 'waffles',
        title: 'Waffles & Crêpes',
        note: 'Made to order — about ten minutes.',
        items: [
          {
            name: 'Belgian Waffle',
            description: 'Strawberries, banana, chocolate sauce, powdered sugar.',
            tags: ['v'],
          },
          {
            name: 'Bubble Waffle',
            description: 'Hong-Kong style, crisp outside and soft through the middle.',
            tags: ['v'],
          },
          {
            name: 'Bubble Waffle with Ice Cream & Fruit',
            description: 'A scoop in the fold, fresh fruit, sauce of your choice.',
            tags: ['v'],
          },
          {
            name: 'Crêpe',
            description: 'Thin, folded, sweet or savoury.',
            tags: ['v'],
          },
          {
            name: 'Create Your Own Waffle',
            description: 'Pick the base, then up to three toppings and a sauce.',
            tags: ['v'],
          },
        ],
      },
      {
        id: 'desserts',
        title: 'Desserts & Ice Cream',
        note: null,
        items: [
          {
            name: 'Pistachio-Glazed Bun',
            description: 'Pistachio cream, crushed pistachio, baked through the morning.',
            tags: ['v'],
          },
          {
            name: 'Chocolate Profiteroles',
            description: 'Boxed for takeaway or plated in.',
            tags: ['v'],
          },
          {
            name: 'Ice Cream — Single Scoop',
            description: 'Ask the counter which flavours are on today.',
            tags: ['v', 'gf'],
          },
          {
            name: 'Dessert of the Day',
            description: '[PLACEHOLDER: Whatever the kitchen has made that morning.]',
            tags: ['v'],
          },
        ],
      },
      {
        id: 'coffee',
        title: 'The Coffee Bar',
        note: 'Oat, almond or lactose-free milk at no extra charge.',
        items: [
          {
            name: 'Espresso / Double Espresso',
            description: 'Our house blend.',
            tags: ['vg', 'gf'],
          },
          {
            name: 'Flat White',
            description: 'Perfectly micro-foamed milk.',
            tags: ['v', 'gf'],
          },
          {
            name: 'Cappuccino',
            description: 'The classic, with a proper cap.',
            tags: ['v', 'gf'],
          },
          {
            name: 'Iced Latte',
            description: 'Double shot, cold milk, plenty of ice.',
            tags: ['v', 'gf'],
          },
          {
            name: 'Strawberry Milkshake',
            description: 'Blended thick, with a scoop folded through.',
            tags: ['v', 'gf'],
          },
          {
            name: 'The Glaze Affogato',
            description: 'A double shot poured over a scoop of vanilla ice cream.',
            tags: ['v', 'gf'],
          },
        ],
      },
      {
        id: 'kitchen',
        title: 'Breakfast & Lunch',
        note: 'Breakfast until noon.',
        items: [
          {
            name: 'Breakfast Plate',
            description: 'Eggs your way, bread, and something from the market.',
            tags: [],
          },
          {
            name: 'Toasted Sandwich',
            description: 'Pressed hot, served with a side salad.',
            tags: [],
          },
          {
            // The one real price on this page — it is printed in the client's
            // own promo image (images/lunch_combo.webp).
            name: 'Lunch Combo',
            description: 'Any sandwich, any dessert and an espresso or americano.',
            price: '30 ₾',
            tags: [],
          },
        ],
      },
    ],
  },

  contact: {
    documentTitle: 'Visit — Glaze Tbilisi',
    documentDescription:
      'Address, opening hours and contact details for Glaze — Desserts & Coffee in Tbilisi.',

    hero: {
      kicker: 'Visit Us',
      headline: 'Come and Sit for a While',
      lead: 'We are in the centre of Tbilisi, open most of the day, every day.',
    },

    details: {
      kicker: 'Find Us',
      heading: 'Address & Hours',
      addressLabel: 'Address',
      // Read off the client's own opening announcement (images/Glaze_is_now_open.webp).
      // Confirm it is still current before publishing.
      address: '9 Alexandr Pushkin St, Tbilisi, Georgia',
      hoursLabel: 'Opening hours',
      hours: '[PLACEHOLDER: full opening hours] · Happy Hours 09:30–14:00 daily, 15% off',
      phoneLabel: 'Phone',
      phone: '[PLACEHOLDER: +995 ...]',
      emailLabel: 'Email',
      email: '[PLACEHOLDER: hello@example.ge]',
      mapCta: 'Open in Google Maps',
    },

    events: {
      kicker: 'Private Events',
      heading: 'Weddings, Parties and Everything Between',
      body: 'A waffle and ice cream bar for a wedding, a dessert table for an office party, or a custom coffee setup for a launch. Send us the date, the headcount and the venue, and we will come back with options and pricing.',
      cta: 'Send an Enquiry',
      ctaNote:
        '[PLACEHOLDER: This button needs a destination — an email address, a form, or a WhatsApp link.]',
    },
  },

  reviews: {
    kicker: 'What People Say',
    heading: 'Reviews from Google',
    lead: 'Pulled from our Google Business Profile.',
    ratingLabel: 'out of 5',
    starsLabel: (n) => `${n} out of 5 stars`,
    googleCta: 'Read more on Google',
    cachedNote: (date) => `Snapshot taken ${date}`,
    pauseLabel: 'Pause scrolling',
    playLabel: 'Resume scrolling',
  },

  gallery: {
    kicker: 'The Feed',
    heading: 'A Look Around',
    lead: 'A few frames from the counter, the kitchen and the room.',
    cta: 'Follow @glaze.tbilisi',
    ctaHref: 'https://www.instagram.com/glaze.tbilisi/',
    prev: 'Previous images',
    next: 'More images',
    hint: 'Drag or swipe',
  },

  footer: {
    tagline: 'Desserts & Coffee — Tbilisi, Georgia',
    navHeading: 'Pages',
    visitHeading: 'Visit',
    followHeading: 'Follow',
    instagram: 'Instagram',
    instagramHref: 'https://www.instagram.com/glaze.tbilisi/',
    googleMaps: 'Google Maps',
    rights: (year) => `© ${year} Glaze. All rights reserved.`,
    credit: 'Demo site for client presentation.',
  },

  notFound: {
    documentTitle: 'Page not found — Glaze',
    heading: 'That page is not on the menu',
    body: 'The link may be out of date, or the page may have moved.',
    cta: 'Back to the start',
  },
}
