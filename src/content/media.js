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
  heroContact: 'bubblewaffle-vanilla-icecream-topping',

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
// alternate and the strip has rhythm as it scrolls. Kept to this original
// batch; the later upload (see the mosaic sets below) is spread across the
// site's other pages instead of piling everything into one strip.
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
]

// The later batch of uploads, sorted into small per-page sets for the static
// PhotoMosaic grid (see src/components/PhotoMosaic.jsx) instead of the
// scrolling Gallery strip — so new photos land throughout the site rather
// than all in one place. `american-fluffy-pancake`, `couple-in-cafe` and
// `bubblewaffle-vanilla-icecream-topping` from the same batch are already
// placed above via the `media` map and are not repeated here.
export const mosaicHome = [
  'bubblewaffle-icecream-snickers',
  'cafe',
  'coffe-mashine',
  'woman-coworking-cafe',
  'street-woman-bubble-icecream',
  'waffle-cafe',
  'banana-split-2',
  'chokolade-banana',
]

export const mosaicAbout = [
  'walnut-bubblewaffle',
  'scream-bubble-waffle-ics',
  'kiwi-banana-crep',
  'street-woman-bubble-icecream-two',
  'blueberry-waffle',
  'special-dog-waffle',
  'tuttifrutti-crap-coco',
]

export const mosaicMenu = [
  'strwaberry-shake-deluxe',
  'marshmallow-shake',
  'waffle-coclate-sauce',
  'gummibear-icecup-premium',
  'm-and-m-icecoffee',
  'pancake-strawberry',
]

export const mosaicContact = [
  'rainbow-suprice-sup',
  'brezel-cacao-shake',
  'teracotta-strawberry-shake',
  'bubblewaffle-ice-two',
  'banana-split',
  '3-portions-icecream',
]
