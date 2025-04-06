'use server'

import type { Group } from '../sanity.types'
import client from 'lib/sanity/client'
import { menuGroup as GroupQuery } from 'lib/sanity/queries'
import { RevertLink } from 'utils'

export async function group(title: string): Promise<Group> {
  const titleReverted = RevertLink(title)

  return await client
    .fetch(GroupQuery(titleReverted), undefined, {
      next: {
        revalidate: 60,
      },
    })
    .then((group) => {
      return group[0]
    })
}
