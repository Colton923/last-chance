import { FixTitle } from '../../utils/FixTitle'
import { menu, menuPDF } from '../../actions/sanity'
import { Text } from '../../components/Text'
import { PageLayout } from '../../components/PageLayout'
import { MenuPDFButton } from '../../components/Buttons'
import MenuItem from '../../components/Menu/MenuItem'
import styles from '../main.module.scss'
import Link from 'next/link'
import { Metadata } from 'next'

interface MenuItem {
  _id: string
  title: string
  price: string
  description?: string
  image?: any
  order?: number
}

interface MenuGroup {
  _id: string
  title: string
  menuItems: MenuItem[] | null
  order?: number
}

export const metadata: Metadata = {
  title: 'Menu | Last Chance Bar & Grill',
  description:
    'Explore our delicious menu featuring breakfast all day, homestyle cooking, burgers, sandwiches, and more. From appetizers to desserts, we have something for everyone.',
  openGraph: {
    title: 'Menu | Last Chance Bar & Grill',
    description:
      'Explore our delicious menu featuring breakfast all day, homestyle cooking, burgers, sandwiches, and more. From appetizers to desserts, we have something for everyone.',
    url: 'https://lastchancepeoria.com/menu',
    siteName: 'Last Chance Bar & Grill',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/sunday.jpg',
        width: 1200,
        height: 630,
        alt: 'Last Chance Bar & Grill Food Menu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menu | Last Chance Bar & Grill',
    description:
      'Explore our delicious menu featuring breakfast all day, homestyle cooking, burgers, sandwiches, and more. From appetizers to desserts, we have something for everyone.',
    images: ['/images/sunday.jpg'],
  },
}

export default async function Menu() {
  const menuItems = await menu()
  const menuDownload = await menuPDF()

  return (
    <PageLayout
      title="Our Menu"
      description="From appetizers to desserts, explore our carefully crafted dishes."
      containerSize="lg"
    >
      <div className={styles.menuContent}>
        <MenuPDFButton pdf={menuDownload[0].menuPDF} />
        {menuItems.map((menuGroup: MenuGroup, groupIndex: number) => (
          <div className={styles.group} key={`menu-group-${groupIndex}`}>
            <Text as="h2" className={styles.groupName}>
              {FixTitle(menuGroup.title)}
            </Text>
            <div className={styles.items}>
              {menuGroup.menuItems?.map((item: MenuItem, itemIndex: number) => (
                <Link
                  key={`menu-item-${groupIndex}-${itemIndex}`}
                  href={`/menu/${item._id}`}
                >
                  <MenuItem
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                  />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
