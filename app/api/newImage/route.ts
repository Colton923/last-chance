import { NextResponse } from 'next/server'
import * as admin from 'firebase-admin'
import sharp from 'sharp'

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  })
}

export async function POST(request: Request) {
  const { imageName } = await request.json()

  const today = new Date()
  const expirationDate = new Date(today.getTime() + 60 * 1000)

  if (!imageName) {
    return NextResponse.json(
      {
        message: 'Bad Request',
      },
      {
        status: 400,
      }
    )
  }

  const bucket = admin
    .storage()
    .bucket(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET)
  const file = bucket.file(`menu/${imageName}`)

  const [exists] = await file.exists()
  if (!exists) {
    return NextResponse.json(
      {
        message: 'Image does not exist',
      },
      {
        status: 404,
      }
    )
  }

  const [url] = await file.getSignedUrl({
    action: 'read',
    expires: expirationDate,
  })

  return NextResponse.json(
    {
      url,
    },
    {
      status: 200,
    }
  )
}
