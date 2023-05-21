import { FirebaseContextProvider } from 'components/context/FirebaseContext'
import { GridContextProvider } from 'components/grid/GridContext'
import Login from 'components/login/Login'
interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <FirebaseContextProvider>
      <GridContextProvider>
        <Login />
        {children}
      </GridContextProvider>
    </FirebaseContextProvider>
  )
}
