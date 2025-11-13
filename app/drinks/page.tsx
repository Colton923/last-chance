import { FixTitle } from '../../utils/FixTitle'
import { drinks } from '../../actions/sanity'
import type { SanityImage } from '../../actions/sanity/sanity.types'
import { Text } from '../../components/Text'
import { PageLayout } from '../../components/PageLayout'
import styles from '../main.module.scss'
import urlFor from '../../lib/sanity/urlFor'
import Image from 'next/image'
import { Metadata } from 'next'

interface DrinkItem {
  title: string
  slug?: {
    current: string
  }
  price: number
  description?: string
  image?: SanityImage
  logo?: SanityImage
  abv?: number
  volume?: string
  featured?: boolean
  available?: boolean
  order?: number
}

interface DrinkGroup {
  title: string
  logo?: SanityImage
  description?: string
  drinkItems: DrinkItem[]
}

export const metadata: Metadata = {
  title: 'Beverages | Last Chance Bar & Grill',
  description:
    "Explore our extensive drinks menu featuring craft beers, cocktails, and spirits. From ice-cold drafts to perfectly mixed cocktails, we've got your thirst covered.",
  openGraph: {
    title: 'Beverages | Last Chance Bar & Grill',
    description:
      "Explore our extensive drinks menu featuring craft beers, cocktails, and spirits. From ice-cold drafts to perfectly mixed cocktails, we've got your thirst covered.",
    url: 'https://lastchancepeoria.com/drinks',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/taps.jpg',
        width: 1200,
        height: 630,
        alt: 'Last Chance Bar & Grill Beverages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beverages | Last Chance Bar & Grill',
    description:
      "Explore our extensive drinks menu featuring craft beers, cocktails, and spirits. From ice-cold drafts to perfectly mixed cocktails, we've got your thirst covered.",
    images: ['/images/taps.jpg'],
  },
}

export default async function Drinks() {
  const drinkGroups = await drinks()
  return (
    <PageLayout
      title="Beverages"
      description="From ice-cold beers to perfectly mixed cocktails, we've got your thirst covered."
      containerSize="lg"
    >
      <div className={styles.drinksContent}>
        {drinkGroups.map((drinkGroup: DrinkGroup, groupIndex: number) => (
          <div className={styles.drinkGroup} key={`drink-group-${groupIndex}`}>
            <div className={styles.drinkGroupHeader}>
              {drinkGroup.logo && (
                <div className={styles.drinkGroupLogo}>
                  <Image
                    src={urlFor(drinkGroup.logo).width(200).height(200).url()}
                    alt={`${drinkGroup.title} logo`}
                    width={48}
                    height={48}
                    className={styles.drinkGroupLogoImage}
                    priority={false}
                  />
                </div>
              )}
              <Text as="h2" className={styles.drinkGroupName}>
                {FixTitle(drinkGroup.title)}
              </Text>
            </div>
            <div className={styles.drinkGrid}>
              {drinkGroup.drinkItems.map((item: DrinkItem, itemIndex: number) => {
                const itemLogo = item.logo || item.image
                return (
                  <div
                    className={styles.drinkCard}
                    key={`drink-item-${groupIndex}-${itemIndex}`}
                  >
                    {itemLogo ? (
                      <div className={styles.drinkLogoContainer}>
                        <Image
                          src={urlFor(itemLogo).width(400).height(400).url()}
                          alt={`${item.title} logo`}
                          width={200}
                          height={200}
                          priority={false}
                          className={styles.drinkLogo}
                          style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                    ) : (
                      <div className={styles.drinkNameFallback}>
                        <Text as="h3" size="lg" weight="bold" align="center">
                          {FixTitle(item.title)}
                        </Text>
                      </div>
                    )}
                    <div className={styles.drinkInfo}>
                      <Text
                        as="h3"
                        size="lg"
                        weight="semibold"
                        className={styles.drinkName}
                      >
                        {FixTitle(item.title)}
                      </Text>
                      {item.description && (
                        <Text as="p" size="sm" className={styles.drinkDescription}>
                          {item.description}
                        </Text>
                      )}
                      <div className={styles.drinkDetails}>
                        {item.abv && (
                          <Text as="span" size="sm" className={styles.drinkAbv}>
                            {item.abv}% ABV
                          </Text>
                        )}
                        {item.volume && (
                          <Text as="span" size="sm" className={styles.drinkVolume}>
                            {item.volume}
                          </Text>
                        )}
                      </div>
                      <Text
                        as="span"
                        size="lg"
                        weight="semibold"
                        className={styles.drinkPrice}
                      >
                        ${item.price.toFixed(2)}
                      </Text>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
