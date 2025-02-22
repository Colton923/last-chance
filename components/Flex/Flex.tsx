import styles from './Flex.module.scss'

type TFlex = {
  children?: React.ReactNode
  dir?: 'row' | 'column'
  justify?: 'start' | 'end' | 'center' | 'between' | 'around'
  align?: 'start' | 'end' | 'center' | 'stretch'
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
  bg?: string
  width?: 'full' | 'half' | 'auto'
  className?: string
  overflow?: 'x' | 'y' | 'none'
}

const Flex = ({
  children,
  dir,
  justify,
  align,
  wrap,
  className,
  bg,
  width,
  overflow,
}: TFlex) => {
  const flexStyles = {
    flexDirection: dir,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    backgroundColor: bg || 'transparent',
  }

  return (
    <div
      className={`${styles.flex} ${styles[width || 'auto']} ${
        styles[overflow || 'none']
      } ${className}`}
      style={flexStyles}
    >
      {children}
    </div>
  )
}

export default Flex

export type { TFlex }
