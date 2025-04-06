import styles from './Footer.module.scss'
import Link from 'next/link'

interface TimeRange {
  open: string
  close: string
}

interface Hours {
  kitchen?: boolean
  bar?: boolean
  monday: TimeRange
  tuesday: TimeRange
  wednesday: TimeRange
  thursday: TimeRange
  friday: TimeRange
  saturday: TimeRange
  sunday: TimeRange
}

interface FooterProps {
  hours: Hours
}

const Footer = ({ hours }: FooterProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <div className={styles.inline}>
            <span>
              <strong>Address:</strong>{' '}
              <Link
                className={styles.link}
                href="https://www.google.com/maps/place/Last+Chance+Bar+%26+Grill/@40.8111097,-89.6370073,17z/data=!4m14!1m7!3m6!1s0x880a4344ac8ed925:0x9c0856e3f18ba23f!2sLast+Chance+Bar+%26+Grill!8m2!3d40.8111097!4d-89.6348186!16s%2Fg%2F1w6r8w1y!3m5!1s0x880a4344ac8ed925:0x9c0856e3f18ba23f!8m2!3d40.8111097!4d-89.6348186!16s%2Fg%2F1w6r8w1y"
              >
                2713 W Second St, Peoria, IL 61615
              </Link>
            </span>
            <span>
              <strong>Email:</strong>{' '}
              <Link
                className={styles.link}
                href="mailto:lastchancebarandgrill@yahoo.com"
              >
                lastchancebarandgrill@yahoo.com
              </Link>
            </span>
            <span>
              <strong>Phone:</strong>{' '}
              <Link className={styles.link} href="tel:309-243-5036">
                309-243-5036
              </Link>
            </span>
            <span>
              <strong>Social:</strong>{' '}
              <Link
                className={styles.link}
                href="https://www.facebook.com/lastchance17"
              >
                Facebook
              </Link>
            </span>
          </div>
        </div>
        <div className={styles.footerItem}>
          <div className={styles.footerHours}>
            {hours.kitchen && (
              <div className={styles.hours}>
                <h3 className={styles.footerTitle}>Kitchen Hours</h3>
                <span>
                  <strong>Mon-Tue:</strong> 11:00am - 9:00pm
                </span>
                <span>
                  <strong>Wed-Fri:</strong> 8:00am - 9:00pm
                </span>
                <span>
                  <strong>Sat-Sun:</strong> 7:00am -{' '}
                  {hours.sunday.close === '8:00pm' ? '8:00pm' : '9:00pm'}
                </span>
              </div>
            )}
            {hours.bar && (
              <div className={styles.hours}>
                <h3 className={styles.footerTitle}>Bar Hours</h3>
                <span>
                  <strong>Mon-Tue:</strong> 11:00am - 9:00pm
                </span>
                <span>
                  <strong>Wed-Fri:</strong> 8:00am - 2:00am
                </span>
                <span>
                  <strong>Saturday:</strong> 7:00am - 2:00am
                </span>
                <span>
                  <strong>Sunday:</strong> 7:00am - 10:00pm
                </span>
              </div>
            )}
            <div className={styles.hours}>
              <h3 className={styles.footerTitle}>Daily Hours</h3>
              <div className={styles.hoursGrid}>
                <div className={styles.hoursColumn}>
                  <span>
                    <strong>Monday:</strong> {hours.monday.open} -{' '}
                    {hours.monday.close}
                  </span>
                  <span>
                    <strong>Tuesday:</strong> {hours.tuesday.open} -{' '}
                    {hours.tuesday.close}
                  </span>
                  <span>
                    <strong>Wednesday:</strong> {hours.wednesday.open} -{' '}
                    {hours.wednesday.close}
                  </span>
                  <span>
                    <strong>Thursday:</strong> {hours.thursday.open} -{' '}
                    {hours.thursday.close}
                  </span>
                </div>
                <div className={styles.hoursColumn}>
                  <span>
                    <strong>Friday:</strong> {hours.friday.open} -{' '}
                    {hours.friday.close}
                  </span>
                  <span>
                    <strong>Saturday:</strong> {hours.saturday.open} -{' '}
                    {hours.saturday.close}
                  </span>
                  <span>
                    <strong>Sunday:</strong> {hours.sunday.open} -{' '}
                    {hours.sunday.close}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <Link href={'/privacyPolicy'} className={styles.link}>
          Privacy Policy
        </Link>
        <span className={styles.copyright}>
          © {new Date().getFullYear()} Last Chance Bar & Grill. All rights reserved.
        </span>
      </div>
    </div>
  )
}

export default Footer
