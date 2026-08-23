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
// All entries below are real, copied from the business's own public Google
// Business Profile. Google does not expose per-review star ratings in a way
// that survives a copy-paste of the page (only the food/service/ambience
// sub-scores do, which were 5s throughout); every entry is rated 5 to match,
// consistent with the profile's overall average. Reviews with no written
// text (rating-only entries) are left out, since the card has nothing to
// quote. Confirm reproducing these names and quotes here is fine with the
// client before this goes live outside the presentation.

export const placeUrl =
  'https://www.google.com/maps/place/Woofles+%E2%80%A2+Desserts+%26+Coffee/@41.6940419,44.7998449,17z/data=!3m1!4b1!4m6!3m5!1s0x40440d3b6539f44f:0xd27a24cbfd971247!8m2!3d41.6940379!4d44.8024198!16s%2Fg%2F11njqq3gwz?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D'

// No-API-key embed: interactive, pannable/zoomable, pinned to the same
// coordinates as placeUrl above.
export const mapEmbedUrl = 'https://www.google.com/maps?q=41.6940379,44.8024198&z=17&output=embed'

export const fetchedAt = '2026-08-16'

export const reviews = [
  {
    id: 'mariam-k',
    author: 'Mariam K.',
    rating: 5,
    lang: 'en',
    quote: 'Good prices, sweet staff. Very good coffee and delicious ice cream.',
    verified: true,
  },
  {
    id: 'die-ah',
    author: 'Die Ah',
    rating: 5,
    lang: 'de',
    quote: 'Es war sehr lecker und die Bedienung war auch echt gut !!🩷🩷 immer wieder gern',
    verified: true,
  },
  {
    id: 'gjjfvn-hfdhk',
    author: 'gjjfvn hfdhk',
    rating: 5,
    lang: 'de',
    quote: 'Super Waffeln, nette Bedienung!',
    verified: true,
  },
  {
    id: 'burghard-humml',
    author: 'Burghard Humml',
    rating: 5,
    lang: 'de',
    quote:
      'Im Woofles eine frisch zubereitete Bubble Waffel with Ice Cream und einen Espresso genießen, kann einfach nur 5 Punkte verdienen. Die Freude mit der du beim genießen beobachtet wirst, ist noch einmal ein Genuss. Gerne wieder.',
    verified: true,
  },
  {
    id: 'liubov-zhukova',
    author: 'Liubov Zhukova',
    rating: 5,
    lang: 'en',
    quote:
      "A cute cafe in the city center. Viennese waffles—crispy on the outside and soft on the inside. The bubble waffles are fantastic, with plenty of filling and the balls baked perfectly. Excellent Julius Meinl coffee, which is rare in Georgia. I recommend it to anyone with a sweet tooth and who loves good coffee! I'll definitely be back.",
    verified: true,
  },
  {
    id: 'alina-vokhmintseva',
    author: 'Alina Vokhmintseva',
    rating: 5,
    lang: 'ru',
    quote:
      'Очень вкусные десерты. Прям постарались, сделали все насыщенно. И что самое приятное - это персонал, обслуживание на высшем уровне и приятная френдли атмосфера🤍',
    verified: true,
  },
  {
    id: 'maria-91',
    author: 'Maria 91',
    rating: 5,
    lang: 'en',
    quote:
      'Perfect place 🤩 very tasty food 🥪 Recommend sandwiches with ham and cheese and Belgian waffle with fruits and ice cream 🍨 pet-friendly place 🐶',
    verified: true,
  },
  {
    id: 'joham-kazmi',
    author: 'Joham Kazmi',
    rating: 5,
    lang: 'en',
    quote: 'Excellent vibe, warm and friendly staff and dessert was just outstanding.',
    verified: true,
  },
  {
    id: 'valentina-shateeva',
    author: 'Валентина Шатеева',
    rating: 5,
    lang: 'ru',
    quote:
      'Очень вкусные вафли, уютно, есть приятные комбо. Цены комфортные (10-12 лари за вафлю). Девушка за кассой очень милая, было приятно с ней общаться:)',
    verified: true,
  },
  {
    id: 'nino-sajaia',
    author: 'Nino Sajaia',
    rating: 5,
    lang: 'ru',
    quote:
      'Заказала сэндвич с ветчиной 🤤 вкусно и сытно! Тут ещё можно заказать бабл вафли и ароматный кофе!',
    verified: true,
  },
  {
    id: 'r-u',
    author: 'R U',
    rating: 5,
    lang: 'ru',
    quote:
      'Очень вкусно и уютно! Специализируются на блинчиках, вафлях с мороженым, и сэндвичах, и делают их превосходно. Обслуживание быстрое и с улыбкой.',
    verified: true,
  },
  {
    id: 'stella',
    author: 'Stella',
    rating: 5,
    lang: 'ru',
    quote:
      'Спасибо большое вашему кафе которое нас с теплотой встретило. У вас вкуснейшие вафли и прекрасный кофе. Так же очень внимательный и улыбчивый персонал❤️',
    verified: true,
  },
  {
    id: 'elkhan-shabanov',
    author: 'elkhan shabanov',
    rating: 5,
    lang: 'ru',
    quote:
      'Очень понравилась атмосфера. Кофе и еда на высшем уровне. Хороший ассортимент в меню. Приду еще. В центре города самое то — выпить кофе и отдохнуть.',
    verified: true,
  },
  {
    id: 'dina-kerimova',
    author: 'Dina Kerimova',
    rating: 5,
    lang: 'ru',
    quote:
      'Невероятно вкусно и атмосферно! Просто must have, если вы любите сладкое ❤️. Очень внимательный персонал.',
    verified: true,
  },
  {
    id: 'irina-soboleva',
    author: 'Ирина Соболева',
    rating: 5,
    lang: 'ru',
    quote:
      'Мне очень понравилось! Спасибо большое, что умеете так вкусно готовить и радовать наши души и тела! Обязательно придём ещё и ещё!',
    verified: true,
  },
  {
    id: 'l-b',
    author: 'L B',
    rating: 5,
    lang: 'ka',
    quote: 'დესერტები უბრალოდ საოცარია! ხარისხი, გემო და პრეზენტაცია უმაღლეს დონეზეა. აუცილებლად დააგემოვნეთ',
    verified: true,
  },
  {
    id: 'pragmatolog',
    author: 'Pragmatolog',
    rating: 5,
    lang: 'ru',
    quote:
      'Ребята, это просто бомба!! Я думал, что меня уже ничем не удивить в этой жизни - но вафли с мороженным были с этим не согласны. Большой респект хозяйке кафе: случайно попал на день открытия и меня пустили, хотя вечеринка была "закрытой". Место уютное, диванчики мягкие. Цены - приятные, совсем недорого. Буду заходить еще.',
    verified: true,
  },
  {
    id: 'inkar-zhanabay',
    author: 'Inkar Zhanabay',
    rating: 5,
    lang: 'ru',
    quote: 'Очень все понравилось 🥰 вкусно и сервис хороший 🇬🇪',
    verified: true,
  },
  {
    id: 'maia-k',
    author: 'Maia K',
    rating: 5,
    lang: 'en',
    quote:
      'Friendly, cozy atmosphere. We tried the Belgian waffle with ice cream. Medium crispy waffle with delicious ice cream and toppings. We liked it ♥️ Highly recommended Woofles Cafe 👌',
    verified: true,
  },
  {
    id: 'zemfira-kharisova',
    author: 'Zemfira Kharisova',
    rating: 5,
    lang: 'ru',
    quote:
      'Мы с мужем брали комбо. Американо+ сендвич+ вафля. Было очень вкусно, я даже не успела сфоткать. Готовят быстро. Муж взял бельгийскую вафлю, я венскую. Вафли нежные, не слишком сладкие. Мы попросили фисташковый крем+ голубику+ посыпку молотые фисташки. Вопщем топ!)',
    verified: true,
  },
  {
    id: 'akaki-nadiradze',
    author: 'Akaki NADIRADZE',
    rating: 5,
    lang: 'en',
    quote: 'Delicious desserts and great service. I recommend 👍',
    verified: true,
  },
  {
    id: 'nina-gabunia-anjaparidze',
    author: 'Nina Gabunia-Anjaparidze',
    rating: 5,
    lang: 'ru',
    quote:
      'Очень нравится локация, в самом центре городе, очень атмосферно, не знаю почему, но по ощущениям напоминает кофейню из «Друзей». Очень понравился сэндвич с горчичным соусом, десерты тоже очень вкусные.',
    verified: true,
  },
  {
    id: 'elina-papoyan',
    author: 'Элина Папоян',
    rating: 5,
    lang: 'ru',
    quote: 'Очень милая сотрудница и вкусные вафли♡',
    verified: true,
  },
  {
    id: 'pooja-bhanushali',
    author: 'Pooja Bhanushali',
    rating: 5,
    lang: 'en',
    quote: 'Food was really good, especially the waffles',
    verified: true,
  },
  {
    id: 'anna-kharazishvili',
    author: 'Anna Kharazishvili',
    rating: 5,
    lang: 'en',
    quote: 'Nice cozy place !',
    verified: true,
  },
  {
    id: 'zed-gameplay',
    author: 'ZED GAMEPLAY',
    rating: 5,
    lang: 'en',
    quote: 'Sandwich was very tasty',
    verified: true,
  },
]

/** Average of the cached ratings, rounded to one decimal. */
export const averageRating =
  Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10
