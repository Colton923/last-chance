'use server'

import { menu } from 'actions/sanity'
import type { Item, MenuItemsWithLikes, Group } from 'actions/sanity'

export async function getMenuItemsWithoutLikes() {
  const menuItems = await menu()

  const menuItemsWithoutLikes: MenuItemsWithLikes = menuItems.map((group: Group) => {
    const menuItemsWithoutLikes: Item[] = group.menuItems.map((item: Item) => {
      return item
    })
    return {
      ...group,
      menuItems: menuItemsWithoutLikes,
    }
  })

  return menuItemsWithoutLikes
}
