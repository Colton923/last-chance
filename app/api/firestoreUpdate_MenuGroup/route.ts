import type { MenuGroup } from 'app/menu/menu'
import { NextResponse } from 'next/server'
import * as admin from 'firebase-admin'

// I cheated the type coming in
const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY
    ? process.env.FIREBASE_SERVICE_ACCOUNT_KEY
    : ''
)
if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    })
  } catch (err) {
    console.log('err', err)
    NextResponse.json({
      status: 500,
      body: {
        message: 'Server error',
      },
    })
  }
}
type InboundType = MenuGroup

// where id is the docID in that collection

export async function POST(request: Request) {
  const body = await request.json()

  const reqMenu: InboundType = body.menu

  const docId = Object.keys(reqMenu)[0]
  if (!docId) {
    return NextResponse.json({
      status: 400,
      body: {
        message: 'No dice',
      },
    })
  }

  try {
    const menu = await admin
      .firestore()
      .collection('menu')
      .doc(docId)
      .set(reqMenu)
      .then(() => {
        return reqMenu
      })
      .catch((err) => {
        console.log('err', err)
        return null
      })

    if (menu === null || menu === undefined) {
      return NextResponse.json({
        status: 400,
        body: {
          message: 'No menu found',
        },
      })
    }

    return NextResponse.json({
      status: 200,
      body: {
        message: 'Menu updated',
        menu,
      },
    })
  } catch (err) {
    return NextResponse.json({
      status: 500,
      body: {
        message: 'Something went wrong',
      },
    })
  }
}
