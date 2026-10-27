import styles from './Footer.module.scss'
import Link from 'next/link'

export interface DayHours {
  closed?: boolean
  open?: string
  close?: string
  note?: string
}

export interface HoursDoc {
  name?: string
  kitchen?: boolean
  bar?: boolean
  holidayNote?: string
  monday?: DayHours
  tuesday?: DayHours
  wednesday?: DayHours
  thursday?: DayHours
  friday?: DayHours
  saturday?: DayHours
  sunday?: DayHours
}

interface FooterProps {
  hours: HoursDoc[]
}

const DAYS = [
  ['monday', 'Mon'],
  ['tuesday', 'Tue'],
  ['wednesday', 'Wed'],
  ['thursday', 'Thu'],
  ['friday', 'Fri'],
  ['saturday', 'Sat'],
  ['sunday', 'Sun'],
] as const

const hoursTitle = (doc: HoursDoc) => {
  if (doc.name) return doc.name
  if (doc.kitchen) return 'Kitchen Hours'
  if (doc.bar) return 'Bar Hours'
  return 'Hours'
}

const formatDay = (day?: DayHours) => {
  if (!day) return 'See website'
  if (day.closed) return 'Closed'
  if (!day.open || !day.close) return 'Call for hours'
  return `${day.open} - ${day.close}`
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
            {hours.map((doc, docIndex) => (
              <div className={styles.hours} key={`hours-${docIndex}`}>
                <h3 className={styles.footerTitle}>{hoursTitle(doc)}</h3>
                {DAYS.map(([key, label]) => {
                  const day = doc[key]
                  return (
                    <span key={key}>
                      <strong>{label}:</strong> {formatDay(day)}
                      {day?.note ? ` (${day.note})` : ''}
                    </span>
                  )
                })}
                {doc.holidayNote ? <span>{doc.holidayNote}</span> : null}
              </div>
            ))}
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
