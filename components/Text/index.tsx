import { HTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  color?: 'default' | 'muted' | 'accent'
  align?: 'left' | 'center' | 'right'
}

const defaultProps = {
  as: 'p',
  size: 'base',
  weight: 'normal',
  color: 'default',
  align: 'left',
} as const

export const Text = ({
  children,
  as: Component = defaultProps.as,
  size = defaultProps.size,
  weight = defaultProps.weight,
  color = defaultProps.color,
  align = defaultProps.align,
  className,
  ...props
}: TextProps) => {
  return (
    <Component
      className={clsx(
        styles.text,
        styles[`text--${size}`],
        styles[`text--${weight}`],
        styles[`text--${color}`],
        styles[`text--${align}`],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
