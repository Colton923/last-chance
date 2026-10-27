'use server'

import { FieldPath, FieldValue } from 'firebase-admin/firestore'
import firestoreDB from 'lib/firestore/firestoreDB'
import { menu } from 'actions/sanity'

export async function likeItem(item: string): Promise<void> {
  // Only accept titles that exist on the menu so arbitrary keys can't be written
  if (typeof item !== 'string' || !item || item.length > 200) return
  const groups = await menu()
  const exists = groups.some((group) =>
    (group.menuItems || []).some((menuItem) => menuItem.title === item)
  )
  if (!exists) return

  const likesRef = firestoreDB.collection('likes')
  const snapshot = await likesRef.limit(1).get()

  if (snapshot.empty) {
    await likesRef.add({ menu: { [item]: 1 } })
    return
  }

  // Atomic increment avoids lost updates when two people like at once.
  // FieldPath keeps titles containing dots from being parsed as nested paths.
  await snapshot.docs[0].ref.update(
    new FieldPath('menu', item),
    FieldValue.increment(1)
  )
}
