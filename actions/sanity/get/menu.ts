'use server'

import client from '../../../lib/sanity/client'
import { menuGroups } from '../../../lib/sanity/queries/menuGroups'
import { Group } from '../sanity.types'

export async function menu(): Promise<Group[]> {
  const result = await client.fetch(
    menuGroups,
    {},
    {
      next: {
        revalidate: 60,
      },
    }
  )
  return result
}
