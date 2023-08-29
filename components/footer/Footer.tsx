'use client'

import styles from './Footer.module.scss'

import Link from 'next/link'

import { useSiteContext } from 'components/context/SiteContext'

const Footer = () => {
  const { hours } = useSiteContext()

  if (!hours) {
    return null
  }

  const kitchenHours = hours.filter((hour) => hour.kitchen === true)[0]
  const barHours = hours.filter((hour) => hour.bar === true)[0]

  if (!kitchenHours || !barHours) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <h3 className={styles.footerTitle}>Contact</h3>
          <div className={styles.inline}>
            <span>
              Visit us at:
              <Link
                className={styles.link}
                href="https://www.google.com/maps/place/Last+Chance+Bar+%26+Grill/@40.8111097,-89.6370073,17z/data=!4m14!1m7!3m6!1s0x880a4344ac8ed925:0x9c0856e3f18ba23f!2sLast+Chance+Bar+%26+Grill!8m2!3d40.8111097!4d-89.6348186!16s%2Fg%2F1w6r8w1y!3m5!1s0x880a4344ac8ed925:0x9c0856e3f18ba23f!8m2!3d40.8111097!4d-89.6348186!16s%2Fg%2F1w6r8w1y"
              >
                2713 W Second St, Peoria, IL 61615
              </Link>
            </span>
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
            <span>
              Call us at
              <Link className={styles.link} href="tel:410-326-6586">
                309-243-5036
              </Link>{' '}
            </span>
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
          <div className={styles.footerHours}>
            <div className={styles.hours}>
              <h3 className={styles.footerTitle}>Kitchen</h3>
              <span>
                Monday: {kitchenHours.monday?.open} - {kitchenHours.monday?.close}
              </span>
              <span>
                Tuesday: {kitchenHours.tuesday?.open} - {kitchenHours.tuesday?.close}
              </span>
              <span>
                Wednesday: {kitchenHours.wednesday?.open} -{' '}
                {kitchenHours.wednesday?.close}
              </span>
              <span>
                Thursday: {kitchenHours.thursday?.open} -{' '}
                {kitchenHours.thursday?.close}
              </span>
              <span>
                Friday: {kitchenHours.friday?.open} - {kitchenHours.friday?.close}
              </span>
              <span>
                Saturday: {kitchenHours.saturday?.open} -{' '}
                {kitchenHours.saturday?.close}
              </span>
              <span>
                Sunday: {kitchenHours.sunday?.open} - {kitchenHours.sunday?.close}
              </span>
            </div>
            <div className={styles.hours}>
              <h3 className={styles.footerTitle}>Bar</h3>
              <span>
                Monday: {barHours.monday?.open} - {barHours.monday?.close}
              </span>
              <span>
                Tuesday: {barHours.tuesday?.open} - {barHours.tuesday?.close}
              </span>
              <span>
                Wednesday: {barHours.wednesday?.open} - {barHours.wednesday?.close}
              </span>
              <span>
                Thursday: {barHours.thursday?.open} - {barHours.thursday?.close}
              </span>
              <span>
                Friday: {barHours.friday?.open} - {barHours.friday?.close}
              </span>
              <span>
                Saturday: {barHours.saturday?.open} - {barHours.saturday?.close}
              </span>
              <span>
                Sunday: {barHours.sunday?.open} - {barHours.sunday?.close}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Link href={'/privacyPolicy'} className={styles.link}>
        Privacy Policy
      </Link>
    </div>
  )
}

export default Footer
