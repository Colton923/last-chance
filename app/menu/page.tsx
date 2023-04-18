import styles from 'styles/App.module.scss'
import type { MenuGroup, MenuItem } from './menu'
import TheMenu from './menu'
export default function Menu() {
  const date = Object.keys(TheMenu)[0]
  const menu = TheMenu[date]
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Menu</h2>
      <div className={styles.menu}>
        <h3 className={styles.date}>{date}</h3>
        {menu.map((group: MenuGroup, index) => {
          const groupName = Object.keys(group)[0]
          const items = group[groupName]
          return (
            <div className={styles.group} key={'group' + index}>
              <h4 className={styles.groupName}>{groupName}</h4>
              <ul className={styles.items}>
                {items.map((item: MenuItem, index) => {
                  return (
                    <li className={styles.item} key={'item' + index}>
                      <div className={styles.itemName}>{item.name}</div>
                      <div className={styles.itemPrice}>{item.price}</div>
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
