'use client'

import { useForm } from 'react-hook-form'
import styles from './Apply.module.scss'

export type ApplyForm = {
  name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  position: string
  availability: string
  experience: string
  whyUs: string
}

export default function Apply() {
  const { register, handleSubmit } = useForm<ApplyForm>()

  const onSubmit = async (data: ApplyForm) => {
    const body: ApplyForm = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      position: data.position,
      availability: data.availability,
      experience: data.experience,
      whyUs: data.whyUs,
    }

    const res = await fetch('/api/sendgridApplication', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const json = await res.json()
    alert(json.message)
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Application</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Name
            <input className={styles.textInput} type="text" {...register('name')} />
          </label>
          <label className={styles.label}>
            Email
            <input
              className={styles.emailInput}
              type="email"
              {...register('email')}
            />
          </label>
          <label className={styles.label}>
            Phone
            <input className={styles.telInput} type="tel" {...register('phone')} />
          </label>
          <label className={styles.label}>
            Address
            <input
              className={styles.textInput}
              type="text"
              {...register('address')}
            />
          </label>
          <label className={styles.label}>
            City
            <input className={styles.textInput} type="text" {...register('city')} />
          </label>
          <label className={styles.label}>
            State
            <input className={styles.textInput} type="text" {...register('state')} />
          </label>
          <label className={styles.label}>
            Zip
            <input className={styles.textInput} type="text" {...register('zip')} />
          </label>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>
            Position
            <input
              className={styles.textInput}
              type="text"
              {...register('position')}
            />
          </label>
          <label className={styles.label}>
            Availability
            <textarea className={styles.textInput} {...register('availability')} />
          </label>
          <label className={styles.label}>
            Experience
            <textarea className={styles.textInput} {...register('experience')} />
          </label>
          <label className={styles.label}>
            Why Us
            <textarea className={styles.textInput} {...register('whyUs')} />
          </label>
        </div>
        <input className={styles.submitInput} type="submit" value="Submit" />
      </form>
    </div>
  )
}
