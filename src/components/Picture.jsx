import { forwardRef } from 'react'
import { imageSource } from '../content/media'

/**
 * Responsive image backed by the generated crop manifest.
 *
 * `sizes` should describe how wide the image renders at each breakpoint so the
 * browser can pick the smallest file that still looks sharp. Everything below
 * the fold is lazy and async-decoded; anything above it (the hero) should pass
 * `priority` so it is fetched eagerly and not decoded off the main path.
 *
 * A `tall` source can be supplied for viewports where a 16:9 crop would be
 * unusable — currently just the mobile hero.
 *
 * `ref` forwards to the `<picture>` element, so callers can animate it (e.g.
 * a scroll parallax translate).
 */
const Picture = forwardRef(function Picture(
  {
    name,
    alt,
    variant = 'wide',
    tallVariantBelow = null,
    sizes = '100vw',
    className = '',
    priority = false,
    plate = false,
  },
  ref,
) {
  const wide = imageSource(name, variant)
  if (!wide) return null

  const tall = tallVariantBelow ? imageSource(name, 'tall') : null

  const img = (
    <img
      src={wide.src}
      srcSet={wide.srcSet}
      sizes={sizes}
      alt={alt}
      width={1600}
      height={Math.round(1600 / wide.ratio)}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={`picture__img ${plate ? 'plate' : ''}`.trim()}
    />
  )

  return (
    <picture ref={ref} className={`picture ${className}`.trim()}>
      {tall && (
        <source
          media={`(max-width: ${tallVariantBelow}px)`}
          srcSet={tall.srcSet}
          sizes={sizes}
        />
      )}
      {img}
    </picture>
  )
})

export default Picture
