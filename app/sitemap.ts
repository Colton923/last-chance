import { MetadataRoute } from 'next'
import { getMenuItemsWithoutLikes } from 'actions'
import { MakeLink } from 'utils'
import type { MenuItemsWithLikes } from 'actions/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let items: MenuItemsWithLikes = []
  try {
    items = await getMenuItemsWithoutLikes()
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching menu items for sitemap:', error)
    }
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
      url: `${baseURL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
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
      url: `${baseURL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
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
  const seenUrls = new Set<string>()
  const siteMapItems: MetadataRoute.Sitemap =
    items.length > 0
      ? (items
          .map((group) => {
            return (group.menuItems || []).map((item) => {
              return {
                url: `${baseURL}/menu/${MakeLink(item.title)}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.8,
              }
            })
          })
          .flat()
          .filter((entry) => {
            if (seenUrls.has(entry.url)) {
              return false
            }
            seenUrls.add(entry.url)
            return true
          }) as MetadataRoute.Sitemap)
      : []

  return [...baseSiteMap, ...siteMapItems]
}
