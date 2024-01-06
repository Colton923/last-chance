'use server'

import firestoreDB from 'lib/firestore/firestoreDB'
export type LikesDoc = {
  [mapName: string]: Map<string, number>
}

export async function likeItem(item: string) {
  const likesRef = await firestoreDB.collection('likes').limit(1)
  const likes = await likesRef.get()
  if (likes) {
    const data = likes.docs[0].data() as LikesDoc
    const menu = new Map<string, number>()
    if (data && data.menu) {
      for (const [key, value] of Object.entries(data.menu)) {
        menu.set(key, value)
      }
    }
    if (menu) {
      const count = menu.get(item)
      if (count) {
        menu.set(item, count + 1)
      } else {
        menu.set(item, 1)
      }
      await likes.docs[0].ref.update({ menu: Object.fromEntries(menu) })
    } else {
      await likes.docs[0].ref.update({ menu: { [item]: 1 } })
    }
  }
}
