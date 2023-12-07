import styles from './Donation.module.scss'
import DonationForm from 'components/donationForm/DonationForm'

export default function Donation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.donationWrapper}>
        <h2 className={styles.header}>Donation Request Form</h2>
        <h3 className={styles.formInstructions}>
          Please print neatly. Submission of this form does not guarantee a donation.
          Last Chance management will review your request and contact you with their
          decision. All requests must be submitted at least 2 weeks in advance.
        </h3>
        <div className={styles.formWrapper}>
          <DonationForm />
        </div>
      </div>
    </div>
  )
}
