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
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (window.FB) {
      window.FB.init({
        appId: process.env.FACEBOOK_APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v16.0',
      })
    }

    let response
    if (typeof window !== 'undefined' && window.FB) {
      response = new Promise((resolve) => {
        window.FB.api('/lastchance17', { fields: 'id' }, (response) => {
          resolve(response)
        })
      })
    }
    if (response) {
      console.log('response', response)
      setIsInitialized(true)
    }
  }, [])

  const contextValue = useMemo<SiteContextScope | null>(() => ({}), [])

  if (!isInitialized) {
    console.log('not initialized')
  } else {
    console.log('initialized')
  }

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
