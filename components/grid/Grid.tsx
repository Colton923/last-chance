'use client'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { useGridContext } from './GridContext'
import styles from './Grid.module.scss'
import { useSiteContext } from '../context/SiteContext'
import { useEffect, useState } from 'react'
import { MenuGroup, MenuItem } from 'app/menu/menu'
import { useFirebaseContext } from 'components/context/FirebaseContext'
import { FixTitle } from 'app/menu/page'

export default function Grid() {
  const { screenWidth } = useSiteContext()
  const { gridRef, onGridReady, AGTheme, setLocalRowData, localRowData } =
    useGridContext()
  const { admin, UpdateDB } = useFirebaseContext()
  const [choice, setChoice] = useState<any>(null)

  //Show gridDefs for each menu group

  const valueGetter = (params: any) => {
    return params.data[params.colDef.field]
  }

  const valueSetter = (params: any) => {
    params.data[params.colDef.field] = params.newValue
    UpdateDB(params.data as MenuItem)
    return true
  }

  const imageValueGetter = (params: any) => {
    if (params.data[params.colDef.field]) {
      return `<img src="${params.data[params.colDef.field].src}" />`
    } else {
      return ''
    }
  }

  const MakeGrid = (group: MenuGroup) => {
    const newGroupDefs = {
      headerName: Object.keys(group)[0],
      field: Object.keys(group)[0],
      children: [
        {
          headerName: 'Name',
          field: 'name',
          valueGetter,
          valueSetter,
          editable: true,
        },
        {
          headerName: 'Price',
          field: 'price',
          valueSetter,
          valueGetter,
          editable: true,
        },
        {
          headerName: 'Description',
          field: 'description',
          valueSetter,
          valueGetter,
          editable: true,
        },
        {
          headerName: 'Image',
          field: 'image',
          valueGetter: imageValueGetter,
        },
      ],
    }
    return (
      <div
        key={Object.keys(group)[0]}
        className={AGTheme}
        style={{ height: 500, width: screenWidth * 0.95 }}
      >
        <AgGridReact
          key={Object.keys(group)[0] + 'grid'}
          ref={gridRef}
          rowData={[...group[Object.keys(group)[0]]]}
          columnDefs={[newGroupDefs]}
          onGridReady={onGridReady}
          defaultColDef={{
            flex: 1,
            minWidth: 100,
            resizable: true,
            sortable: true,
            filter: true,
          }}
        />
      </div>
    )
  }

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
    getMenu()
      .then((res: { body: MenuGroup[] }) => {
        const newRes = res.body.map((group) => {
          const newGroup = { ...group }
          newGroup[Object.keys(group)[0]].forEach((item) => {
            item.group = Object.keys(group)[0]
          })
          return newGroup
        })
        setLocalRowData(res.body)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const choices = localRowData.map((group) => {
    return (
      <div
        key={Object.keys(group)[0]}
        className={styles.choice}
        onClick={() => setChoice(group)}
      >
        {FixTitle(Object.keys(group)[0])}
      </div>
    )
  })

  if (localRowData.length === 0) return null

  return (
    <div className={styles.wrapper}>
      {choices}
      {choice && MakeGrid(choice)}
    </div>
  )
}
