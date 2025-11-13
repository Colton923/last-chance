import clsx from 'clsx'
import styles from './Space.module.scss'

type SpaceProps = {
  size: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  dir: 'x' | 'y'
}

const Space = ({ size, dir }: SpaceProps) => {
  return <div className={clsx(styles.space, styles[size], styles[dir])} />
}

export default Space

export type { SpaceProps }
