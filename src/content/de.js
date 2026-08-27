// ─────────────────────────────────────────────────────────────────────────────
// GERMAN COPY — deutscher Text
//
// Mirrors src/content/en.js key for key. If you add a key there, add it here
// too; src/content/index.js warns in development when the two shapes drift.
//
// ⚠ NEEDS A NATIVE-SPEAKER PASS before this goes in front of the client — the
// translation is careful but marketing tone benefits from a native ear,
// particularly the hero and the USP titles. Menu item names should also be
// checked against what the counter actually calls them.
// ─────────────────────────────────────────────────────────────────────────────

export default {
  meta: {
    localeName: 'Deutsch',
    localeShort: 'DE',
    htmlLang: 'de',
  },

  brand: {
    name: 'Woofles',
    tagline: 'Desserts & Kaffee',
    city: 'Tiflis, Georgien',
  },

  nav: {
    home: 'Start',
    about: 'Über uns',
    menu: 'Speisekarte',
    contact: 'Kontakt',
    cta: 'Besuch uns',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    languageLabel: 'Sprache',
  },

  common: {
    skipToContent: 'Zum Inhalt springen',
    scrollHint: 'Scrollen',
    priceTbc: '—',
    placeholderBadge: 'Platzhalter',
    loading: 'Wird geladen',
  },

  home: {
    documentTitle: 'Woofles — Desserts & Kaffee in Tiflis',
    documentDescription:
      'Waffeln, Crêpes und Spezialitätenkaffee im Herzen von Tiflis. Frisch zubereitet, den ganzen Tag.',

    hero: {
      kicker: 'Tiflis, Georgien',
      headline: 'Desserts & Kaffee, den ganzen Tag frisch',
      lead: 'Belgische Waffeln, Bubble Waffeln und Spezialitätenkaffee — eine warme Ecke der Stadt zum Verweilen, vom ersten Espresso bis zur letzten Kugel Eis.',
      cta: 'Zur Speisekarte',
      ctaSecondary: 'So findest du uns',
    },

    intro: {
      kicker: 'Das Woofles-Erlebnis',
      heading: 'Mehr als nur ein Kaffee-Stopp',
      body: [
        'Wir haben Woofles als Ort erschaffen, an dem man sich Zeit nehmen kann. Ob ein Flat White am Morgen auf dem Weg zur Arbeit oder eine Bubble Waffel, die man sich am Nachmittag zu zweit teilt — alles verlässt unsere Küche erst auf Bestellung.',
        'Der Raum ist klein und gemütlich, die Theke ist offen, und der Kaffee wird direkt vor deinen Augen zubereitet. Hier steht nichts unter einer Lampe und wartet.',
      ],
      cta: 'Unsere Geschichte',
    },

    usps: {
      kicker: 'Die Details',
      heading: 'Worauf wir Wert legen',
      items: [
        {
          number: '01',
          title: 'Spezialitätenkaffee',
          text: 'Sorgfältig ausgewählte Bohnen, täglich neu eingestellt und auf Bestellung an der Bar zubereitet.',
        },
        {
          number: '02',
          title: 'Auf Bestellung gemacht',
          text: 'Waffeln und Crêpes kommen erst dann aufs Eisen, wenn sie bestellt werden — nie vorher.',
        },
        {
          number: '03',
          title: 'Der Raum',
          text: 'Ein ruhiger, einladender Ort — zum Wiedersehen mit Freunden oder um in Ruhe etwas zu erledigen.',
        },
      ],
    },

    craft: {
      kicker: 'Unser Handwerk',
      heading: 'Echte Zutaten, ehrlicher Geschmack',
      body: 'Lokale Milchprodukte, Obst vom Markt und eine kurze Liste dessen, was wir wirklich gut können, statt einer langen Liste dessen, was wir nicht können. Die Karte ändert sich mit den Jahreszeiten.',
      cta: 'Speisekarte entdecken',
    },

    menuTeaser: {
      kicker: 'Die Speisekarte',
      heading: 'Vom Waffeleisen und von der Bar',
      body: 'Süß und herzhaft, von morgens bis abends. Ein paar Dinge, für die man wiederkommt:',
      highlights: [
        'Belgische Waffel mit Erdbeeren und Banane',
        'Bubble Waffel mit Eis und Früchten',
        'Der Woofles-Affogato',
      ],
      cta: 'Zur vollständigen Speisekarte',
    },

    events: {
      kicker: 'Private Veranstaltungen',
      heading: 'Bring Woofles zu deiner Veranstaltung',
      body: 'Von einer Waffelbar auf einer Hochzeit bis zu einer individuellen Dessert- und Kaffeekarte für eine private Feier — nenne uns Datum und Gästezahl, und wir erstellen dir ein Angebot.',
      cta: 'Jetzt anfragen',
    },
  },

  about: {
    documentTitle: 'Über uns — Woofles Tiflis',
    documentDescription:
      'Wie Woofles entstanden ist und was in den Waffeln, Desserts und dem Kaffee steckt, die wir in Tiflis servieren.',

    hero: {
      kicker: 'Über uns',
      headline: 'Ein kleiner Raum mit einer langen Theke',
      lead: 'Woofles eröffnete als Dessertbar mit einem ernsthaften Kaffeeprogramm — und ist das bis heute geblieben.',
    },

    story: {
      kicker: 'Unsere Geschichte',
      heading: 'Rund um die Theke gebaut',
      body: [
        '[PLACEHOLDER: Gründungsgeschichte — wann Woofles eröffnet hat, wer es gegründet hat und was die Idee dahinter war. Hier gehören zwei bis drei Absätze mit echten Details hin; dieser Text dient nur dazu, das Layout in der richtigen Länge zu prüfen.]',
        '[PLACEHOLDER: Ein zweiter Absatz über den Raum selbst, die Nachbarschaft und wie die Speisekarte entstanden ist.]',
      ],
    },

    values: {
      kicker: 'Wie wir arbeiten',
      heading: 'Drei Dinge, bei denen wir keine Kompromisse machen',
      items: [
        {
          number: '01',
          title: 'Frisch, nicht schnell',
          text: 'Der Teig wird täglich frisch angerührt, und nichts kommt aufs Eisen, bevor es bestellt wurde. Das dauert ein paar Minuten länger — und ist es wert.',
        },
        {
          number: '02',
          title: 'Erst das Lokale',
          text: 'Georgische Milchprodukte, Obst vom Markt gleich um die Ecke und Lieferanten, die wir beim Namen kennen.',
        },
        {
          number: '03',
          title: 'Ein Raum, keine Schlange',
          text: 'Ein Ort zum Hinsetzen. Der Tisch gehört dir, solange deine Tasse reicht.',
        },
      ],
    },

    visit: {
      kicker: 'Schau vorbei',
      heading: 'Wir haben fast den ganzen Tag geöffnet',
      body: 'Du findest uns im Zentrum von Tiflis — die genaue Adresse und die heutigen Öffnungszeiten stehen auf der Kontaktseite.',
      cta: 'Besuch planen',
    },
  },

  menu: {
    documentTitle: 'Speisekarte — Woofles Tiflis',
    documentDescription:
      'Waffeln, Crêpes, Desserts, Frühstück und Spezialitätenkaffee bei Woofles in Tiflis.',

    hero: {
      kicker: 'Die Speisekarte',
      headline: 'Süß, herzhaft, den ganzen Tag',
      lead: 'Serviert von der Öffnung bis zur Schließung. Frag an der Theke nach dem Dessert des Tages.',
    },

    notice: {
      title: 'Allergenhinweis',
      body: 'Unsere Produkte können Allergene enthalten. Solltest du Lebensmittelallergien oder Unverträglichkeiten haben, informiere bitte unser Personal vor der Bestellung.',
    },

    priceNote: 'Ohne Aufpreis inbegriffen',
    dietary: {
      v: 'Vegetarisch',
      vg: 'Vegan',
      gf: 'Glutenfreie Option',
    },

    categories: [
      {
        id: 'desserts',
        image: 'Belgian_Waffle',
        title: 'Desserts',
        note: 'Jedes Dessert kommt mit einer Sauce, einem Frucht-Topping und einer Streusel-Sorte deiner Wahl.',
        items: [
          {
            name: 'Belgische Waffel',
            description: 'Außen knusprig, innen weich.',
            price: '10 ₾',
            tags: [],
          },
          {
            name: 'Wiener Waffel',
            description: 'Leichter und luftiger als die belgische.',
            price: '10 ₾',
            tags: [],
          },
          {
            name: 'Französische Crêpe',
            description: 'Dünn und gefaltet, süß.',
            price: '10 ₾',
            tags: [],
          },
          {
            name: 'Amerikanische Pancakes',
            description: 'Ein Stapel, warm serviert.',
            price: '10 ₾',
            tags: [],
          },
          {
            name: 'Bubble Waffel + Eis',
            description: 'Bubble Waffel im Hongkong-Stil mit einer Kugel Eis.',
            price: '12 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'iceCream',
        image: 'bubble_waffle_with_ice_cream__fruit',
        title: 'Eis',
        note: 'Eine Kugel.',
        items: [
          { name: 'Vanille', price: '4 ₾', tags: [] },
          { name: 'Schokolade', price: '4 ₾', tags: [] },
          { name: 'Erdbeere', price: '4 ₾', tags: [] },
          { name: 'Pistazie', price: '4 ₾', tags: [] },
          { name: 'Crème brûlée', price: '4 ₾', tags: [] },
        ],
      },
      {
        id: 'toppings',
        image: 'Topping',
        title: 'Toppings',
        note: 'Jedes Dessert enthält bereits eine Sauce, ein Frucht-Topping und eine Streusel-Sorte. Extras gibt es gegen einen kleinen Aufpreis.',
        items: [
          {
            name: 'Saucen',
            description:
              'Nutella, Pistaziencreme, Karamell, Lotus Biscoff, Erdbeersauce, Kirschmarmelade, Mangomarmelade.',
            tags: [],
          },
          {
            name: 'Früchte',
            description: 'Banane, Erdbeere, Kiwi.',
            tags: [],
          },
          {
            name: 'Streusel',
            description:
              'Schokoladenstückchen, weiße Schokoladenstückchen, gehackte Pistazien, Mandelblättchen, ganze Oreo, bunte Kugeln oder Stäbchen, M&M’s, Gummibärchen, Mini-Marshmallows.',
            tags: [],
          },
          {
            name: 'Extra Sauce',
            description: 'Eine weitere Sauce zu deinem Dessert.',
            price: '2 ₾',
            tags: [],
          },
          {
            name: 'Extra Streusel',
            description: 'Eine weitere Streusel-Sorte zu deinem Dessert.',
            price: '1 ₾',
            tags: [],
          },
          {
            name: 'Extra Kugel Eis',
            description: 'Eine Kugel Eis zu deinem Dessert.',
            price: '4 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'combo',
        image: 'Take_Away',
        title: 'Kombo',
        note: null,
        items: [
          {
            name: 'Dessert + Espresso/Americano',
            description: 'Jedes Dessert außer der Bubble Waffel, mit einem Espresso oder Americano.',
            price: '14 ₾',
            tags: [],
          },
          {
            name: 'Bubble Waffel + Espresso/Americano',
            price: '16 ₾',
            tags: [],
          },
          {
            name: 'Sandwich + Espresso/Americano',
            description: 'Jedes Sandwich, mit einem Espresso oder Americano.',
            price: '22 ₾',
            tags: [],
          },
          {
            name: 'Sandwich + Cola/Fanta/Sprite',
            description: 'Jedes Sandwich, mit einem Softdrink.',
            price: '20 ₾',
            tags: [],
          },
          {
            name: 'Eis + Espresso/Americano',
            price: '9 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'lunch',
        image: 'Breakfast',
        title: 'Mittagsmenü',
        note: null,
        items: [
          {
            name: 'Mittagsmenü',
            description: 'Jedes Sandwich, jedes Dessert (außer der Bubble Waffel) und ein Espresso oder Americano.',
            price: '30 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'kids',
        image: 'crepe',
        title: 'Kindermenü',
        note: null,
        items: [
          {
            name: 'Kindermenü',
            description: 'Mini-Pancakes mit Kakao und Marshmallow.',
            price: '15 ₾',
            tags: [],
          },
        ],
      },
      {
        id: 'hotDrinks',
        image: 'Coffee',
        title: 'Heißgetränke',
        note: null,
        items: [
          { name: 'Espresso', price: '6 ₾', tags: [] },
          { name: 'Americano', price: '7 ₾', tags: [] },
          { name: 'Cappuccino', price: '8 ₾', tags: [] },
          { name: 'Latte', price: '9 ₾', tags: [] },
          { name: 'Tee', price: '5 ₾', tags: [] },
          { name: 'Kakao', price: '8 ₾', tags: [] },
        ],
      },
      {
        id: 'coldDrinks',
        image: 'Milk_Shake',
        title: 'Kaltgetränke',
        note: null,
        items: [
          { name: 'Eiskaffee', price: '8 ₾', tags: [] },
          { name: 'Eiskaffee + Eis', price: '10 ₾', tags: [] },
          { name: 'Milkshake', price: '12 ₾', tags: [] },
          { name: 'Fuse Tea', price: '4 ₾', tags: [] },
          { name: 'Coca-Cola / Fanta / Sprite', price: '4 ₾', tags: [] },
          { name: 'Mineralwasser', price: '2 ₾', tags: [] },
        ],
      },
    ],
  },

  contact: {
    documentTitle: 'Besuch — Woofles Tiflis',
    documentDescription:
      'Adresse, Öffnungszeiten und Kontaktdaten für Woofles — Desserts & Kaffee in Tiflis.',

    hero: {
      kicker: 'Besuch uns',
      headline: 'Komm vorbei und bleib eine Weile',
      lead: 'Wir sind im Zentrum von Tiflis, fast den ganzen Tag geöffnet, jeden Tag.',
    },

    details: {
      kicker: 'So findest du uns',
      heading: 'Adresse & Öffnungszeiten',
      addressLabel: 'Adresse',
      address: 'Alexandr-Puschkin-Str. 9, Tiflis, Georgien',
      hoursLabel: 'Öffnungszeiten',
      hours: 'Happy Hours 09:30–14:00 Uhr täglich, 15 % Rabatt',
      phoneLabel: 'Telefon',
      phone: '+995 599 79 98 06',
      emailLabel: 'E-Mail',
      email: '',
      mapCta: 'In Google Maps öffnen',
      mapTitle: 'Karte — Woofles Desserts & Coffee, Tiflis',
    },

    events: {
      kicker: 'Private Veranstaltungen',
      heading: 'Hochzeiten, Feiern und alles dazwischen',
      body: 'Eine Waffel- und Eisbar für eine Hochzeit, ein Dessert-Tisch für eine Büroparty oder eine individuelle Kaffeestation für eine Produktpräsentation. Schick uns Datum, Gästezahl und Ort — wir melden uns mit Optionen und Preisen zurück.',
      cta: 'Anfrage senden',
      ctaNote: '+995 599 79 98 06',
    },
  },

  reviews: {
    kicker: 'Das sagen unsere Gäste',
    heading: 'Bewertungen von Google',
    lead: 'Übernommen aus unserem Google-Unternehmensprofil.',
    ratingLabel: 'von 5',
    starsLabel: (n) => `${n} von 5 Sternen`,
    googleCta: 'Mehr auf Google lesen',
    cachedNote: (date) => `Stand: ${date}`,
    pauseLabel: 'Scrollen pausieren',
    playLabel: 'Scrollen fortsetzen',
  },

  gallery: {
    kicker: 'Der Feed',
    heading: 'Ein Blick hinein',
    lead: 'Ein paar Aufnahmen von der Theke, der Küche und dem Gastraum.',
    prev: 'Vorherige Bilder',
    next: 'Weitere Bilder',
    hint: 'Ziehen oder wischen',
  },

  footer: {
    tagline: 'Desserts & Kaffee — Tiflis, Georgien',
    navHeading: 'Seiten',
    visitHeading: 'Besuch',
    followHeading: 'Folgen',
    instagram: 'Instagram',
    instagramHref: 'https://www.instagram.com/woofles.tbilisi/',
    googleMaps: 'Google Maps',
    rights: (year) => `© ${year} Woofles. Alle Rechte vorbehalten.`,
    credit: 'Demo-Website für die Kundenpräsentation.',
  },

  notFound: {
    documentTitle: 'Seite nicht gefunden — Woofles',
    heading: 'Diese Seite steht nicht auf der Karte',
    body: 'Der Link könnte veraltet sein, oder die Seite wurde verschoben.',
    cta: 'Zurück zum Start',
  },
}
