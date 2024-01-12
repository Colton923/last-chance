'use server'

import type { Item } from 'actions/sanity'
import client from 'lib/sanity/client'
import { menuItem as ItemQuery } from 'lib/sanity/queries'
import { RevertLink } from 'utils'

export async function item(title: string): Promise<Item> {
  const titleReverted = RevertLink(title)

  return await client
    .fetch(ItemQuery(titleReverted), undefined, {
      cache: 'no-store',
    })
    .then((item) => {
      return item[0]
    })
}
