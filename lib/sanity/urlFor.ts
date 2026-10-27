import imageUrlBuilder from '@sanity/image-url'
import client from './client'
import type { SanityImage } from 'actions/sanity/sanity.types'

const builder = imageUrlBuilder(client)

// auto('format') lets Sanity's CDN serve WebP/AVIF where supported, at no cost
const urlFor = (source: string | SanityImage) => {
  return builder.image(source).auto('format')
}

export default urlFor
