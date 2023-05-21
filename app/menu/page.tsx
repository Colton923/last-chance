'use client'

import styles from './Menu.module.scss'
import type { MenuGroup, MenuItem } from './menu'
import { useEffect, useState } from 'react'
import { FixTitle } from './FixTitle'
import CloudImage from './CloudImage'

export default function Menu() {
  const [menuGroups, setMenuGroups] = useState<MenuGroup[]>([])
  const FixImagePath = (fullPath: string) => {
    const path = fullPath.split('/')
    return path[path.length - 1]
  }
  useEffect(() => {
    const getMenu = async () => {
      const menu = await fetch(
        process.env.NEXT_PUBLIC_ENVIRONMENT === 'development'
          ? 'http://localhost:3000/api/firestoreData'
          : 'https://lastchancepeoria.com/api/firestoreData'
      )
      if (!menu.ok) return null
      const menuData = await menu.json()
      const menuGroups = menuData.body as MenuGroup[]

      return menuGroups
    }

    getMenu().then((menuGroups) => {
      if (!menuGroups) return null
      setMenuGroups(menuGroups)
    })
  }, [])

  if (!menuGroups) return null
  if (menuGroups.length === 0) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        {menuGroups.map((part: MenuGroup, index: any) => {
          const groupName = Object.keys(part)[0]
          const items = part[groupName]
          return (
            <div className={styles.group} key={'group' + index}>
              <h3 className={styles.groupName}>{FixTitle(groupName)}</h3>
              <ul className={styles.items}>
                {items.map((item: MenuItem, index) => {
                  return (
                    <li
                      className={styles.item}
                      key={'item' + index}
                      style={
                        item.image
                          ? { textShadow: `1px 1px 1px var(--black)` }
                          : { color: `var(--black)` }
                      }
                    >
                      <div className={styles.itemHeader}>
                        <div className={styles.itemName}>{FixTitle(item.name)}</div>
                        <div className={styles.itemPrice}>{item.price}</div>
                      </div>
                      {item.storagePath && (
                        <CloudImage
                          imageName={FixImagePath(item.storagePath)}
                          alt={item.name}
                          className={styles.itemImage}
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
