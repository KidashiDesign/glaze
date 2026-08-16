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

export const placeUrl =
  'https://www.google.com/maps/place/Glaze+%E2%80%A2+Desserts+%26+Coffee/@41.6940419,44.7998449,17z/data=!4m8!3m7!1s0x40440d3b6539f44f:0xd27a24cbfd971247!8m2!3d41.6940379!4d44.8024198'

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

  // ── Everything below is sample data ─────────────────────────────────────
  // [PLACEHOLDER] Only the Mariam K. review above is real. These are written
  // to demonstrate the layout at realistic length and MUST be replaced with
  // (or removed in favour of) actual reviews before this goes in front of
  // anyone outside the presentation. Their `author` reads "Anonymous Guest"
  // rather than a bracketed placeholder — if a real future review has no name
  // to attribute (e.g. permission wasn't given), reuse that value instead of
  // leaving a visible [PLACEHOLDER] tag in front of a customer.
  {
    id: 'placeholder-2',
    author: 'Anonymous Guest',
    rating: 5,
    lang: 'en',
    quote:
      '[PLACEHOLDER: A short review about the waffles — roughly this length, one or two sentences, mentioning a specific item.]',
    verified: false,
  },
  {
    id: 'placeholder-3',
    author: 'Anonymous Guest',
    rating: 5,
    lang: 'ka',
    quote:
      '[PLACEHOLDER: A Georgian-language review. Quotes stay in the language they were written in.]',
    verified: false,
  },
  {
    id: 'placeholder-4',
    author: 'Anonymous Guest',
    rating: 4,
    lang: 'en',
    quote:
      '[PLACEHOLDER: A slightly longer review about the room and the coffee — three sentences, to show how the card handles the tallest realistic case.]',
    verified: false,
  },
  {
    id: 'placeholder-5',
    author: 'Anonymous Guest',
    rating: 5,
    lang: 'en',
    quote: '[PLACEHOLDER: A very short review — the shortest realistic case.]',
    verified: false,
  },
  {
    id: 'placeholder-6',
    author: 'Anonymous Guest',
    rating: 5,
    lang: 'en',
    quote:
      '[PLACEHOLDER: A review mentioning the bubble waffles and the service, two sentences.]',
    verified: false,
  },
]

/** Average of the cached ratings, rounded to one decimal. */
export const averageRating =
  Math.round((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10) / 10
