import { item } from 'actions/sanity'
import { redirect } from 'next/navigation'
import { RevertLink } from 'utils'
import { Metadata } from 'next'
import urlFor from '../../../lib/sanity/urlFor'

export type Params = {
  itemTitle: string
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { itemTitle } = params
  const menuItem = await item(itemTitle)

  if (!menuItem) {
    return {
      title: 'Item Not Found | Last Chance Bar & Grill',
      description: 'The requested menu item could not be found.',
    }
  }

  const title = `${menuItem.title} | Last Chance Bar & Grill Menu`
  const description =
    menuItem.description ||
    `Try our delicious ${menuItem.title} at Last Chance Bar & Grill in Peoria, IL.`
  const imageUrl = menuItem.image
    ? urlFor(menuItem.image).width(1200).height(630).url()
    : '/images/sunday.jpg'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://lastchancepeoria.com/menu/${itemTitle}`,
      siteName: 'Last Chance Bar & Grill',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${menuItem.title} at Last Chance Bar & Grill`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
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
