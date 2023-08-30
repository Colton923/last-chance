import styles from './Apply.module.scss'
import ApplicationForm from 'components/applicationForm/ApplicationForm'

export default function Apply() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Application</h2>
      <ApplicationForm />
    </div>
  )
}
