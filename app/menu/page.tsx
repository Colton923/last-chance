import Image from 'next/image'
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
                    <li
                      className={styles.item}
                      key={'item' + index}
                      style={item.image ? {} : { color: `var(--black)` }}
                    >
                      <div className={styles.itemHeader}>
                        <div className={styles.itemName}>{FixTitle(item.name)}</div>
                        <div className={styles.itemPrice}>{item.price}</div>
                      </div>
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          className={styles.image}
                          loading="lazy"
                        />
                      )}
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
