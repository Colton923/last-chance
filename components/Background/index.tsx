'use client'

import Image from 'next/image'
import styles from './styles.module.scss'
import barImage from '../../public/images/bar.webp'

export const Background = () => {
  return (
    <div className={styles.backgroundWrapper}>
      <Image
        src={barImage.src}
        alt=""
        className={styles.backgroundImage}
        placeholder="blur"
        quality={100}
        fill
        priority
      />
      <div className={styles.overlay} />
    </div>
  )
}
