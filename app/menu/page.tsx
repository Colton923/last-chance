'use client'

import Image from 'next/image'
import styles from './Menu.module.scss'
import type { MenuGroup, MenuItem } from './menu'
import { useEffect, useState } from 'react'
import { FixTitle } from './FixTitle'
import CloudImage from './CloudImage'

export default function Menu() {
  const [menuGroups, setMenuGroups] = useState<MenuGroup[]>([])
  const [image, setImage] = useState<Blob | null>(null)

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
  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        {menuGroups.map((group: MenuGroup, index: any) => {
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
                      {item.image && (
                        <CloudImage
                          imageName={item.image.src}
                          alt={item.name}
                          className={styles.itemImage}
                          width={item.image.width}
                          height={item.image.height}
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
