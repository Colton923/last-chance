import { menu, menuPDF } from '../../actions/sanity'
import { PageLayout } from '../../components/PageLayout'
import { MenuPDFButton } from '../../components/Buttons'
import MenuGroup from '../../components/Menu/MenuGroup'
import styles from '../main.module.scss'
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
  const menuItems = (await menu()) || []
  let pdfUrl = '/menu.pdf'
  try {
    const menuDownload = await menuPDF()
    if (menuDownload?.[0]?.menuPDF) {
      pdfUrl = menuDownload[0].menuPDF
    }
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching menu PDF:', error)
    }
    pdfUrl = '/menu.pdf'
  }

  return (
    <PageLayout
      title="Our Menu"
      description="From appetizers to desserts, explore our carefully crafted dishes."
      containerSize="lg"
    >
      <div className={styles.menuContent}>
        <MenuPDFButton pdf={pdfUrl} />
        {menuItems.map((menuGroup: any, groupIndex: number) => (
          <MenuGroup
            key={`menu-group-${groupIndex}`}
            title={menuGroup.title}
            menuItems={menuGroup.menuItems || []}
            _id={menuGroup._id}
          />
        ))}
      </div>
    </PageLayout>
  )
}
