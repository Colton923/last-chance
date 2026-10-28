'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '../../app/main.module.scss'
import { Text } from '../Text'
import { FixTitle } from '../../utils/FixTitle'
import { MakeLink } from '../../utils/MakeLink'
import urlFor from '../../lib/sanity/urlFor'
import type { Group } from '../../actions/sanity'

interface MenuItemRowProps {
  title: string
  description?: string
  price: string
}

const formatPrice = (price: unknown): string => {
  if (typeof price === 'number' && !isNaN(price)) {
    return `$${price.toFixed(2)}`
  }
  if (typeof price === 'string') {
    const trimmed = price.trim()
    if (!trimmed) return ''
    const cleaned = trimmed.replace(/[^0-9.]/g, '')
    const parsed = parseFloat(cleaned)
    if (!isNaN(parsed) && cleaned.length > 0) {
      return `$${parsed.toFixed(2)}`
    }
    return trimmed
  }
  return ''
}

const MenuItemRow = ({ title, description, price }: MenuItemRowProps) => (
  <Link
    href={`/menu/${MakeLink(title)}`}
    scroll={false}
    className={styles.menuItemRow}
  >
    <div className={styles.menuItemInfo}>
      <div className={styles.menuItemHeader}>
        <Text as="h3" size="lg" weight="semibold" className={styles.menuItemTitle}>
          {FixTitle(title)}
        </Text>
        <span className={styles.menuLeaderDots}></span>
        <Text as="span" size="lg" weight="bold" className={styles.menuItemPrice}>
          {formatPrice(price)}
        </Text>
      </div>
      {description && (
        <Text as="p" size="sm" className={styles.menuItemDesc}>
          {description}
        </Text>
      )}
    </div>
  </Link>
)

const MenuGroup = ({ title, menuItems }: Group) => {
  const safeItems = menuItems || []
  // Get first item with image for hero
  const heroItem = safeItems.find(item => item?.image)
  
  return (
    <section className={styles.menuSection}>
      {/* Hero Image */}
      {heroItem?.image && (
        <div className={styles.menuHeroImage}>
          <Image
            src={urlFor(heroItem.image).width(1200).height(400).url()}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{
              objectFit: 'cover',
            }}
            priority={false}
          />
          <div className={styles.menuHeroOverlay}>
            <Text as="h2" className={styles.menuSectionTitle}>
              {title}
            </Text>
          </div>
        </div>
      )}
      
      {/* No image fallback */}
      {!heroItem?.image && (
        <div className={styles.menuSectionHeader}>
          <Text as="h2" className={styles.menuSectionTitle}>
            {title}
          </Text>
        </div>
      )}
      
      {/* Menu Items Grid */}
      <div className={styles.menuItemsGrid}>
        {safeItems.map((item, index) => (
          <MenuItemRow
            key={`menu-item-${index}`}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  )
}

export default MenuGroup
