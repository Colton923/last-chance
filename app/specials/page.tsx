import client from 'lib/sanity/client'
import styles from './Specials.module.scss'

const specialsQuery = `*[_type == "specials"] {
  title,
  description
}`

async function getSpecials() {
  const getSpecials = await client.fetch(specialsQuery, undefined, {
    cache: 'no-store',
  })
  return getSpecials
}

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export default async function Specials() {
  const specials = await getSpecials()
  const specialsInOrder = specials.sort((a: any, b: any) => {
    if (!days.includes(a.title)) {
      return 1
    }
    return days.indexOf(a.title) - days.indexOf(b.title)
  })
  return (
    <div className={styles.wrapper}>
      <div className={styles.specialsWrapper}>
        <h2 className={styles.header}>Specials</h2>
        {specialsInOrder.map((item: any, index: any) => (
          <div className={styles.itemWrapper} key={'specials' + index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
