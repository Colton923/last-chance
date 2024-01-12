import type { Item } from 'actions/sanity'
import styles from '../Menu.module.scss'
import urlFor from 'lib/sanity/urlFor'
import ItemLike from './ItemLike'
import Link from 'next/link'

const MenuItem = ({
  title,
  description,
  image,
  price,
  index,
  likes,
  link,
}: Item) => {
  return (
    <li
      className={styles.item}
      style={{
        animationDelay: `${index * 0.4}s`,
      }}
    >
      {link ? (
        <Link
          href={link}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div className={styles.itemHeader}>
            <div className={styles.itemName}>{title}</div>
            <div className={styles.itemPrice}>${price}</div>
          </div>
        </Link>
      ) : (
        <div className={styles.itemHeader}>
          <div className={styles.itemName}>{title}</div>
          <div className={styles.itemPrice}>${price}</div>
        </div>
      )}
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
