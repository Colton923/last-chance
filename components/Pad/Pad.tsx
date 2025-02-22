import styles from './Pad.module.scss'

type TPad = {
  size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  children: React.ReactNode
}

const Pad = ({ size, children }: TPad) => {
  return <div className={`${styles.pad} ${styles[size]}`}>{children}</div>
}

export default Pad

export type { TPad }
