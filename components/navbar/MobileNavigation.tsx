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
      className=""
      onClick={() => setOpen(!open)}
    />
  )

  const closeIcon = (
    <Image
      src={close}
      alt="close menu"
      width={50}
      height={50}
      onClick={() => setOpen(!open)}
    />
  )

  const closeMobileMenu = () => setOpen(false)

  return (
    <div className={styles.mobileNavigationWrapper}>
      <div className={styles.mobileNavigation}>
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={230}
            height={159}
            className={styles.brandImage}
          />
        </Link>
        {open ? closeIcon : hamburgerIcon}
      </div>
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
  )
}

export default MobileNavigation
