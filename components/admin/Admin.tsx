import Grid from 'components/grid/Grid'
import { useFirebaseContext } from 'components/context/FirebaseContext'

export default function Admin() {
  const { admin } = useFirebaseContext()

  // if (admin) {
  return (
    <div>
      <Grid />
    </div>
  )
  // } else {
  //   return <div></div>
  // }
}
