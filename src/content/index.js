import en from './en'
import de from './de'

export const locales = { en, de }
export const localeCodes = /** @type {const} */ (['en', 'de'])
export const defaultLocale = 'en'

/**
 * Walk two content objects in parallel and report keys present in one but not
 * the other. Translation files drift silently — a missing key renders as
 * `undefined` in the middle of a page and is easy to miss in a language you do
 * not read. This turns that into a console warning during development.
 */
function diffShape(a, b, path = '') {
  const missing = []
  for (const key of Object.keys(a)) {
    const here = path ? `${path}.${key}` : key
    if (!(key in b)) {
      missing.push(here)
      continue
    }
    const av = a[key]
    const bv = b[key]
    if (Array.isArray(av) && Array.isArray(bv)) {
      if (av.length !== bv.length) missing.push(`${here} (length ${av.length} vs ${bv.length})`)
      av.forEach((item, i) => {
        if (item && typeof item === 'object' && bv[i]) {
          missing.push(...diffShape(item, bv[i], `${here}[${i}]`))
        }
      })
    } else if (av && typeof av === 'object' && bv && typeof bv === 'object') {
      missing.push(...diffShape(av, bv, here))
    }
  }
  return missing
}

if (import.meta.env.DEV) {
  for (const code of localeCodes) {
    if (code === 'en') continue
    const missingInOther = diffShape(en, locales[code])
    const missingInEn = diffShape(locales[code], en)
    if (missingInOther.length) console.warn(`[i18n] missing in ${code}.js:`, missingInOther)
    if (missingInEn.length) console.warn(`[i18n] missing in en.js (present in ${code}.js):`, missingInEn)
  }
}
