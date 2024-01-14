import styles from './MetadataUI.module.css'
import logo from 'public/images/logo.png'

type Props = {
  price?: string
  imageURL?: string
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
  const basePath = 'http://lastchancepeoria.com'
  console.log('imageURL', imageURL)
  return (
    <div className={styles.flexRoot} style={{ display: 'flex' }}>
      <div className={styles.imageFlexbox} style={{ display: 'flex' }}>
        {price ? <p className={styles.price}>{`$${price}`}</p> : null}
        <img
          className={styles.image}
          src={imageURL ? imageURL : basePath + logo.src}
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
