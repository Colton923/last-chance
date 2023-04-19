import styles from './Specials.module.scss'
import { useSiteContext } from 'components/context/SiteContext'

export default function Specials() {
  const { pageId, postId } = useSiteContext()
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Specials</h2>
      <iframe
        src={`https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F${pageId}%2Fposts%2F${postId}%2F&width=500&show_text=true&appId=1015837269402472&height=589`}
        width="500"
        height="589"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}
