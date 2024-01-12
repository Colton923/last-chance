'use server'

import { likes } from 'actions/firestore'

export async function like(title: string): Promise<number | null> {
  return await likes().then((likesDoc) => {
    if (likesDoc !== null) {
      const itemLikes = Object.entries(likesDoc).find(([key, value]) => {
        if (key === title) {
          return true
        }
        return false
      })
      if (itemLikes !== undefined) {
        return itemLikes[1]
      }
    }
    return null
  })
}
