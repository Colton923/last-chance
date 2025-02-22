import styles from './Space.module.scss'

type TSpace = {
  size: 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  dir: 'x' | 'y'
}

const Space = ({ size, dir }: TSpace) => {
  return <div className={`${styles.space} ${styles[size]} ${styles[dir]}`} />
}

export default Space

export type { TSpace }
