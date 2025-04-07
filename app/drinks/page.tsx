import { FixTitle } from '../../utils/FixTitle'
import { drinks } from '../../actions/sanity'
import { Text } from '../../components/Text'
import { PageLayout } from '../../components/PageLayout'
import styles from '../main.module.scss'
import urlFor from '../../lib/sanity/urlFor'
import Image from 'next/image'

interface DrinkItem {
  title: string
  price: number
  description?: string
  image?: any
  order?: number
}

interface DrinkGroup {
  title: string
  drinkItems: DrinkItem[]
}

export default async function Drinks() {
  const drinkGroups = await drinks()
  return (
    <PageLayout
      title="Drinks Menu"
      description="From ice-cold beers to perfectly mixed cocktails, we've got your thirst covered."
      containerSize="lg"
    >
      <div className={styles.menuContent}>
        {drinkGroups.map((drinkGroup: DrinkGroup, groupIndex: number) => (
          <div className={styles.group} key={`drink-group-${groupIndex}`}>
            <Text as="h2" className={styles.groupName}>
              {FixTitle(drinkGroup.title)}
            </Text>
            <div className={styles.items}>
              {drinkGroup.drinkItems.map((item: DrinkItem, itemIndex: number) => (
                <div
                  className={`${styles.menuItem} ${styles.visible}`}
                  key={`drink-item-${groupIndex}-${itemIndex}`}
                >
                  {item.image && (
                    <div className={styles.imageContainer}>
                      <Image
                        src={urlFor(item.image).width(800).height(450).url()}
                        alt={item.title}
                        width={800}
                        height={450}
                        priority={false}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  )}
                  <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      <Text as="h3" className={styles.itemName}>
                        {FixTitle(item.title)}
                      </Text>
                      <Text as="span" className={styles.itemPrice}>
                        ${item.price.toFixed(2)}
                      </Text>
                    </div>
                    {item.description && (
                      <Text as="p" className={styles.itemDescription}>
                        {item.description}
                      </Text>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
