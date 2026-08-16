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

    // Transcribed from the client's own printed menu cards.
    notice: {
      title: 'Allergen Notice',
      body: 'Our products may contain allergens. If you have food allergies or intolerances, please let our staff know before ordering.',
    },

    priceNote: 'Included at no extra charge',
    dietary: {
      v: 'Vegetarian',
      vg: 'Vegan',
      gf: 'Gluten-free option',
    },

    categories: [
      {
        id: 'desserts',
        image: 'Belgian_Waffle',
        title: 'Desserts',
        note: 'Every dessert comes with a sauce, a fruit topping and a sprinkle of your choice.',
        items: [
          {
            name: 'Belgian Waffle',
            description: 'Crisp outside, soft in the middle.',
            price: '10 ₾',
            tags: [],
          },
          {
            name: 'Viennese Waffle',
            description: 'Lighter and airier than the Belgian.',
            price: '10 ₾',
            tags: [],
          },
          {
            name: 'French Crêpe',
            description: 'Thin and folded, sweet.',
            price: '10 ₾',
            tags: [],
          },
          {
            name: 'American Pancakes',
            description: 'A stack, served warm.',
            price: '10 ₾',
            tags: [],
          },
          {
            name: 'Bubble Waffle + Ice Cream',
            description: 'Hong-Kong style bubble waffle with a scoop of ice cream.',
            price: '12 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'iceCream',
        image: 'bubble_waffle_with_ice_cream__fruit',
        title: 'Ice Cream',
        note: 'One scoop.',
        items: [
          { name: 'Vanilla', price: '4 ₾', tags: [] },
          { name: 'Chocolate', price: '4 ₾', tags: [] },
          { name: 'Strawberry', price: '4 ₾', tags: [] },
          { name: 'Pistachio', price: '4 ₾', tags: [] },
          { name: 'Crème Brûlée', price: '4 ₾', tags: [] },
        ],
      },
      {
        id: 'toppings',
        image: 'Cinnamon_Roll',
        title: 'Toppings',
        note: 'Every dessert includes one sauce, one fruit topping and one sprinkle. Extras can be added for a small charge.',
        items: [
          {
            name: 'Sauces',
            description:
              'Nutella, pistachio cream, caramel, Lotus Biscoff, strawberry sauce, cherry jam, mango jam.',
            tags: [],
          },
          {
            name: 'Fruits',
            description: 'Banana, strawberry, kiwi.',
            tags: [],
          },
          {
            name: 'Sprinkles',
            description:
              'Chocolate chips, white chocolate chips, crushed pistachios, almond flakes, whole Oreo, rainbow balls or sticks, M&M’s, jelly beans, mini marshmallows.',
            tags: [],
          },
          {
            name: 'Extra Sauce',
            description: 'Add another sauce to your dessert.',
            price: '2 ₾',
            tags: [],
          },
          {
            name: 'Extra Sprinkle',
            description: 'Add another sprinkle to your dessert.',
            price: '1 ₾',
            tags: [],
          },
          {
            name: 'Extra Ice Cream Scoop',
            description: 'Add a scoop to your dessert.',
            price: '4 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'sandwiches',
        image: 'Sandwich',
        title: 'Sandwiches',
        note: null,
        items: [
          { name: 'Ham & Cheese', price: '17 ₾', tags: [] },
          { name: 'Sulguni & Pesto', price: '16 ₾', tags: [] },
          { name: 'Salami', price: '18 ₾', tags: [] },
        ],
      },
      {
        id: 'combo',
        image: 'Take_Away',
        title: 'Combo',
        note: null,
        items: [
          {
            name: 'Dessert + Espresso/Americano',
            description: 'Any dessert except the Bubble Waffle, with an espresso or americano.',
            price: '14 ₾',
            tags: [],
          },
          {
            name: 'Bubble Waffle + Espresso/Americano',
            price: '16 ₾',
            tags: [],
          },
          {
            name: 'Sandwich + Espresso/Americano',
            description: 'Any sandwich, with an espresso or americano.',
            price: '22 ₾',
            tags: [],
          },
          {
            name: 'Sandwich + Cola/Fanta/Sprite',
            description: 'Any sandwich, with a soft drink.',
            price: '20 ₾',
            tags: [],
          },
          {
            name: 'Ice Cream + Espresso/Americano',
            price: '9 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'lunch',
        image: 'Breakfast',
        title: 'Lunch Menu',
        note: null,
        items: [
          {
            name: 'Lunch Menu',
            description: 'Any sandwich, any dessert (except the Bubble Waffle) and an espresso or americano.',
            price: '30 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'kids',
        image: 'crepe',
        title: 'Kids Menu',
        note: null,
        items: [
          {
            name: 'Kids Menu',
            description: 'Mini pancakes with a cocoa and marshmallow.',
            price: '15 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'hotDrinks',
        image: 'Coffee',
        title: 'Hot Drinks',
        note: null,
        items: [
          { name: 'Espresso', price: '6 ₾', tags: [] },
          { name: 'Americano', price: '7 ₾', tags: [] },
          { name: 'Cappuccino', price: '8 ₾', tags: [] },
          { name: 'Latte', price: '9 ₾', tags: [] },
          { name: 'Tea', price: '5 ₾', tags: [] },
          { name: 'Cocoa', price: '8 ₾', tags: [] },
        ],
      },
      {
        id: 'coldDrinks',
        image: 'cravings',
        title: 'Cold Drinks',
        note: null,
        items: [
          { name: 'Iced Coffee', price: '8 ₾', tags: [] },
          { name: 'Iced Coffee + Ice Cream', price: '10 ₾', tags: [] },
          { name: 'Milkshake', price: '12 ₾', tags: [] },
          { name: 'Fuse Tea', price: '4 ₾', tags: [] },
          { name: 'Coca-Cola / Fanta / Sprite', price: '4 ₾', tags: [] },
          { name: 'Mountain Water', price: '2 ₾', tags: [] },
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
      hours: 'Happy Hours 09:30–14:00 daily, 15% off',
      phoneLabel: 'Phone',
      phone: '+995 599 79 98 06',
      emailLabel: 'Email',
      email: '',
      mapCta: 'Open in Google Maps',
    },

    events: {
      kicker: 'Private Events',
      heading: 'Weddings, Parties and Everything Between',
      body: 'A waffle and ice cream bar for a wedding, a dessert table for an office party, or a custom coffee setup for a launch. Send us the date, the headcount and the venue, and we will come back with options and pricing.',
      cta: 'Send an Enquiry',
      ctaNote:
        '+995 599 79 98 06',
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
