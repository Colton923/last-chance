import styles from './Menu.module.scss'
import client from 'lib/sanity/client'
import MenuPdf from 'components/menuPdf/MenuPdf'
import Image from 'next/image'
import bar from 'public/images/bar.jpeg'
import MenuGroup, { Group } from './_components/MenuGroup'
import ScrollToTop from './_components/ScrollToTop'
import firestoreDB from 'lib/firestore/firestoreDB'
import { LikesDoc } from './actions'

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

async function getAllLikes() {
  const likesRef = await firestoreDB.collection('likes').limit(1)
  const likes = await likesRef.get()
  if (likes.empty) {
    return null
  }
  return likes.docs[0].data().menu as LikesDoc['menu']
}

async function getMenu() {
  const getMenuItems = (await client.fetch(menuGroupsQuery, undefined, {
    cache: 'no-store',
  })) as Group[]
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
  const likes = new Map<string, number>()
  const likesDoc = await getAllLikes()
  if (likesDoc) {
    for (const [key, value] of Object.entries(likesDoc)) {
      likes.set(key, value)
    }
  }
  const menuItemsWithLikes = menuItems.map((group) => {
    const menuItemsWithLikes = group.menuItems.map((item) => {
      if (!likes) {
        return {
          ...item,
          likes: 1,
        }
      }
      const itemLikes = likes.get(item.title) || 0
      return {
        ...item,
        likes: itemLikes,
      }
    })
    return {
      ...group,
      menuItems: menuItemsWithLikes,
    }
  })

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
          <MenuPdf pdf={menudownload[0].menuPDF} />
        </div>
        {menuItemsWithLikes.map((item: Group, index: any) => (
          <MenuGroup
            key={'group' + index}
            title={item.title}
            menuItems={item.menuItems}
          />
        ))}
      </div>
      <ScrollToTop />
    </div>
  )
}
