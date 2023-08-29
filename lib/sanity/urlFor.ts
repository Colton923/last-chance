import imageUrlBuilder from '@sanity/image-url'
import client from './client'

const urlFor = (source: string) => {
  const builder = imageUrlBuilder(client)

  return builder.image(source)
}

export default urlFor
