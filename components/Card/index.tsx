import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'outlined' | 'elevated'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  interactive?: boolean
}

const defaultProps = {
  variant: 'default',
  padding: 'md',
  interactive: false,
} as const

export const Card = ({
  children,
  variant = defaultProps.variant,
  padding = defaultProps.padding,
  interactive = defaultProps.interactive,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={clsx(
        styles.card,
        styles[`card--${variant}`],
        styles[`card--padding-${padding}`],
        interactive && styles['card--interactive'],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
