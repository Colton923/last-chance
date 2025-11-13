'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Text } from 'components/Text'
import { Button } from 'components/Button'
import FormInput from 'components/FormInput'
import { VALIDATION_PATTERNS } from '../../../lib/validation'
import styles from './styles.module.scss'

type ApplyForm = {
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

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplyForm>()

  const onSubmit = async (data: ApplyForm) => {
    try {
      setIsSubmitting(true)
      setSubmitError('')

      const res = await fetch('/api/sendgridApplication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.message || 'Something went wrong')
      }

      setSubmitSuccess(true)
      reset()
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to submit application'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {submitSuccess ? (
        <div className={styles.successMessage}>
          <Text as="h2" size="xl" weight="bold" style={{ marginBottom: '1rem' }}>
            Application Submitted!
          </Text>
          <Text as="p" size="lg">
            Thank you for your interest in joining our team. We&apos;ll review your
            application and get back to you soon.
          </Text>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formGroup}>
            <FormInput
              label="Name"
              placeholder="Your full name"
              {...register('name', { required: 'Name is required' })}
              error={errors.name?.message}
            />

            <FormInput
              label="Email"
              type="email"
              placeholder="Your email address"
              {...register('email', {
                required: 'Email is required',
                pattern: VALIDATION_PATTERNS.email,
              })}
              error={errors.email?.message}
            />

            <FormInput
              label="Phone"
              type="tel"
              placeholder="Your phone number"
              {...register('phone', { required: 'Phone number is required' })}
              error={errors.phone?.message}
            />

            <FormInput
              label="Address"
              placeholder="Street address"
              {...register('address', { required: 'Address is required' })}
              error={errors.address?.message}
            />

            <FormInput
              label="City"
              placeholder="City"
              {...register('city', { required: 'City is required' })}
              error={errors.city?.message}
            />

            <FormInput
              label="State"
              placeholder="State"
              {...register('state', { required: 'State is required' })}
              error={errors.state?.message}
            />

            <FormInput
              label="ZIP Code"
              placeholder="ZIP code"
              {...register('zip', {
                required: 'ZIP code is required',
                pattern: VALIDATION_PATTERNS.zipCode,
              })}
              error={errors.zip?.message}
            />
          </div>

          <div className={styles.formGroup}>
            <FormInput
              label="Position"
              placeholder="Position you're applying for"
              {...register('position', { required: 'Position is required' })}
              error={errors.position?.message}
            />

            <FormInput
              label="Availability"
              placeholder="When can you start?"
              {...register('availability', { required: 'Availability is required' })}
              error={errors.availability?.message}
            />

            <FormInput
              label="Experience"
              type="textarea"
              placeholder="Tell us about your relevant experience"
              {...register('experience', { required: 'Experience is required' })}
              error={errors.experience?.message}
            />

            <FormInput
              label="Why Last Chance?"
              type="textarea"
              placeholder="Why do you want to work with us?"
              {...register('whyUs', { required: 'This field is required' })}
              error={errors.whyUs?.message}
            />
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
            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              isLoading={isSubmitting}
            >
              Submit Application
            </Button>
          </div>
        </form>
      )}
    </>
  )
}

export default ApplicationForm
