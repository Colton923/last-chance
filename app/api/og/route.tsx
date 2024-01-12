import { ImageResponse } from 'next/og'
import { headers } from 'next/headers'
import client from 'lib/sanity/client'
import urlFor from 'lib/sanity/urlFor'
import { itemImage } from 'lib/sanity/queries'
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
  const item = await client.fetch(itemImage(titleReverted), { title: titleReverted })
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
              borderRadius: 128,
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
          src={imageUrl}
          width="230"
          height="159"
          style={{
            marginBottom: 20,
            borderRadius: 128,
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
