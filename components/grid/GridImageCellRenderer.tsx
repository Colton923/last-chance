import CloudImage from 'app/menu/CloudImage'
import { useFirebaseContext } from 'components/context/FirebaseContext'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'

type Props = {
  value: any
  valueSetter: any
}

const GridImageCellRenderer = (params: Props) => {
  const { value, valueSetter } = params
  const { admin } = useFirebaseContext()

  if (!value || !admin) return null
  console.log(value)

  const handleFileChange = async () => {
    const file = (document.querySelector('input[type=file]') as any).files[0]
    const storageRef = getStorage()

    const folderRef = ref(storageRef, 'menu')

    const fileRef = ref(folderRef, file.name)
    const fileName = file.name
    const uploadTask = uploadBytesResumable(fileRef, file)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused')
            break
          case 'running':
            console.log('Upload is running')
            break
        }
      },
      (error) => {
        console.log(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL)
          valueSetter({ newValue: fileName })
        })
      }
    )
  }

  if (admin) {
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
          onInput={handleFileChange}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <CloudImage key={value} imageName={'food1.webp'} width={100} height={100} />
      </div>
    )
  } else {
    return null
  }
}

export default GridImageCellRenderer
