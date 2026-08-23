// Image manifest. Generated crops live in /public/img; `npm run images`
// rebuilds them from the originals in /images. Every entry here is a key into
// that manifest — see src/components/Picture.jsx for how srcset is derived.
//
// The originals are all portrait or square; these are content-aware 16:9 crops
// ("wide") plus a 4:5 set ("tall") for the mobile hero only.
import manifest from '../../public/img/manifest.json'

export { manifest }

/** Build the srcset/src pair for one image at one aspect ratio. */
export function imageSource(name, variant = 'wide') {
  const entry = manifest[name]?.[variant]
  if (!entry) {
    // Loud in dev, harmless in production — a typo'd key should not blank the page.
    if (import.meta.env.DEV) {
      console.warn(`[media] no "${variant}" variant for image "${name}"`)
    }
    return null
  }
  return {
    src: `${entry.base}-${entry.sizes[entry.sizes.length - 1]}.webp`,
    srcSet: entry.sizes.map((w) => `${entry.base}-${w}.webp ${w}w`).join(', '),
    ratio: entry.ratio,
  }
}

// ── Where each photo is used ───────────────────────────────────────────────
// Keys are stable; swapping a photo means changing the value here only.
//
// Chosen against what the photographs actually show rather than their file
// names, several of which are wrong: `Breakfast` is a toasted sandwich,
// `Cinnamon_Roll` is a pistachio-glazed bun, `Desert` is a fruit waffle and
// `Mood` is a hamster on a diving board at sea. Three files are promo graphics
// with typeset copy baked in and are deliberately absent from every slot here
// — see `promo` below.
export const media = {
  heroHome: 'main_chraracter', // marble bust holding a branded cup
  heroAbout: 'Taste_Woofles', // a plate carried to a table — people, not just product
  heroMenu: 'Bubble_Waffle_and_strawberries',
  heroContact: 'inside_the_cafe', // the room itself, for "come and sit for a while"

  introBackground: 'inside_the_cafe',
  introForeground: 'Desert',

  craft: 'american-fluffy-pancake',
  craftDetail: 'couple-in-cafe', // "come visit us" invite — people at a table, not just product

  menuTeaser: 'Belgian_Waffle',
  events: 'Waffle_Man', // someone holding an oversized cone — reads as catering

  aboutTwinBack: 'Breakfast',
  aboutTwinFront: 'crepe',
  aboutWide: 'Bubble_Waffle',
}

/**
 * Promo graphics. Rendered at their own aspect ratio and never cropped — the
 * copy is part of the image. Not currently placed on any page; kept mapped so
 * a "current offers" section can pick them up without re-deriving which files
 * are safe to crop.
 */
export const promo = {
  nowOpen: 'Woofles_is_now_open',
  happyHours: 'Happy_Hours',
  lunchCombo: 'lunch_combo',
}

// The gallery — landscape crops only, ordered so close-ups and wider shots
// alternate and the strip has rhythm as it scrolls.
//
// The second block is a later batch of originals, already landscape and at
// higher source resolution (up to 1600px) than the first 23 — see the
// resolution caveat in README. Same alternating rhythm.
export const galleryImages = [
  'Taste_Woofles',
  'inside_the_cafe',
  'Bubble_Waffle',
  'Coffee',
  'Cinnamon_Roll',
  'crepe',
  'Belgian_Waffle',
  'bubble_waffle_with_ice_cream__fruit',
  'Take_Away',
  'Breakfast',
  'Some_sweet',
  'cravings',

  'bubblewaffle-icecream-snickers',
  'cafe',
  'walnut-bubblewaffle',
  'couple-in-cafe',
  'scream-bubble-waffle-ics',
  'special-dog-waffle',
  'blueberry-waffle',
  'coffe-mashine',
  'kiwi-banana-crep',
  'street-woman-bubble-icecream',
  'chokolade-banana',
  'waffle-cafe',
  'banana-split-2',
  'woman-coworking-cafe',
  'bubblewaffle-vanilla-icecream-topping',
  'american-fluffy-pancake',
  'strwaberry-shake-deluxe',
  'street-woman-bubble-icecream-two',
  'tuttifrutti-crap-coco',
  'marshmallow-shake',
  'waffle-coclate-sauce',
  'gummibear-icecup-premium',
  'rainbow-suprice-sup',
  'brezel-cacao-shake',
  'teracotta-strawberry-shake',
  'bubblewaffle-ice-two',
  'm-and-m-icecoffee',
  'pancake-strawberry',
  'banana-split',
  '3-portions-icecream',
]
