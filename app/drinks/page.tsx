import styles from './Drinks.module.scss'
import DrinkMenu from './drinks'
import type { Beverage, BeverageMenu, Beverages } from './drinks'
import Image from 'next/image'
import bar from 'public/images/bar.jpeg'

export default function Drinks() {
  const date = Object.keys(DrinkMenu)[0]
  const menu = DrinkMenu[date]

  const FixTitle = (title: string) => {
    const words = title.split(/(?=[A-Z])/)
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }

    return words.join(' ')
  }
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
        {menu.map((group: BeverageMenu, index) => {
          const groupName = Object.keys(group)[0]
          const items = group[groupName]
          return (
            <div className={styles.group} key={'group' + index}>
              <h3 className={styles.groupName}>{FixTitle(groupName)}</h3>
              <ul className={styles.items}>
                {items.map((item: Beverage, index) => {
                  return (
                    <li className={styles.item} key={'item' + index}>
                      <div className={styles.itemHeader}>
                        <div className={styles.itemName}>{FixTitle(item.name)}</div>
                        <div className={styles.itemPrice}>{item.price}</div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
