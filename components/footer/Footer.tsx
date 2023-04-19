import styles from './Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <div className={styles.inline}>
            <span>
              Visit us at
              <Link
                className={styles.link}
                href="https://www.google.com/maps/place/Last+Chance+Bar+%26+Grill/@40.8111097,-89.6370073,17z/data=!4m14!1m7!3m6!1s0x880a4344ac8ed925:0x9c0856e3f18ba23f!2sLast+Chance+Bar+%26+Grill!8m2!3d40.8111097!4d-89.6348186!16s%2Fg%2F1w6r8w1y!3m5!1s0x880a4344ac8ed925:0x9c0856e3f18ba23f!8m2!3d40.8111097!4d-89.6348186!16s%2Fg%2F1w6r8w1y"
              >
                2713 W Second St, Peoria, IL 61615
              </Link>
            </span>
            <br />

            <span>
              Email us at
              <Link
                className={styles.link}
                href="mailto:
          lastchancebarandgrill@yahoo.com
          "
              >
                lastchancebarandgrill@yahoo.com
              </Link>
            </span>
            <br />

            <span>
              Call us at
              <Link className={styles.link} href="tel:410-326-6586">
                309-243-5036
              </Link>{' '}
            </span>
            <br />

            <span>
              Follow us on our
              <Link
                className={styles.link}
                href="https://www.facebook.com/lastchance17"
              >
                facebook
              </Link>{' '}
              page.
            </span>
          </div>
        </div>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Kitchen</h3>
          <span>Monday: Closed</span>
          <span>Tuesday: Closed</span>
          <span>Wednesday: 11:00am - 8:00pm</span>
          <span>Thursday: 11:00am - 8:00pm</span>
          <span>Friday: 8:00am - 9:00pm</span>
          <span>Saturday: 8:00am - 9:00pm</span>
          <span>Sunday: 8:00am - 8:00pm</span>
        </div>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Bar</h3>
          <span>Monday: Closed</span>
          <span>Tuesday: Closed</span>
          <span>Wednesday: 11:00am - 2:00am</span>
          <span>Thursday: 11:00am - 2:00am</span>
          <span>Friday: 8:00am - 2:00am</span>
          <span>Saturday: 8:00am - 2:00am</span>
          <span>Sunday: 8:00am - 2:00am</span>
          <Link href={'/privacyPolicy'} className={styles.link}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
