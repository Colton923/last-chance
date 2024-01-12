import Image from 'next/image'
import bar from 'public/images/bar.jpeg'
import styles from './Drinks.module.scss'
import { FixTitle } from 'utils/FixTitle'
import { drinks } from 'actions/sanity'

export default async function Drinks() {
  const drinkItems = await drinks()

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
