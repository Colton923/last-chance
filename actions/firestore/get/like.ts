'use server'

import { likes } from 'actions/firestore'

export async function like(title: string): Promise<number | null> {
  return await likes().then((likesDoc) => {
    if (likesDoc !== null) {
      return likesDoc.get(title) ?? null
    }
    return null
  })
}
