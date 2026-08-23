/**
 * Image pipeline — turns the client's original photos in `images/` into the
 * build-ready derivatives in `public/img/`.
 *
 *   npm run images
 *
 * Every original is portrait or square, but the design calls for landscape
 * imagery throughout (gallery, section blocks, hero on desktop). A naive
 * centre crop cuts straight through the plate on most of these shots, so this
 * script picks the crop window by content: it scores every candidate window on
 * detail (edge energy) and colourfulness (saturation), which on food
 * photography reliably lands on the dish rather than on an empty wall.
 *
 * Two ratio sets are produced:
 *   wide/  16:9  — gallery, section blocks, desktop hero
 *   tall/   4:5  — mobile hero only, where a landscape source would have to be
 *                  cropped so hard that nothing recognisable survives
 *
 * Derivatives are committed to the repo so a fresh clone runs without this
 * step. Re-run it after adding or replacing anything in `images/`.
 */
import { mkdir, readdir, writeFile, rm } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(root, 'images')
const OUT = path.join(root, 'public', 'img')

// Candidate widths. Cropping a ~900px-wide portrait to 16:9 leaves at most
// ~900px of real detail, so the ladder is capped at the source width and the
// native size is always emitted as the top rung — upscaling past it would add
// bytes without adding pixels. See README for the resolution caveat.
const RATIOS = {
  wide: { ratio: 16 / 9, widths: [480, 720, 1080] },
  tall: { ratio: 4 / 5, widths: [480, 720, 1080] },
  promo: { ratio: null, widths: [480, 720, 1080] },
}

/** Ladder capped at `max`, with `max` itself as the top rung, near-dupes dropped. */
function widthLadder(candidates, max) {
  const rungs = candidates.filter((w) => w < max)
  rungs.push(max)
  return rungs.filter((w, i) => i === rungs.length - 1 || rungs[i + 1] / w > 1.15)
}

// The four page heroes also get a 4:5 crop, used below 860px where a 16:9 band
// in a portrait viewport leaves too little of the subject. Keep this in step
// with the `hero*` keys in src/content/media.js.
const TALL_ONLY = new Set([
  'main_chraracter',
  'Taste_Woofles',
  'Bubble_Waffle_and_strawberries',
  'inside_the_cafe',
])

/**
 * Portrait-only subjects. Their content fills the frame top to bottom, so any
 * 16:9 band is a meaningless slice of it — `cup` crops to bare corrugated
 * cardboard, `Mood` to empty sea. Excluded from the landscape set so nothing
 * can reference a crop that does not read.
 */
const NO_WIDE = new Set(['cup', 'Mood', 'Create_your_own_waffle'])

/**
 * Promo graphics, not photographs. These carry typeset copy baked into the
 * pixels — an address, opening hours, a price — so cropping them to 16:9 slices
 * words in half. They are emitted at their original aspect ratio only, and the
 * site never feeds them through the landscape sets.
 *
 * They are also the source of several real facts about the business; see the
 * README's "What the photos told us" section.
 */
const PROMO = new Set(['Woofles_is_now_open', 'Happy_Hours', 'lunch_combo'])

const QUALITY = 76
const SCORE_SCALE = 200 // downscale before scoring — cheap and less noise-sensitive

/**
 * Row-by-row "interest" profile of an image: edge energy plus saturation.
 * Edge energy finds detail, saturation separates food and people from the flat
 * walls and tablecloths that make up most of the wasted area in these shots.
 */
async function rowScores(buffer, axis) {
  const { data } = await sharp(buffer)
    .resize({ width: SCORE_SCALE, height: SCORE_SCALE, fit: 'fill' })
    .toColourspace('srgb')
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  const n = SCORE_SCALE
  const gray = new Float64Array(n * n)
  const sat = new Float64Array(n * n)

  for (let i = 0; i < n * n; i++) {
    const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2]
    gray[i] = 0.299 * r + 0.587 * g + 0.114 * b
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    sat[i] = max === 0 ? 0 : (max - min) / max
  }

  // Per-cell energy = local gradient magnitude, then collapse along `axis`.
  const profile = new Float64Array(n)
  for (let y = 1; y < n - 1; y++) {
    for (let x = 1; x < n - 1; x++) {
      const i = y * n + x
      const dx = Math.abs(gray[i + 1] - gray[i - 1])
      const dy = Math.abs(gray[i + n] - gray[i - n])
      const energy = (dx + dy) / 255 + sat[i] * 0.6
      profile[axis === 'y' ? y : x] += energy
    }
  }
  return profile
}

