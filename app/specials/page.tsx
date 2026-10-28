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
  let specialsList: Special[] = []
  try {
    specialsList = (await client.fetch(specials, undefined, {
      next: { revalidate: 60 },
    })) as Special[]
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching specials:', error)
    }
    specialsList = []
  }

  return (
    <PageLayout
      title="Daily Specials"
      description="Check out our current food and drink specials"
      containerSize="lg"
    >
      {specialsList && specialsList.length > 0 ? (
        <div className={styles.specialsGrid}>
          {specialsList.map((special) => (
            <div key={special._id} className={styles.specialCard}>
              <Text as="h3" size="xl" weight="bold" className={styles.specialTitle}>
                {special.title}
              </Text>
              <Text as="p" size="base" className={styles.specialDescription}>
                {special.description}
              </Text>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <Text as="p" size="lg" color="muted">
            Daily specials are rotating! Check back soon or call us at{' '}
            <a
              href="tel:309-243-5036"
              style={{ color: 'var(--red)', textDecoration: 'underline' }}
            >
              (309) 243-5036
            </a>{' '}
            to hear today&apos;s features.
          </Text>
        </div>
      )}
    </PageLayout>
  )
}
