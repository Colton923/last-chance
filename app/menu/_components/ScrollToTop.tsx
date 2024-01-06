'use client'
import { useState, useEffect } from 'react'
import styles from '../Menu.module.scss'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className={isVisible ? styles.scrollToTop : styles.null}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v14M5 12l7-7 7 7"
            />
          </svg>
        </div>
      )}
    </div>
  )
}

export default ScrollToTop
