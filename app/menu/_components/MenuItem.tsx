import type { Item } from './MenuGroup'
import styles from '../Menu.module.scss'
import urlFor from 'lib/sanity/urlFor'
import ItemLike from './ItemLike'
import { FixTitle } from '../../../lib/fns/FixTitle'

const MenuItem = ({ title, description, image, price, index, likes }: Item) => {
  return (
    <li
      className={styles.item}
      style={{
        animationDelay: `${index * 0.4}s`,
      }}
    >
      <div className={styles.itemHeader}>
        <div className={styles.itemName}>{FixTitle(title)}</div>
        <div className={styles.itemPrice}>${price}</div>
      </div>
      {description && (
        <>
          <div className={styles.itemDescription}>{description}</div>
          <ItemLike likes={likes} itemName={title} />
        </>
      )}
      {image && (
        <img
          loading="lazy"
          src={urlFor(image).url()}
          alt={title}
          className={styles.image}
        />
      )}
    </li>
  )
}

export default MenuItem
