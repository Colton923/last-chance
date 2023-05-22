'use client'

import styles from './Manager.module.scss'

import Grid from 'components/grid/Grid'
import { useFirebaseContext } from 'components/context/FirebaseContext'

export default function Manager() {
  const { admin } = useFirebaseContext()

  return <div className={styles.wrapper}>{admin && <Grid />}</div>
}
