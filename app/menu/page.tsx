import styles from './Menu.module.scss'

import type { MenuGroup, MenuItem } from './menu'
import TheMenu from './menu'
export default function Menu() {
  const date = Object.keys(TheMenu)[0]
  const menu = TheMenu[date]

  const FixTitle = (title: string) => {
    const words = title.split(/(?=[A-Z])/)
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1)
    }

    return words.join(' ')
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Menu</h2>
      <div className={styles.menu}>
        {menu.map((group: MenuGroup, index) => {
          const groupName = Object.keys(group)[0]
          const items = group[groupName]
          return (
            <div className={styles.group} key={'group' + index}>
              <h3 className={styles.groupName}>{FixTitle(groupName)}</h3>
              <ul className={styles.items}>
                {items.map((item: MenuItem, index) => {
                  return (
                    <li className={styles.item} key={'item' + index}>
                      <div className={styles.itemHeader}>
                        <div className={styles.itemName}>{FixTitle(item.name)}</div>
                        <div className={styles.itemPrice}>{item.price}</div>
                      </div>
                      <div className={styles.itemDescription}>
                        {item.description}
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
