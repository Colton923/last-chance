import type { MenuItem } from 'app/menu/menu'
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
// I cheated the type coming in

type InboundType = MenuItem & { group: string }

// where id is the docID in that collection

export async function POST(request: Request) {
  const body = await request.json()

  const reqMenu: InboundType = body.menu

  const docID = reqMenu.group
  if (!docID) {
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
      .doc(docID)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log('No such document!')
          return null
        }
        return doc.data()
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

    const oldMenu = menu[docID] as MenuItem[]

    if (oldMenu === null || oldMenu === undefined) {
      return NextResponse.json({
        status: 400,
        body: {
          message: 'No menu found',
        },
      })
    }
    let didFind = false
    const updateThis = oldMenu.map((item) => {
      if (item.id === reqMenu.id) {
        didFind = true
        return reqMenu
      } else {
        didFind = false
        return item
      }
    })

    if (!didFind) {
      updateThis.push(reqMenu)
    }

    const updateObject = { [docID]: updateThis }

    await admin
      .firestore()
      .collection('menu')
      .doc(docID)
      .set(updateObject)
      .then(() => {
        return NextResponse.json({
          status: 200,
          body: {
            message: 'Menu updated',
            data: updateThis,
          },
        })
      })
      .catch((err) => {
        console.log('err', err)
        return NextResponse.json({
          status: 400,
          body: {
            message: 'Menu not updated',
          },
        })
      })

    return NextResponse.json({
      status: 200,
      body: {
        message: 'Menu updated',
        data: updateThis,
      },
    })
  } catch (err) {
    console.log('err', err)
    return NextResponse.json({
      status: 400,
      body: {
        message: 'Error caught',
      },
    })
  }
}
