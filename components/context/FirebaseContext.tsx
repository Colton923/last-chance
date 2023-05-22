'use client'

import { useMemo, memo, createContext, useContext, useState } from 'react'
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  User,
} from 'firebase/auth'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { MenuGroup, MenuItem } from 'app/menu/menu'

interface Props {
  children: React.ReactNode
}

export interface FirebaseContextScope {
  handleSignIn: () => void
  admin: boolean
  setPhoneNumber: (phone: string) => void
  UpdateDB: (newMenu: MenuItem) => any
  UpdateDB_MenuGroup: (newMenu: MenuGroup) => any
  app: FirebaseApp
}

export const FirebaseContext = createContext<FirebaseContextScope | null>(null)

export const FirebaseContextProvider = (props: Props) => {
  const { children } = props
  const [admin, setAdmin] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [user, setUser] = useState<User | null>(null)

  const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC__FIREBASEAUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  })

  const handleSignIn = async () => {
    const auth = getAuth(app)

    if (auth.currentUser) {
      setUser(auth.currentUser)
      setAdmin(true)
      return
    }

    if (!phoneNumber) return
    if (user) return
    if (admin) return

    if (phoneNumber === '+13092105138' || phoneNumber === '+12408084635') {
      const reCaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
        },
        auth
      )
      signInWithPhoneNumber(auth, phoneNumber, reCaptchaVerifier)
        .then((confirmationResult) => {
          const code = prompt('Enter the code you received via SMS:')
          if (code) {
            return confirmationResult.confirm(code)
          }
        })
        .then((result) => {
          if (
            result?.user.phoneNumber === '+13092105138' ||
            result?.user.phoneNumber === '+12408084635'
          ) {
            setUser(result.user)
            setAdmin(true)
          }
        })
    }
  }

  const UpdateDB = async (newMenu: any) => {
    if (!admin) return
    if (!newMenu) return
    try {
      const returnData = await fetch('/api/firestoreUpdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          menu: newMenu,
        }),
      }).then((res) => {
        return res.json()
      })
      return returnData
    } catch (error) {
      console.log(error)
      return { error: error }
    }
  }

  const UpdateDB_MenuGroup = async (newMenu: any) => {
    if (!admin) return
    if (!newMenu) return
    try {
      const returnData = await fetch('/api/firestoreUpdate_MenuGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          menu: newMenu,
        }),
      }).then((res) => {
        return res.json()
      })
      return returnData
    } catch (error) {
      console.log(error)
      return { error: error }
    }
  }

  const contextValue = useMemo<FirebaseContextScope | null>(
    () => ({
      handleSignIn,
      admin,
      setPhoneNumber,
      UpdateDB,
      app,
      UpdateDB_MenuGroup,
    }),
    [
      handleSignIn,
      admin,
      setAdmin,
      setPhoneNumber,
      UpdateDB,
      phoneNumber,
      app,
      UpdateDB_MenuGroup,
    ]
  )

  return (
    <FirebaseContext.Provider value={contextValue as FirebaseContextScope}>
      {children}
    </FirebaseContext.Provider>
  )
}

export default memo(FirebaseContextProvider)

export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext)
  if (!context) {
    throw new Error(
      'useFirebaseContext must be used within a FirebaseContextProvider'
    )
  }
  return context
}
