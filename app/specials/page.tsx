import styles from './Specials.module.scss'
import Image from 'next/image'
import bar from 'public/images/bar.webp'
import { specials } from 'actions/sanity'

export default async function Specials() {
  const sanitySpecials = await specials()

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
      <div className={styles.specialsWrapper}>
        <h2 className={styles.header}>Specials</h2>
        {sanitySpecials.map((item: any, index: any) => (
          <div className={styles.itemWrapper} key={'specials' + index}>
            <p className={styles.itemName}>{item.title}</p>
            <p className={styles.itemDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
