import { FixTitle } from '../../utils/FixTitle'
import { menu, menuPDF } from '../../actions/sanity'
import { Text } from '../../components/Text'
import { PageLayout } from '../../components/PageLayout'
import { MenuPDFButton } from '../../components/Buttons'
import MenuItem from '../../components/Menu/MenuItem'
import styles from '../main.module.scss'
import Link from 'next/link'

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
