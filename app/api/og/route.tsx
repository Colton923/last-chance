import { ImageResponse } from 'next/og'
import client from 'lib/sanity/client'
import urlFor from 'lib/sanity/urlFor'
import { menuItem } from 'lib/sanity/queries'
import { RevertLink } from 'utils'
import MetadataUI from './_components/MetadataUI'
import { NextRequest } from 'next/server'
export const runtime = 'edge'

const fallbackImage = () =>
  new ImageResponse(<MetadataUI imageHeight={159} imageWidth={230} />, {
    width: 1200,
    height: 630,
  })

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams
  const itemTitle = params.get('id')

  if (!itemTitle) {
    return fallbackImage()
  }

  try {
    const titleReverted = RevertLink(itemTitle)
    const items = await client.fetch(menuItem(titleReverted))
    const item = items?.[0]
    if (!item?.image) {
      return fallbackImage()
    }

    return new ImageResponse(
      (
        <MetadataUI
          imageHeight={400}
          imageWidth={400}
          imageURL={urlFor(item.image).format('jpg').url()}
          price={item.price}
          description={item.description}
        />
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch {
    return fallbackImage()
  }
}
