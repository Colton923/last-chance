import MetadatUI from 'app/api/og/_components/MetadataUI'
import imgTest from 'public/images/sunday.jpg'

export default function Page() {
  return (
    <MetadatUI
      imageHeight={159}
      imageWidth={230}
      description={'come and get your ice cold mimosas you know you will love them'}
      price={'14'}
      imageURL={imgTest.src}
    />
  )
}
