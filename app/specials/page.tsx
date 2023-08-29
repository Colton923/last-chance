'use client'

import { useSiteContext } from 'components/context/SiteContext'
import styles from './Specials.module.scss'

export default function Specials() {
  const { specials } = useSiteContext()

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{specials.title}</h2>
      <p>{specials.description}</p>
    </div>
  )
}
