import styles from './MetadataUI.module.css'

type Props = {
  price?: string
  imageURL: string
  imageWidth: number
  imageHeight: number
  description?: string
}

const MetadataUI = ({
  price,
  imageURL,
  imageHeight,
  imageWidth,
  description,
}: Props) => {
  return (
    <div className={styles.flexRoot} style={{ display: 'flex' }}>
      <div className={styles.imageFlexbox} style={{ display: 'flex' }}>
        {price ? <p className={styles.price}>{`$${price}`}</p> : null}
        <img
          className={styles.image}
          src={imageURL}
          width={imageWidth}
          height={imageHeight}
          alt={'metadata_image'}
        />
      </div>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  )
}

export default MetadataUI
