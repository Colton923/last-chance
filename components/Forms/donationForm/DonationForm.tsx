'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Text } from 'components/Text'
import FormInput from 'components/FormInput'
import styles from './styles.module.scss'

type DonationFormType = {
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

export function DonationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DonationFormType>()

  const onSubmit = async (data: DonationFormType) => {
    try {
      setIsSubmitting(true)
      setSubmitError(null)

      const response = await fetch('/api/sendgridDonation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit donation request')
      }

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'An unexpected error occurred'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className={styles.successMessage}>
        <Text as="h2" size="xl" weight="bold" style={{ marginBottom: '1rem' }}>
          Donation Request Submitted!
        </Text>
        <Text as="p" size="lg">
          Thank you for your donation request. We&apos;ll review it and get back to
          you soon.
        </Text>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <FormInput
          type="date"
          label="Request Date"
          defaultValue={new Date().toISOString().substring(0, 10)}
          {...register('requestDate', { required: 'Request date is required' })}
          error={errors.requestDate?.message}
        />

        <FormInput
          type="date"
          label="Donation Needed By"
          defaultValue={new Date().toISOString().substring(0, 10)}
          {...register('donationNeededBy', { required: 'This field is required' })}
          error={errors.donationNeededBy?.message}
        />

        <FormInput
          label="Organization/Event Name"
          placeholder="Organization/Event Name"
          {...register('organizationName', {
            required: 'Organization name is required',
          })}
          error={errors.organizationName?.message}
        />

        <div className={styles.dateRangeWrapper}>
          <Text size="sm" weight="medium" className={styles.labelText}>
            Date(s) of Event
          </Text>
          <div className={styles.dateRange}>
            <FormInput
              type="date"
              label="Start Date"
              {...register('eventDate.start', {
                required: 'Start date is required',
              })}
              error={errors.eventDate?.start?.message}
            />
            <FormInput
              type="date"
              label="End Date"
              {...register('eventDate.end', { required: 'End date is required' })}
              error={errors.eventDate?.end?.message}
            />
          </div>
        </div>

        <div className={styles.selectWrapper}>
          <Text size="sm" weight="medium" className={styles.labelText}>
            Type of Event
          </Text>
          <select
            {...register('eventType', { required: 'Event type is required' })}
            className={styles.select}
          >
            <option value="">Select event type</option>
            <option value="School Support">School Support</option>
            <option value="Non-Profit Support">Non-Profit Support</option>
            <option value="Athletic Boosters">Athletic Boosters</option>
            <option value="Military">Military</option>
            <option value="Benefit">Benefit</option>
            <option value="Sporting Event/Tournament">
              Sporting Event/Tournament
            </option>
            <option value="Other">Other</option>
          </select>
          {errors.eventType && (
            <Text
              size="sm"
              style={{ color: 'var(--color-error)' }}
              className={styles.errorText}
            >
              {errors.eventType.message}
            </Text>
          )}
        </div>

        <FormInput
          type="number"
          label="Number of Participants"
          placeholder="0"
          {...register('participants', {
            required: 'Number of participants is required',
            min: { value: 1, message: 'Must be at least 1' },
            max: { value: 500, message: 'Must not exceed 500' },
          })}
          error={errors.participants?.message}
        />
      </div>

      <div className={styles.formGroup}>
        <FormInput
          label="Purpose of Event"
          type="textarea"
          placeholder="Describe the purpose of your event"
          {...register('eventPurpose', { required: 'Purpose is required' })}
          error={errors.eventPurpose?.message}
        />

        <FormInput
          label="Type of Donation Requested"
          type="textarea"
          placeholder="What type of donation are you requesting?"
          {...register('typeOfDonation', { required: 'This field is required' })}
          error={errors.typeOfDonation?.message}
        />

        <FormInput
          type="number"
          label="Estimated Value of Donation"
          placeholder="0"
          {...register('donationValue', {
            required: 'Donation value is required',
            min: { value: 0, message: 'Must be 0 or greater' },
          })}
          error={errors.donationValue?.message}
        />

        <FormInput
          label="Why Last Chance?"
          type="textarea"
          placeholder="Why did you choose Last Chance for your donation request?"
          {...register('whyUs', { required: 'This field is required' })}
          error={errors.whyUs?.message}
        />
      </div>

      <div className={styles.formGroup}>
        <Text as="h3" size="lg" weight="bold" className={styles.sectionTitle}>
          Contact Information
        </Text>

        <FormInput
          label="Contact Name"
          placeholder="Full name"
          {...register('contactName', { required: 'Contact name is required' })}
          error={errors.contactName?.message}
        />

        <FormInput
          type="email"
          label="Contact Email"
          placeholder="Email address"
          {...register('contactEmail', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={errors.contactEmail?.message}
        />

        <FormInput
          type="tel"
          label="Contact Phone"
          placeholder="Phone number"
          {...register('contactPhone', { required: 'Phone number is required' })}
          error={errors.contactPhone?.message}
        />

        <FormInput
          label="Street Address"
          placeholder="Street address"
          {...register('contactAddress', { required: 'Address is required' })}
          error={errors.contactAddress?.message}
        />

        <div className={styles.addressGroup}>
          <FormInput
            label="City"
            placeholder="City"
            {...register('contactCity', { required: 'City is required' })}
            error={errors.contactCity?.message}
          />

          <FormInput
            label="State"
            placeholder="State"
            {...register('contactState', { required: 'State is required' })}
            error={errors.contactState?.message}
          />

          <FormInput
            label="ZIP Code"
            placeholder="ZIP code"
            {...register('contactZip', {
              required: 'ZIP code is required',
              pattern: {
                value: /^\d{5}(-\d{4})?$/,
                message: 'Invalid ZIP code',
              },
            })}
            error={errors.contactZip?.message}
          />
        </div>
      </div>

      {submitError && (
        <Text
          size="sm"
          style={{
            color: 'var(--color-error)',
            textAlign: 'center',
            marginBottom: '1rem',
          }}
        >
          {submitError}
        </Text>
      )}

      <div className={styles.submitWrapper}>
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Donation Request'}
        </button>
      </div>
    </form>
  )
}
