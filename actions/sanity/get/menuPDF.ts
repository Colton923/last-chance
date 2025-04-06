'use server'

import client from 'lib/sanity/client'
import { menuPDF as MenuPDFQuery } from 'lib/sanity/queries/menuPDF'
import type { PDF } from '../sanity.types'

export async function menuPDF(): Promise<PDF> {
  return await client.fetch(MenuPDFQuery, undefined, {
    next: {
      revalidate: 60,
    },
  })
}
