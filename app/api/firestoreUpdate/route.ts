import { thisMenu } from 'app/menu/menu'
import type { MenuGroup, MenuItem } from 'app/menu/menu'
import { NextResponse } from 'next/server'
import * as admin from 'firebase-admin'

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  })
}

export async function POST(request: Request) {
  const oldMenu: MenuGroup[] = thisMenu

  const body = await request.json()
  const reqMenu: MenuItem = body.menu

  const docID = reqMenu.group
  if (!docID) {
    return NextResponse.json({
      status: 400,
      body: {
        message: 'No group ID provided',
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
          return null
        }
        return doc.data()
      })
      .catch((err) => {
        console.log('err', err)
        return null
      })

    if (menu === null || menu === undefined) {
      // If there is no menu in the database, use the default menu
      const MakeAllNewDocs = async () => {
        const NewMenus = oldMenu.map(async (group) => {
          const groupKey = Object.keys(group)[0]
          await admin
            .firestore()
            .collection('menu')
            .doc(groupKey)
            .set(group)
            .then(() => {
              return true
            })
            .catch((err) => {
              console.log('err', err)
              return false
            })
        })
        await Promise.all(NewMenus)
      }
      await MakeAllNewDocs()

      return NextResponse.json({
        status: 400,
        body: {
          message: 'No menu found',
        },
      })
    }

    const NewMenu = menu[docID] as MenuItem[]

    if (NewMenu === null || NewMenu === undefined) {
      // If there is no menu in the database, use the default menu
      return NextResponse.json({
        status: 400,
        body: {
          message: 'No menu found',
        },
      })
    }

    const updatedMenu = NewMenu.map((item) => {
      if (item.id === reqMenu.id) {
        item = reqMenu
      }
      return item
    })

    const updateThis = { [docID]: updatedMenu }

    const update = await admin
      .firestore()
      .collection('menu')
      .doc(docID)
      .update(updateThis)
      .then(() => {
        return true
      })
      .catch((err) => {
        console.log('err', err)
        return false
      })

    if (update) {
      return NextResponse.json({
        status: 200,
        body: {
          message: 'Menu updated',
        },
      })
    }

    return NextResponse.json({
      status: 400,
      body: {
        message: 'Menu not updated',
      },
    })
  } catch (err) {
    console.log('err', err)
    return NextResponse.json({
      status: 400,
      body: {
        message: 'Menu not updated',
      },
    })
  }
}
