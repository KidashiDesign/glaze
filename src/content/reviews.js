// Cached Google reviews.
//
// Deliberately NOT a live API call. Reaching Google Places from the browser
// means an API key in client code, a CORS-restricted endpoint, a five-review
// ceiling and caching limits in Google's terms — all of it on the critical
// path of a page that has to load fast. A cached file renders instantly,
// works offline and ships no credentials.
//
// To refresh: replace the entries below (a Places "Place Details" response
// maps onto this shape one-to-one) and redeploy. `fetchedAt` records when the
// snapshot was taken so a stale wall is obvious.
//
// Quotes are stored in the language the reviewer wrote them in and are never
// translated — putting words a customer did not write next to their name would
// misrepresent them. The surrounding UI is localised; the quotes are not.
//
// These entries are fictional placeholder reviews (paraphrased from the
// original cached set, with invented author names) for demo/presentation
// purposes. They are not real Google reviews and must be replaced with
// genuine, client-approved reviews before this goes live outside the
// presentation.

export const placeUrl =
  'https://www.google.com/maps/place/Woofles+%E2%80%A2+Desserts+%26+Coffee/@41.6940419,44.7998449,17z/data=!3m1!4b1!4m6!3m5!1s0x40440d3b6539f44f:0xd27a24cbfd971247!8m2!3d41.6940379!4d44.8024198!16s%2Fg%2F11njqq3gwz?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D'

// No-API-key embed: interactive, pannable/zoomable, pinned to the same
// coordinates as placeUrl above.
export const mapEmbedUrl = 'https://www.google.com/maps?q=41.6940379,44.8024198&z=17&output=embed'

export const fetchedAt = '2026-08-16'

