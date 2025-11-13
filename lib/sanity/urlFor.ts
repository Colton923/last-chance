import imageUrlBuilder from '@sanity/image-url'
import client from './client'
import type { SanityImage } from 'actions/sanity/sanity.types'

const urlFor = (source: string | SanityImage) => {
  const builder = imageUrlBuilder(client)

  return builder.image(source)
}

export default urlFor
