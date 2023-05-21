import CloudImage from 'app/menu/CloudImage'

const GridImageCellRenderer = (params: any) => {
  const { handleInput } = params

  const FixImagePath = (fullPath: string) => {
    const path = fullPath.split('/')
    return path[path.length - 1]
  }

  const FixFileName = (fullPath: string) => {
    // name examples: 'colton.png', 'colton', 'colton.webp'

    const path = fullPath.split('/')
    const name = path[path.length - 1]
    const nameParts = name.split('.')
    const fileName = nameParts[0]
    const fileExtension = 'webp'

    return `${fileName}.${fileExtension}`
  }
  const base64ToBlob = (base64Data: string, contentType: string) => {
    const byteCharacters = base64Data.replace(
      /^data:image\/(png|jpeg|jpg|webp);base64,/,
      ''
    )
    const byteArrays = []

    for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
      const slice = byteCharacters.slice(offset, offset + 1024)

      const byteNumbers = Array.from(atob(slice)).map((char) => char.charCodeAt(0))

      const byteArray = new Uint8Array(byteNumbers)

      byteArrays.push(byteArray)
    }
    const blob = new Blob(byteArrays)
    return blob
  }

  const convertToWebP = async (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = async (event) => {
        if (event.target && event.target.result) {
          const base64Data = event.target.result
          if (base64Data.slice(0, 4) !== 'data') {
            reject('Not a valid image')
          }
          if (base64Data.slice(5, 10) === 'image') {
            reject('Not a valid image')
          }

          try {
            const response = await fetch('/api/convertToWebP', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ file: base64Data }),
            })
            const data = await response.json()
            const blob = base64ToBlob(data.webpBase64, 'image/webp')
            const ret = new File([blob], FixFileName(file.name), {
              type: 'image/webp',
            })
            resolve(ret)
          } catch (error) {
            reject('Error converting image to WebP:')
          }
        }
      }

      reader.readAsDataURL(file)
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files) return
          const file = e.target.files[0]
          if (file.type === 'image/webp') return handleInput(file, params?.data.name)
          convertToWebP(file)
            .then((webpFile: any) => {
              handleInput(webpFile, params?.data.name)
            })
            .catch((error) => {
              console.error('Error converting image to WebP:', error)
            })
        }}
      />
      {params.data[params.colDef.field] && (
        <CloudImage
          imageName={FixImagePath(params.data[params.colDef.field])}
          width={100}
          height={100}
        />
      )}
    </div>
  )
}

export default GridImageCellRenderer
