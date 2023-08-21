'use client'

import { useForm } from 'react-hook-form'
import styles from './Donation.module.scss'

export type DonationForm = {
  requestDate: string
  donationNeededBy: string
  organizationName: string
  eventDate: {
    start: string
    end: string
  }
  eventType:
    | 'School Support'
    | 'Non-Profit Support'
    | 'Athletic Boosters'
    | 'Military'
    | 'Benefit'
    | 'Sporting Event/Tournament'
    | 'Other'
  participants: number
  eventPurpose: string
  typeOfDonation: string
  donationValue: number
  whyUs: string
  contactName: string
  contactEmail: string
  contactPhone: string
  contactAddress: string
  contactCity: string
  contactState: string
  contactZip: string
}

export default function Donation() {
  const { register, handleSubmit } = useForm<DonationForm>()

  const onSubmit = async (data: DonationForm) => {
    const body: DonationForm = {
      requestDate: data.requestDate,
      donationNeededBy: data.donationNeededBy,
      organizationName: data.organizationName,
      eventDate: {
        start: data.eventDate.start,
        end: data.eventDate.end,
      },
      eventType: data.eventType,
      participants: data.participants,
      eventPurpose: data.eventPurpose,
      typeOfDonation: data.typeOfDonation,
      donationValue: data.donationValue,
      whyUs: data.whyUs,
      contactName: data.contactName,
      contactEmail: data.contactEmail,
      contactPhone: data.contactPhone,
      contactAddress: data.contactAddress,
      contactCity: data.contactCity,
      contactState: data.contactState,
      contactZip: data.contactZip,
    }
    await fetch('/api/sendgridDonation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        alert(data.message)
      })
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Donation Request Form</h2>
      <h3 className={styles.formInstructions}>
        Please print neatly. Submission of this form does not guarantee a donation.
        Last Chance management will review your request and contact you with their
        decision. All requests must be submitted at least 2 weeks in advance.
      </h3>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <label className={styles.label}>
            Request Date:
            <input
              type="date"
              defaultValue={new Date().toISOString().substring(0, 10)}
              {...register('requestDate')}
              className={styles.dateInput}
            />
          </label>
          <label className={styles.label}>
            Donation Needed By:
            <input
              type="date"
              defaultValue={new Date().toISOString().substring(0, 10)}
              {...register('donationNeededBy')}
              className={styles.dateInput}
            />
          </label>
          <label className={styles.label}>
            Organization/Event Name:
            <input
              type="text"
              {...register('organizationName')}
              placeholder={'Organization/Event Name'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Date(s) of Event:
            <input
              type="date"
              defaultValue={new Date().toISOString().substring(0, 10)}
              {...register('eventDate.start')}
              className={styles.dateInput}
            />
            <p> to </p>
            <input
              type="date"
              defaultValue={new Date().toISOString().substring(0, 10)}
              {...register('eventDate.end')}
              className={styles.dateInput}
            />
          </label>
          <label className={styles.label}>
            Type of Event:
            <select {...register('eventType')} className={styles.selectInput}>
              <option className={styles.optionInput} value="School Support">
                School Support
              </option>
              <option className={styles.optionInput} value="Non-Profit Support">
                Non-Profit Support
              </option>
              <option className={styles.optionInput} value="Athletic Boosters">
                Athletic Boosters
              </option>
              <option className={styles.optionInput} value="Military">
                Military
              </option>
              <option className={styles.optionInput} value="Benefit">
                Benefit
              </option>
              <option
                className={styles.optionInput}
                value="Sporting Event/Tournament"
              >
                Sporting Event/Tournament
              </option>
              <option className={styles.optionInput} value="Other">
                Other
              </option>
            </select>
          </label>
          <label className={styles.label}>
            Number of Participants:
            <input
              className={styles.numberInput}
              type="number"
              {...register('participants')}
              placeholder={'0'}
            />
          </label>
          <label className={styles.label}>
            Purpose of Event:
            <input
              type="text"
              {...register('eventPurpose')}
              placeholder={'Purpose of Event'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Type of Donation Requested:
            <input
              type="text"
              {...register('typeOfDonation')}
              placeholder={'Type of Donation Requested'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Value of Donation Requested:
            <input
              type="number"
              {...register('donationValue')}
              placeholder={'0'}
              className={styles.numberInput}
            />
          </label>
          <label className={styles.label}>
            Why Last Chance?
            <input
              type="text"
              {...register('whyUs')}
              placeholder={'Why Last Chance?'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Contact Name:
            <input
              type="text"
              {...register('contactName')}
              placeholder={'Contact Name'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Contact Email:
            <input
              type="email"
              {...register('contactEmail')}
              placeholder={'Contact Email'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Contact Phone:
            <input
              type="tel"
              {...register('contactPhone')}
              placeholder={'Contact Phone'}
              className={styles.telInput}
            />
          </label>
          <label className={styles.label}>
            Contact Address:
            <input
              type="text"
              {...register('contactAddress')}
              placeholder={'Contact Address'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Contact City:
            <input
              type="text"
              {...register('contactCity')}
              placeholder={'Contact City'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Contact State:
            <input
              type="text"
              {...register('contactState')}
              placeholder={'Contact State'}
              className={styles.textInput}
            />
          </label>
          <label className={styles.label}>
            Contact Zip:
            <input
              type="text"
              {...register('contactZip')}
              placeholder={'Contact Zip'}
              className={styles.textInput}
            />
          </label>
          <input type="submit" className={styles.submitInput} value={'Submit'} />
        </form>
      </div>
    </div>
  )
}
