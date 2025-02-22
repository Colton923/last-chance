import styles from './Text.module.scss'

type TText = {
  children?: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'black' | 'white' | 'red'
  weight?: 'light' | 'regular' | 'bold'
  align?: 'left' | 'center' | 'right'
  textTransform?: 'uppercase' | 'none'
}

const Text = ({
  children,
  className,
  size,
  color,
  weight,
  align,
  textTransform,
}: TText) => {
  return (
    <p
      className={`${styles.text} ${className} ${styles[size || 'sm']} ${
        styles[color || 'black']
      } ${styles[weight || 'normal']} ${styles[align || 'left']} ${
        styles[textTransform || 'none']
      }`}
    >
      {children}
    </p>
  )
}

export default Text

export type { TText }
