'use client'

import { useMemo, memo, createContext, useContext, useState, useRef } from 'react'
import type { GridApi, ColumnApi } from 'ag-grid-community'
import * as Grid from './GridContextTypes'

interface Props {
  children: React.ReactNode
}

export const GridContext = createContext<Grid.GridContextScope | null>(null)

export const GridContextProvider = (props: Props) => {
  const { children } = props
  const [gridApi, setGridApi] = useState<GridApi | null>(null)
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi | null>(null)
  const [localRowData, setLocalRowData] = useState<any[]>([])
  const [AGTheme, setAGTheme] = useState<string>('ag-theme-alpine')
  const gridRef = useRef()

  const onGridReady = (params: { api: GridApi; columnApi: ColumnApi }) => {
    if (!params.api) return
    if (localRowData.length === 0) return
    setGridApi(params.api)
    setGridColumnApi(params.columnApi)

    params.api.setRowData(localRowData)
    params.api.sizeColumnsToFit()
    params.columnApi.autoSizeAllColumns()
  }

  const contextValue = useMemo<Grid.GridContextScope | null>(
    () => ({
      gridApi,
      gridColumnApi,
      localRowData,
      AGTheme,
      gridRef,
      onGridReady,
      setAGTheme,
      setLocalRowData,
    }),
    [
      gridApi,
      gridColumnApi,
      localRowData,
      AGTheme,
      gridRef,
      onGridReady,
      setAGTheme,
      setLocalRowData,
    ]
  )

  return (
    <GridContext.Provider value={contextValue as Grid.GridContextScope}>
      {children}
    </GridContext.Provider>
  )
}

export default memo(GridContextProvider)

export const useGridContext = () => {
  const context = useContext(GridContext)
  if (!context) {
    throw new Error('useGridContext must be used within a GridContextProvider')
  }
  return context
}
