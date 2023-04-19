'use client'

import { useMemo, memo, createContext, useContext, useState, useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

export interface SiteContextScope {
  postId: string
  isInitialized: boolean
}

export const SiteContext = createContext<SiteContextScope | null>(null)

export const SiteContextProvider = (props: Props) => {
  const { children } = props
  const [isInitialized, setIsInitialized] = useState(false)
  const [postId, setPostId] = useState('')
  const [token, setToken] = useState('')

  const GetFBToken = async () => {
    const res = await fetch('/api/facebookToken', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await res.json()
    setToken(json.access_token)
  }

  useEffect(() => {
    GetFBToken()
  }, [GetFBToken])

  useEffect(() => {
    if (token === '') return
    try {
      fetch(`https://graph.facebook.com/271350786209066/posts?access_token=${token}`)
        .then((res) => res.json())
        .then((res) => {
          const post = res.data[0]
          setPostId(post.id)
          setIsInitialized(true)
        })
    } catch (error) {
      console.log(error)
    }
  }, [token])

  const contextValue = useMemo<SiteContextScope | null>(
    () => ({
      postId,
      isInitialized,
    }),
    [postId, isInitialized]
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
