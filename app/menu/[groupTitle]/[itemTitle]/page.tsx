import { group, Item, item } from 'actions/sanity'
import MenuGroup from 'app/menu/_components/MenuGroup'
import { redirect } from 'next/navigation'
import styles from 'app/menu/Menu.module.scss'
import { like } from 'actions/firestore'
import { RevertLink } from 'utils'
import { Metadata } from 'next'

export type Params = {
  groupTitle: string
  itemTitle: string
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { groupTitle, itemTitle } = params
  try {
    const tryUrl = `http://lastchancepeoria.com/api/og?id=${itemTitle}`
    const image = await fetch(tryUrl, {
      method: 'GET',
    }).then((res) => res.blob())
    const generatedImage = new File(
      [image],
      `metadata_image.${image.type.split('/')[1]}`,
      {
        type: image.type,
      }
    )
    const blobURL = URL.createObjectURL(generatedImage)
    return {
      title: `${RevertLink(itemTitle)} | The Last Chance`,
      openGraph: {
        title: `${RevertLink(itemTitle)} | The Last Chance`,
        description: `${RevertLink(groupTitle)}`,
        images: [
          {
            url: blobURL,
          },
        ],
      },
    }
  } catch (e) {
    console.log(e)
    return {
      title: `${RevertLink(itemTitle)} | The Last Chance Bar & Grill`,
    }
  }
}

export default async function Page({ params }: { params: Params }) {
  const { groupTitle, itemTitle } = params

  const menuGroup = await group(groupTitle)
  const menuItem = await item(itemTitle)
  const menuLinkes = await like(RevertLink(itemTitle))
  const menuItemWithLikes = {
    ...menuItem,
    likes: menuLinkes,
  } as Item

  if (!menuGroup || !menuItem) {
    redirect('/')
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.menu}>
        <MenuGroup
          initialState={false}
          title={menuGroup.title}
          menuItems={[menuItemWithLikes]}
        />
      </div>
    </div>
  )
}
