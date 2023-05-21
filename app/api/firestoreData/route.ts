import { thisMenu } from 'app/menu/menu'
import type { MenuGroup } from 'app/menu/menu'
import { NextResponse } from 'next/server'
import * as admin from 'firebase-admin'

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  })
}

export async function GET() {
  const oldMenu: MenuGroup[] = thisMenu

  try {
    const menu = await admin
      .firestore()
      .collection('menu')
      .get()
      .then(async (snapshot) => {
        if (snapshot.empty || snapshot.docs.length === 0) {
          const menuGroups = oldMenu.map(async (group) => {
            const thisGroup = Object.keys(group)[0]
            return await admin
              .firestore()
              .collection('menu')
              .doc(thisGroup)
              .set(group)
              .then(() => {
                return group
              })
              .catch((err) => {
                console.log('err', err)
                return null
              })
          })
          return await Promise.all(menuGroups).then((groups) => {
            return groups
          })
        } else {
          const menuGroups: MenuGroup[] = snapshot.docs.map((doc) => {
            const groupKey = doc.id
            const groupObj = { [groupKey]: doc.data()[groupKey] }
            return groupObj
          })
          return menuGroups
        }
      })
      .catch((err) => {
        console.log('err', err)
        return null
      })

    if (menu === null || menu === undefined) {
      return NextResponse.json({
        status: 500,
        body: {
          message: 'Something went wrong',
        },
      })
    } else {
      return NextResponse.json({
        status: 200,
        body: menu,
      })
    }
  } catch (err) {
    console.log('err', err)
    return NextResponse.json({
      status: 500,
      body: {
        message: 'Something went wrong',
      },
    })
  }
}
