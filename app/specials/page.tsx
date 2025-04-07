import { PageLayout } from '../../components/PageLayout'
import { Text } from '../../components/Text'
import { specials } from '../../lib/sanity/queries/specials'
import client from '../../lib/sanity/client'
import styles from '../main.module.scss'
import { Metadata } from 'next'

interface Special {
  _id: string
  title: string
  description: string
}

export const metadata: Metadata = {
  title: 'Daily Specials | Last Chance Bar & Grill',
  description:
    "Check out our daily food and drink specials. From happy hour deals to daily food specials, there's always something special at Last Chance Bar & Grill.",
  openGraph: {
    title: 'Daily Specials | Last Chance Bar & Grill',
    description:
      "Check out our daily food and drink specials. From happy hour deals to daily food specials, there's always something special at Last Chance Bar & Grill.",
    url: 'https://lastchancepeoria.com/specials',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/taps.jpg',
        width: 1200,
        height: 630,
        alt: 'Last Chance Bar & Grill Daily Specials',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daily Specials | Last Chance Bar & Grill',
    description:
      "Check out our daily food and drink specials. From happy hour deals to daily food specials, there's always something special at Last Chance Bar & Grill.",
    images: ['/images/taps.jpg'],
  },
}

export default async function Specials() {
  const specialsList = (await client.fetch(specials)) as Special[]

  return (
    <PageLayout
      title="Daily Specials"
      containerSize="lg"
      contentClassName={styles.specialsWrapper}
    >
      {specialsList.map((special) => (
        <div key={special._id} className={styles.itemWrapper}>
          <Text as="h3" className={styles.itemName}>
            {special.title}
          </Text>
          <Text as="p" className={styles.itemDescription}>
            {special.description}
          </Text>
        </div>
      ))}
    </PageLayout>
  )
}
