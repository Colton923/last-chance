import styles from './Navbar.module.scss'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default Navbar
