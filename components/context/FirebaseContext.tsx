'use client'

import { useMemo, memo, createContext, useContext, useState } from 'react'
import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { MenuItem } from 'app/menu/menu'
import { getStorage } from 'firebase/storage'

interface Props {
  children: React.ReactNode
}

export interface FirebaseContextScope {
  handleSignIn: () => void
  admin: boolean
  setPhoneNumber: (phone: string) => void
  UpdateDB: (newMenu: MenuItem) => void
}

export const FirebaseContext = createContext<FirebaseContextScope | null>(null)

export const FirebaseContextProvider = (props: Props) => {
  const { children } = props
  const [admin, setAdmin] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('')

  const app = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  })

  const storage = getStorage(app)

  const handleSignIn = async () => {
    const auth = getAuth(app)
    if (phoneNumber === '+13092105138' || phoneNumber === '+12408084635') {
      const reCaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
        },
        auth
      )
      signInWithPhoneNumber(auth, phoneNumber, reCaptchaVerifier).then(
        (confirmationResult) => {
          const code = prompt('Enter the code you received via SMS:')
          if (code) {
            setAdmin(true)
            return confirmationResult.confirm(code)
          }
        }
      )
    }
  }

  const UpdateDB = (newMenu: MenuItem) => {
    try {
      fetch('/api/firestoreUpdate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          menu: newMenu,
        }),
      })
    } catch (error) {
      console.log(error)
    }
  }

  const contextValue = useMemo<FirebaseContextScope | null>(
    () => ({
      handleSignIn,
      admin,
      setPhoneNumber,
      UpdateDB,
    }),
    [handleSignIn, admin, setAdmin, setPhoneNumber, UpdateDB, phoneNumber]
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
