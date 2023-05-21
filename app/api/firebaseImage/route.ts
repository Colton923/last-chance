import { NextResponse } from 'next/server'
import * as admin from 'firebase-admin'

export async function POST(request: Request) {
  const { imageName } = await request.json()
  const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY
      ? process.env.FIREBASE_SERVICE_ACCOUNT_KEY
      : ''
  )

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    })
  }

  const today = new Date()
  // expiration date is in 10 years
  const expirationDate = new Date(today.getTime() + 60 * 1000 * 60 * 24 * 365 * 10)

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
  const url = await file.getSignedUrl({
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
