import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { locales, localeCodes, defaultLocale } from '../content'

const STORAGE_KEY = 'woofles.locale'
const LocaleContext = createContext(null)

/** Stored choice first, then the browser's preference, then English. */
function initialLocale() {
  if (typeof window === 'undefined') return defaultLocale

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && localeCodes.includes(stored)) return stored
  } catch {
    // Private-mode Safari throws on localStorage access; fall through.
  }

  const preferred = window.navigator.languages ?? [window.navigator.language]
  for (const tag of preferred) {
    const code = tag?.toLowerCase().split('-')[0]
    if (localeCodes.includes(code)) return code
  }
  return defaultLocale
}

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(initialLocale)

  const setLocale = useCallback((next) => {
    if (!localeCodes.includes(next)) return
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Persisting is a convenience, not a requirement.
    }
  }, [])

  // `lang` drives font selection, hyphenation and screen-reader pronunciation,
  // so it has to follow the toggle rather than sit fixed in index.html.
  useEffect(() => {
    document.documentElement.lang = locales[locale].meta.htmlLang
  }, [locale])

  const value = useMemo(
    () => ({ locale, setLocale, t: locales[locale] }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}

/** Shorthand for the common case of only needing the copy. */
export function useT() {
  return useLocale().t
}
