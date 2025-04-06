import { PageLayout } from '../../components/PageLayout'
import { Text } from '../../components/Text'
import { specials } from '../../lib/sanity/queries/specials'
import client from '../../lib/sanity/client'
import styles from '../main.module.scss'

interface Special {
  _id: string
  title: string
  description: string
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
