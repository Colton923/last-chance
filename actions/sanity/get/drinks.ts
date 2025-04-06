'use server'

import client from 'lib/sanity/client'
import { drinks as DrinksQuery } from 'lib/sanity/queries'
import type { Drinks } from '../sanity.types'

export async function drinks(): Promise<Drinks> {
  return await client.fetch(DrinksQuery, undefined, {
    next: {
      revalidate: 60,
    },
  })
}
