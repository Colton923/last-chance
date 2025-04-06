import { MetadataRoute } from 'next'
import { getMenuItemsWithoutLikes } from 'actions'
import { MakeLink } from 'utils'
import type { MenuItemsWithLikes } from 'actions/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let items: MenuItemsWithLikes = []
  try {
    items = await getMenuItemsWithoutLikes()
  } catch (error) {
    console.error('Error fetching menu items for sitemap:', error)
    // Continue with empty items array if fetch fails
  }

  const baseURL = 'https://lastchancepeoria.com'
  const baseSiteMap: MetadataRoute.Sitemap = [
    {
      url: `${baseURL}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseURL}/menu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseURL}/drinks`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseURL}/specials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseURL}/privacyPolicy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseURL}/donation`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseURL}/apply`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Only add menu items to sitemap if we successfully fetched them
  const siteMapItems: MetadataRoute.Sitemap =
    items.length > 0
      ? (items
          .map((group) => {
            const link = `${baseURL}/menu/${MakeLink(group.title)}`
            return group.menuItems.map((item) => {
              return {
                url: `${link}/${MakeLink(item.title)}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
              }
            })
          })
          .flat() as MetadataRoute.Sitemap)
      : []

  return [...baseSiteMap, ...siteMapItems]
}
