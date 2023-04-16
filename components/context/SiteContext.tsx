'use client'

import {
  useMemo,
  memo,
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react'

interface Props {
  children: React.ReactNode
}

export interface SiteContextScope {
  params?: any
}

export const SiteContext = createContext<SiteContextScope | null>(null)

export const SiteContextProvider = (props: Props) => {
  const { children } = props

  const contextValue = useMemo<SiteContextScope | null>(() => ({}), [])

  return (
    <SiteContext.Provider value={contextValue as SiteContextScope}>
      {children}
    </SiteContext.Provider>
  )
}

export default memo(SiteContextProvider)

export const useSiteContext = () => {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSiteContext must be used within a SiteContextProvider')
  }
  return context
}
