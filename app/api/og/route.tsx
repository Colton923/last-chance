import { ImageResponse } from 'next/og'
import client from 'lib/sanity/client'
import urlFor from 'lib/sanity/urlFor'
import { menuItem } from 'lib/sanity/queries'
import { RevertLink } from 'utils'
import MetadataUI from './_components/MetadataUI'
import { NextRequest } from 'next/server'
export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams
  const itemTitle = params.get('id')

  if (!itemTitle) {
    return new ImageResponse(<MetadataUI imageHeight={159} imageWidth={230} />, {
      width: 230,
      height: 159,
    })
  }

  const titleReverted = RevertLink(itemTitle)
  const item = await client.fetch(menuItem(titleReverted), { title: titleReverted })
  const imageUrl = urlFor(item[0].image).url()
  if (!imageUrl) {
    return new ImageResponse(<MetadataUI imageHeight={159} imageWidth={230} />, {
      width: 1200,
      height: 640,
    })
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
      width: 1200,
      height: 640,
    }
  )
}
