import { group, Item, item } from 'actions/sanity'
import MenuGroup from 'app/menu/_components/MenuGroup'
import { redirect } from 'next/navigation'
import styles from 'app/menu/Menu.module.scss'
import { like } from 'actions/firestore'
import { RevertLink } from 'utils'
import { Metadata } from 'next'
import { ImageResponse } from 'next/og'

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
    const image = (await fetch('http://localhost:3000/api/og', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        itemTitle: itemTitle,
      },
    })) as ImageResponse
    const generatedImage = await Buffer.from(await image.arrayBuffer()).toString(
      'base64'
    )
    return {
      title: `${RevertLink(itemTitle)} | The Last Chance`,
      openGraph: {
        title: `${RevertLink(itemTitle)} | The Last Chance`,
        description: `${RevertLink(groupTitle)}`,
        images: [
          {
            url: `data:image/png;base64,${generatedImage}`,
            alt: `${RevertLink(itemTitle)} | The Last Chance`,
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
