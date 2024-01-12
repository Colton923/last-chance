import styles from './Apply.module.scss'
import ApplicationForm from 'components/Forms/applicationForm/ApplicationForm'
import Image from 'next/image'
import bar from 'public/images/bar.jpeg'

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImageWrapper}>
        <Image
          src={bar}
          alt="bar"
          className={styles.backgroundImage}
          width={3840}
          height={2372}
        />
      </div>
      <div className={styles.applicationFormWrapper}>
        <h2 className={styles.header}>Application</h2>
        <ApplicationForm />
      </div>
    </div>
  )
}
