import client from 'lib/sanity/client'
import styles from './Specials.module.scss'

const specialsQuery = `*[_type == "specials"] {
  title,
  description
}`

async function getSpecials() {
  const getSpecials = await client.fetch(specialsQuery)
  return getSpecials[0]
}

export default async function Specials() {
  const specials = await getSpecials()
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>{specials.title}</h2>
      <p>{specials.description}</p>
    </div>
  )
}
