import { forwardRef, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import { Text } from 'components/Text'

interface FormInputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string
  error?: string
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'number' | 'date'
}

const FormInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FormInputProps>(
  ({ label, error, type = 'text', className, ...props }, ref) => {
    const InputComponent = type === 'textarea' ? 'textarea' : 'input'

    return (
      <label className={styles.label}>
        <Text size="sm" weight="medium" className={styles.labelText}>
          {label}
        </Text>
        <InputComponent
          ref={ref as any}
          type={type === 'textarea' ? undefined : type}
          className={`${styles.input} ${error ? styles.error : ''} ${
            className || ''
          }`}
          {...props}
        />
        {error && (
          <Text
            size="sm"
            style={{ color: 'var(--color-error)' }}
            className={styles.errorText}
          >
            {error}
          </Text>
        )}
      </label>
    )
  }
)

FormInput.displayName = 'FormInput'

export default FormInput
