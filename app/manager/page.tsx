'use client'

import styles from './Manager.module.scss'
import Login from 'components/login/Login'
import { FirebaseContextProvider } from 'components/context/FirebaseContext'
import { GridContextProvider } from 'components/grid/GridContext'
import Admin from 'components/admin/Admin'

export default async function Manager() {
  return (
    <div className={styles.wrapper}>
      <FirebaseContextProvider>
        <Login />
        <GridContextProvider>
          <Admin />
        </GridContextProvider>
      </FirebaseContextProvider>
    </div>
  )
}
