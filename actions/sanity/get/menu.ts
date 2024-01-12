'use server'

import client from 'lib/sanity/client'
import { menuGroups as MenuGroupsQuery } from 'lib/sanity/queries'
import { Group } from 'actions/sanity'

export async function menu(): Promise<Group[]> {
  return await client.fetch(MenuGroupsQuery, undefined, {
    cache: 'no-store',
  })
}
