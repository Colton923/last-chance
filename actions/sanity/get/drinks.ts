'use server'

import client from 'lib/sanity/client'
import { drinks as DrinksQuery } from 'lib/sanity/queries'
import type { Drinks } from 'actions/sanity'

export async function drinks(): Promise<Drinks> {
  return await client.fetch(DrinksQuery, undefined, {
    cache: 'no-store',
  })
}
