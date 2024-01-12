import { ImageResponse } from 'next/og'
import { headers } from 'next/headers'
import client from 'lib/sanity/client'
import urlFor from 'lib/sanity/urlFor'
import { menuItem } from 'lib/sanity/queries'
import { RevertLink } from 'utils'

export async function GET() {
  const itemTitle = headers().get('itemTitle')
  if (!itemTitle) {
    const logoUrl = 'https://lastchancepeoria.com/images/logo.png'
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <img
            src={logoUrl}
            width="230"
            height="159"
            style={{
              marginBottom: 20,
              borderRadius: 128,
            }}
            alt={'last_chance_logo'}
          />
          <div style={{ color: '#000' }}>Last Chance Bar & Grill</div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    )
  }

  const titleReverted = RevertLink(itemTitle)
  const item = await client.fetch(menuItem(titleReverted), { title: titleReverted })
  const imageUrl = urlFor(item[0].image).url()
  if (!imageUrl) {
    const logoUrl = 'https://lastchancepeoria.com/images/logo.png'
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <img
            src={logoUrl}
            width="230"
            height="159"
            style={{
              marginBottom: 20,
              borderRadius: 20,
            }}
            alt={titleReverted}
          />
          <div style={{ color: '#000' }}>{titleReverted}</div>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      }
    )
  }
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#ffffff',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            backgroundColor: '#f6f6f6',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            paddingTop: 10,
            borderRadius: 30,
            textAlign: 'center',
            border: '1px solid #000',
            margin: 10,
          }}
        >
          <h1
            style={{
              width: '100%',
              color: '#000',
              fontSize: 40,
              fontWeight: 'bolder',
              padding: 5,
              margin: 10,
            }}
          >
            {titleReverted}
          </h1>
          <img
            src={imageUrl}
            width={item[0].image.width}
            height={item[0].image.height}
            style={{
              objectFit: 'cover',
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              maxHeight: '100%',
              maxWidth: '100%',
              paddingTop: 50,
            }}
            alt={titleReverted}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
