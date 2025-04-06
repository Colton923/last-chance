'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Text } from '../Text'
import { FixTitle } from '../../utils/FixTitle'
import styles from '../../app/main.module.scss'
import urlFor from '../../lib/sanity/urlFor'

interface MenuItemProps {
  title: string
  price: string
  description?: string
  image?: any
  likes?: number
}

export default function MenuItem({
  title,
  price,
  description,
  image,
  likes,
}: MenuItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          } else {
            // Only hide if it's completely out of view
            if (entry.intersectionRatio === 0) {
              setIsVisible(false)
            }
          }
        })
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.1], // Trigger at 0% and 10% visibility
      }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={itemRef}
      className={`${styles.menuItem} ${isVisible ? styles.visible : ''}`}
    >
      {image && (
        <div className={styles.imageContainer}>
          <Image
            src={urlFor(image).width(800).height(450).url()}
            alt={title}
            width={800}
            height={450}
            priority={false}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      <div className={styles.itemContent}>
        <div className={styles.itemHeader}>
          <Text as="h3" className={styles.itemName}>
            {FixTitle(title)}
          </Text>
          <Text as="span" className={styles.itemPrice}>
            ${parseFloat(price).toFixed(2)}
          </Text>
        </div>
        {description && (
          <Text as="p" className={styles.itemDescription}>
            {description}
          </Text>
        )}
        {likes !== undefined && (
          <div className={styles.likesWrapper}>
            <Text as="span" className={styles.likes}>
              ❤️ {likes}
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}
