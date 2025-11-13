import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  noPadding?: boolean
}

const defaultProps = {
  size: '2xl',
  noPadding: false,
} as const

export const Container = ({
  children,
  size = defaultProps.size,
  noPadding = defaultProps.noPadding,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        styles.container,
        styles[`container--${size}`],
        noPadding && styles['container--no-padding'],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