export const reviews = [
  {
    id: 'salome-t',
    author: 'Salome T.',
    rating: 5,
    lang: 'en',
    quote: 'Fair prices and such friendly staff. The coffee is great and the ice cream is a treat.',
    verified: true,
  },
  {
    id: 'nadja-w',
    author: 'Nadja W.',
    rating: 5,
    lang: 'de',
    quote: 'Alles war super lecker und der Service war richtig freundlich !!🩷🩷 komme gerne wieder',
    verified: true,
  },
  {
    id: 'timo-b',
    author: 'Timo B.',
    rating: 5,
    lang: 'de',
    quote: 'Klasse Waffeln, sehr freundliche Bedienung!',
    verified: true,
  },
  {
    id: 'friedrich-lenz',
    author: 'Friedrich Lenz',
    rating: 5,
    lang: 'de',
    quote:
      'Eine frisch zubereitete Bubble Waffel mit Eis und dazu einen Espresso zu genießen, verdient hier einfach glatte 5 Punkte. Die Begeisterung, mit der man beim Essen beobachtet wird, macht den Besuch noch schöner. Komme gerne wieder.',
    verified: true,
  },
  {
    id: 'katarina-holm',
    author: 'Katarina Holm',
    rating: 5,
    lang: 'en',
    quote:
      "A charming little café right in the center. The Viennese waffles are crispy outside and soft inside, and the bubble waffles come generously filled with perfectly baked balls. The coffee is excellent too, a rare find around here. Great spot for anyone with a sweet tooth. I'll be coming back.",
    verified: true,
  },
  {
    id: 'oksana-belova',
    author: 'Oksana Belova',
    rating: 5,
    lang: 'ru',
    quote:
      'Десерты просто выше всяких похвал. Видно, что делают с душой и вниманием к деталям. А персонал — отдельный плюс: обслуживание на высоте и очень дружелюбная атмосфера🤍',
    verified: true,
  },
  {
    id: 'julia-m',
    author: 'Julia M.',
    rating: 5,
    lang: 'en',
    quote:
      'Lovely spot 🤩 the food is really tasty 🥪 The ham and cheese sandwich and the Belgian waffle with fruit and ice cream are both a must 🍨 and they welcome dogs too 🐶',
    verified: true,
  },
  {
    id: 'daniyar-nurlan',
    author: 'Daniyar Nurlan',
    rating: 5,
    lang: 'en',
    quote: 'Great atmosphere, the staff were warm and welcoming, and the dessert was fantastic.',
    verified: true,
  },
  {
    id: 'yekaterina-orlova',
    author: 'Екатерина Орлова',
    rating: 5,
    lang: 'ru',
    quote:
      'Вафли очень вкусные, атмосфера уютная, комбо-предложения приятные. Цены адекватные (10-12 лари за вафлю). Девушка на кассе очень приветливая, пообщаться с ней было одно удовольствие:)',
    verified: true,
  },
  {
    id: 'tamuna-berid',
    author: 'Tamuna Beridze',
    rating: 5,
    lang: 'ru',
    quote:
      'Взяла сэндвич с ветчиной 🤤 очень вкусно и сытно! А ещё здесь отличные бабл вафли и ароматный кофе!',
    verified: true,
  },
  {
    id: 'v-p',
    author: 'V P',
    rating: 5,
    lang: 'ru',
    quote:
      'Очень вкусно и уютно! Блинчики, вафли с мороженым и сэндвичи здесь готовят превосходно. Обслуживают быстро и с улыбкой.',
    verified: true,
  },
  {
    id: 'marina-vetrova',
    author: 'Marina Vetrova',
    rating: 5,
    lang: 'ru',
    quote:
      'Спасибо за теплый прием! Вафли невероятно вкусные, кофе прекрасный, а персонал очень внимательный и всегда с улыбкой❤️',
    verified: true,
  },
  {
    id: 'rustam-aliyev',
    author: 'Rustam Aliyev',
    rating: 5,
    lang: 'ru',
    quote:
      'Атмосфера очень понравилась. Кофе и еда на высоком уровне, меню разнообразное. Обязательно вернусь. В центре города — идеальное место, чтобы выпить кофе и отдохнуть.',
    verified: true,
  },
  {
    id: 'nargiza-yusupova',
    author: 'Nargiza Yusupova',
    rating: 5,
    lang: 'ru',
    quote:
      'Невероятно вкусно и атмосферно! Для любителей сладкого это просто маст-хэв ❤️. Персонал очень внимательный.',
    verified: true,
  },
  {
    id: 'polina-fedorova',
    author: 'Полина Фёдорова',
    rating: 5,
    lang: 'ru',
    quote:
      'Мне всё очень понравилось! Спасибо, что готовите так вкусно и умеете поднять настроение! Обязательно вернёмся ещё не раз!',
    verified: true,
  },
  {
    id: 'e-k',
    author: 'E K',
    rating: 5,
    lang: 'ka',
    quote: 'დესერტები ნამდვილად შესანიშნავია! ხარისხი, გემო და მიწოდება საუკეთესო დონეზეა. აუცილებლად ღირს ცდა',
    verified: true,
  },
  {
    id: 'davit-mchedlishvili',
    author: 'Davit Mchedlishvili',
    rating: 5,
    lang: 'ru',
    quote:
      'Ребята, это просто восторг!! Казалось, меня уже сложно чем-то удивить — а вафли с мороженым доказали обратное. Отдельное уважение хозяйке заведения: место уютное, диванчики мягкие, цены приятные. Обязательно приду ещё.',
    verified: true,
  },
  {
    id: 'aigerim-serik',
    author: 'Aigerim Serik',
    rating: 5,
    lang: 'ru',
    quote: 'Всё очень понравилось 🥰 вкусно и сервис отличный 🇬🇪',
    verified: true,
  },
  {
    id: 'lena-h',
    author: 'Lena H',
    rating: 5,
    lang: 'en',
    quote:
      'Cozy, friendly atmosphere. We tried the Belgian waffle with ice cream — perfectly crisp with delicious toppings. Loved it ♥️ Highly recommend this place 👌',
    verified: true,
  },
  {
    id: 'gulnara-iskakova',
    author: 'Gulnara Iskakova',
    rating: 5,
    lang: 'ru',
    quote:
      'Брали с мужем комбо: американо, сэндвич и вафлю. Было очень вкусно, готовят быстро. Он взял бельгийскую вафлю, я венскую — обе нежные, в меру сладкие. Добавили фисташковый крем с голубикой и молотыми фисташками. В общем, топ!)',
    verified: true,
  },
  {
    id: 'giorgi-tsereteli',
    author: 'Giorgi Tsereteli',
    rating: 5,
    lang: 'en',
    quote: 'Great desserts and great service. Definitely recommend 👍',
    verified: true,
  },
  {
    id: 'natia-kapanadze',
    author: 'Natia Kapanadze',
    rating: 5,
    lang: 'ru',
    quote:
      'Отличная локация, прямо в центре города, очень атмосферно — почему-то напоминает уютную кофейню из сериала. Сэндвич с горчичным соусом порадовал, десерты тоже очень вкусные.',
    verified: true,
  },
  {
    id: 'karine-hovhannisyan',
    author: 'Карине Оганнисян',
    rating: 5,
    lang: 'ru',
    quote: 'Очень приветливая сотрудница и вкусные вафли♡',
    verified: true,
  },
  {
    id: 'ananya-desai',
    author: 'Ananya Desai',
    rating: 5,
    lang: 'en',
    quote: 'Food was really good, especially the waffles',
    verified: true,
  },
  {
    id: 'sopho-kiladze',
    author: 'Sopho Kiladze',
    rating: 5,
    lang: 'en',
    quote: 'Such a cozy place!',
    verified: true,
  },
  {
    id: 'max-r',
    author: 'Max R.',
    rating: 5,
    lang: 'en',
    quote: 'The sandwich was really tasty',
    verified: true,
  },
]

/** Average of the cached ratings, rounded to one decimal. */
export const averageRating =
  Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10
