'use server'

import { menu } from 'actions/sanity'
import { likes } from 'actions/firestore'
import type { Item, MenuItemsWithLikes, Group } from 'actions/sanity'

export async function getMenuItemsWithLikes() {
  const menuItems = await menu()
  const likesDoc = await likes()
  const likesMap = new Map<string, number>()

  if (likesDoc !== null) {
    Object.entries(likesDoc).map(([key, value]) => {
      likesMap.set(key, value)
    })
  }

  const menuItemsWithLikes: MenuItemsWithLikes = menuItems.map((group: Group) => {
    const menuItemsWithLikes: Item[] = group.menuItems.map((item: Item) => {
      if (!likesMap.has(item.title)) {
        return {
          ...item,
          likes: 1,
        }
      }
      const itemLikes = likesMap.get(item.title) || 0
      return {
        ...item,
        likes: itemLikes,
      }
    })
    return {
      ...group,
      menuItems: menuItemsWithLikes,
    }
  })

  return menuItemsWithLikes
}
