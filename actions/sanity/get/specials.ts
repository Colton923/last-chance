'use server'

import type { SanitySpecials } from 'actions/sanity'
import client from 'lib/sanity/client'
import { specials as SpecialsQuery } from 'lib/sanity/queries'

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export async function specials(): Promise<SanitySpecials> {
  return await client
    .fetch(SpecialsQuery, undefined, {
      cache: 'no-store',
    })
    .then((specials) => {
      return specials.sort((a: any, b: any) => {
        if (!days.includes(a.title)) {
          return 1
        }
        return days.indexOf(a.title) - days.indexOf(b.title)
      })
    })
}
