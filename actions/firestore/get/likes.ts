'use server'

import firestoreDB from 'lib/firestore/firestoreDB'

export async function likes(): Promise<Map<string, number> | null> {
  const likesRef = await firestoreDB.collection('likes').limit(1)
  const likes = await likesRef.get()

  if (likes.empty) {
    return null
  }

  const data = likes.docs[0].data()
  if (!data || !data.menu) {
    return null
  }

  // Convert the menu object to a Map
  const likesMap = new Map<string, number>()
  Object.entries(data.menu).forEach(([key, value]) => {
    likesMap.set(key, value as number)
  })

  return likesMap
}
