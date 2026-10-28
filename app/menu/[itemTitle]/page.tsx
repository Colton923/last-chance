import { item } from 'actions/sanity'
import { like } from 'actions/firestore'
import { redirect } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import urlFor from '../../../lib/sanity/urlFor'
import { PageLayout } from '../../../components/PageLayout'
import { Text } from '../../../components/Text'
import { Button } from '../../../components/Button'
import ItemLike from '../../../components/Menu/ItemLike'
import { FixTitle, MakeLink } from '../../../utils'
import styles from '../../main.module.scss'

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

  const cleanTitle = FixTitle(menuItem.title)
  const title = `${cleanTitle} | Last Chance Bar & Grill Menu`
  const description =
    menuItem.description ||
    `Try our delicious ${cleanTitle} at Last Chance Bar & Grill in Peoria, IL.`
  const imageUrl = menuItem.image
    ? urlFor(menuItem.image).width(1200).height(630).format('jpg').url()
    : '/images/sunday.jpg'
  const canonicalPath = `/menu/${MakeLink(menuItem.title)}`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: `https://lastchancepeoria.com${canonicalPath}`,
      siteName: 'Last Chance Bar & Grill',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${cleanTitle} at Last Chance Bar & Grill`,
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
    redirect('/menu')
  }

  let itemLikes = 0
  try {
    itemLikes = (await like(menuItem.title)) ?? 0
  } catch {
    itemLikes = 0
  }

  const formattedPrice = (() => {
    const p = menuItem.price as unknown
    if (typeof p === 'number' && !isNaN(p)) return `$${p.toFixed(2)}`
    if (typeof p === 'string') {
      const cleaned = p.trim().replace(/[^0-9.]/g, '')
      const parsed = parseFloat(cleaned)
      if (!isNaN(parsed) && cleaned.length > 0) return `$${parsed.toFixed(2)}`
      return p.trim()
    }
    return ''
  })()

  return (
    <PageLayout containerSize="lg">
      <div className={styles.modalContent}>
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href="/menu">
            <Button variant="outline" size="md">
              ← Back to Full Menu
            </Button>
          </Link>
        </div>
        <div className={styles.modalMenuItem}>
          {menuItem.image && (
            <div className={styles.imageWrapper}>
              <Image
                src={urlFor(menuItem.image).width(1920).height(1080).url()}
                alt={FixTitle(menuItem.title)}
                priority
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          )}
          <div className={styles.detailsWrapper}>
            <div className={styles.header}>
              <Text as="h1" className={styles.title}>
                {FixTitle(menuItem.title)}
              </Text>
              {formattedPrice && (
                <Text as="span" className={styles.price}>
                  {formattedPrice}
                </Text>
              )}
            </div>
            {menuItem.description && (
              <Text as="p" className={styles.description}>
                {menuItem.description}
              </Text>
            )}
            <div className={styles.likesSection}>
              <ItemLike itemName={menuItem.title} likes={itemLikes} />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
