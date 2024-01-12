'use server'

import firestoreDB from 'lib/firestore/firestoreDB'

export async function likes(): Promise<Map<string, number> | null> {
  const likesRef = await firestoreDB.collection('likes').limit(1)
  const likes = await likesRef.get()
  if (likes.empty) {
    return null
  }
  return likes.docs[0].data().menu
}
