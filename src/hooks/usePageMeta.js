import { useEffect } from 'react'

/**
 * Sets the document title and meta description for a page.
 *
 * This is a client-rendered site, so these are set after mount — good enough
 * for the browser tab and for crawlers that execute JavaScript, but not a
 * substitute for server-rendered tags if the site later needs reliable link
 * previews on social platforms. Noted in the README.
 */
export function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
