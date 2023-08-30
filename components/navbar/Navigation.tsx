import React from 'react'
import NavLinks from './NavLinks'
import styles from './Navbar.module.scss'
import logo from '/public/images/logo.webp'
import Image from 'next/image'
import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          width={230}
          height={159}
          className={styles.brandImage}
          typeof="image/webp"
        />
      </Link>
      <NavLinks />
    </nav>
  )
}

export default Navigation
