import { ImageResponse } from 'next/og'
import { headers } from 'next/headers'
import client from 'lib/sanity/client'
import urlFor from 'lib/sanity/urlFor'
import { menuItem } from 'lib/sanity/queries'
import { RevertLink } from 'utils'
import MetadataUI from './_components/MetadataUI'

export const runtime = 'edge'

export async function GET() {
  const itemTitle = headers().get('itemTitle')
  if (!itemTitle) {
    const logoUrl = 'https://lastchancepeoria.com/images/logo.png'
    return new ImageResponse(
      <MetadataUI imageHeight={159} imageWidth={230} imageURL={logoUrl} />,
      {
        width: 230,
        height: 159,
      }
    )
  }

  const titleReverted = RevertLink(itemTitle)
  const item = await client.fetch(menuItem(titleReverted), { title: titleReverted })
  const imageUrl = urlFor(item[0].image).url()
  if (!imageUrl) {
    const logoUrl = 'https://lastchancepeoria.com/images/logo.png'
    return new ImageResponse(
      <MetadataUI imageHeight={159} imageWidth={230} imageURL={logoUrl} />,
      {
        width: 1200,
        height: 600,
      }
    )
  }
  return new ImageResponse(
    (
      <MetadataUI
        imageHeight={400}
        imageWidth={400}
        imageURL={imageUrl}
        price={item[0].price}
        description={item[0].description}
      />
    ),
    {
      width: 600,
      height: 600,
    }
  )
}
