import type { MenuGroup } from 'app/menu/menu'
import { NextResponse } from 'next/server'
import * as admin from 'firebase-admin'

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

export async function GET() {
  try {
    const menu = await admin
      .firestore()
      .collection('menu')
      .get()
      .then(async (snapshot) => {
        const menuGroups: MenuGroup[] = []
        snapshot.forEach((doc) => {
          menuGroups.push(doc.data() as MenuGroup)
        })
        return menuGroups
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
        menu: menu,
      },
    })
  } catch (err) {
    console.log('err', err)
    return NextResponse.json({
      status: 500,
      body: {
        message: 'Server error',
      },
    })
  }
}
