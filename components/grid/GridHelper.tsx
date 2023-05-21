'use client'

import { useMemo, useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage'

import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

import { useFirebaseContext } from 'components/context/FirebaseContext'
import { useGridContext } from './GridContext'
import { useSiteContext } from 'components/context/SiteContext'

import GridImageCellRenderer from './GridImageCellRenderer'

import type { MenuGroup, MenuItem } from 'app/menu/menu'
import Loading from './loading/Loading'

const GridHelper = ({ choice }: { choice: string }) => {
  const { screenWidth } = useSiteContext()
  const { gridRef, onGridReady, AGTheme, localRowData, setLocalRowData, gridApi } =
    useGridContext()
  const { UpdateDB, UpdateDB_MenuGroup } = useFirebaseContext()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)
  const [text, setText] = useState<string>('')

  const valueGetter = (params: any) => {
    if (params === undefined) return
    if (!params) return
    if (!params.data) return
    if (!params.colDef) return
    if (!params.data[params.colDef.field]) return

    return params.data[params.colDef.field]
  }

  const valueSetter = (params: any) => {
    if (params === undefined) return
    if (!params) return
    if (!params.data) return
    if (!params.colDef) return
    if (!params.newValue) return
    if (params.data[params.colDef.field] === params.newValue) return

    params.data[params.colDef.field] = params.newValue
    UpdateDB({ ...params.data, group: choice } as any).then((res: any) => {
      if (!res) return

      const newLocalRowData = localRowData.map((item: any) => {
        if (Object.keys(item)[0] !== choice) return item
        const newGroup = item[choice]
        const alreadyThere = newGroup.map((item: any) => {
          if (item.name === params.data.name) return false
        })
        if (alreadyThere) return item
        newGroup.push({ ...params.data, group: choice })
        return { [choice]: newGroup }
      })
      setLocalRowData(newLocalRowData)
    })

    return true
  }

  const handleFileChange = (file: File | unknown, name: string) => {
    const storageRef = getStorage()
    if (file instanceof File === false) return
    const typeFile = file as File
    const folderRef = ref(storageRef, 'menu')
    const fileRef = ref(folderRef, typeFile.name)
    const fileName = typeFile.name
    const uploadTask = uploadBytesResumable(fileRef, typeFile)
    setIsLoading(true)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        setText('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            setText('Upload is paused')
            break
          case 'running':
            setText('Upload is running')
            break
        }
      },
      (error) => {
        setText('There was an error uploading a file to Cloud Storage.')
        setIsLoading(false)
        setProgress(0)
        setText('')
        console.log(error)
      },

      async () => {
        const storage = getStorage()
        const pathRef = ref(storage, 'menu/' + fileName)
        const fullPath = pathRef.toString()
        await UpdatePathInFirestore(fullPath, name)
        setIsLoading(false)
        setProgress(0)
        setText('')
        return fullPath
      }
    )
  }

  const UpdatePathInFirestore = (fullPath: string, name: string) => {
    if (!localRowData) return
    const dat = localRowData as MenuGroup[]
    const MenuGroupKey = choice
    const group: MenuGroup = dat.filter((item) => {
      return Object.keys(item)[0] === MenuGroupKey
    })[0]
    if (!group) return
    const newMenuItem = group[MenuGroupKey].filter((item) => {
      return item.name === name
    })[0]
    if (!newMenuItem) return
    newMenuItem.group = choice
    const newMenu: MenuItem = {
      ...newMenuItem,
      storagePath: fullPath,
    }

    UpdateDB(newMenu).then((res: any) => {
      if (!res) return

      const newLocalRowData = localRowData.map((item: any) => {
        if (Object.keys(item)[0] !== MenuGroupKey) return item
        const newGroup = item[MenuGroupKey].map((item: any) => {
          if (item.name !== name) return item
          return newMenu
        })
        return { [MenuGroupKey]: newGroup }
      })
      setLocalRowData(newLocalRowData)
    })
  }

  const DeleteMenuItem = (name: string) => {
    if (!localRowData) return
    const dat = localRowData as MenuGroup[]
    const MenuGroupKey = choice
    const group: MenuGroup = dat.filter((item) => {
      return Object.keys(item)[0] === MenuGroupKey
    })[0]
    if (!group) return
    group[MenuGroupKey] = group[MenuGroupKey].filter((item) => {
      return item.name !== name
    })
    const newMenu: MenuGroup = {
      [MenuGroupKey]: group[MenuGroupKey],
    }
    UpdateDB_MenuGroup(newMenu).then((res: any) => {
      if (!res) return

      const newLocalRowData = localRowData.map((item: any) => {
        if (Object.keys(item)[0] !== MenuGroupKey) return item
        const newGroup = item[MenuGroupKey].filter((item: any) => {
          return item.name !== name
        })
        return { [MenuGroupKey]: newGroup }
      })
      setLocalRowData(newLocalRowData)
    })
  }

  const thisGroup = localRowData.filter((item) => {
    return Object.keys(item)[0] === choice
  })

  const choices = thisGroup[0]

  const newChoicesDefs = {
    headerName: Object.keys(choices)[0],
    field: Object.keys(choices)[0],
    children: [
      {
        headerName: '',
        checkboxSelection: true,
        headerCheckboxSelection: true,
        editable: false,
        width: 50,
        pinned: 'left',
        field: 'checkboxBtn',
      },
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
        field: 'storagePath',
        autoHeight: true,
        cellRenderer: GridImageCellRenderer,
        cellRendererParams: {
          handleInput: handleFileChange,
        },
        enableCellTextSelection: false,
        editable: true,
      },
    ],
  }

  const components = useMemo(() => {
    return {
      GridImageCellRenderer,
    }
  }, [UpdateDB])

  return (
    <div
      key={Object.keys(choices)[0]}
      className={AGTheme}
      style={{ height: 500, width: screenWidth * 0.95 }}
    >
      {isLoading && <Loading progress={progress} message={text} />}
      <button
        onClick={() => {
          const selectedRows = gridApi?.getSelectedRows()
          if (!selectedRows) return
          if (selectedRows.length === 0) return
          gridApi?.applyTransaction({ remove: selectedRows })
          // selectedRows.forEach((item) => {
          //   DeleteMenuItem(item.name)
          // })
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          const newItem = {
            name: '',
            price: '',
            description: '',
            storagePath: '',
            group: choice,
          }
          gridApi?.applyTransaction({ add: [newItem] })
        }}
      >
        Add
      </button>

      <AgGridReact
        key={Object.keys(choices)[0] + 'grid'}
        ref={gridRef}
        rowData={[...choices[Object.keys(choices)[0]]]}
        columnDefs={[newChoicesDefs]}
        onGridReady={onGridReady}
        defaultColDef={{
          flex: 1,
          minWidth: 100,
          resizable: true,
          sortable: true,
          filter: true,
          editable: true,
        }}
        enableCellTextSelection={true}
        components={components}
      />
    </div>
  )
}

export default GridHelper
