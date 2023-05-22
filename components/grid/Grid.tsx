'use client'

import { useGridContext } from './GridContext'
import styles from './Grid.module.scss'
import React, { useEffect, useState } from 'react'
import { MenuGroup } from 'app/menu/menu'
import GridHelper from './GridHelper'
import { FixTitle } from 'app/menu/FixTitle'

export default function Grid() {
  const { setLocalRowData, localRowData } = useGridContext()
  const [choice, setChoice] = useState<string>()

  const getMenu = async () => {
    const res = await fetch('/api/firestoreData', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!res.ok) {
      throw new Error('Something went wrong')
    }

    return res.json()
  }

  useEffect(() => {
    if (localRowData.length === 0) {
      getMenu()
        .then((res: { body: MenuGroup[] }) => {
          //@ts-ignore
          setLocalRowData(res.body.menu)
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
    }
  }, [localRowData])

  if (localRowData.length === 0) return null

  const onClick = (item: string) => {
    setChoice(item)
  }

  if (!localRowData) return null
  return (
    <div className={styles.wrapper}>
      {localRowData.map((group: any) => {
        return (
          <div
            key={Object.keys(group)[0]}
            className={styles.choice}
            onClick={() => onClick(Object.keys(group)[0].toString())}
          >
            {FixTitle(Object.keys(group)[0])}
          </div>
        )
      })}

      <GridHelper choice={choice ? choice : 'appetizers'} />
    </div>
  )
}
