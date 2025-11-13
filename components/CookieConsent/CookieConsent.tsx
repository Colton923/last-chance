'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from '../Button'
import { Text } from '../Text'
import styles from './CookieConsent.module.scss'

const CONSENT_COOKIE_NAME = 'lastchance_cookie_consent'
const CONSENT_EXPIRY_DAYS = 365

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(CONSENT_COOKIE_NAME)
    if (!consent) {
      // Small delay to avoid layout shift
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const handleAccept = () => {
    // Store consent
    localStorage.setItem(CONSENT_COOKIE_NAME, 'accepted')
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS)
    document.cookie = `${CONSENT_COOKIE_NAME}=accepted; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
    
    setShowBanner(false)

    // Initialize Google AdSense after consent
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      try {
        ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('AdSense initialization error:', err)
        }
      }
    }
  }

  const handleDecline = () => {
    // Store declined consent
    localStorage.setItem(CONSENT_COOKIE_NAME, 'declined')
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 30) // Shorter expiry for declined
    document.cookie = `${CONSENT_COOKIE_NAME}=declined; expires=${expiryDate.toUTCString()}; path=/; SameSite=Lax`
    
    setShowBanner(false)
  }

  if (!showBanner) {
    return null
  }

  return (
    <div className={styles.cookieConsent} role="dialog" aria-label="Cookie consent">
      <div className={styles.content}>
        <Text as="p" size="base" className={styles.message}>
          We use cookies and similar technologies to provide, improve, and personalize
          our services and for advertising purposes. This includes Google AdSense cookies
          for displaying personalized ads. By clicking &quot;Accept&quot;, you consent to
          our use of cookies.{' '}
          <Link href="/privacyPolicy" className={styles.link}>
            Learn more
          </Link>
        </Text>
        <div className={styles.actions}>
          <Button
            variant="primary"
            size="md"
            onClick={handleAccept}
            className={styles.acceptButton}
          >
            Accept
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={handleDecline}
            className={styles.declineButton}
          >
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}

