import styles from './Menu.module.scss'
import { MenuPDFButton } from 'components/Buttons'
import Image from 'next/image'
import bar from 'public/images/bar.jpeg'
import MenuGroup from './_components/MenuGroup'
import ScrollToTop from './_components/ScrollToTop'
import { getMenuItemsWithLikes } from 'actions'
import { menuPDF } from 'actions/sanity'
import { MakeLink } from 'utils'

export default async function Menu() {
  const menuItemsWithLikes = await getMenuItemsWithLikes()
  const menuDownload = await menuPDF()

  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImageWrapper}>
        <Image
          src={bar}
          alt="bar"
          className={styles.backgroundImage}
          width={3840}
          height={2372}
        />
      </div>
      <div className={styles.menu}>
        <div>
          <MenuPDFButton pdf={menuDownload[0].menuPDF} />
        </div>
        {menuItemsWithLikes.map((item, index: number) => (
          <MenuGroup
            key={'group' + index}
            title={item.title}
            menuItems={item.menuItems}
            link={`/menu/${MakeLink(item.title)}`}
            initialState={true}
          />
        ))}
      </div>
      <ScrollToTop />
    </div>
  )
}
