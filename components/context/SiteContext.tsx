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
  pageId: string
  postId: string
}

export const SiteContext = createContext<SiteContextScope | null>(null)

export const SiteContextProvider = (props: Props) => {
  const { children } = props
  const [isInitialized, setIsInitialized] = useState(false)
  const [pageId, setPageId] = useState('')
  const [postId, setPostId] = useState('')

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
      if (response) {
        response.then((res: any) => {
          setPageId(res.id)
        })
      }
    }
  }, [])

  useEffect(() => {
    if (window.FB && pageId !== '') {
      window.FB.api(`/${pageId}/posts`, (response: any) => {
        const post = response.data[0]
        setPostId(post.id)
      })
      setIsInitialized(true)
    }
  }, [pageId])

  const contextValue = useMemo<SiteContextScope | null>(
    () => ({
      pageId,
      postId,
    }),
    [pageId, postId]
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
