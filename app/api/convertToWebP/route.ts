import sharp from 'sharp'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { file } = await request.json()

  if (!file) {
    return NextResponse.json(
      {
        message: 'Bad Request',
      },
      {
        status: 400,
      }
    )
  }

  const base64 = file.split(';base64,').pop()
  if (!base64) {
    return NextResponse.json(
      {
        message: 'Bad Request',
      },
      {
        status: 400,
      }
    )
  }

  try {
    const buffer: ArrayBuffer = Buffer.from(base64, 'base64')
    const webpBuffer = await sharp(buffer).webp().toBuffer()
    const webp = webpBuffer.toString('base64')
    const webpBase64 = `data:image/webp;base64,${webp}`
    return NextResponse.json(
      {
        webpBase64,
      },
      {
        status: 200,
      }
    )
  } catch (err) {
    console.log('err', err)
    return NextResponse.json(err)
  }
}
