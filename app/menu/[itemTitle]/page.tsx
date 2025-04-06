import { item } from 'actions/sanity'
import { redirect } from 'next/navigation'
import { RevertLink } from 'utils'
import { Metadata } from 'next'

export type Params = {
  itemTitle: string
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { itemTitle } = params
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lastchancepeoria.com'

  return {
    title: `${RevertLink(itemTitle)} | The Last Chance`,
    openGraph: {
      title: `${RevertLink(itemTitle)} | The Last Chance`,
      description: 'Menu Item',
      images: [
        {
          url: `${baseUrl}/api/og?id=${itemTitle}`,
        },
      ],
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { itemTitle } = params
  const menuItem = await item(itemTitle)

  if (!menuItem) {
    redirect('/')
  }

  return null // This page is intercepted by the modal
}
