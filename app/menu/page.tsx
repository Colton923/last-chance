import styles from './Menu.module.scss'
import { FixTitle } from '../../lib/fns/FixTitle'
import urlFor from 'lib/sanity/urlFor'
import client from 'lib/sanity/client'
import MenuPdf from 'components/menuPdf/MenuPdf'

const menuGroupsQuery = `*[_type == "menuGroups"] {
  title,
  "menuItems": *[_type == "menuItems" && menuGroup._ref == ^._id] {
    title,
    description,
    price,
    image,
  }
}`

const menuPdfQuery = `*[_type == "misc"] {
  "menuPDF": menuPDF.asset->url
}`

async function getMenu() {
  const getMenuItems = await client.fetch(menuGroupsQuery, undefined, {
    cache: 'no-store',
  })
  return getMenuItems
}

async function getMenuPdf() {
  const getMenuPdf = await client.fetch(menuPdfQuery, undefined, {
    cache: 'no-store',
  })
  return getMenuPdf
}

export default async function Menu() {
  const menuItems = await getMenu()
  const menudownload = await getMenuPdf()

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <div>
          <MenuPdf pdf={menudownload[0].menuPDF} />
        </div>
        {menuItems.map((item: any, index: any) => (
          <div className={styles.group} key={'group' + index}>
            <h3 className={styles.groupName}>{FixTitle(item.title)}</h3>
            <ul className={styles.items}>
              {item.menuItems.map((item: any, index: any) => (
                <li className={styles.item} key={'item' + index}>
                  <div className={styles.itemHeader}>
                    <div className={styles.itemName}>{FixTitle(item.title)}</div>
                    <div className={styles.itemPrice}>${item.price}</div>
                  </div>
                  {item.description && (
                    <div className={styles.itemDescription}>{item.description}</div>
                  )}
                  {item.image && (
                    <img
                      loading="lazy"
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      className={styles.image}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
