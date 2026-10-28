'use client'
import React from 'react'
import NavLinks from './NavLinks'
import styles from './Navbar.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import close from '/public/images/close-icon.svg'
import hamburger from '/public/images/menu-icon.svg'
import logo from '/public/images/logo.png'
import { useState } from 'react'

const MobileNavigation = () => {
  const [open, setOpen] = useState(false)

  const hamburgerIcon = (
    <Image
      src={hamburger}
      alt="menu open"
      width={40}
      height={40}
      style={{
        transition: 'all',
        transitionTimingFunction: 'ease-in-out',
        transitionDuration: '.6s',
      }}
    />
  )

  const closeIcon = (
    <Image
      src={close}
      alt="close menu"
      width={50}
      height={50}
      style={{
        transition: 'all',
        transitionTimingFunction: 'ease-in-out',
        transitionDuration: '.6s',
      }}
    />
  )

  const closeMobileMenu = () => setOpen(false)

  return (
    <div className={`${styles.mobileNavigationWrapper} ${open && styles.open} `}>
      <div className={styles.mobileNavigation}>
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            src={logo}
            alt="Last Chance Bar & Grill Logo"
            width={230}
            height={159}
            className={styles.brandImage}
          />
        </Link>
        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
        >
          {open ? closeIcon : hamburgerIcon}
        </button>
      </div>
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  )
}

export default MobileNavigation
