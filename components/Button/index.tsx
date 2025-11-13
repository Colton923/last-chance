import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  isLoading?: boolean
}

const defaultProps = {
  variant: 'primary',
  size: 'md',
  fullWidth: false,
  isLoading: false,
} as const

export const Button = ({
  children,
  variant = defaultProps.variant,
  size = defaultProps.size,
  fullWidth = defaultProps.fullWidth,
  isLoading = defaultProps.isLoading,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        fullWidth && styles['button--full-width'],
        isLoading && styles['button--loading'],
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className={styles.loader}>
          <div className={styles.loaderDot} />
          <div className={styles.loaderDot} />
          <div className={styles.loaderDot} />
        </div>
      ) : (
        children
      )}
    </button>
  )
}
