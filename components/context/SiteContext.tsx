'use client'

import { useMemo, memo, createContext, useContext, useState, useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

export interface SiteContextScope {
  screenWidth: number
}

export const SiteContext = createContext<SiteContextScope | null>(null)

export const SiteContextProvider = (props: Props) => {
  const { children } = props
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  const contextValue = useMemo<SiteContextScope | null>(
    () => ({
      screenWidth,
    }),
    [screenWidth]
  )

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
