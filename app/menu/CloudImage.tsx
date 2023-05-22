'use client'

import { useEffect, useState } from 'react'

interface CloudImageProps {
  imageName: string
  alt?: string
  className?: string
  width?: number
  height?: number
}

const Defaults = {
  alt: 'image-from-cloud',
  className: '',
  width: 350,
  height: 300,
}

const CloudImage = (props: CloudImageProps) => {
  const { alt, className, width, height, imageName } = props
  const [image, setImage] = useState('')

  useEffect(() => {
    try {
      if (!imageName) return

      fetch('api/firebaseImage', {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageName: imageName,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          const image = res.url
          setImage(image)
        })
    } catch (error) {
      console.log(error)
    }
  }, [imageName])

  if (!image) return null
  return (
    <img
      src={image}
      alt={alt ? alt : Defaults.alt}
      className={className ? className : Defaults.className}
      style={
        className === undefined
          ? {
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '20px',
            }
          : {
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto',
            }
      }
      width={width ? width : Defaults.width}
      height={height ? height : Defaults.height}
    />
  )
}

export default CloudImage