/** Best offset for a window of `windowLen` over a 0..len interest profile. */
function bestOffset(profile, len, windowLen) {
  const n = profile.length
  const win = Math.max(1, Math.round((windowLen / len) * n))
  if (win >= n) return 0

  const prefix = new Float64Array(n + 1)
  for (let i = 0; i < n; i++) prefix[i + 1] = prefix[i] + profile[i]

  // A gentle pull toward centre breaks ties and keeps crops from hugging an
  // edge when the profile is nearly flat.
  const centre = (n - win) / 2
  let best = 0
  let bestScore = -Infinity
  for (let off = 0; off <= n - win; off++) {
    const sum = prefix[off + win] - prefix[off]
    const bias = 1 - Math.abs(off - centre) / n * 0.25
    const score = sum * bias
    if (score > bestScore) {
      bestScore = score
      best = off
    }
  }
  return Math.round((best / n) * len)
}

async function cropTo(buffer, meta, targetRatio) {
  const { width, height } = meta
  const sourceRatio = width / height

  if (Math.abs(sourceRatio - targetRatio) < 0.01) {
    return { left: 0, top: 0, width, height }
  }

  if (sourceRatio > targetRatio) {
    // Source too wide — slide horizontally.
    const cropW = Math.round(height * targetRatio)
    const profile = await rowScores(buffer, 'x')
    return { left: bestOffset(profile, width, cropW), top: 0, width: cropW, height }
  }

  // Source too tall — slide vertically. This is the case for every original.
  const cropH = Math.round(width / targetRatio)
  const profile = await rowScores(buffer, 'y')
  return { left: 0, top: bestOffset(profile, height, cropH), width, height: cropH }
}

async function main() {
  await rm(OUT, { recursive: true, force: true })

  const files = (await readdir(SRC)).filter((f) => /\.(webp|jpe?g|png)$/i.test(f)).sort()
  if (!files.length) throw new Error(`no source images found in ${SRC}`)

  const manifest = {}

  for (const file of files) {
    const slug = path.parse(file).name
    const input = sharp(path.join(SRC, file))
    const meta = await input.metadata()
    const buffer = await input.toBuffer()

    const variants = PROMO.has(slug)
      ? ['promo']
      : NO_WIDE.has(slug)
        ? ['tall']
        : TALL_ONLY.has(slug)
          ? ['wide', 'tall']
          : ['wide']
    manifest[slug] = {}

    for (const variant of variants) {
      const { ratio, widths } = RATIOS[variant]
      // Promo graphics keep their own ratio — no crop, only a resize.
      const box =
        variant === 'promo'
          ? { left: 0, top: 0, width: meta.width, height: meta.height }
          : await cropTo(buffer, meta, ratio)
      await mkdir(path.join(OUT, variant), { recursive: true })

      const sizes = []
      for (const w of widthLadder(widths, box.width)) {
        const out = `${slug}-${w}.webp`
        await sharp(buffer)
          .extract(box)
          .resize({ width: w })
          .webp({ quality: QUALITY, effort: 5 })
          .toFile(path.join(OUT, variant, out))
        sizes.push(w)
      }

      manifest[slug][variant] = {
        sizes,
        ratio: Number((ratio ?? box.width / box.height).toFixed(4)),
        base: `/img/${variant}/${slug}`,
      }
    }

    console.log(`${slug.padEnd(40)} ${meta.width}x${meta.height} -> ${variants.join(', ')}`)
  }

  await writeFile(
    path.join(OUT, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
  )
  console.log(`\n${files.length} images processed -> public/img/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
