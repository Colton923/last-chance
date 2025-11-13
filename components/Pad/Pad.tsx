import clsx from 'clsx'
import styles from './Pad.module.scss'

type PadProps = {
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  children: React.ReactNode
}

const Pad = ({ size, children }: PadProps) => {
  return <div className={clsx(styles.pad, styles[size])}>{children}</div>
}

export default Pad

export type { PadProps }
