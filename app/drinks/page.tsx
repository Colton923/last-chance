import Image from 'next/image'
import bar from 'public/images/bar.jpeg'
import client from 'lib/sanity/client'
import styles from './Drinks.module.scss'
import { FixTitle } from '../../lib/fns/FixTitle'

const drinkGroupsQuery = `*[_type == "drinkGroups"] {
  title,
  "drinkItems": *[_type == "drinkItems" && drinkGroup._ref == ^._id] {
    title,
    price
  }
}`

async function getDrinks() {
  const getDrinkItems = await client.fetch(drinkGroupsQuery, undefined, {
    cache: 'no-store',
  })
  return getDrinkItems
}

export default async function Drinks() {
  const drinkItems = await getDrinks()

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImageWrapper}>
        <Image
          src={bar}
          alt="bar"
          className={styles.backgroundImage}
          width={3840}
          height={2372}
        />
      </div>
      <div className={styles.menu}>
        {drinkItems.map((drinkGroups: any, index: any) => {
          const groupName = drinkGroups.title
          return (
            <div className={styles.group} key={'group' + index}>
              <h3 className={styles.groupName}>{FixTitle(groupName)}</h3>
              <ul className={styles.items}>
                {drinkGroups.drinkItems.map((item: any, index: any) => (
                  <li className={styles.item} key={'item' + index}>
                    <div className={styles.itemName}>{FixTitle(item.title)}</div>
                    <div className={styles.itemPrice}>${item.price}</div>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
