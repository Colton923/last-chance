'use client'

import { Item } from 'actions/sanity'
import styles from '../../../main.module.scss'
import Modal from '../../../../components/Modal'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { Text } from '../../../../components/Text'
import urlFor from '../../../../lib/sanity/urlFor'
import { FixTitle } from '../../../../utils/FixTitle'
import ItemLike from '../../../../components/Menu/ItemLike'
import Image from 'next/image'

async function fetchMenuItem(id: string): Promise<Item> {
  try {
    const url = `/api/menu/item?id=${encodeURIComponent(id)}`

    const response = await fetch(url)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      })
      throw new Error(
        `Failed to fetch menu item: ${response.status} ${response.statusText}`
      )
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('fetchMenuItem error details:', {
      error,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : undefined,
    })
    throw error
  }
}

async function fetchLikes(title: string): Promise<number> {
  try {
    const url = `/api/menu/likes?title=${encodeURIComponent(title)}`

    const response = await fetch(url)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error response for likes:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      })
      throw new Error(
        `Failed to fetch likes: ${response.status} ${response.statusText}`
      )
    }

    const data = await response.json()

    return data.likes || 0
  } catch (error) {
    console.error('fetchLikes error details:', {
      error,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : undefined,
    })
    throw error
  }
}

export default function MenuItemModal({
  params,
}: {
  params: { itemTitle: string }
}) {
  const router = useRouter()
  const [menuData, setMenuData] = useState<{
    menuItem: Item | null
    likes: number
  } | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)

      // First fetch the menu item to get its title
      const menuItem = await fetchMenuItem(params.itemTitle)

      // Then fetch likes using the title
      const menuLikes = await fetchLikes(menuItem.title)

      setMenuData({
        menuItem,
        likes: menuLikes,
      })
    } catch (error) {
      const errorDetails = {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        params: {
          itemTitle: params.itemTitle,
        },
      }
      console.error('Error in fetchData:', errorDetails)
      setError(error instanceof Error ? error.message : 'Failed to load menu item')
      setTimeout(() => router.back(), 2000)
    } finally {
      setIsLoading(false)
    }
  }, [params.itemTitle, router])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Modal>
      <div className={styles.modalContent}>
        {isLoading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            Loading...
          </div>
        ) : error ? (
          <div className={styles.error}>{error}</div>
        ) : menuData?.menuItem ? (
          <div className={styles.modalMenuItem}>
            <div className={styles.imageWrapper}>
              <Image
                src={urlFor(menuData.menuItem.image).width(1920).height(1080).url()}
                alt={menuData.menuItem.title}
                priority
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
            <div className={styles.detailsWrapper}>
              <div className={styles.header}>
                <Text as="h1" className={styles.title}>
                  {FixTitle(menuData.menuItem.title)}
                </Text>
                <Text as="span" className={styles.price}>
                  ${parseFloat(menuData.menuItem.price).toFixed(2)}
                </Text>
              </div>
              {menuData.menuItem.description && (
                <Text as="p" className={styles.description}>
                  {menuData.menuItem.description}
                </Text>
              )}
              <div className={styles.likesSection}>
                <ItemLike
                  itemName={menuData.menuItem.title}
                  likes={menuData.likes}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Modal>
  )
}
